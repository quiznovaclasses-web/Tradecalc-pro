const BASE = "https://quiznovaclasses.online";
const SUPABASE_URL = "https://dogcqnrmzjtesiquksao.supabase.co";
const SUPABASE_KEY = "sb_publishable_fG_jwopWqQvYENIc-X83Yw_j4dGgkg1";

const STATIC_URLS = [
  "https://quiznovaclasses.online/",
  "https://quiznovaclasses.online/?article=crypto-profit-loss-calculator-guide",
  "https://quiznovaclasses.online/?page=about",
  "https://quiznovaclasses.online/?page=affiliate",
  "https://quiznovaclasses.online/?page=contact",
  "https://quiznovaclasses.online/?page=cookies",
  "https://quiznovaclasses.online/?page=disclaimer",
  "https://quiznovaclasses.online/?page=privacy",
  "https://quiznovaclasses.online/?page=risk",
  "https://quiznovaclasses.online/?page=terms",
  "https://quiznovaclasses.online/?tool=affiliateconversion",
  "https://quiznovaclasses.online/?tool=affiliateepc",
  "https://quiznovaclasses.online/?tool=angularspeed",
  "https://quiznovaclasses.online/?tool=annualbasis",
  "https://quiznovaclasses.online/?tool=annualcontrib",
  "https://quiznovaclasses.online/?tool=annualized",
  "https://quiznovaclasses.online/?tool=annuity",
  "https://quiznovaclasses.online/?tool=arr",
  "https://quiznovaclasses.online/?tool=assetallocation",
  "https://quiznovaclasses.online/?tool=assetturnover",
  "https://quiznovaclasses.online/?tool=atr",
  "https://quiznovaclasses.online/?tool=attendance",
  "https://quiznovaclasses.online/?tool=attendanceneeded",
  "https://quiznovaclasses.online/?tool=average",
  "https://quiznovaclasses.online/?tool=averagecost",
  "https://quiznovaclasses.online/?tool=averagedown",
  "https://quiznovaclasses.online/?tool=averagegrowth",
  "https://quiznovaclasses.online/?tool=averagup",
  "https://quiznovaclasses.online/?tool=basis",
  "https://quiznovaclasses.online/?tool=batterytime",
  "https://quiznovaclasses.online/?tool=bmi",
  "https://quiznovaclasses.online/?tool=bmr",
  "https://quiznovaclasses.online/?tool=bodyfatestimate",
  "https://quiznovaclasses.online/?tool=bodyweightchange",
  "https://quiznovaclasses.online/?tool=bondcoupon",
  "https://quiznovaclasses.online/?tool=bondcurrent",
  "https://quiznovaclasses.online/?tool=bondprice",
  "https://quiznovaclasses.online/?tool=bondtotal",
  "https://quiznovaclasses.online/?tool=bondyield",
  "https://quiznovaclasses.online/?tool=bookvalue",
  "https://quiznovaclasses.online/?tool=bounce",
  "https://quiznovaclasses.online/?tool=breakeven",
  "https://quiznovaclasses.online/?tool=breakevenads",
  "https://quiznovaclasses.online/?tool=breakevenbusiness",
  "https://quiznovaclasses.online/?tool=breakevencustomers",
  "https://quiznovaclasses.online/?tool=breakevenqty",
  "https://quiznovaclasses.online/?tool=brokerage",
  "https://quiznovaclasses.online/?tool=budgetratio",
  "https://quiznovaclasses.online/?tool=burnrate",
  "https://quiznovaclasses.online/?tool=businessdays",
  "https://quiznovaclasses.online/?tool=businessmargin",
  "https://quiznovaclasses.online/?tool=bytesmb",
  "https://quiznovaclasses.online/?tool=cac",
  "https://quiznovaclasses.online/?tool=cagr",
  "https://quiznovaclasses.online/?tool=cagrprofit",
  "https://quiznovaclasses.online/?tool=calendardays",
  "https://quiznovaclasses.online/?tool=calorie",
  "https://quiznovaclasses.online/?tool=calorieburn",
  "https://quiznovaclasses.online/?tool=calorieprotein",
  "https://quiznovaclasses.online/?tool=carbonfootprintdrive",
  "https://quiznovaclasses.online/?tool=cashflow",
  "https://quiznovaclasses.online/?tool=cashrunway",
  "https://quiznovaclasses.online/?tool=cashyield",
  "https://quiznovaclasses.online/?tool=churn",
  "https://quiznovaclasses.online/?tool=circlearea",
  "https://quiznovaclasses.online/?tool=circlecircumference",
  "https://quiznovaclasses.online/?tool=circumference",
  "https://quiznovaclasses.online/?tool=classaverage",
  "https://quiznovaclasses.online/?tool=cmtinches",
  "https://quiznovaclasses.online/?tool=commission",
  "https://quiznovaclasses.online/?tool=commissiontier",
  "https://quiznovaclasses.online/?tool=compound",
  "https://quiznovaclasses.online/?tool=compounddaily",
  "https://quiznovaclasses.online/?tool=compoundinflation",
  "https://quiznovaclasses.online/?tool=compoundmonthly",
  "https://quiznovaclasses.online/?tool=compoundmonthlydeposit",
  "https://quiznovaclasses.online/?tool=concentration",
  "https://quiznovaclasses.online/?tool=concretevolume",
  "https://quiznovaclasses.online/?tool=confidence95",
  "https://quiznovaclasses.online/?tool=contractvalue",
  "https://quiznovaclasses.online/?tool=contributionmargin",
  "https://quiznovaclasses.online/?tool=conversion",
  "https://quiznovaclasses.online/?tool=correlation",
  "https://quiznovaclasses.online/?tool=courseprogress",
  "https://quiznovaclasses.online/?tool=coveredcall",
  "https://quiznovaclasses.online/?tool=coveredcallincome",
  "https://quiznovaclasses.online/?tool=cpc",
  "https://quiznovaclasses.online/?tool=cpm",
  "https://quiznovaclasses.online/?tool=creditutil",
  "https://quiznovaclasses.online/?tool=crossrate",
  "https://quiznovaclasses.online/?tool=crypto",
  "https://quiznovaclasses.online/?tool=cryptoallocation",
  "https://quiznovaclasses.online/?tool=cryptoaverage",
  "https://quiznovaclasses.online/?tool=cryptodollarcost",
  "https://quiznovaclasses.online/?tool=cryptounits",
  "https://quiznovaclasses.online/?tool=cryptovalue",
  "https://quiznovaclasses.online/?tool=ctr",
  "https://quiznovaclasses.online/?tool=cube",
  "https://quiznovaclasses.online/?tool=currentratio",
  "https://quiznovaclasses.online/?tool=datausage",
  "https://quiznovaclasses.online/?tool=dateadd",
  "https://quiznovaclasses.online/?tool=dca",
  "https://quiznovaclasses.online/?tool=dcaunits",
  "https://quiznovaclasses.online/?tool=debtequity",
  "https://quiznovaclasses.online/?tool=debtincome",
  "https://quiznovaclasses.online/?tool=debtpayoff",
  "https://quiznovaclasses.online/?tool=decimalpercent",
  "https://quiznovaclasses.online/?tool=density",
  "https://quiznovaclasses.online/?tool=densityspecific",
  "https://quiznovaclasses.online/?tool=discount",
  "https://quiznovaclasses.online/?tool=discountedpayback",
  "https://quiznovaclasses.online/?tool=discountsavings",
  "https://quiznovaclasses.online/?tool=discountstack",
  "https://quiznovaclasses.online/?tool=distance",
  "https://quiznovaclasses.online/?tool=distance2d",
  "https://quiznovaclasses.online/?tool=dividend",
  "https://quiznovaclasses.online/?tool=dividendgrowth",
  "https://quiznovaclasses.online/?tool=dividendpayout",
  "https://quiznovaclasses.online/?tool=dividendreinvest",
  "https://quiznovaclasses.online/?tool=dividendtotal",
  "https://quiznovaclasses.online/?tool=divyieldcost",
  "https://quiznovaclasses.online/?tool=doubling",
  "https://quiznovaclasses.online/?tool=downloadtime",
  "https://quiznovaclasses.online/?tool=downpayment",
  "https://quiznovaclasses.online/?tool=drawdown",
  "https://quiznovaclasses.online/?tool=durationimpact",
  "https://quiznovaclasses.online/?tool=earningsyield",
  "https://quiznovaclasses.online/?tool=ebitda",
  "https://quiznovaclasses.online/?tool=educationcost",
  "https://quiznovaclasses.online/?tool=educationloan",
  "https://quiznovaclasses.online/?tool=electricalpower",
  "https://quiznovaclasses.online/?tool=ema",
  "https://quiznovaclasses.online/?tool=emailopen",
  "https://quiznovaclasses.online/?tool=emergencyfund",
  "https://quiznovaclasses.online/?tool=enterprise",
  "https://quiznovaclasses.online/?tool=eps",
  "https://quiznovaclasses.online/?tool=examcountdown",
  "https://quiznovaclasses.online/?tool=exammarks",
  "https://quiznovaclasses.online/?tool=examneeded",
  "https://quiznovaclasses.online/?tool=exampercentage",
  "https://quiznovaclasses.online/?tool=expectancy",
  "https://quiznovaclasses.online/?tool=exposure",
  "https://quiznovaclasses.online/?tool=fahrenheit",
  "https://quiznovaclasses.online/?tool=fee",
  "https://quiznovaclasses.online/?tool=feeoneway",
  "https://quiznovaclasses.online/?tool=fibextension",
  "https://quiznovaclasses.online/?tool=fiblevel",
  "https://quiznovaclasses.online/?tool=fixedcostratio",
  "https://quiznovaclasses.online/?tool=flashcards",
  "https://quiznovaclasses.online/?tool=force",
  "https://quiznovaclasses.online/?tool=forex",
  "https://quiznovaclasses.online/?tool=forexcommission",
  "https://quiznovaclasses.online/?tool=forexlotrisk",
  "https://quiznovaclasses.online/?tool=forexmargin",
  "https://quiznovaclasses.online/?tool=forexnotional",
  "https://quiznovaclasses.online/?tool=forexpiprisk",
  "https://quiznovaclasses.online/?tool=forexprofit",
  "https://quiznovaclasses.online/?tool=forexspreadcost",
  "https://quiznovaclasses.online/?tool=fractiondecimal",
  "https://quiznovaclasses.online/?tool=frequency",
  "https://quiznovaclasses.online/?tool=fuelcost",
  "https://quiznovaclasses.online/?tool=funding",
  "https://quiznovaclasses.online/?tool=fundingannual",
  "https://quiznovaclasses.online/?tool=futuresmargin",
  "https://quiznovaclasses.online/?tool=futurespnl",
  "https://quiznovaclasses.online/?tool=futurevalue",
  "https://quiznovaclasses.online/?tool=gallonlitre",
  "https://quiznovaclasses.online/?tool=gbmb",
  "https://quiznovaclasses.online/?tool=gforce",
  "https://quiznovaclasses.online/?tool=gpa",
  "https://quiznovaclasses.online/?tool=gradeaverage",
  "https://quiznovaclasses.online/?tool=gradeimprove",
  "https://quiznovaclasses.online/?tool=gradepercent",
  "https://quiznovaclasses.online/?tool=gradepoints",
  "https://quiznovaclasses.online/?tool=grossmargin",
  "https://quiznovaclasses.online/?tool=grossprofit",
  "https://quiznovaclasses.online/?tool=grossup",
  "https://quiznovaclasses.online/?tool=heatenergy",
  "https://quiznovaclasses.online/?tool=holdingperiod",
  "https://quiznovaclasses.online/?tool=hourlyproject",
  "https://quiznovaclasses.online/?tool=hourlysalary",
  "https://quiznovaclasses.online/?tool=imagepixels",
  "https://quiznovaclasses.online/?tool=inchcm",
  "https://quiznovaclasses.online/?tool=inflationbasket",
  "https://quiznovaclasses.online/?tool=inflationfuture",
  "https://quiznovaclasses.online/?tool=inflationneeded",
  "https://quiznovaclasses.online/?tool=interestcoverage",
  "https://quiznovaclasses.online/?tool=inventorydays",
  "https://quiznovaclasses.online/?tool=inventoryturn",
  "https://quiznovaclasses.online/?tool=proportion",
  "https://quiznovaclasses.online/?tool=putbreakeven",
  "https://quiznovaclasses.online/?tool=pythagorean",
  "https://quiznovaclasses.online/?tool=questionaccuracy",
  "https://quiznovaclasses.online/?tool=quickratio",
  "https://quiznovaclasses.online/?tool=quizscore",
  "https://quiznovaclasses.online/?tool=range",
  "https://quiznovaclasses.online/?tool=ratio",
  "https://quiznovaclasses.online/?tool=ratiochange",
  "https://quiznovaclasses.online/?tool=readingtime",
  "https://quiznovaclasses.online/?tool=realreturn",
  "https://quiznovaclasses.online/?tool=realwage",
  "https://quiznovaclasses.online/?tool=rebalancebuy",
  "https://quiznovaclasses.online/?tool=rebalancesell",
  "https://quiznovaclasses.online/?tool=recovery",
  "https://quiznovaclasses.online/?tool=rectanglearea",
  "https://quiznovaclasses.online/?tool=relativechange",
  "https://quiznovaclasses.online/?tool=rentincome",
  "https://quiznovaclasses.online/?tool=rentvsbuy",
  "https://quiznovaclasses.online/?tool=requiredreturn",
  "https://quiznovaclasses.online/?tool=resistance",
  "https://quiznovaclasses.online/?tool=retention",
  "https://quiznovaclasses.online/?tool=retirementgoal",
  "https://quiznovaclasses.online/?tool=return",
  "https://quiznovaclasses.online/?tool=revisionplanner",
  "https://quiznovaclasses.online/?tool=risk",
  "https://quiznovaclasses.online/?tool=riskbudget",
  "https://quiznovaclasses.online/?tool=riskcapital",
  "https://quiznovaclasses.online/?tool=riskpercent",
  "https://quiznovaclasses.online/?tool=riskreward",
  "https://quiznovaclasses.online/?tool=roas",
  "https://quiznovaclasses.online/?tool=roc",
  "https://quiznovaclasses.online/?tool=roe",
  "https://quiznovaclasses.online/?tool=roi",
  "https://quiznovaclasses.online/?tool=roiannual",
  "https://quiznovaclasses.online/?tool=roimarketing",
  "https://quiznovaclasses.online/?tool=roundtripfee",
  "https://quiznovaclasses.online/?tool=rpm",
  "https://quiznovaclasses.online/?tool=rsi",
  "https://quiznovaclasses.online/?tool=rule72",
  "https://quiznovaclasses.online/?tool=runningdistance",
  "https://quiznovaclasses.online/?tool=salaryhourly",
  "https://quiznovaclasses.online/?tool=salaryraise",
  "https://quiznovaclasses.online/?tool=salarytax",
  "https://quiznovaclasses.online/?tool=salesgrowth",
  "https://quiznovaclasses.online/?tool=salesmultiple",
  "https://quiznovaclasses.online/?tool=salesperemployee",
  "https://quiznovaclasses.online/?tool=salestax",
  "https://quiznovaclasses.online/?tool=samplemean",
  "https://quiznovaclasses.online/?tool=samplingerror",
  "https://quiznovaclasses.online/?tool=savingsgap",
  "https://quiznovaclasses.online/?tool=savingsgoal",
  "https://quiznovaclasses.online/?tool=savingsinterest",
  "https://quiznovaclasses.online/?tool=savingsmonthly",
  "https://quiznovaclasses.online/?tool=savingsrate",
  "https://quiznovaclasses.online/?tool=scale",
  "https://quiznovaclasses.online/?tool=scalein",
  "https://quiznovaclasses.online/?tool=scalout",
  "https://quiznovaclasses.online/?tool=screenratio",
  "https://quiznovaclasses.online/?tool=seriesresistance",
  "https://quiznovaclasses.online/?tool=shareownership",
  "https://quiznovaclasses.online/?tool=shareprofit",
  "https://quiznovaclasses.online/?tool=shippingcost",
  "https://quiznovaclasses.online/?tool=shippingweight",
  "https://quiznovaclasses.online/?tool=shortpnl",
  "https://quiznovaclasses.online/?tool=simpleaverage",
  "https://quiznovaclasses.online/?tool=simplebudget",
  "https://quiznovaclasses.online/?tool=simpleinterest",
  "https://quiznovaclasses.online/?tool=simpleinterestdays",
  "https://quiznovaclasses.online/?tool=simpleprobability",
  "https://quiznovaclasses.online/?tool=simpletax",
  "https://quiznovaclasses.online/?tool=sip",
  "https://quiznovaclasses.online/?tool=sleepcycles",
  "https://quiznovaclasses.online/?tool=slippage",
  "https://quiznovaclasses.online/?tool=slope",
  "https://quiznovaclasses.online/?tool=sma",
  "https://quiznovaclasses.online/?tool=solaroutput",
  "https://quiznovaclasses.online/?tool=speed",
  "https://quiznovaclasses.online/?tool=splitbill",
  "https://quiznovaclasses.online/?tool=square",
  "https://quiznovaclasses.online/?tool=stablecoin",
  "https://quiznovaclasses.online/?tool=stakingapy",
  "https://quiznovaclasses.online/?tool=stakingyield",
  "https://quiznovaclasses.online/?tool=standardscore",
  "https://quiznovaclasses.online/?tool=stddev",
  "https://quiznovaclasses.online/?tool=stoch",
  "https://quiznovaclasses.online/?tool=stockavg",
  "https://quiznovaclasses.online/?tool=stockcostbasis",
  "https://quiznovaclasses.online/?tool=stockdilution",
  "https://quiznovaclasses.online/?tool=stockdividend",
  "https://quiznovaclasses.online/?tool=stockpnl",
  "https://quiznovaclasses.online/?tool=stockposition",
  "https://quiznovaclasses.online/?tool=stockreturnincome",
  "https://quiznovaclasses.online/?tool=stoploss",
  "https://quiznovaclasses.online/?tool=studybreak",
  "https://quiznovaclasses.online/?tool=studyhours",
  "https://quiznovaclasses.online/?tool=subscriptionchurn",
  "https://quiznovaclasses.online/?tool=subscriptionmrr",
  "https://quiznovaclasses.online/?tool=support",
  "https://quiznovaclasses.online/?tool=surfacearea",
  "https://quiznovaclasses.online/?tool=takerfee",
  "https://quiznovaclasses.online/?tool=target",
  "https://quiznovaclasses.online/?tool=targetprofit",
  "https://quiznovaclasses.online/?tool=taxablegain",
  "https://quiznovaclasses.online/?tool=taxgain",
  "https://quiznovaclasses.online/?tool=taxinclusive",
  "https://quiznovaclasses.online/?tool=taxnet",
  "https://quiznovaclasses.online/?tool=taxrate",
  "https://quiznovaclasses.online/?tool=temperature",
  "https://quiznovaclasses.online/?tool=threebuys",
  "https://quiznovaclasses.online/?tool=tilecount",
  "https://quiznovaclasses.online/?tool=time",
  "https://quiznovaclasses.online/?tool=timeconverthours",
  "https://quiznovaclasses.online/?tool=timeconvertminutes",
  "https://quiznovaclasses.online/?tool=timezonehours",
  "https://quiznovaclasses.online/?tool=tip",
  "https://quiznovaclasses.online/?tool=tipshare",
  "https://quiznovaclasses.online/?tool=tokenfdv",
  "https://quiznovaclasses.online/?tool=tokenfdvratio",
  "https://quiznovaclasses.online/?tool=tokenmarketcap",
  "https://quiznovaclasses.online/?tool=tokenprice",
  "https://quiznovaclasses.online/?tool=tokenreturn",
  "https://quiznovaclasses.online/?tool=tradesneeded",
  "https://quiznovaclasses.online/?tool=trianglearea",
  "https://quiznovaclasses.online/?tool=truechange",
  "https://quiznovaclasses.online/?tool=typingtime",
  "https://quiznovaclasses.online/?tool=unitconvertkmmi",
  "https://quiznovaclasses.online/?tool=unitconvertmkm",
  "https://quiznovaclasses.online/?tool=unitfraction",
  "https://quiznovaclasses.online/?tool=unitprice",
  "https://quiznovaclasses.online/?tool=unitrate",
  "https://quiznovaclasses.online/?tool=variance",
  "https://quiznovaclasses.online/?tool=volatility",
  "https://quiznovaclasses.online/?tool=volume",
  "https://quiznovaclasses.online/?tool=waterbill",
  "https://quiznovaclasses.online/?tool=waterflow",
  "https://quiznovaclasses.online/?tool=waterintake",
  "https://quiznovaclasses.online/?tool=watertank",
  "https://quiznovaclasses.online/?tool=wave",
  "https://quiznovaclasses.online/?tool=weightedattendance",
  "https://quiznovaclasses.online/?tool=weightedavg",
  "https://quiznovaclasses.online/?tool=weightedmean",
  "https://quiznovaclasses.online/?tool=weightedpercentage",
  "https://quiznovaclasses.online/?tool=weightedscore",
  "https://quiznovaclasses.online/?tool=williams",
  "https://quiznovaclasses.online/?tool=winrate",
  "https://quiznovaclasses.online/?tool=wordcounttime",
  "https://quiznovaclasses.online/?tool=work",
  "https://quiznovaclasses.online/?tool=workingcapital",
  "https://quiznovaclasses.online/?tool=zscore"
];

