import Collector from "./Collector";
import TopLevelDomain, { TopLevelDomainInfo } from "../TopLevelDomain";
import { TopLevelDomainPricingInfo } from "./TopLevelDomainPricingInfo";

export default class AlldomainsCollector implements Collector {
  name: string = "Alldomains";
  website: string = "alldomains.hosting";
  tlds: TopLevelDomainInfo[] = [
    this.getTldHandler().AC,
    this.getTldHandler().ACADEMY,
    this.getTldHandler().ACCOUNTANT,
    this.getTldHandler().ACCOUNTANTS,
    this.getTldHandler().ACTOR,
    this.getTldHandler().ADULT,
    this.getTldHandler().AGENCY,
    this.getTldHandler().APARTMENTS,
    this.getTldHandler().APP,
    this.getTldHandler().ART,
    this.getTldHandler().ASIA,
    this.getTldHandler().ASSOCIATES,
    this.getTldHandler().AT,
    this.getTldHandler().AM,
    this.getTldHandler().AUCTION,
    this.getTldHandler().AUDIO,
    this.getTldHandler().AUTOS,
    this.getTldHandler().BABY,
    this.getTldHandler().BAND,
    this.getTldHandler().BAR,
    this.getTldHandler().BARGAINS,
    this.getTldHandler().BASKETBALL,
    this.getTldHandler().BAYERN,
    this.getTldHandler().BE,
    this.getTldHandler().BEAUTY,
    this.getTldHandler().BEER,
    this.getTldHandler().BERLIN,
    this.getTldHandler().BEST,
    this.getTldHandler().BIBLE,
    this.getTldHandler().BID,
    this.getTldHandler().BIKE,
    this.getTldHandler().BINGO,
    this.getTldHandler().BIZ,
    this.getTldHandler().BLACK,
    this.getTldHandler().BLACKFRIDAY,
    this.getTldHandler().BLOG,
    this.getTldHandler().BLUE,
    this.getTldHandler().BOATS,
    this.getTldHandler().BOND,
    this.getTldHandler().BOO,
    this.getTldHandler().BOSTON,
    this.getTldHandler().BOUTIQUE,
    this.getTldHandler().BUILD,
    this.getTldHandler().BUILDERS,
    this.getTldHandler().BUZZ,
    this.getTldHandler().CAB,
    this.getTldHandler().CAFE,
    this.getTldHandler().CAM,
    this.getTldHandler().CAMERA,
    this.getTldHandler().CAMP,
    this.getTldHandler().CAPITAL,
    this.getTldHandler().CAR,
    this.getTldHandler().CARDS,
    this.getTldHandler().CARE,
    this.getTldHandler().CAREER,
    this.getTldHandler().CAREERS,
    this.getTldHandler().CARS,
    this.getTldHandler().CASA,
    this.getTldHandler().CASE,
    this.getTldHandler().CASH,
    this.getTldHandler().CASINO,
    this.getTldHandler().CATERING,
    this.getTldHandler().CC,
    this.getTldHandler().CENTER,
    this.getTldHandler().CEO,
    this.getTldHandler().CH,
    this.getTldHandler().CHANNEL,
    this.getTldHandler().CHARITY,
    this.getTldHandler().CHAT,
    this.getTldHandler().CHEAP,
    this.getTldHandler().CHRISTMAS,
    this.getTldHandler().CHURCH,
    this.getTldHandler().CITY,
    this.getTldHandler().CLAIMS,
    this.getTldHandler().CLEANING,
    this.getTldHandler().CLICK,
    this.getTldHandler().CLINIC,
    this.getTldHandler().CLOTHING,
    this.getTldHandler().CLOUD,
    this.getTldHandler().CLUB,
    this.getTldHandler().CO,
    this.getTldHandler().COACH,
    this.getTldHandler().CODES,
    this.getTldHandler().COFFEE,
    this.getTldHandler().COLLEGE,
    this.getTldHandler().COM,
    this.getTldHandler().COMMUNITY,
    this.getTldHandler().COMPANY,
    this.getTldHandler().COMPARE,
    this.getTldHandler().COMPUTER,
    this.getTldHandler().CONDOS,
    this.getTldHandler().CONSTRUCTION,
    this.getTldHandler().CONSULTING,
    this.getTldHandler().CONTACT,
    this.getTldHandler().CONTRACTORS,
    this.getTldHandler().COOKING,
    this.getTldHandler().COOL,
    this.getTldHandler().COUNTRY,
    this.getTldHandler().COUPONS,
    this.getTldHandler().COURSES,
    this.getTldHandler().CREDIT,
    this.getTldHandler().CREDITCARD,
    this.getTldHandler().CRICKET,
    this.getTldHandler().CRUISES,
    this.getTldHandler().CYOU,
    this.getTldHandler().DAD,
    this.getTldHandler().DANCE,
    this.getTldHandler().DATE,
    this.getTldHandler().DATING,
    this.getTldHandler().DAY,
    this.getTldHandler().DE,
    this.getTldHandler().DEALS,
    this.getTldHandler().DELIVERY,
    this.getTldHandler().DEMOCRAT,
    this.getTldHandler().DENTAL,
    this.getTldHandler().DESI,
    this.getTldHandler().DESIGN,
    this.getTldHandler().DEV,
    this.getTldHandler().DIAMONDS,
    this.getTldHandler().DIET,
    this.getTldHandler().DIGITAL,
    this.getTldHandler().DIRECT,
    this.getTldHandler().DIRECTORY,
    this.getTldHandler().DISCOUNT,
    this.getTldHandler().DOCTOR,
    this.getTldHandler().DOG,
    this.getTldHandler().DOMAINS,
    this.getTldHandler().DOWNLOAD,
    this.getTldHandler().EARTH,
    this.getTldHandler().ECO,
    this.getTldHandler().EDUCATION,
    this.getTldHandler().EMAIL,
    this.getTldHandler().ENERGY,
    this.getTldHandler().ENGINEER,
    this.getTldHandler().ENGINEERING,
    this.getTldHandler().ENTERPRISES,
    this.getTldHandler().EQUIPMENT,
    this.getTldHandler().ESQ,
    this.getTldHandler().ESTATE,
    this.getTldHandler().EU,
    this.getTldHandler().EVENTS,
    this.getTldHandler().EXPOSED,
    this.getTldHandler().EXPRESS,
    this.getTldHandler().FAIL,
    this.getTldHandler().FAITH,
    this.getTldHandler().FAMILY,
    this.getTldHandler().FAN,
    this.getTldHandler().FANS,
    this.getTldHandler().FARM,
    this.getTldHandler().FASHION,
    this.getTldHandler().FILM,
    this.getTldHandler().FINANCE,
    this.getTldHandler().FINANCIAL,
    this.getTldHandler().FISH,
    this.getTldHandler().FISHING,
    this.getTldHandler().FIT,
    this.getTldHandler().FITNESS,
    this.getTldHandler().FLIGHTS,
    this.getTldHandler().FLORIST,
    this.getTldHandler().FLOWERS,
    this.getTldHandler().FM,
    this.getTldHandler().FO,
    this.getTldHandler().FOO,
    this.getTldHandler().FOOTBALL,
    this.getTldHandler().FORSALE,
    this.getTldHandler().FORUM,
    this.getTldHandler().FOUNDATION,
    this.getTldHandler().FR,
    this.getTldHandler().FUN,
    this.getTldHandler().FUND,
    this.getTldHandler().FURNITURE,
    this.getTldHandler().FUTBOL,
    this.getTldHandler().FYI,
    this.getTldHandler().GALLERY,
    this.getTldHandler().GAME,
    this.getTldHandler().GAMES,
    this.getTldHandler().GARDEN,
    this.getTldHandler().GAY,
    this.getTldHandler().GD,
    this.getTldHandler().GIFT,
    this.getTldHandler().GIFTS,
    this.getTldHandler().GIVING,
    this.getTldHandler().GL,
    this.getTldHandler().GLASS,
    this.getTldHandler().GLOBAL,
    this.getTldHandler().GMBH,
    this.getTldHandler().GOLD,
    this.getTldHandler().GOLF,
    this.getTldHandler().GRAPHICS,
    this.getTldHandler().GRATIS,
    this.getTldHandler().GRIPE,
    this.getTldHandler().GROUP,
    this.getTldHandler().GUIDE,
    this.getTldHandler().GUITARS,
    this.getTldHandler().GURU,

    // TODO: CONTINUE
  ];
  data: any[] = [];

