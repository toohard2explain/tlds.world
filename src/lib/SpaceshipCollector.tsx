import Collector from "./Collector";
import TopLevelDomain, { TopLevelDomainInfo } from "../TopLevelDomain";
import { TopLevelDomainPricingInfo } from "./TopLevelDomainPricingInfo";

export default class SpaceshipCollector implements Collector {
    name: string = "Spaceship";
    website: string = "www.spaceship.com";
    tlds: TopLevelDomainInfo[] = [
        this.getTldHandler().COM,
        this.getTldHandler().NET,
        this.getTldHandler().CO,
        this.getTldHandler().ORG,
        this.getTldHandler().XYZ,
        this.getTldHandler().IO,
        this.getTldHandler().ME,
        this.getTldHandler().INFO,
        this.getTldHandler().AI,
        this.getTldHandler().IN,
        this.getTldHandler().TOP,
        this.getTldHandler().ONLINE,
        this.getTldHandler().US,
        this.getTldHandler().DEV,
        this.getTldHandler().BIZ,
        this.getTldHandler().GG,
        this.getTldHandler().TECH,
        this.getTldHandler().CC,
        this.getTldHandler().TV,
        this.getTldHandler().PW,
        this.getTldHandler().CLUB,
        this.getTldHandler().APP,
        this.getTldHandler().PRO,
        this.getTldHandler().UK,
        this.getTldHandler().SHOP,
        this.getTldHandler().SITE,
        this.getTldHandler().CA,
        this.getTldHandler().SPACE,
        this.getTldHandler().STORE,
        this.getTldHandler().LIVE,
        this.getTldHandler().CLOUD,
        this.getTldHandler().ONE,
        this.getTldHandler().LINK,
        this.getTldHandler().LTD,
        this.getTldHandler().SH,
        this.getTldHandler().WORK,
        this.getTldHandler().LIFE,
        this.getTldHandler().ART,
        this.getTldHandler().DESIGN,
        this.getTldHandler().EMAIL,
        this.getTldHandler().NETWORK,
        this.getTldHandler().BLOG,
        this.getTldHandler().HOST,
        this.getTldHandler().ZONE,
        this.getTldHandler().NEWS,
        this.getTldHandler().WORLD,
        this.getTldHandler().CLICK,
        this.getTldHandler().WEBSITE,
        this.getTldHandler().XXX,
        this.getTldHandler().WTF,
        this.getTldHandler().DIGITAL,
        this.getTldHandler().LOL,
        this.getTldHandler().TODAY,
        this.getTldHandler().STUDIO,
        this.getTldHandler().MOBI,
        this.getTldHandler().GROUP,
        this.getTldHandler().AC,
        this.getTldHandler().AGENCY,
        this.getTldHandler().VIP,
        this.getTldHandler().WIKI,
        this.getTldHandler().NINJA,
        this.getTldHandler().ICU,
        this.getTldHandler().FM,
        this.getTldHandler().FUN,
        this.getTldHandler().TOOLS,
        this.getTldHandler().MEDIA,
        this.getTldHandler().GLOBAL,
        this.getTldHandler().COMPANY,
        this.getTldHandler().RED,
        this.getTldHandler().BEST,
        this.getTldHandler().GURU,
        this.getTldHandler().CITY,
        this.getTldHandler().WORKS,
        this.getTldHandler().DOG,
        this.getTldHandler().BAR,
        this.getTldHandler().BUSINESS,
        this.getTldHandler().GAMES,
        this.getTldHandler().SERVICES,
        this.getTldHandler().MARKET,
        this.getTldHandler().CENTER,
        this.getTldHandler().RUN,
        this.getTldHandler().CODES,
        this.getTldHandler().TEAM,
        this.getTldHandler().MONEY,
        this.getTldHandler().FINANCE,
        this.getTldHandler().ROCKS,
        this.getTldHandler().PLUS,
        this.getTldHandler().SOLUTIONS,
        this.getTldHandler().TECHNOLOGY,
        this.getTldHandler().UNIVERSITY,
        this.getTldHandler().RENTALS,
        this.getTldHandler().INTERNATIONAL,
        this.getTldHandler().SYSTEMS,
        this.getTldHandler().ACADEMY,
        this.getTldHandler().MARKETING,
        this.getTldHandler().BIO,
        this.getTldHandler().CONSULTING,
        this.getTldHandler().RECIPES,
        this.getTldHandler().SALE,
        this.getTldHandler().PHOTOGRAPHY,
        this.getTldHandler().FAMILY,
        this.getTldHandler().TRAINING,
        this.getTldHandler().DOMAINS,
        this.getTldHandler().PIZZA,
        this.getTldHandler().EXPERT,
        this.getTldHandler().INK,
        this.getTldHandler().PUB,
        this.getTldHandler().CAFE,
        this.getTldHandler().DIRECTORY,
        this.getTldHandler().CHEAP,
        this.getTldHandler().AUDIO,
        this.getTldHandler().TAXI,
        this.getTldHandler().TEL,
        this.getTldHandler().BLUE,
        this.getTldHandler().ENGINEERING,
        this.getTldHandler().COOL,
        this.getTldHandler().PROPERTIES,
        this.getTldHandler().BOUTIQUE,
        this.getTldHandler().TOURS,
        this.getTldHandler().CASA,
        this.getTldHandler().CASH,
        this.getTldHandler().EVENTS,
        this.getTldHandler().REVIEWS,
        this.getTldHandler().FITNESS,
        this.getTldHandler().DELIVERY,
        this.getTldHandler().CHURCH,
        this.getTldHandler().INSTITUTE,
        this.getTldHandler().SUPPORT,
        this.getTldHandler().SOFTWARE,
        this.getTldHandler().GOLD,
        this.getTldHandler().FOUNDATION,
        this.getTldHandler().STYLE,
        this.getTldHandler().EXPRESS,
        this.getTldHandler().CAPITAL,
        this.getTldHandler().PARTNERS,
        this.getTldHandler().WATCH,
        this.getTldHandler().AUCTION,
        this.getTldHandler().REPORT,
        this.getTldHandler().TOWN,
        this.getTldHandler().PHOTOS,
        this.getTldHandler().RESTAURANT,
        this.getTldHandler().COACH,
        this.getTldHandler().SOCIAL,
        this.getTldHandler().VENTURES,
        this.getTldHandler().ENERGY,
        this.getTldHandler().ENTERPRISES,
        this.getTldHandler().COMPUTER,
        this.getTldHandler().CREDIT,
        this.getTldHandler().FUND,
        this.getTldHandler().INVESTMENTS,
        this.getTldHandler().DATING,
        this.getTldHandler().BAND,
        this.getTldHandler().BIKE,
        this.getTldHandler().REPAIR,
        this.getTldHandler().RIP,
        this.getTldHandler().TOYS,
        this.getTldHandler().LEGAL,
        this.getTldHandler().CHAT,
        this.getTldHandler().SHOES,
        this.getTldHandler().COFFEE,
        this.getTldHandler().YOGA,
        this.getTldHandler().PRESS,
        this.getTldHandler().HELP,
        this.getTldHandler().VIN,
        this.getTldHandler().CASINO,
        this.getTldHandler().INC,
        this.getTldHandler().VET,
        this.getTldHandler().COUPONS,
        this.getTldHandler().ACCOUNTANTS,
        this.getTldHandler().BARGAINS,
        this.getTldHandler().BLACK,
        this.getTldHandler().ESTATE,
        this.getTldHandler().LAND,
        this.getTldHandler().PRODUCTIONS,
        this.getTldHandler().WEDDING,
        this.getTldHandler().DANCE,
        this.getTldHandler().SHOW,
        this.getTldHandler().FINANCIAL,
        this.getTldHandler().TAX,
        this.getTldHandler().KITCHEN,
        this.getTldHandler().REST,
        this.getTldHandler().KIM,
        this.getTldHandler().GUIDE,
        this.getTldHandler().DIRECT,
        this.getTldHandler().FYI,
        this.getTldHandler().GOLF,
        this.getTldHandler().WINE,
        this.getTldHandler().GAY,
        this.getTldHandler().MODA,
        this.getTldHandler().BLACKFRIDAY,
        this.getTldHandler().CYOU,
        this.getTldHandler().TIPS,
        this.getTldHandler().DEALS,
        this.getTldHandler().TENNIS,
        this.getTldHandler().HAUS,
        this.getTldHandler().SEXY,
        this.getTldHandler().PROMO,
        this.getTldHandler().PAGE,
        this.getTldHandler().SCHOOL,
        this.getTldHandler().SEX,
        this.getTldHandler().CARE,
        this.getTldHandler().FORSALE,
        this.getTldHandler().MONSTER,
        this.getTldHandler().PET,
        this.getTldHandler().ACTOR,
        this.getTldHandler().PARTS,
        this.getTldHandler().PHOTO,
        this.getTldHandler().MOVIE,
        this.getTldHandler().EXCHANGE,
        this.getTldHandler().GAME,
        this.getTldHandler().COMMUNITY,
        this.getTldHandler().ASSOCIATES,
        this.getTldHandler().VIDEO,
        this.getTldHandler().BINGO,
        this.getTldHandler().ENGINEER,
        this.getTldHandler().SINGLES,
        this.getTldHandler().CLAIMS,
        this.getTldHandler().FARM,
        this.getTldHandler().PINK,
        this.getTldHandler().SKI,
        this.getTldHandler().HOSTING,
        this.getTldHandler().EDUCATION,
        this.getTldHandler().CAM,
        this.getTldHandler().CAREERS,
        this.getTldHandler().PICS,
        this.getTldHandler().HOUSE,
        this.getTldHandler().MORTGAGE,
        this.getTldHandler().SHOPPING,
        this.getTldHandler().NYC,
        this.getTldHandler().DOCTOR,
        this.getTldHandler().CARDS,
        this.getTldHandler().STUDY,
        this.getTldHandler().BET,
        this.getTldHandler().UNO,
        this.getTldHandler().VISION,
        this.getTldHandler().BUILDERS,
        this.getTldHandler().RENT,
        this.getTldHandler().GRATIS,
        this.getTldHandler().IRISH,
        this.getTldHandler().GIVES,
        this.getTldHandler().ARMY,
        this.getTldHandler().COLLEGE,
        this.getTldHandler().APARTMENTS,
        this.getTldHandler().VIAJES,
        this.getTldHandler().BEER,
        this.getTldHandler().CAMERA,
        this.getTldHandler().SALON,
        this.getTldHandler().CLINIC,
        this.getTldHandler().FISH,
        this.getTldHandler().FIT,
        this.getTldHandler().SARL,
        this.getTldHandler().ATTORNEY,
        this.getTldHandler().EQUIPMENT,
        this.getTldHandler().COUNTRY,
        this.getTldHandler().PICTURES,
        this.getTldHandler().SOLAR,
        this.getTldHandler().PORN,
        this.getTldHandler().VILLAS,
        this.getTldHandler().SECURITY,
        this.getTldHandler().LAW,
        this.getTldHandler().CREDITCARD,
        this.getTldHandler().MOM,
        this.getTldHandler().COURSES,
        this.getTldHandler().CHRISTMAS,
        this.getTldHandler().DISCOUNT,
        this.getTldHandler().CLOTHING,
        this.getTldHandler().CAMP,
        this.getTldHandler().MANAGEMENT,
        this.getTldHandler().SCHULE,
        this.getTldHandler().RODEO,
        this.getTldHandler().FAIL,
        this.getTldHandler().VOYAGE,
        this.getTldHandler().TIENDA,
        this.getTldHandler().CAB,
        this.getTldHandler().BABY,
        this.getTldHandler().LGBT,
        this.getTldHandler().REISEN,
        this.getTldHandler().LONDON,
        this.getTldHandler().CONSTRUCTION,
        this.getTldHandler().PROPERTY,
        this.getTldHandler().CLEANING,
        this.getTldHandler().IMMO,
        this.getTldHandler().VACATIONS,
        this.getTldHandler().ADULT,
        this.getTldHandler().CAR,
        this.getTldHandler().GREEN,
        this.getTldHandler().SUPPLIES,
        this.getTldHandler().FURNITURE,
        this.getTldHandler().GALLERY,
        this.getTldHandler().CATERING,
        this.getTldHandler().DIAMONDS,
        this.getTldHandler().BUILD,
        this.getTldHandler().EXPOSED,
        this.getTldHandler().CRUISES,
        this.getTldHandler().CEO,
        this.getTldHandler().HOLIDAY,
        this.getTldHandler().FASHION,
        this.getTldHandler().LAWYER,
        this.getTldHandler().TIRES,
        this.getTldHandler().HOLDINGS,
        this.getTldHandler().JE,
        this.getTldHandler().HEALTHCARE,
        this.getTldHandler().AIRFORCE,
        this.getTldHandler().OBSERVER,
        this.getTldHandler().PLACE,
        this.getTldHandler().ARCHI,
        this.getTldHandler().COOKING,
        this.getTldHandler().GRAPHICS,
        this.getTldHandler().REPUBLICAN,
        this.getTldHandler().CHARITY,
        this.getTldHandler().HOMES,
        this.getTldHandler().IMMOBILIEN,
        this.getTldHandler().GARDEN,
        this.getTldHandler().SURF,
        this.getTldHandler().POKER,
        this.getTldHandler().DENTIST,
        this.getTldHandler().FUTBOL,
        this.getTldHandler().FLIGHTS,
        this.getTldHandler().AUTO,
        this.getTldHandler().CONDOS,
        this.getTldHandler().CONTRACTORS,
        this.getTldHandler().DENTAL,
        this.getTldHandler().JEWELRY,
        this.getTldHandler().VODKA,
        this.getTldHandler().MBA,
        this.getTldHandler().GLASS,
        this.getTldHandler().MIAMI,
        this.getTldHandler().FOOTBALL,
        this.getTldHandler().DESI,
        this.getTldHandler().DEGREE,
        this.getTldHandler().LEASE,
        this.getTldHandler().ECO,
        this.getTldHandler().MAISON,
        this.getTldHandler().LIMITED,
        this.getTldHandler().SOCCER,
        this.getTldHandler().SUPPLY,
        this.getTldHandler().REHAB,
        this.getTldHandler().INDUSTRIES,
        this.getTldHandler().VOTE,
        this.getTldHandler().THEATER,
        this.getTldHandler().REALTY,
        this.getTldHandler().HORSE,
        this.getTldHandler().LOANS,
        this.getTldHandler().CARS,
        this.getTldHandler().FLOWERS,
        this.getTldHandler().DEMOCRAT,
        this.getTldHandler().FANS,
        this.getTldHandler().HOW,
        this.getTldHandler().SURGERY,
        this.getTldHandler().LIMO,
        this.getTldHandler().SHIKSHA,
        this.getTldHandler().MEMORIAL,
        this.getTldHandler().PROTECTION,
        this.getTldHandler().HEALTH,
        this.getTldHandler().FLORIST,
        this.getTldHandler().GRIPE,
        this.getTldHandler().LLC,
        this.getTldHandler().SOY,
        this.getTldHandler().DIET,
        this.getTldHandler().GIFTS,
        this.getTldHandler().PLUMBING,
        this.getTldHandler().NEW,
        this.getTldHandler().SBS,
        this.getTldHandler().FAN,
        this.getTldHandler().THEATRE,
        this.getTldHandler().VOTO,
        this.getTldHandler().REISE,
        this.getTldHandler().FISHING,
        this.getTldHandler().LIGHTING,
        this.getTldHandler().HOCKEY,
        this.getTldHandler().LUXURY,
        this.getTldHandler().INSURE,
        this.getTldHandler().GMBH,
        this.getTldHandler().BOSTON,
        this.getTldHandler().JETZT,
        this.getTldHandler().DAY,
        this.getTldHandler().CYMRU,
        this.getTldHandler().COMPARE,
        this.getTldHandler().HOSPITAL,
        this.getTldHandler().CFD,
        this.getTldHandler().ZIP,
        this.getTldHandler().STORAGE,
        this.getTldHandler().KAUFEN,
        this.getTldHandler().GUITARS,
        this.getTldHandler().LAT,
        this.getTldHandler().BROKER,
        this.getTldHandler().TICKETS,
        this.getTldHandler().AUTOS,
        this.getTldHandler().BOATS,
        this.getTldHandler().TRADING,
        this.getTldHandler().ABOGADO,
        this.getTldHandler().WALES,
        this.getTldHandler().NAVY,
        this.getTldHandler().FORUM,
        this.getTldHandler().MARKETS,
        this.getTldHandler().BOND,
        this.getTldHandler().CONTACT,
        this.getTldHandler().LUXE,
        this.getTldHandler().HIV,
        this.getTldHandler().QUEST,
        this.getTldHandler().BOO,
        this.getTldHandler().FOREX,
        this.getTldHandler().MAKEUP,
        this.getTldHandler().YACHTS,
        this.getTldHandler().MOTORCYCLES,
        this.getTldHandler().BEAUTY,
        this.getTldHandler().FOO,
        this.getTldHandler().LOTTO,
        this.getTldHandler().DAD,
        this.getTldHandler().SKIN,
        this.getTldHandler().DEALER,
        this.getTldHandler().NEXUS,
        this.getTldHandler().RSVP,
        this.getTldHandler().PHD,
        this.getTldHandler().MOV,
        this.getTldHandler().HAIR,
        this.getTldHandler().SELECT,
        this.getTldHandler().GIVING,
        this.getTldHandler().PROF,
        this.getTldHandler().ESQ
    ];
    data: any[] = [];

