/* TradeCalc Pro V30 - free, browser-side automatic translation.
   Uses the public Google Translate web endpoint (unofficial, no API key).
   Translation is best-effort and may be rate-limited by the provider. */
(() => {
  'use strict';
  const STORE_KEY = 'tcp_language_preference_v1';
  const CACHE_KEY = 'tcp_translation_cache_v1';
  const LANGS = ['en','hi','es','fr','de','pt','it','ru','ar','ja','zh-CN','ko','tr','id','bn','ur'];
  const COUNTRY_LANG = {
    IN:'hi',BD:'bn',PK:'ur',AE:'ar',SA:'ar',EG:'ar',MA:'ar',JP:'ja',CN:'zh-CN',TW:'zh-CN',KR:'ko',
    ES:'es',MX:'es',AR:'es',CO:'es',CL:'es',PE:'es',FR:'fr',BE:'fr',DE:'de',AT:'de',CH:'de',
    BR:'pt',PT:'pt',IT:'it',RU:'ru',TR:'tr',ID:'id',US:'en',GB:'en',AU:'en',CA:'en',NZ:'en'
  };
  const SKIP_TAGS = new Set(['SCRIPT','STYLE','NOSCRIPT','CODE','PRE','TEXTAREA','INPUT','SELECT','OPTION','SVG','PATH','CANVAS','IFRAME']);
  const ATTRS = ['placeholder','title','aria-label','alt'];
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const translatedText = new WeakMap();
  const translatedAttrs = new WeakMap();
  let activeLang = 'en';
  let observer = null;
  let busy = false;
  let scheduled = false;
  let cache = {};
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}'); } catch (_) { cache = {}; }

  function browserLanguage() {
    const list = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    for (const raw of list) {
      try {
        const loc = new Intl.Locale(raw);
        const lang = loc.language;
        if (loc.region && COUNTRY_LANG[loc.region] && (lang === 'en' || !LANGS.includes(lang))) return COUNTRY_LANG[loc.region];
        if (lang === 'zh') return 'zh-CN';
        if (LANGS.includes(lang)) return lang;
      } catch (_) {}
    }
    return 'en';
  }
  function chosenLanguage() {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && saved !== 'auto' && LANGS.includes(saved)) return saved;
    return browserLanguage();
  }
  function shouldSkip(node) {
    const el = node.nodeType === 1 ? node : node.parentElement;
    if (!el) return true;
    if (el.closest('[translate="no"], [data-no-translate], #tcpLanguageSelect, .tcp-language-control')) return true;
    let cur = el;
    while (cur && cur !== document.body) {
      if (SKIP_TAGS.has(cur.tagName)) return true;
      cur = cur.parentElement;
    }
    return false;
  }
  function rememberText(node) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    return originalText.get(node);
  }
  function rememberAttr(el, attr) {
    let map = originalAttrs.get(el);
    if (!map) { map = {}; originalAttrs.set(el, map); }
    if (!(attr in map)) map[attr] = el.getAttribute(attr);
    return map[attr];
  }
  function cacheKey(lang, text) { return lang + '|' + text; }
  async function translateBatch(items, lang) {
    const sep = '\n[TCP_SEGMENT_7F3A9C]\n';
    const input = items.map(x => x.text).join(sep);
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + encodeURIComponent(lang) + '&dt=t&q=' + encodeURIComponent(input);
    const response = await fetch(url, { method: 'GET', mode: 'cors', credentials: 'omit' });
    if (!response.ok) throw new Error('Translation service returned ' + response.status);
    const data = await response.json();
    const translated = (data[0] || []).map(part => part && part[0] || '').join('');
    const pieces = translated.split(sep);
    if (pieces.length === items.length) return pieces;
    // Fallback for providers that normalize the segment separator.
    const results = [];
    for (const item of items) {
      const singleUrl = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + encodeURIComponent(lang) + '&dt=t&q=' + encodeURIComponent(item.text);
      const r = await fetch(singleUrl, {mode:'cors', credentials:'omit'});
      if (!r.ok) throw new Error('Translation service unavailable');
      const d = await r.json();
      results.push((d[0] || []).map(part => part && part[0] || '').join(''));
    }
    return results;
  }
  function collect(root) {
    const texts = [];
    const attrs = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const text = rememberText(node);
        if (!text || !text.trim() || shouldSkip(node) || text.trim().length < 2) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while ((n = walker.nextNode())) texts.push({node:n, text:rememberText(n)});
    const elements = root.nodeType === 1 ? [root, ...root.querySelectorAll('*')] : [...root.querySelectorAll('*')];
    for (const el of elements) {
      if (shouldSkip(el)) continue;
      for (const attr of ATTRS) {
        if (!el.hasAttribute(attr)) continue;
        const val = rememberAttr(el, attr);
        if (val && val.trim().length > 2) attrs.push({el, attr, text:val});
      }
    }
    return {texts, attrs};
  }
  async function processItems(items, lang, setter) {
    const pending = [];
    for (const item of items) {
      const key = cacheKey(lang, item.text);
      if (cache[key]) setter(item, cache[key]);
      else pending.push(item);
    }
    // Small batches keep requests within the free endpoint's practical URL limits.
    for (let i = 0; i < pending.length; i += 8) {
      const batch = pending.slice(i, i + 8);
      try {
        const results = await translateBatch(batch, lang);
        results.forEach((value, j) => {
          if (value && value.trim()) {
            cache[cacheKey(lang, batch[j].text)] = value;
            setter(batch[j], value);
          }
        });
        if ((i / 8) % 5 === 4) {
          try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (_) {}
          await new Promise(resolve => setTimeout(resolve, 180));
        }
      } catch (err) {
        console.warn('Some page text could not be translated; original text is retained.', err);
        break;
      }
    }
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (_) {}
  }
  async function translateRoot(root = document.body) {
    if (busy || activeLang === 'en' || !root || !root.querySelectorAll) return;
    busy = true;
    if (observer) observer.disconnect();
    try {
      const {texts, attrs} = collect(root);
      await processItems(texts, activeLang, (item, value) => {
        if (item.node.isConnected && item.node.nodeValue === item.text) {
          translatedText.set(item.node, value);
          item.node.nodeValue = value;
        }
      });
      await processItems(attrs, activeLang, (item, value) => {
        if (item.el.isConnected && item.el.getAttribute(item.attr) === item.text) {
          let map = translatedAttrs.get(item.el); if (!map) { map = {}; translatedAttrs.set(item.el, map); }
          map[item.attr] = value;
          item.el.setAttribute(item.attr, value);
        }
      });
    } finally {
      busy = false;
      if (observer) observer.observe(document.body, {childList:true,subtree:true,characterData:true});
    }
  }
  function restoreOriginals() {
    if (observer) observer.disconnect();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) if (originalText.has(n)) n.nodeValue = originalText.get(n);
    document.querySelectorAll('*').forEach(el => {
      const map = originalAttrs.get(el);
      if (map) Object.entries(map).forEach(([attr, value]) => { if (value === null) el.removeAttribute(attr); else el.setAttribute(attr, value); });
    });
    if (observer) observer.observe(document.body, {childList:true,subtree:true,characterData:true});
  }
  function scheduleTranslation(_root) {
    if (scheduled || activeLang === 'en') return;
    scheduled = true;
    const run = () => { scheduled = false; translateRoot(document.body); };
    if ('requestIdleCallback' in window) requestIdleCallback(run, {timeout:1800}); else setTimeout(run, 250);
  }
  function addSelector() {
    const select = document.getElementById('tcpLanguageSelect');
    if (!select) return;
    const saved = localStorage.getItem(STORE_KEY) || 'auto';
    select.value = saved;
    select.addEventListener('change', () => {
      localStorage.setItem(STORE_KEY, select.value);
      restoreOriginals();
      activeLang = chosenLanguage();
      document.documentElement.lang = activeLang;
      if (activeLang !== 'en') scheduleTranslation(document.body);
    });
  }
  function init() {
    addSelector();
    activeLang = chosenLanguage();
    document.documentElement.lang = activeLang;
    if (activeLang !== 'en') scheduleTranslation(document.body);
    observer = new MutationObserver(records => {
      if (busy || activeLang === 'en') return;
      const targets = records.filter(r => r.type === 'childList' && r.addedNodes.length).flatMap(r => [...r.addedNodes]).filter(n => n.nodeType === 1);
      if (targets.length) targets.forEach(n => scheduleTranslation(n));
      else if (records.some(r => r.type === 'characterData')) scheduleTranslation(document.body);
    });
    observer.observe(document.body, {childList:true,subtree:true,characterData:true});
    // Supabase/article content may arrive after initial page render.
    window.addEventListener('tcp:content-updated', () => scheduleTranslation(document.body));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true}); else init();
})();