  tldHandler: TopLevelDomain | undefined = undefined;

  async collect(): Promise<TopLevelDomainPricingInfo[]> {
    const axios = require("axios");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://porkbun.com/api/json/v3/pricing/get",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios(config);
    const responseData = response.data;

    let pricingInfos: TopLevelDomainPricingInfo[] = [];

    const pricing = responseData.pricing;
    const topLevelHandler = new TopLevelDomain();

    const keys = Object.keys(pricing);

    keys.forEach((key: string) => {
      const tld = topLevelHandler.getTLDInfo(key);
      const priceNew = pricing[key].registration;
      const priceRenew = pricing[key].renewal;
      const priceTransfer = pricing[key].transfer;

      if (tld === undefined) return;

      console.log("key", topLevelHandler.getTLDInfo(key)?.name, key, tld.name);

      const registrar = this.name;
      const registrarWebsite = this.website;

      const pricingInfo: TopLevelDomainPricingInfo = {
        tld,
        priceNew,
        priceRenew,
        priceTransfer,
        registrar,
        registrarWebsite,
      };

      pricingInfos.push(pricingInfo);
    });

    return pricingInfos;
  }

  getTldHandler(): TopLevelDomain {
    if (!this.tldHandler) this.tldHandler = new TopLevelDomain();
    return this.tldHandler;
  }
}