    tldHandler: TopLevelDomain | undefined = undefined;

    async collect(): Promise<TopLevelDomainPricingInfo[]> {
        const axios = require('axios');
        let data = this.buildJsonBody();

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://www.spaceship.com/gateway/api/v1/pricing-bff/price/getPrices',
            headers: { 
                'Content-Type': 'application/json', 
                'Origin': 'https://www.spaceship.com'
            },
            data : data
        };

        const response = await axios(config);
        const responseData = response.data;

        let pricingInfos: TopLevelDomainPricingInfo[] = [];

        const products = responseData.products;
        const topLevelHandler = new TopLevelDomain();

        products.forEach((product: any) => {
            const tld = product.product.productSlug;
            const priceNew = product.prices[0].total.EUR.price.amount;
            const priceRenew = product.prices[1].total.EUR.price.amount;
            const transfer = priceRenew;

            pricingInfos.push({
                tld: topLevelHandler.getTLDInfo(tld) ?? topLevelHandler.COM,
                priceNew: priceNew,
                priceRenew: priceRenew,
                priceTransfer: transfer,
                registrar: this.name,
                registrarWebsite: this.website
            });
        });

        return pricingInfos;
    }

    buildJsonBody() {
        const body = {
            "currencies": [
                "EUR"
            ],
            "products": [
                {
                "priceTypes": [
                    "purchase",
                    "renewal"
                ],
                "product": {
                    "productSlug": "world",
                    "plan": {
                    "pricingPlanParams": {
                        "transfer": 0
                    },
                    "pricingPlanSlug": "regular",
                    "period": "P1Y"
                    }
                }
                }
            ],
            "includeFields": [
                "components",
                "modifiers",
                "params",
                "discount",
                "pricePerPeriod",
                "outputValues"
            ],
            "includeBasePrice": true
        };

        const bodyString = '{ "currencies": [ "EUR" ], "products": [';
        const bodyStringEnd = '], "includeFields": [ "components", "modifiers", "params", "discount", "pricePerPeriod", "outputValues" ], "includeBasePrice": true }';

        let bodyStringMiddle = '';

        this.tlds.forEach((tld, index) => {
            bodyStringMiddle += `{"priceTypes":["purchase","renewal"],"product":{"productSlug":"${tld.name}","plan":{"pricingPlanParams":{"transfer":0},"pricingPlanSlug":"regular","period":"P1Y"}}}`;
            if (index < this.tlds.length - 1) bodyStringMiddle += ',';
        });

        return bodyString + bodyStringMiddle + bodyStringEnd;
    }

    getTldHandler(): TopLevelDomain {
        if (!this.tldHandler) this.tldHandler = new TopLevelDomain();
        return this.tldHandler;
    }
}