async function loadSitemapData() {
  const entries = new Map(STATIC_URLS.map(loc => [loc, null]));
  const diagnostics = {
    source: "static-fallback",
    articleCount: 0,
    apiStatus: "not-requested",
    error: "none",
    matchedPositionArticle: false
  };

  try {
    const endpoint =
      SUPABASE_URL +
      "/rest/v1/articles?select=slug,published_at" +
      "&status=eq.published" +
      "&published_at=not.is.null" +
      "&published_at=lte." +
      encodeURIComponent(new Date().toISOString()) +
      "&order=published_at.desc&limit=50000";

    const response = await fetch(endpoint, {
      headers: {
        apikey: SUPABASE_KEY,
        Accept: "application/json"
      }
    });

    diagnostics.apiStatus = String(response.status);

    if (!response.ok) {
      diagnostics.error = (await response.text())
        .slice(0, 1000)
        .replace(/[\\r\\n]+/g, " ");

      return { entries, diagnostics };
    }

    const rows = await response.json();

    if (!Array.isArray(rows)) {
      diagnostics.error = "Supabase response was not a JSON array";
      return { entries, diagnostics };
    }

    for (const row of rows) {
      if (
        !row ||
        !row.slug ||
        !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(row.slug)
      ) {
        continue;
      }

      const url = new URL(BASE + "/");
      url.searchParams.set("article", row.slug);

      entries.set(url.toString(), row.published_at || null);

      if (
        row.slug ===
        "position-size-calculator-trading-risk-management"
      ) {
        diagnostics.matchedPositionArticle = true;
      }
    }

    diagnostics.articleCount = rows.length;
        diagnostics.source = "supabase";

    return { entries, diagnostics };

  } catch (error) {
    diagnostics.error = String(
      error.message || error
    ).slice(0, 1000);

    return { entries, diagnostics };
  }
}

function escapeXML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function onRequest() {
  const { entries } = await loadSitemapData();

  const urls = Array.from(entries.entries())
    .map(([loc, lastmod]) => {
      const lastmodTag = lastmod
        ? `<lastmod>${escapeXML(lastmod)}</lastmod>`
        : "";

      return `
  <url>
    <loc>${escapeXML(loc)}</loc>
    ${lastmodTag}
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "no-store"
    }
  });
}
