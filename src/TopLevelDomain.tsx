type TopLevelDomainInfo = {
    name: string,
    description: string,
    public: boolean, // everyone can register
    category: TopLevelDomainCategory
}

enum TopLevelDomainCategory {
    GENERIC = 'generic',
    FUNCTIONAL = 'functional',
    FUN = 'fun',
    GEOGRAPHIC = 'geographic',
    INFRASTRUCTURE = 'infrastructure',
    SPONSORED = 'sponsored',
    GOVERNMENT = 'government',
    SEXUAL = 'sexual',
}

class TopLevelDomain {
    AAA: TopLevelDomainInfo = {
        name: 'aaa',
        description: 'American Automobile Association, Inc.',
        public: false,
        category: TopLevelDomainCategory.FUNCTIONAL,
    };
    AARP: TopLevelDomainInfo = {
        name: 'aarp',
        description: 'American Association of Retired Persons',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ABB: TopLevelDomainInfo = {
        name: 'abb',
        description: 'ABB Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ABBOTT: TopLevelDomainInfo = {
        name: 'abbott',
        description: 'Abbott Laboratories, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ABBVIE: TopLevelDomainInfo = {
        name: 'abbvie',
        description: 'AbbVie Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ABC: TopLevelDomainInfo = {
        name: 'abc',
        description: 'Disney Enterprises, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ABLE: TopLevelDomainInfo = {
        name: 'able',
        description: 'Able Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ABOGADO: TopLevelDomainInfo = {
        name: 'abogado',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ABUDHABI: TopLevelDomainInfo = {
        name: 'abudhabi',
        description: 'Abu Dhabi Systems and Information Centre',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AC: TopLevelDomainInfo = {
        name: 'ac',
        description: 'Ascension Island',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ACADEMY: TopLevelDomainInfo = {
        name: 'academy',
        description: 'Half Oaks, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ACCENTURE: TopLevelDomainInfo = {
        name: 'accenture',
        description: 'Accenture plc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ACCOUNTANT: TopLevelDomainInfo = {
        name: 'accountant',
        description: 'dot Accountant Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ACCOUNTANTS: TopLevelDomainInfo = {
        name: 'accountants',
        description: 'Knob Town, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ACO: TopLevelDomainInfo = {
        name: 'aco',
        description: 'ACO Severin Ahlmann GmbH & Co. KG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ACTOR: TopLevelDomainInfo = {
        name: 'actor',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AD: TopLevelDomainInfo = {
        name: 'ad',
        description: 'Andorra (Principality of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ADS: TopLevelDomainInfo = {
        name: 'ads',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ADULT: TopLevelDomainInfo = {
        name: 'adult',
        description: 'ICM Registry AD LLC',
        public: true,
        category: TopLevelDomainCategory.SEXUAL,
    };
    AE: TopLevelDomainInfo = {
        name: 'ae',
        description: 'United Arab Emirates',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AEG: TopLevelDomainInfo = {
        name: 'aeg',
        description: 'Aktiebolaget Electrolux',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AERO: TopLevelDomainInfo = {
        name: 'aero',
        description: 'Societe Internationale de Telecommunications Aeronautique (SITA INC USA)',
        public: false,
        category: TopLevelDomainCategory.INFRASTRUCTURE,
    };
    AETNA: TopLevelDomainInfo = {
        name: 'aetna',
        description: 'Aetna Life Insurance Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AF: TopLevelDomainInfo = {
        name: 'af',
        description: 'Afghanistan',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AFL: TopLevelDomainInfo = {
        name: 'afl',
        description: 'Australian Football League',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AFRICA: TopLevelDomainInfo = {
        name: 'africa',
        description: 'ZA Central Registry NPC trading as Registry.Africa',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AG: TopLevelDomainInfo = {
        name: 'ag',
        description: 'Antigua and Barbuda',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AGAKHAN: TopLevelDomainInfo = {
        name: 'agakhan',
        description: 'Fondation Aga Khan (Aga Khan Foundation)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AGENCY: TopLevelDomainInfo = {
        name: 'agency',
        description: 'Steel Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AI: TopLevelDomainInfo = {
        name: 'ai',
        description: 'Anguilla',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AIG: TopLevelDomainInfo = {
        name: 'aig',
        description: 'American International Group, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AIRBUS: TopLevelDomainInfo = {
        name: 'airbus',
        description: 'Airbus S.A.S.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AIRFORCE: TopLevelDomainInfo = {
        name: 'airforce',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AIRTEL: TopLevelDomainInfo = {
        name: 'airtel',
        description: 'Bharti Airtel Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AKDN: TopLevelDomainInfo = {
        name: 'akdn',
        description: 'Fondation Aga Khan (Aga Khan Foundation)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AL: TopLevelDomainInfo = {
        name: 'al',
        description: 'Albania',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ALIBABA: TopLevelDomainInfo = {
        name: 'alibaba',
        description: 'Alibaba Group Holding Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ALIPAY: TopLevelDomainInfo = {
        name: 'alipay',
        description: 'Alibaba Group Holding Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ALLFINANZ: TopLevelDomainInfo = {
        name: 'allfinanz',
        description: 'Allfinanz Deutsche Vermögensberatung Aktiengesellschaft',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ALLSTATE: TopLevelDomainInfo = {
        name: 'allstate',
        description: 'Allstate Fire and Casualty Insurance Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ALLY: TopLevelDomainInfo = {
        name: 'ally',
        description: 'Ally Financial Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ALSACE: TopLevelDomainInfo = {
        name: 'alsace',
        description: 'REGION D ALSACE',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ALSTOM: TopLevelDomainInfo = {
        name: 'alstom',
        description: 'ALSTOM',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AM: TopLevelDomainInfo = {
        name: 'am',
        description: 'Armenia',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AMAZON: TopLevelDomainInfo = {
        name: 'amazon',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AMERICANEXPRESS: TopLevelDomainInfo = {
        name: 'americanexpress',
        description: 'American Express Travel Related Services Company, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AMERICANFAMILY: TopLevelDomainInfo = {
        name: 'americanfamily',
        description: 'AmFam, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AMEX: TopLevelDomainInfo = {
        name: 'amex',
        description: 'American Express Travel Related Services Company, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AMFAM: TopLevelDomainInfo = {
        name: 'amfam',
        description: 'AmFam, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AMICA: TopLevelDomainInfo = {
        name: 'amica',
        description: 'Amica Mutual Insurance Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AMSTERDAM: TopLevelDomainInfo = {
        name: 'amsterdam',
        description: 'Gemeente Amsterdam',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ANALYTICS: TopLevelDomainInfo = {
        name: 'analytics',
        description: 'Campus IP LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ANDROID: TopLevelDomainInfo = {
        name: 'android',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ANQUAN: TopLevelDomainInfo = {
        name: 'anquan',
        description: 'QIHOO 360 TECHNOLOGY CO. LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ANZ: TopLevelDomainInfo = {
        name: 'anz',
        description: 'Australia and New Zealand Banking Group Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AO: TopLevelDomainInfo = {
        name: 'ao',
        description: 'Angola',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AOL: TopLevelDomainInfo = {
        name: 'aol',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    APARTMENTS: TopLevelDomainInfo = {
        name: 'apartments',
        description: 'June Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    APP: TopLevelDomainInfo = {
        name: 'app',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    APPLE: TopLevelDomainInfo = {
        name: 'apple',
        description: 'Apple Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AQ: TopLevelDomainInfo = {
        name: 'aq',
        description: 'Antarctica',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AQUARELLE: TopLevelDomainInfo = {
        name: 'aquarelle',
        description: 'Aquarelle.com',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AR: TopLevelDomainInfo = {
        name: 'ar',
        description: 'Argentina',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ARAB: TopLevelDomainInfo = {
        name: 'arab',
        description: 'League of Arab States',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ARAMCO: TopLevelDomainInfo = {
        name: 'aramco',
        description: 'Aramco Services Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ARCHI: TopLevelDomainInfo = {
        name: 'archi',
        description: 'STARTING DOT LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ARMY: TopLevelDomainInfo = {
        name: 'army',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ARPA: TopLevelDomainInfo = {
        name: 'arpa',
        description: 'Internet Architecture Board (IAB)',
        public: false,
        category: TopLevelDomainCategory.INFRASTRUCTURE,
    };
    ART: TopLevelDomainInfo = {
        name: 'art',
        description: 'UK Creative Ideas Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ARTE: TopLevelDomainInfo = {
        name: 'arte',
        description: 'Association Relative à la Télévision Européenne G.E.I.E.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AS: TopLevelDomainInfo = {
        name: 'as',
        description: 'American Samoa',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ASDA: TopLevelDomainInfo = {
        name: 'asda',
        description: 'Wal-Mart Stores, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ASIA: TopLevelDomainInfo = {
        name: 'asia',
        description: 'DotAsia Organisation Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ASSOCIATES: TopLevelDomainInfo = {
        name: 'associates',
        description: 'Baxter Hill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AT: TopLevelDomainInfo = {
        name: 'at',
        description: 'Austria',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ATHLETA: TopLevelDomainInfo = {
        name: 'athleta',
        description: 'The Gap, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ATTORNEY: TopLevelDomainInfo = {
        name: 'attorney',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AU: TopLevelDomainInfo = {
        name: 'au',
        description: 'Australia',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AUCTION: TopLevelDomainInfo = {
        name: 'auction',
        description: 'United TLD HoldCo, Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AUDI: TopLevelDomainInfo = {
        name: 'audi',
        description: 'AUDI Aktiengesellschaft',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AUDIBLE: TopLevelDomainInfo = {
        name: 'audible',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AUDIO: TopLevelDomainInfo = {
        name: 'audio',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AUSPOST: TopLevelDomainInfo = {
        name: 'auspost',
        description: 'Australian Postal Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AUTHOR: TopLevelDomainInfo = {
        name: 'author',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AUTO: TopLevelDomainInfo = {
        name: 'auto',
        description: 'Cars Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AUTOS: TopLevelDomainInfo = {
        name: 'autos',
        description: 'DERAutos, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AVIANCA: TopLevelDomainInfo = {
        name: 'avianca',
        description: 'Aerovias del Continente Americano S.A. Avianca',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AW: TopLevelDomainInfo = {
        name: 'aw',
        description: 'Aruba',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AWS: TopLevelDomainInfo = {
        name: 'aws',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AX: TopLevelDomainInfo = {
        name: 'ax',
        description: 'Åland Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AXA: TopLevelDomainInfo = {
        name: 'axa',
        description: 'AXA SA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    AZ: TopLevelDomainInfo = {
        name: 'az',
        description: 'Azerbaijan',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    AZURE: TopLevelDomainInfo = {
        name: 'azure',
        description: 'Microsoft Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BA: TopLevelDomainInfo = {
        name: 'ba',
        description: 'Bosnia and Herzegovina',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BABY: TopLevelDomainInfo = {
        name: 'baby',
        description: 'Johnson & Johnson Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BAIDU: TopLevelDomainInfo = {
        name: 'baidu',
        description: 'Baidu, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BANAMEX: TopLevelDomainInfo = {
        name: 'banamex',
        description: 'Citigroup Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BANANAREPUBLIC: TopLevelDomainInfo = {
        name: 'bananarepublic',
        description: 'The Gap, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BAND: TopLevelDomainInfo = {
        name: 'band',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BANK: TopLevelDomainInfo = {
        name: 'bank',
        description: 'fTLD Registry Services, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BAR: TopLevelDomainInfo = {
        name: 'bar',
        description: 'Punto 2012 Sociedad Anonima Promotora de Inversion de Capital Variable',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BARCELONA: TopLevelDomainInfo = {
        name: 'barcelona',
        description: 'Municipi de Barcelona',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BARCLAYCARD: TopLevelDomainInfo = {
        name: 'barclaycard',
        description: 'Barclays Bank PLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BARCLAYS: TopLevelDomainInfo = {
        name: 'barclays',
        description: 'Barclays Bank PLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BAREFOOT: TopLevelDomainInfo = {
        name: 'barefoot',
        description: 'Gallo Vineyards, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BARGAINS: TopLevelDomainInfo = {
        name: 'bargains',
        description: 'Half Hallow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BASEBALL: TopLevelDomainInfo = {
        name: 'baseball',
        description: 'MLB Advanced Media DH, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BASKETBALL: TopLevelDomainInfo = {
        name: 'basketball',
        description: 'Fédération Internationale de Basketball (FIBA)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BAUHAUS: TopLevelDomainInfo = {
        name: 'bauhaus',
        description: 'Werkhaus GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BAYERN: TopLevelDomainInfo = {
        name: 'bayern',
        description: 'Bayern Connect GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BB: TopLevelDomainInfo = {
        name: 'bb',
        description: 'Barbados',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BBC: TopLevelDomainInfo = {
        name: 'bbc',
        description: 'British Broadcasting Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BBT: TopLevelDomainInfo = {
        name: 'bbt',
        description: 'BB&T Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BBVA: TopLevelDomainInfo = {
        name: 'bbva',
        description: 'BANCO BILBAO VIZCAYA ARGENTARIA, S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BCG: TopLevelDomainInfo = {
        name: 'bcg',
        description: 'The Boston Consulting Group, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BCN: TopLevelDomainInfo = {
        name: 'bcn',
        description: 'Municipi de Barcelona',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BD: TopLevelDomainInfo = {
        name: 'bd',
        description: 'Bangladesh (People\'s Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BE: TopLevelDomainInfo = {
        name: 'be',
        description: 'Belgium',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BEATS: TopLevelDomainInfo = {
        name: 'beats',
        description: 'Beats Electronics, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BEAUTY: TopLevelDomainInfo = {
        name: 'beauty',
        description: 'L\'Oréal',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    BEER: TopLevelDomainInfo = {
        name: 'beer',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BENTLEY: TopLevelDomainInfo = {
        name: 'bentley',
        description: 'Bentley Motors Limited',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    BERLIN: TopLevelDomainInfo = {
        name: 'berlin',
        description: 'dotBERLIN GmbH & Co. KG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BEST: TopLevelDomainInfo = {
        name: 'best',
        description: 'BestTLD Pty Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BESTBUY: TopLevelDomainInfo = {
        name: 'bestbuy',
        description: 'BBY Solutions, Inc.',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    BET: TopLevelDomainInfo = {
        name: 'bet',
        description: 'Afilias plc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BF: TopLevelDomainInfo = {
        name: 'bf',
        description: 'Burkina Faso',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BG: TopLevelDomainInfo = {
        name: 'bg',
        description: 'Bulgaria',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BH: TopLevelDomainInfo = {
        name: 'bh',
        description: 'Bahrain (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BHARTI: TopLevelDomainInfo = {
        name: 'bharti',
        description: 'Bharti Enterprises (Holding) Private Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BI: TopLevelDomainInfo = {
        name: 'bi',
        description: 'Burundi (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BIBLE: TopLevelDomainInfo = {
        name: 'bible',
        description: 'American Bible Society',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BID: TopLevelDomainInfo = {
        name: 'bid',
        description: 'dot Bid Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BIKE: TopLevelDomainInfo = {
        name: 'bike',
        description: 'Grand Hollow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BING: TopLevelDomainInfo = {
        name: 'bing',
        description: 'Microsoft Corporation',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    BINGO: TopLevelDomainInfo = {
        name: 'bingo',
        description: 'Sand Cedar, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BIO: TopLevelDomainInfo = {
        name: 'bio',
        description: 'STARTING DOT LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BIZ: TopLevelDomainInfo = {
        name: 'biz',
        description: 'Business',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BJ: TopLevelDomainInfo = {
        name: 'bj',
        description: 'Benin (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BLACK: TopLevelDomainInfo = {
        name: 'black',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BLACKFRIDAY: TopLevelDomainInfo = {
        name: 'blackfriday',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BLOCKBUSTER: TopLevelDomainInfo = {
        name: 'blockbuster',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BLOG: TopLevelDomainInfo = {
        name: 'blog',
        description: 'Knock Knock WHOIS There, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BLOOMBERG: TopLevelDomainInfo = {
        name: 'bloomberg',
        description: 'Bloomberg IP Holdings LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BLUE: TopLevelDomainInfo = {
        name: 'blue',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BM: TopLevelDomainInfo = {
        name: 'bm',
        description: 'Bermuda',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BMS: TopLevelDomainInfo = {
        name: 'bms',
        description: 'Bristol-Myers Squibb Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BMW: TopLevelDomainInfo = {
        name: 'bmw',
        description: 'Bayerische Motoren Werke Aktiengesellschaft',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    BN: TopLevelDomainInfo = {
        name: 'bn',
        description: 'Brunei Darussalam',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BNPPARIBAS: TopLevelDomainInfo = {
        name: 'bnpparibas',
        description: 'BNP Paribas',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BO: TopLevelDomainInfo = {
        name: 'bo',
        description: 'Bolivia (Plurinational State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BOATS: TopLevelDomainInfo = {
        name: 'boats',
        description: 'DERBoats, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOEHRINGER: TopLevelDomainInfo = {
        name: 'boehringer',
        description: 'Boehringer Ingelheim International GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOFA: TopLevelDomainInfo = {
        name: 'bofa',
        description: 'Bank of America Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOM: TopLevelDomainInfo = {
        name: 'bom',
        description: 'Núcleo de Informação e Coordenação do Ponto BR - NIC.br',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOND: TopLevelDomainInfo = {
        name: 'bond',
        description: 'Bond University Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOO: TopLevelDomainInfo = {
        name: 'boo',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOOK: TopLevelDomainInfo = {
        name: 'book',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOOKING: TopLevelDomainInfo = {
        name: 'booking',
        description: 'Booking.com B.V.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOSCH: TopLevelDomainInfo = {
        name: 'bosch',
        description: 'Robert Bosch GMBH',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    BOSTIK: TopLevelDomainInfo = {
        name: 'bostik',
        description: 'Bostik SA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOSTON: TopLevelDomainInfo = {
        name: 'boston',
        description: 'Boston TLD Management, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOT: TopLevelDomainInfo = {
        name: 'bot',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOUTIQUE: TopLevelDomainInfo = {
        name: 'boutique',
        description: 'Over Galley, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BOX: TopLevelDomainInfo = {
        name: 'box',
        description: 'NS1 Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BR: TopLevelDomainInfo = {
        name: 'br',
        description: 'Brazil (Federative Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BRADESCO: TopLevelDomainInfo = {
        name: 'bradesco',
        description: 'Banco Bradesco S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BRIDGESTONE: TopLevelDomainInfo = {
        name: 'bridgestone',
        description: 'Bridgestone Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BROADWAY: TopLevelDomainInfo = {
        name: 'broadway',
        description: 'Celebrate Broadway, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BROKER: TopLevelDomainInfo = {
        name: 'broker',
        description: 'DOTBROKER REGISTRY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BROTHER: TopLevelDomainInfo = {
        name: 'brother',
        description: 'Brother Industries, Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BRUSSELS: TopLevelDomainInfo = {
        name: 'brussels',
        description: 'DNS.be vzw',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BS: TopLevelDomainInfo = {
        name: 'bs',
        description: 'Bahamas (Commonwealth of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BT: TopLevelDomainInfo = {
        name: 'bt',
        description: 'Bhutan (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BUILD: TopLevelDomainInfo = {
        name: 'build',
        description: 'Plan Bee LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BUILDERS: TopLevelDomainInfo = {
        name: 'builders',
        description: 'Atomic Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BUSINESS: TopLevelDomainInfo = {
        name: 'business',
        description: 'Spring Cross, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BUY: TopLevelDomainInfo = {
        name: 'buy',
        description: 'Amazon Registry Services, INC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BUZZ: TopLevelDomainInfo = {
        name: 'buzz',
        description: 'DOTSTRATEGY CO.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    BV: TopLevelDomainInfo = {
        name: 'bv',
        description: 'Bouvet Island',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BW: TopLevelDomainInfo = {
        name: 'bw',
        description: 'Botswana (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BY: TopLevelDomainInfo = {
        name: 'by',
        description: 'Belarus (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BZ: TopLevelDomainInfo = {
        name: 'bz',
        description: 'Belize',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    BZH: TopLevelDomainInfo = {
        name: 'bzh',
        description: 'Association www.bzh',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CA: TopLevelDomainInfo = {
        name: 'ca',
        description: 'Canada',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CAB: TopLevelDomainInfo = {
        name: 'cab',
        description: 'Half Sunset, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAFE: TopLevelDomainInfo = {
        name: 'cafe',
        description: 'Pioneer Canyon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAL: TopLevelDomainInfo = {
        name: 'cal',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CALL: TopLevelDomainInfo = {
        name: 'call',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CALVINKLEIN: TopLevelDomainInfo = {
        name: 'calvinklein',
        description: 'PVH gTLD Holdings LLC',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    CAM: TopLevelDomainInfo = {
        name: 'cam',
        description: 'AC Webconnecting Holding B.V.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAMERA: TopLevelDomainInfo = {
        name: 'camera',
        description: 'Atomic Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAMP: TopLevelDomainInfo = {
        name: 'camp',
        description: 'Delta Dynamite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CANON: TopLevelDomainInfo = {
        name: 'canon',
        description: 'Canon Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAPETOWN: TopLevelDomainInfo = {
        name: 'capetown',
        description: 'ZA Central Registry NPC trading as ZA Central Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAPITAL: TopLevelDomainInfo = {
        name: 'capital',
        description: 'Delta Mill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAPITALONE: TopLevelDomainInfo = {
        name: 'capitalone',
        description: 'Capital One Financial Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAR: TopLevelDomainInfo = {
        name: 'car',
        description: 'Cars Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CARAVAN: TopLevelDomainInfo = {
        name: 'caravan',
        description: 'Caravan International, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CARDS: TopLevelDomainInfo = {
        name: 'cards',
        description: 'Foggy Hollow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CARE: TopLevelDomainInfo = {
        name: 'care',
        description: 'Goose Cross',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAREER: TopLevelDomainInfo = {
        name: 'career',
        description: 'dotCareer LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAREERS: TopLevelDomainInfo = {
        name: 'careers',
        description: 'Wild Corner, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CARS: TopLevelDomainInfo = {
        name: 'cars',
        description: 'Cars Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CASA: TopLevelDomainInfo = {
        name: 'casa',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CASE: TopLevelDomainInfo = {
        name: 'case',
        description: 'CNH Industrial N.V.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CASH: TopLevelDomainInfo = {
        name: 'cash',
        description: 'Delta Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CASINO: TopLevelDomainInfo = {
        name: 'casino',
        description: 'Binky Sky, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CAT: TopLevelDomainInfo = {
        name: 'cat',
        description: 'Fundacio puntCAT',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CATERING: TopLevelDomainInfo = {
        name: 'catering',
        description: 'New Falls. LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CATHOLIC: TopLevelDomainInfo = {
        name: 'catholic',
        description: 'Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CBA: TopLevelDomainInfo = {
        name: 'cba',
        description: 'COMMONWEALTH BANK OF AUSTRALIA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CBN: TopLevelDomainInfo = {
        name: 'cbn',
        description: 'The Christian Broadcasting Network, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CBRE: TopLevelDomainInfo = {
        name: 'cbre',
        description: 'CBRE, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CC: TopLevelDomainInfo = {
        name: 'cc',
        description: 'Cocos (Keeling) Islands (Territory of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CD: TopLevelDomainInfo = {
        name: 'cd',
        description: 'Congo (Democratic Republic of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CENTER: TopLevelDomainInfo = {
        name: 'center',
        description: 'Tin Mill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CEO: TopLevelDomainInfo = {
        name: 'ceo',
        description: 'CEOTLD Pty Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CERN: TopLevelDomainInfo = {
        name: 'cern',
        description: 'European Organization for Nuclear Research ("CERN")',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CF: TopLevelDomainInfo = {
        name: 'cf',
        description: 'Central African Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CFA: TopLevelDomainInfo = {
        name: 'cfa',
        description: 'CFA Institute',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CFD: TopLevelDomainInfo = {
        name: 'cfd',
        description: 'DOTCFD REGISTRY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CG: TopLevelDomainInfo = {
        name: 'cg',
        description: 'Congo (Republic of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CH: TopLevelDomainInfo = {
        name: 'ch',
        description: 'Switzerland (Swiss Confederation)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CHANEL: TopLevelDomainInfo = {
        name: 'chanel',
        description: 'Chanel International B.V.',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    CHANNEL: TopLevelDomainInfo = {
        name: 'channel',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CHARITY: TopLevelDomainInfo = {
        name: 'charity',
        description: 'Corn Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CHASE: TopLevelDomainInfo = {
        name: 'chase',
        description: 'JPMorgan Chase Bank, National Association',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CHAT: TopLevelDomainInfo = {
        name: 'chat',
        description: 'Sand Fields, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CHEAP: TopLevelDomainInfo = {
        name: 'cheap',
        description: 'Sand Cover, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CHINTAI: TopLevelDomainInfo = {
        name: 'chintai',
        description: 'CHINTAI Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CHRISTMAS: TopLevelDomainInfo = {
        name: 'christmas',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CHROME: TopLevelDomainInfo = {
        name: 'chrome',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CHURCH: TopLevelDomainInfo = {
        name: 'church',
        description: 'Holly Fileds, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CI: TopLevelDomainInfo = {
        name: 'ci',
        description: 'Côte d\'Ivoire (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CIPRIANI: TopLevelDomainInfo = {
        name: 'cipriani',
        description: 'Hotel Cipriani Srl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CIRCLE: TopLevelDomainInfo = {
        name: 'circle',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CISCO: TopLevelDomainInfo = {
        name: 'cisco',
        description: 'Cisco Technology, Inc.',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    CITADEL: TopLevelDomainInfo = {
        name: 'citadel',
        description: 'Citadel Domain LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CITI: TopLevelDomainInfo = {
        name: 'citi',
        description: 'Citigroup Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CITIC: TopLevelDomainInfo = {
        name: 'citic',
        description: 'CITIC Group Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CITY: TopLevelDomainInfo = {
        name: 'city',
        description: 'Snow Sky, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CK: TopLevelDomainInfo = {
        name: 'ck',
        description: 'Cook Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CL: TopLevelDomainInfo = {
        name: 'cl',
        description: 'Chile (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CLAIMS: TopLevelDomainInfo = {
        name: 'claims',
        description: 'Black Corner, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CLEANING: TopLevelDomainInfo = {
        name: 'cleaning',
        description: 'Fox Shadow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CLICK: TopLevelDomainInfo = {
        name: 'click',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CLINIC: TopLevelDomainInfo = {
        name: 'clinic',
        description: 'Goose Park, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CLINIQUE: TopLevelDomainInfo = {
        name: 'clinique',
        description: 'The Estée Lauder Companies Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CLOTHING: TopLevelDomainInfo = {
        name: 'clothing',
        description: 'Steel Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CLOUD: TopLevelDomainInfo = {
        name: 'cloud',
        description: 'ARUBA PEC S.p.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CLUB: TopLevelDomainInfo = {
        name: 'club',
        description: 'CLUB DOMAINS, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CLUBMED: TopLevelDomainInfo = {
        name: 'clubmed',
        description: 'Club Méditerranée S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CM: TopLevelDomainInfo = {
        name: 'cm',
        description: 'Cameroon (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CN: TopLevelDomainInfo = {
        name: 'cn',
        description: 'China (People\'s Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CO: TopLevelDomainInfo = {
        name: 'co',
        description: 'Colombia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    COACH: TopLevelDomainInfo = {
        name: 'coach',
        description: 'Koko Island, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CODES: TopLevelDomainInfo = {
        name: 'codes',
        description: 'Puff Willow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COFFEE: TopLevelDomainInfo = {
        name: 'coffee',
        description: 'Trixy Cover, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COLLEGE: TopLevelDomainInfo = {
        name: 'college',
        description: 'XYZ.COM LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COLOGNE: TopLevelDomainInfo = {
        name: 'cologne',
        description: 'NetCologne Gesellschaft für Telekommunikation mbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COM: TopLevelDomainInfo = {
        name: 'com',
        description: 'Commercial',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COMCAST: TopLevelDomainInfo = {
        name: 'comcast',
        description: 'Comcast IP Holdings I, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COMMBANK: TopLevelDomainInfo = {
        name: 'commbank',
        description: 'COMMONWEALTH BANK OF AUSTRALIA',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    COMMUNITY: TopLevelDomainInfo = {
        name: 'community',
        description: 'Fox Orchard, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COMPANY: TopLevelDomainInfo = {
        name: 'company',
        description: 'Silver Avenue, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COMPARE: TopLevelDomainInfo = {
        name: 'compare',
        description: 'iSelect Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COMPUTER: TopLevelDomainInfo = {
        name: 'computer',
        description: 'Pine Mill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COMSEC: TopLevelDomainInfo = {
        name: 'comsec',
        description: 'VeriSign, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CONDOS: TopLevelDomainInfo = {
        name: 'condos',
        description: 'Pine House, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CONSTRUCTION: TopLevelDomainInfo = {
        name: 'construction',
        description: 'Fox Dynamite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CONSULTING: TopLevelDomainInfo = {
        name: 'consulting',
        description: 'United TLD Holdco, LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CONTACT: TopLevelDomainInfo = {
        name: 'contact',
        description: 'Top Level Spectrum, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CONTRACTORS: TopLevelDomainInfo = {
        name: 'contractors',
        description: 'Magic Woods, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COOKING: TopLevelDomainInfo = {
        name: 'cooking',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COOL: TopLevelDomainInfo = {
        name: 'cool',
        description: 'Koko Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.FUN,
    };
    COOP: TopLevelDomainInfo = {
        name: 'coop',
        description: 'Cooperatives',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    CORSICA: TopLevelDomainInfo = {
        name: 'corsica',
        description: 'Collectivité Territoriale de Corse',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COUNTRY: TopLevelDomainInfo = {
        name: 'country',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COUPON: TopLevelDomainInfo = {
        name: 'coupon',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COUPONS: TopLevelDomainInfo = {
        name: 'coupons',
        description: 'Black Island, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    COURSES: TopLevelDomainInfo = {
        name: 'courses',
        description: 'OPEN UNIVERSITIES AUSTRALIA PTY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CPA: TopLevelDomainInfo = {
        name: 'cpa',
        description: 'American Institute of Certified Public Accountants',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    CR: TopLevelDomainInfo = {
        name: 'cr',
        description: 'Costa Rica (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CREDIT: TopLevelDomainInfo = {
        name: 'credit',
        description: 'Snow Shadow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CREDITCARD: TopLevelDomainInfo = {
        name: 'creditcard',
        description: 'Binky Frostbite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CREDITUNION: TopLevelDomainInfo = {
        name: 'creditunion',
        description: 'CUNA Performance Resources, LLC',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    CRICKET: TopLevelDomainInfo = {
        name: 'cricket',
        description: 'dot Cricket Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CROWN: TopLevelDomainInfo = {
        name: 'crown',
        description: 'Crown Equipment Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CRS: TopLevelDomainInfo = {
        name: 'crs',
        description: 'Federated Co-operatives Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CRUISE: TopLevelDomainInfo = {
        name: 'cruise',
        description: 'Viking River Cruises (Bermuda) Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CRUISES: TopLevelDomainInfo = {
        name: 'cruises',
        description: 'Spring Way, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CU: TopLevelDomainInfo = {
        name: 'cu',
        description: 'Cuba (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CUISINELLA: TopLevelDomainInfo = {
        name: 'cuisinella',
        description: 'SALM S.A.S.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CV: TopLevelDomainInfo = {
        name: 'cv',
        description: 'Cabo Verde (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CW: TopLevelDomainInfo = {
        name: 'cw',
        description: 'Curaçao (Country of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CX: TopLevelDomainInfo = {
        name: 'cx',
        description: 'Christmas Island (Territory of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CY: TopLevelDomainInfo = {
        name: 'cy',
        description: 'Cyprus (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    CYMRU: TopLevelDomainInfo = {
        name: 'cymru',
        description: 'Nominet UK',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CYOU: TopLevelDomainInfo = {
        name: 'cyou',
        description: 'Beijing Gamease Age Digital Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    CZ: TopLevelDomainInfo = {
        name: 'cz',
        description: 'Czech Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    DABUR: TopLevelDomainInfo = {
        name: 'dabur',
        description: 'Dabur India Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DAD: TopLevelDomainInfo = {
        name: 'dad',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DANCE: TopLevelDomainInfo = {
        name: 'dance',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.FUN,
    };
    DATA: TopLevelDomainInfo = {
        name: 'data',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DATE: TopLevelDomainInfo = {
        name: 'date',
        description: 'dot Date Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DATING: TopLevelDomainInfo = {
        name: 'dating',
        description: 'Pine Fest, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DATSUN: TopLevelDomainInfo = {
        name: 'datsun',
        description: 'NISSAN MOTOR CO., LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DAY: TopLevelDomainInfo = {
        name: 'day',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DCLK: TopLevelDomainInfo = {
        name: 'dclk',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DDS: TopLevelDomainInfo = {
        name: 'dds',
        description: 'Minds + Machines Group Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DE: TopLevelDomainInfo = {
        name: 'de',
        description: 'Germany (Federal Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    DEAL: TopLevelDomainInfo = {
        name: 'deal',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DEALER: TopLevelDomainInfo = {
        name: 'dealer',
        description: 'Dealer Dot Com, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DEALS: TopLevelDomainInfo = {
        name: 'deals',
        description: 'Sand Sunset, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DEGREE: TopLevelDomainInfo = {
        name: 'degree',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DELIVERY: TopLevelDomainInfo = {
        name: 'delivery',
        description: 'Steel Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DELL: TopLevelDomainInfo = {
        name: 'dell',
        description: 'Dell Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    DELOITTE: TopLevelDomainInfo = {
        name: 'deloitte',
        description: 'Deloitte Touche Tohmatsu',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    DELTA: TopLevelDomainInfo = {
        name: 'delta',
        description: 'Delta Air Lines, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    DEMOCRAT: TopLevelDomainInfo = {
        name: 'democrat',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DENTAL: TopLevelDomainInfo = {
        name: 'dental',
        description: 'Steel Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DENTIST: TopLevelDomainInfo = {
        name: 'dentist',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DESI: TopLevelDomainInfo = {
        name: 'desi',
        description: 'Desi Networks LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DESIGN: TopLevelDomainInfo = {
        name: 'design',
        description: 'Top Level Design, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DEV: TopLevelDomainInfo = {
        name: 'dev',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DHL: TopLevelDomainInfo = {
        name: 'dhl',
        description: 'Deutsche Post AG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    DIAMONDS: TopLevelDomainInfo = {
        name: 'diamonds',
        description: 'John Edge, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DIET: TopLevelDomainInfo = {
        name: 'diet',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DIGITAL: TopLevelDomainInfo = {
        name: 'digital',
        description: 'Dash Park, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DIRECT: TopLevelDomainInfo = {
        name: 'direct',
        description: 'Half Trail, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DIRECTORY: TopLevelDomainInfo = {
        name: 'directory',
        description: 'Extra Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DISCOUNT: TopLevelDomainInfo = {
        name: 'discount',
        description: 'Holly Hill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DISCOVER: TopLevelDomainInfo = {
        name: 'discover',
        description: 'Discover Financial Services',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DISH: TopLevelDomainInfo = {
        name: 'dish',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DIY: TopLevelDomainInfo = {
        name: 'diy',
        description: 'Lifestyle Domain Holdings, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DJ: TopLevelDomainInfo = {
        name: 'dj',
        description: 'Djibouti (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    DK: TopLevelDomainInfo = {
        name: 'dk',
        description: 'Denmark (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    DM: TopLevelDomainInfo = {
        name: 'dm',
        description: 'Dominica (Commonwealth of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    DNP: TopLevelDomainInfo = {
        name: 'dnp',
        description: 'Dai Nippon Printing Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DO: TopLevelDomainInfo = {
        name: 'do',
        description: 'Dominican Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    DOCS: TopLevelDomainInfo = {
        name: 'docs',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DOCTOR: TopLevelDomainInfo = {
        name: 'doctor',
        description: 'Brice Trail, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DOG: TopLevelDomainInfo = {
        name: 'dog',
        description: 'Koko Mill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DOMAINS: TopLevelDomainInfo = {
        name: 'domains',
        description: 'Sugar Cross, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DOT: TopLevelDomainInfo = {
        name: 'dot',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DOWNLOAD: TopLevelDomainInfo = {
        name: 'download',
        description: 'dot Support Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DRIVE: TopLevelDomainInfo = {
        name: 'drive',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DTV: TopLevelDomainInfo = {
        name: 'dtv',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DUBAI: TopLevelDomainInfo = {
        name: 'dubai',
        description: 'Dubai Smart Government Department',
        public: false,
        category: TopLevelDomainCategory.GENERIC,
    };
    DUNLOP: TopLevelDomainInfo = {
        name: 'dunlop',
        description: 'The Goodyear Tire & Rubber Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DUPONT: TopLevelDomainInfo = {
        name: 'dupont',
        description: 'E. I. du Pont de Nemours and Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DURBAN: TopLevelDomainInfo = {
        name: 'durban',
        description: 'ZA Central Registry NPC trading as ZA Central Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DVAG: TopLevelDomainInfo = {
        name: 'dvag',
        description: 'Deutsche Vermögensberatung Aktiengesellschaft DVAG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DVR: TopLevelDomainInfo = {
        name: 'dvr',
        description: 'Hughes Satellite Systems Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    DZ: TopLevelDomainInfo = {
        name: 'dz',
        description: 'Algeria (People\'s Democratic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    EARTH: TopLevelDomainInfo = {
        name: 'earth',
        description: 'Interlink Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EAT: TopLevelDomainInfo = {
        name: 'eat',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EC: TopLevelDomainInfo = {
        name: 'ec',
        description: 'Ecuador (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ECO: TopLevelDomainInfo = {
        name: 'eco',
        description: 'Big Room Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EDEKA: TopLevelDomainInfo = {
        name: 'edeka',
        description: 'EDEKA Verband kaufmännischer Genossenschaften e.V.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    EDU: TopLevelDomainInfo = {
        name: 'edu',
        description: 'Educational',
        public: false,
        category: TopLevelDomainCategory.GENERIC,
    };
    EDUCATION: TopLevelDomainInfo = {
        name: 'education',
        description: 'Brice Way, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EE: TopLevelDomainInfo = {
        name: 'ee',
        description: 'Estonia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    EG: TopLevelDomainInfo = {
        name: 'eg',
        description: 'Egypt (Arab Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    EMAIL: TopLevelDomainInfo = {
        name: 'email',
        description: 'Spring Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EMERCK: TopLevelDomainInfo = {
        name: 'emerck',
        description: 'Merck KGaA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ENERGY: TopLevelDomainInfo = {
        name: 'energy',
        description: 'Binky Birch, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ENGINEER: TopLevelDomainInfo = {
        name: 'engineer',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ENGINEERING: TopLevelDomainInfo = {
        name: 'engineering',
        description: 'Romeo Canyon',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ENTERPRISES: TopLevelDomainInfo = {
        name: 'enterprises',
        description: 'Snow Oaks, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EPSON: TopLevelDomainInfo = {
        name: 'epson',
        description: 'Seiko Epson Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    EQUIPMENT: TopLevelDomainInfo = {
        name: 'equipment',
        description: 'Corn Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ER: TopLevelDomainInfo = {
        name: 'er',
        description: 'Eritrea (State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ERICSSON: TopLevelDomainInfo = {
        name: 'ericsson',
        description: 'Telefonaktiebolaget L M Ericsson',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ERNI: TopLevelDomainInfo = {
        name: 'erni',
        description: 'ERNI Group Holding AG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ES: TopLevelDomainInfo = {
        name: 'es',
        description: 'Spain (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ESQ: TopLevelDomainInfo = {
        name: 'esq',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ESTATE: TopLevelDomainInfo = {
        name: 'estate',
        description: 'Trixy Park, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ET: TopLevelDomainInfo = {
        name: 'et',
        description: 'Ethiopia (Federal Democratic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ETISALAT: TopLevelDomainInfo = {
        name: 'etisalat',
        description: 'Emirates Telecommunications Corporation (trading as Etisalat)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    EU: TopLevelDomainInfo = {
        name: 'eu',
        description: 'European Union',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    EUROVISION: TopLevelDomainInfo = {
        name: 'eurovision',
        description: 'European Broadcasting Union (EBU)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    EUS: TopLevelDomainInfo = {
        name: 'eus',
        description: 'Puntueus Fundazioa',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EVENTS: TopLevelDomainInfo = {
        name: 'events',
        description: 'Pioneer Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EXCHANGE: TopLevelDomainInfo = {
        name: 'exchange',
        description: 'Spring Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EXPERT: TopLevelDomainInfo = {
        name: 'expert',
        description: 'Magic Pass, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EXPOSED: TopLevelDomainInfo = {
        name: 'exposed',
        description: 'Victor Beach, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EXPRESS: TopLevelDomainInfo = {
        name: 'express',
        description: 'Binky Moon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    EXTRASPACE: TopLevelDomainInfo = {
        name: 'extraspace',
        description: 'Extra Space Storage LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FAGE: TopLevelDomainInfo = {
        name: 'fage',
        description: 'Fage International S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FAIL: TopLevelDomainInfo = {
        name: 'fail',
        description: 'Atomic Pipe, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FAIRWINDS: TopLevelDomainInfo = {
        name: 'fairwinds',
        description: 'FairWinds Partners, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    FAITH: TopLevelDomainInfo = {
        name: 'faith',
        description: 'dot Faith Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FAMILY: TopLevelDomainInfo = {
        name: 'family',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FAN: TopLevelDomainInfo = {
        name: 'fan',
        description: 'Asiamix Digital Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FANS: TopLevelDomainInfo = {
        name: 'fans',
        description: 'Asiamix Digital Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FARM: TopLevelDomainInfo = {
        name: 'farm',
        description: 'Just Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FARMERS: TopLevelDomainInfo = {
        name: 'farmers',
        description: 'Farmers Insurance Exchange',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FASHION: TopLevelDomainInfo = {
        name: 'fashion',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FAST: TopLevelDomainInfo = {
        name: 'fast',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FEDEX: TopLevelDomainInfo = {
        name: 'fedex',
        description: 'Federal Express Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    FEEDBACK: TopLevelDomainInfo = {
        name: 'feedback',
        description: 'Top Level Spectrum, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FERRARI: TopLevelDomainInfo = {
        name: 'ferrari',
        description: 'Fiat Chrysler Automobiles N.V.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    FERRERO: TopLevelDomainInfo = {
        name: 'ferrero',
        description: 'Ferrero Trading Lux S.A.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    FI: TopLevelDomainInfo = {
        name: 'fi',
        description: 'Finland (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    FIDELITY: TopLevelDomainInfo = {
        name: 'fidelity',
        description: 'Fidelity Brokerage Services LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FIDO: TopLevelDomainInfo = {
        name: 'fido',
        description: 'Rogers Communications Canada Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FILM: TopLevelDomainInfo = {
        name: 'film',
        description: 'Motion Picture Domain Registry Pty Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FINAL: TopLevelDomainInfo = {
        name: 'final',
        description: 'Núcleo de Informação e Coordenação do Ponto BR - NIC.br',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FINANCE: TopLevelDomainInfo = {
        name: 'finance',
        description: 'Cotton Cypress, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FINANCIAL: TopLevelDomainInfo = {
        name: 'financial',
        description: 'Just Cover, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FIRE: TopLevelDomainInfo = {
        name: 'fire',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FIRESTONE: TopLevelDomainInfo = {
        name: 'firestone',
        description: 'Bridgestone Licensing Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FIRMDALE: TopLevelDomainInfo = {
        name: 'firmdale',
        description: 'Firmdale Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FISH: TopLevelDomainInfo = {
        name: 'fish',
        description: 'Fox Woods, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FISHING: TopLevelDomainInfo = {
        name: 'fishing',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FIT: TopLevelDomainInfo = {
        name: 'fit',
        description: 'Minds + Machines Group Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FITNESS: TopLevelDomainInfo = {
        name: 'fitness',
        description: 'Brice Orchard, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FJ: TopLevelDomainInfo = {
        name: 'fj',
        description: 'Fiji (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    FK: TopLevelDomainInfo = {
        name: 'fk',
        description: 'Falkland Islands (Malvinas)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    FLICKR: TopLevelDomainInfo = {
        name: 'flickr',
        description: 'Yahoo! Domain Services Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FLIGHTS: TopLevelDomainInfo = {
        name: 'flights',
        description: 'Fox Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FLIR: TopLevelDomainInfo = {
        name: 'flir',
        description: 'FLIR Systems, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FLORIST: TopLevelDomainInfo = {
        name: 'florist',
        description: 'Half Cypress, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FLOWERS: TopLevelDomainInfo = {
        name: 'flowers',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FLY: TopLevelDomainInfo = {
        name: 'fly',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FM: TopLevelDomainInfo = {
        name: 'fm',
        description: 'Micronesia (Federated States of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    FO: TopLevelDomainInfo = {
        name: 'fo',
        description: 'Faroe Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    FOO: TopLevelDomainInfo = {
        name: 'foo',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FOOD: TopLevelDomainInfo = {
        name: 'food',
        description: 'Lifestyle Domain Holdings, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FOOTBALL: TopLevelDomainInfo = {
        name: 'football',
        description: 'Foggy Farms, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FORD: TopLevelDomainInfo = {
        name: 'ford',
        description: 'Ford Motor Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    FOREX: TopLevelDomainInfo = {
        name: 'forex',
        description: 'DOTFOREX REGISTRY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FORSALE: TopLevelDomainInfo = {
        name: 'forsale',
        description: 'United TLD Holdco, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FORUM: TopLevelDomainInfo = {
        name: 'forum',
        description: 'Fegistry, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FOUNDATION: TopLevelDomainInfo = {
        name: 'foundation',
        description: 'John Dale, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FOX: TopLevelDomainInfo = {
        name: 'fox',
        description: 'FOX Registry, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    FR: TopLevelDomainInfo = {
        name: 'fr',
        description: 'France (French Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    FREE: TopLevelDomainInfo = {
        name: 'free',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FRESENIUS: TopLevelDomainInfo = {
        name: 'fresenius',
        description: 'Fresenius Immobilien-Verwaltungs-GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FRL: TopLevelDomainInfo = {
        name: 'frl',
        description: 'FRLregistry B.V.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FROGANS: TopLevelDomainInfo = {
        name: 'frogans',
        description: 'OP3FT',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FRONTIER: TopLevelDomainInfo = {
        name: 'frontier',
        description: 'Frontier Communications Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    FTR: TopLevelDomainInfo = {
        name: 'ftr',
        description: 'Frontier Communications Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    FUJITSU: TopLevelDomainInfo = {
        name: 'fujitsu',
        description: 'Fujitsu Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    FUN: TopLevelDomainInfo = {
        name: 'fun',
        description: 'DotSpace, Inc.',
        public: true,
        category: TopLevelDomainCategory.FUN,
    };
    FUND: TopLevelDomainInfo = {
        name: 'fund',
        description: 'John Castle, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FURNITURE: TopLevelDomainInfo = {
        name: 'furniture',
        description: 'Lone Fields, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FUTBOL: TopLevelDomainInfo = {
        name: 'futbol',
        description: 'United TLD Holdco, Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    FYI: TopLevelDomainInfo = {
        name: 'fyi',
        description: 'Silver Tigers, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GA: TopLevelDomainInfo = {
        name: 'ga',
        description: 'Gabonese Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GAL: TopLevelDomainInfo = {
        name: 'gal',
        description: 'Asociación puntoGAL',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GALLERY: TopLevelDomainInfo = {
        name: 'gallery',
        description: 'Sugar House, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GALLO: TopLevelDomainInfo = {
        name: 'gallo',
        description: 'Gallo Vineyards, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GALLUP: TopLevelDomainInfo = {
        name: 'gallup',
        description: 'Gallup, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GAME: TopLevelDomainInfo = {
        name: 'game',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GAMES: TopLevelDomainInfo = {
        name: 'games',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GAP: TopLevelDomainInfo = {
        name: 'gap',
        description: 'The Gap, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    GARDEN: TopLevelDomainInfo = {
        name: 'garden',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GAY: TopLevelDomainInfo = {
        name: 'gay',
        description: 'Top Level Design, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GB: TopLevelDomainInfo = {
        name: 'gb',
        description: 'United Kingdom of Great Britain and Northern Ireland',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GBIZ: TopLevelDomainInfo = {
        name: 'gbiz',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GD: TopLevelDomainInfo = {
        name: 'gd',
        description: 'Grenada',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GDN: TopLevelDomainInfo = {
        name: 'gdn',
        description: 'Joint Stock Company "Navigation-information systems"',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GE: TopLevelDomainInfo = {
        name: 'ge',
        description: 'Georgia',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GEA: TopLevelDomainInfo = {
        name: 'gea',
        description: 'GEA Group Aktiengesellschaft',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GENT: TopLevelDomainInfo = {
        name: 'gent',
        description: 'Combell nv',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GENTING: TopLevelDomainInfo = {
        name: 'genting',
        description: 'Resorts World Inc. Pte. Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GEORGE: TopLevelDomainInfo = {
        name: 'george',
        description: 'Wal-Mart Stores, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GF: TopLevelDomainInfo = {
        name: 'gf',
        description: 'French Guiana (French Department of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GG: TopLevelDomainInfo = {
        name: 'gg',
        description: 'Guernsey (Bailiwick of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GGEE: TopLevelDomainInfo = {
        name: 'gee',
        description: 'Lifestyle Domain Holdings, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GH: TopLevelDomainInfo = {
        name: 'gh',
        description: 'Ghana (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GI: TopLevelDomainInfo = {
        name: 'gi',
        description: 'Gibraltar',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GIFT: TopLevelDomainInfo = {
        name: 'gift',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GIFTS: TopLevelDomainInfo = {
        name: 'gifts',
        description: 'Goose Sky, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GIVES: TopLevelDomainInfo = {
        name: 'gives',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GIVING: TopLevelDomainInfo = {
        name: 'giving',
        description: 'Giving Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GL: TopLevelDomainInfo = {
        name: 'gl',
        description: 'Greenland',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GLASS: TopLevelDomainInfo = {
        name: 'glass',
        description: 'Black Cover, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GLE: TopLevelDomainInfo = {
        name: 'gle',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GLOBAL: TopLevelDomainInfo = {
        name: 'global',
        description: 'Dot Global Domain Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GLOBO: TopLevelDomainInfo = {
        name: 'globo',
        description: 'Globo Comunicação e Participações S.A',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    GM: TopLevelDomainInfo = {
        name: 'gm',
        description: 'Gambia (Republic of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GMAIL: TopLevelDomainInfo = {
        name: 'gmail',
        description: 'Charleston Road Registry Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    GMBH: TopLevelDomainInfo = {
        name: 'gmbh',
        description: 'Extra Dynamite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GMO: TopLevelDomainInfo = {
        name: 'gmo',
        description: 'GMO Internet, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GMX: TopLevelDomainInfo = {
        name: 'gmx',
        description: '1&1 Mail & Media GmbH',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    GN: TopLevelDomainInfo = {
        name: 'gn',
        description: 'Guinea (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GODADDY: TopLevelDomainInfo = {
        name: 'godaddy',
        description: 'Go Daddy East, LLC',
        public: false,
        category: TopLevelDomainCategory.GENERIC,
    };
    GOLD: TopLevelDomainInfo = {
        name: 'gold',
        description: 'June Edge, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GOLDPOINT: TopLevelDomainInfo = {
        name: 'goldpoint',
        description: 'YODOBASHI CAMERA CO.,LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GOLF: TopLevelDomainInfo = {
        name: 'golf',
        description: 'Lone Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GOO: TopLevelDomainInfo = {
        name: 'goo',
        description: 'NTT Resonant Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GOODYEAR: TopLevelDomainInfo = {
        name: 'goodyear',
        description: 'The Goodyear Tire & Rubber Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GOOG: TopLevelDomainInfo = {
        name: 'goog',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GOOGLE: TopLevelDomainInfo = {
        name: 'google',
        description: 'Charleston Road Registry Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    GOP: TopLevelDomainInfo = {
        name: 'gop',
        description: 'Republican State Leadership Committee, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GOT: TopLevelDomainInfo = {
        name: 'got',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GOV: TopLevelDomainInfo = {
        name: 'gov',
        description: 'U.S. national government agencies',
        public: false,
        category: TopLevelDomainCategory.GOVERNMENT,
    };
    GP: TopLevelDomainInfo = {
        name: 'gp',
        description: 'Guadeloupe (French Department of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GQ: TopLevelDomainInfo = {
        name: 'gq',
        description: 'Equatorial Guinea (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GR: TopLevelDomainInfo = {
        name: 'gr',
        description: 'Greece (Hellenic Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GRAINGER: TopLevelDomainInfo = {
        name: 'grainger',
        description: 'Grainger Registry Services, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GRAPHICS: TopLevelDomainInfo = {
        name: 'graphics',
        description: 'Over Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GRATIS: TopLevelDomainInfo = {
        name: 'gratis',
        description: 'Pioneer Tigers, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GREEN: TopLevelDomainInfo = {
        name: 'green',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GRIPE: TopLevelDomainInfo = {
        name: 'gripe',
        description: 'Corn Sunset, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GROCERY: TopLevelDomainInfo = {
        name: 'grocery',
        description: 'Wal-Mart Stores, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GROUP: TopLevelDomainInfo = {
        name: 'group',
        description: 'Romeo Town, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GS: TopLevelDomainInfo = {
        name: 'gs',
        description: 'South Georgia and the South Sandwich Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GT: TopLevelDomainInfo = {
        name: 'gt',
        description: 'Guatemala (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GU: TopLevelDomainInfo = {
        name: 'gu',
        description: 'Guam',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GUARDIAN: TopLevelDomainInfo = {
        name: 'guardian',
        description: 'The Guardian Life Insurance Company of America',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    GUCCI: TopLevelDomainInfo = {
        name: 'gucci',
        description: 'Guccio Gucci S.p.a.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    GUGE: TopLevelDomainInfo = {
        name: 'guge',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GUIDE: TopLevelDomainInfo = {
        name: 'guide',
        description: 'Snow Moon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GUITARS: TopLevelDomainInfo = {
        name: 'guitars',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GURU: TopLevelDomainInfo = {
        name: 'guru',
        description: 'Pioneer Cypress, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    GW: TopLevelDomainInfo = {
        name: 'gw',
        description: 'Guinea-Bissau (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    GY: TopLevelDomainInfo = {
        name: 'gy',
        description: 'Guyana (Co-operative Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    HAIR: TopLevelDomainInfo = {
        name: 'hair',
        description: 'L\'Oreal',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HAMBURG: TopLevelDomainInfo = {
        name: 'hamburg',
        description: 'Hamburg Top-Level-Domain GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HANGOUT: TopLevelDomainInfo = {
        name: 'hangout',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HAUS: TopLevelDomainInfo = {
        name: 'haus',
        description: 'United TLD Holdco, LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HBO: TopLevelDomainInfo = {
        name: 'hbo',
        description: 'HBO Registry Services, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HDFC: TopLevelDomainInfo = {
        name: 'hdfc',
        description: 'HOUSING DEVELOPMENT FINANCE CORPORATION LIMITED',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HDFCBANK: TopLevelDomainInfo = {
        name: 'hdfcbank',
        description: 'HDFC Bank Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HEALTH: TopLevelDomainInfo = {
        name: 'health',
        description: 'DotHealth, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HEALTHCARE: TopLevelDomainInfo = {
        name: 'healthcare',
        description: 'Silver Glen, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HELP: TopLevelDomainInfo = {
        name: 'help',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HELSINKI: TopLevelDomainInfo = {
        name: 'helsinki',
        description: 'City of Helsinki',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HERE: TopLevelDomainInfo = {
        name: 'here',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HERMES: TopLevelDomainInfo = {
        name: 'hermes',
        description: 'Hermes International',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HIPHOP: TopLevelDomainInfo = {
        name: 'hiphop',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HISAMITSU: TopLevelDomainInfo = {
        name: 'hisamitsu',
        description: 'Hisamitsu Pharmaceutical Co.,Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HITACHI: TopLevelDomainInfo = {
        name: 'hitachi',
        description: 'Hitachi, Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HIV: TopLevelDomainInfo = {
        name: 'hiv',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HK: TopLevelDomainInfo = {
        name: 'hk',
        description: 'Hong Kong (Hong Kong Special Administrative Region of the People\'s Republic of China)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    HKT: TopLevelDomainInfo = {
        name: 'hkt',
        description: 'PCCW-HKT DataCom Services Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HM: TopLevelDomainInfo = {
        name: 'hm',
        description: 'Heard and McDonald Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    HN: TopLevelDomainInfo = {
        name: 'hn',
        description: 'Honduras (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    HOCKEY: TopLevelDomainInfo = {
        name: 'hockey',
        description: 'Half Willow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOLDINGS: TopLevelDomainInfo = {
        name: 'holdings',
        description: 'John Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOLIDAY: TopLevelDomainInfo = {
        name: 'holiday',
        description: 'Goose Woods, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOMEDEPOT: TopLevelDomainInfo = {
        name: 'homedepot',
        description: 'Home Depot Product Authority, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HOMEGOODS: TopLevelDomainInfo = {
        name: 'homegoods',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HOMES: TopLevelDomainInfo = {
        name: 'homes',
        description: 'DERHomes, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOMESENSE: TopLevelDomainInfo = {
        name: 'homesense',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HONDA: TopLevelDomainInfo = {
        name: 'honda',
        description: 'Honda Motor Co., Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HORSE: TopLevelDomainInfo = {
        name: 'horse',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOSPITAL: TopLevelDomainInfo = {
        name: 'hospital',
        description: 'Ruby Pike, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOST: TopLevelDomainInfo = {
        name: 'host',
        description: 'DotHost Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOSTING: TopLevelDomainInfo = {
        name: 'hosting',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOT: TopLevelDomainInfo = {
        name: 'hot',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.SEXUAL,
    };
    HOTELS: TopLevelDomainInfo = {
        name: 'hotels',
        description: 'Booking.com B.V.',
        public: false,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOTMAIL: TopLevelDomainInfo = {
        name: 'hotmail',
        description: 'Microsoft Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HOUSE: TopLevelDomainInfo = {
        name: 'house',
        description: 'Sugar Park, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HOW: TopLevelDomainInfo = {
        name: 'how',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    HR: TopLevelDomainInfo = {
        name: 'hr',
        description: 'Croatia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    HSBC: TopLevelDomainInfo = {
        name: 'hsbc',
        description: 'HSBC Global Services (UK) Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HT: TopLevelDomainInfo = {
        name: 'ht',
        description: 'Haiti (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    HU: TopLevelDomainInfo = {
        name: 'hu',
        description: 'Hungary (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    HUGHES: TopLevelDomainInfo = {
        name: 'hughes',
        description: 'Hughes Satellite Systems Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HYATT: TopLevelDomainInfo = {
        name: 'hyatt',
        description: 'Hyatt GTLD, L.L.C.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    HYUNDAI: TopLevelDomainInfo = {
        name: 'hyundai',
        description: 'Hyundai Motor Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    IBM: TopLevelDomainInfo = {
        name: 'ibm',
        description: 'International Business Machines Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ICBC: TopLevelDomainInfo = {
        name: 'icbc',
        description: 'Industrial and Commercial Bank of China Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ICE: TopLevelDomainInfo = {
        name: 'ice',
        description: 'IntercontinentalExchange, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ICU: TopLevelDomainInfo = {
        name: 'icu',
        description: 'One.com A/S',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ID: TopLevelDomainInfo = {
        name: 'id',
        description: 'Indonesia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    IE: TopLevelDomainInfo = {
        name: 'ie',
        description: 'Ireland',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    IEEE: TopLevelDomainInfo = {
        name: 'ieee',
        description: 'IEEE Global LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    IFM: TopLevelDomainInfo = {
        name: 'ifm',
        description: 'ifm electronic gmbh',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IKANO: TopLevelDomainInfo = {
        name: 'ikano',
        description: 'Ikano S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IL: TopLevelDomainInfo = {
        name: 'il',
        description: 'Israel (State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    IM: TopLevelDomainInfo = {
        name: 'im',
        description: 'Isle of Man',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    IMAMAT: TopLevelDomainInfo = {
        name: 'imamat',
        description: 'Fondation Aga Khan (Aga Khan Foundation)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IMDB: TopLevelDomainInfo = {
        name: 'imdb',
        description: 'Amazon Registry Services, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    IMMO: TopLevelDomainInfo = {
        name: 'immo',
        description: 'Auburn Bloom, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IMMOBILIEN: TopLevelDomainInfo = {
        name: 'immobilien',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IN: TopLevelDomainInfo = {
        name: 'in',
        description: 'India (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    INC: TopLevelDomainInfo = {
        name: 'inc',
        description: 'Intercap Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    INDUSTRIES: TopLevelDomainInfo = {
        name: 'industries',
        description: 'Outer House, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    INFINITI: TopLevelDomainInfo = {
        name: 'infiniti',
        description: 'NISSAN MOTOR CO., LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    INFO: TopLevelDomainInfo = {
        name: 'info',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ING: TopLevelDomainInfo = {
        name: 'ing',
        description: 'Charleston Road Registry Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    INK: TopLevelDomainInfo = {
        name: 'ink',
        description: 'Top Level Design, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    INSTITUTE: TopLevelDomainInfo = {
        name: 'institute',
        description: 'Outer Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    INSURANCE: TopLevelDomainInfo = {
        name: 'insurance',
        description: 'fTLD Registry Services LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    INSURE: TopLevelDomainInfo = {
        name: 'insure',
        description: 'Pioneer Willow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    INT: TopLevelDomainInfo = {
        name: 'int',
        description: 'International Organizations',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    INTERNATIONAL: TopLevelDomainInfo = {
        name: 'international',
        description: 'Wild Way, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    INTUIT: TopLevelDomainInfo = {
        name: 'intuit',
        description: 'Intuit Administrative Services, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    INVESTMENTS: TopLevelDomainInfo = {
        name: 'investments',
        description: 'Holly Glen, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IO: TopLevelDomainInfo = {
        name: 'io',
        description: 'British Indian Ocean Territory',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    IPIRANGA: TopLevelDomainInfo = {
        name: 'ipiranga',
        description: 'Ipiranga Produtos de Petroleo S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IQ: TopLevelDomainInfo = {
        name: 'iq',
        description: 'Iraq (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    IR: TopLevelDomainInfo = {
        name: 'ir',
        description: 'Iran (Islamic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };  
    IRISH: TopLevelDomainInfo = {
        name: 'irish',
        description: 'Dot-Irish LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IS: TopLevelDomainInfo = {
        name: 'is',
        description: 'Iceland',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ISMAILI: TopLevelDomainInfo = {
        name: 'ismaili',
        description: 'Fondation Aga Khan (Aga Khan Foundation)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IST: TopLevelDomainInfo = {
        name: 'ist',
        description: 'Istanbul Metropolitan Municipality',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ISTANBUL: TopLevelDomainInfo = {
        name: 'istanbul',
        description: 'Istanbul Metropolitan Municipality',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    IT: TopLevelDomainInfo = {
        name: 'it',
        description: 'Italy (Italian Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ITAU: TopLevelDomainInfo = {
        name: 'itau',
        description: 'Itau Unibanco Holding S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ITV: TopLevelDomainInfo = {
        name: 'itv',
        description: 'ITV Services Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JAGUAR: TopLevelDomainInfo = {
        name: 'jaguar',
        description: 'Jaguar Land Rover Ltd',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JAVA: TopLevelDomainInfo = {
        name: 'java',
        description: 'Oracle Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JCB: TopLevelDomainInfo = {
        name: 'jcb',
        description: 'JCB Co., Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JE: TopLevelDomainInfo = {
        name: 'je',
        description: 'Jersey (Bailiwick of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    JEEP: TopLevelDomainInfo = {
        name: 'jeep',
        description: 'FCA US LLC.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JETZT: TopLevelDomainInfo = {
        name: 'jetzt',
        description: 'New TLD Company AB',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    JEWELRY: TopLevelDomainInfo = {
        name: 'jewelry',
        description: 'Wild Bloom, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    JIO: TopLevelDomainInfo = {
        name: 'jio',
        description: 'Affinity Names, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JLL: TopLevelDomainInfo = {
        name: 'jll',
        description: 'Jones Lang LaSalle Incorporated',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JM: TopLevelDomainInfo = {
        name: 'jm',
        description: 'Jamaica (Commonwealth of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    JMP: TopLevelDomainInfo = {
        name: 'jmp',
        description: 'Matrix IP LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    JNJ: TopLevelDomainInfo = {
        name: 'jnj',
        description: 'Johnson & Johnson Services, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JO: TopLevelDomainInfo = {
        name: 'jo',
        description: 'Jordan (Hashemite Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    JOBS: TopLevelDomainInfo = {
        name: 'jobs',
        description: 'Employ Media LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JOBURG: TopLevelDomainInfo = {
        name: 'joburg',
        description: 'ZA Central Registry NPC trading as ZA Central Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    JOT: TopLevelDomainInfo = {
        name: 'jot',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    JOY: TopLevelDomainInfo = {
        name: 'joy',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    JP: TopLevelDomainInfo = {
        name: 'jp',
        description: 'Japan',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    JPMORGAN: TopLevelDomainInfo = {
        name: 'jpmorgan',
        description: 'JPMorgan Chase Bank, National Association',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JPRS: TopLevelDomainInfo = {
        name: 'jprs',
        description: 'Japan Registry Services Co., Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    JUEGOS: TopLevelDomainInfo = {
        name: 'juegos',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    JUNIPER: TopLevelDomainInfo = {
        name: 'juniper',
        description: 'JUNIPER NETWORKS, INC.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KAUFEN: TopLevelDomainInfo = {
        name: 'kaufen',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KDDI: TopLevelDomainInfo = {
        name: 'kddi',
        description: 'KDDI CORPORATION',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KE: TopLevelDomainInfo = {
        name: 'ke',
        description: 'Kenya (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KERRYHOTELS: TopLevelDomainInfo = {
        name: 'kerryhotels',
        description: 'Kerry Trading Co. Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KERRYLOGISTICS: TopLevelDomainInfo = {
        name: 'kerrylogistics',
        description: 'Kerry Trading Co. Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KERRYPROPERTIES: TopLevelDomainInfo = {
        name: 'kerryproperties',
        description: 'Kerry Trading Co. Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KFH: TopLevelDomainInfo = {
        name: 'kfh',
        description: 'Kuwait Finance House',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KG: TopLevelDomainInfo = {
        name: 'kg',
        description: 'Kyrgyzstan (Kyrgyz Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KH: TopLevelDomainInfo = {
        name: 'kh',
        description: 'Cambodia (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KI: TopLevelDomainInfo = {
        name: 'ki',
        description: 'Kiribati (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KIA: TopLevelDomainInfo = {
        name: 'kia',
        description: 'KIA MOTORS CORPORATION',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KIDS: TopLevelDomainInfo = {
        name: 'kids',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KIM: TopLevelDomainInfo = {
        name: 'kim',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KINDER: TopLevelDomainInfo = {
        name: 'kinder',
        description: 'Ferrero Trading Lux S.A.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KINDLE: TopLevelDomainInfo = {
        name: 'kindle',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KITCHEN: TopLevelDomainInfo = {
        name: 'kitchen',
        description: 'Just Goodbye, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KIWI: TopLevelDomainInfo = {
        name: 'kiwi',
        description: 'DOT KIWI LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KM: TopLevelDomainInfo = {
        name: 'km',
        description: 'Comoros (Union of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KN: TopLevelDomainInfo = {
        name: 'kn',
        description: 'Saint Kitts and Nevis (Federation of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KOELN: TopLevelDomainInfo = {
        name: 'koeln',
        description: 'NetCologne Gesellschaft für Telekommunikation mbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KOMATSU: TopLevelDomainInfo = {
        name: 'komatsu',
        description: 'Komatsu Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KOSHER: TopLevelDomainInfo = {
        name: 'kosher',
        description: 'Kosher Marketing Assets LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KP: TopLevelDomainInfo = {
        name: 'kp',
        description: 'Korea (Democratic People\'s Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KPMG: TopLevelDomainInfo = {
        name: 'kpmg',
        description: 'KPMG International Cooperative (KPMG International Genossenschaft)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KPN: TopLevelDomainInfo = {
        name: 'kpn',
        description: 'Koninklijke KPN N.V.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KR: TopLevelDomainInfo = {
        name: 'kr',
        description: 'Korea (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KRD: TopLevelDomainInfo = {
        name: 'krd',
        description: 'KRG Department of Information Technology',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KRED: TopLevelDomainInfo = {
        name: 'kred',
        description: 'KredTLD Pty Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KUOKGROUP: TopLevelDomainInfo = {
        name: 'kuokgroup',
        description: 'Kerry Trading Co. Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    KW: TopLevelDomainInfo = {
        name: 'kw',
        description: 'Kuwait (State of Kuwait)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KY: TopLevelDomainInfo = {
        name: 'ky',
        description: 'Cayman Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    KYOTO: TopLevelDomainInfo = {
        name: 'kyoto',
        description: 'Academic Institution: Kyoto Jyoho Gakuen',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    KZ: TopLevelDomainInfo = {
        name: 'kz',
        description: 'Kazakhstan (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LA: TopLevelDomainInfo = {
        name: 'la',
        description: 'Lao People\'s Democratic Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LACAIXA: TopLevelDomainInfo = {
        name: 'lacaixa',
        description: 'CAIXA D\'ESTALVIS I PENSIONS DE BARCELONA',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LAMBORGHINI: TopLevelDomainInfo = {
        name: 'lamborghini',
        description: 'Automobili Lamborghini S.p.A.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LAMER: TopLevelDomainInfo = {
        name: 'lamer',
        description: 'The Estée Lauder Companies Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LANCASTER: TopLevelDomainInfo = {
        name: 'lancaster',
        description: 'LANCASTER',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LAND: TopLevelDomainInfo = {
        name: 'land',
        description: 'Pine Moon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LANDROVER: TopLevelDomainInfo = {
        name: 'landrover',
        description: 'Jaguar Land Rover Ltd',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LANXESS: TopLevelDomainInfo = {
        name: 'lanxess',
        description: 'LANXESS Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LASALLE: TopLevelDomainInfo = {
        name: 'lasalle',
        description: 'Jones Lang LaSalle Incorporated',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LAT: TopLevelDomainInfo = {
        name: 'lat',
        description: 'ECOM-LAC Federación de Latinoamérica y el Caribe para Internet y el Comercio Electrónico',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LATINO: TopLevelDomainInfo = {
        name: 'latino',
        description: 'Dish DBS Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LATROBE: TopLevelDomainInfo = {
        name: 'latrobe',
        description: 'La Trobe University',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LAW: TopLevelDomainInfo = {
        name: 'law',
        description: 'Minds + Machines Group Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LAWYER: TopLevelDomainInfo = {
        name: 'lawyer',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LB: TopLevelDomainInfo = {
        name: 'lb',
        description: 'Lebanon (Lebanese Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LC: TopLevelDomainInfo = {
        name: 'lc',
        description: 'Saint Lucia',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LDS: TopLevelDomainInfo = {
        name: 'lds',
        description: 'IRI Domain Management, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LEASE: TopLevelDomainInfo = {
        name: 'lease',
        description: 'Victor Trail, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LECLERC: TopLevelDomainInfo = {
        name: 'leclerc',
        description: 'A.C.D. LEC Association des Centres Distributeurs Edouard Leclerc',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LEFRAK: TopLevelDomainInfo = {
        name: 'lefrak',
        description: 'LeFrak Organization, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LEGAL: TopLevelDomainInfo = {
        name: 'legal',
        description: 'Blue Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LEGO: TopLevelDomainInfo = {
        name: 'lego',
        description: 'LEGO Juris A/S',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LEXUS: TopLevelDomainInfo = {
        name: 'lexus',
        description: 'TOYOTA MOTOR CORPORATION',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LGBT: TopLevelDomainInfo = {
        name: 'lgbt',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LI: TopLevelDomainInfo = {
        name: 'li',
        description: 'Liechtenstein (Principality of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LIDL: TopLevelDomainInfo = {
        name: 'lidl',
        description: 'Schwarz Domains und Services GmbH & Co. KG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LIFE: TopLevelDomainInfo = {
        name: 'life',
        description: 'Trixy Oaks, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LIFEINSURANCE: TopLevelDomainInfo = {
        name: 'lifeinsurance',
        description: 'American Council of Life Insurers',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LIFESTYLE: TopLevelDomainInfo = {
        name: 'lifestyle',
        description: 'Lifestyle Domain Holdings, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LIGHTING: TopLevelDomainInfo = {
        name: 'lighting',
        description: 'John McCook, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LIKE: TopLevelDomainInfo = {
        name: 'like',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LILLY: TopLevelDomainInfo = {
        name: 'lilly',
        description: 'Eli Lilly and Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LIMITED: TopLevelDomainInfo = {
        name: 'limited',
        description: 'Big Fest, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LIMO: TopLevelDomainInfo = {
        name: 'limo',
        description: 'Hidden Frostbite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LINCOLN: TopLevelDomainInfo = {
        name: 'lincoln',
        description: 'Ford Motor Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LINK: TopLevelDomainInfo = {
        name: 'link',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LIPSY: TopLevelDomainInfo = {
        name: 'lipsy',
        description: 'Lipsy Ltd',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LIVE: TopLevelDomainInfo = {
        name: 'live',
        description: 'Microsoft Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LIVING: TopLevelDomainInfo = {
        name: 'living',
        description: 'Lifestyle Domain Holdings, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LK: TopLevelDomainInfo = {
        name: 'lk',
        description: 'Sri Lanka',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LLC: TopLevelDomainInfo = {
        name: 'llc',
        description: 'Afilias plc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LLP: TopLevelDomainInfo = {
        name: 'llp',
        description: 'Afilias plc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LOAN: TopLevelDomainInfo = {
        name: 'loan',
        description: 'dot Loan Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LOANS: TopLevelDomainInfo = {
        name: 'loans',
        description: 'June Woods, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LOCKER: TopLevelDomainInfo = {
        name: 'locker',
        description: 'Dish DBS Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LOCUS: TopLevelDomainInfo = {
        name: 'locus',
        description: 'Locus Analytics LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LOL: TopLevelDomainInfo = {
        name: 'lol',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LONDON: TopLevelDomainInfo = {
        name: 'london',
        description: 'Dot London Domains Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LOTTE: TopLevelDomainInfo = {
        name: 'lotte',
        description: 'Lotte Holdings Co., Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LOTTO: TopLevelDomainInfo = {
        name: 'lotto',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LOVE: TopLevelDomainInfo = {
        name: 'love',
        description: 'Merchant Law Group LLP',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LPL: TopLevelDomainInfo = {
        name: 'lpl',
        description: 'LPL Holdings, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LPLFINANCIAL: TopLevelDomainInfo = {
        name: 'lplfinancial',
        description: 'LPL Holdings, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LR: TopLevelDomainInfo = {
        name: 'lr',
        description: 'Liberia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LS: TopLevelDomainInfo = {
        name: 'ls',
        description: 'Lesotho (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LT: TopLevelDomainInfo = {
        name: 'lt',
        description: 'Lithuania (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LTD: TopLevelDomainInfo = {
        name: 'ltd',
        description: 'Over Corner, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LTDA: TopLevelDomainInfo = {
        name: 'ltda',
        description: 'InterNetX Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LU: TopLevelDomainInfo = {
        name: 'lu',
        description: 'Luxembourg (Grand Duchy of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LUNDBECK: TopLevelDomainInfo = {
        name: 'lundbeck',
        description: 'H. Lundbeck A/S',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    LUXE: TopLevelDomainInfo = {
        name: 'luxe',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LUXURY: TopLevelDomainInfo = {
        name: 'luxury',
        description: 'Luxury Partners LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    LV: TopLevelDomainInfo = {
        name: 'lv',
        description: 'Latvia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    LY: TopLevelDomainInfo = {
        name: 'ly',
        description: 'Libya (State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MA: TopLevelDomainInfo = {
        name: 'ma',
        description: 'Morocco (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MADRID: TopLevelDomainInfo = {
        name: 'madrid',
        description: 'Comunidad de Madrid',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MAIF: TopLevelDomainInfo = {
        name: 'maif',
        description: 'Mutuelle Assurance Instituteur France (MAIF)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MAISON: TopLevelDomainInfo = {
        name: 'maison',
        description: 'Victor Frostbite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MAKEUP: TopLevelDomainInfo = {
        name: 'makeup',
        description: 'L\'Oréal',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MEN: TopLevelDomainInfo = {
        name: 'men',
        description: 'Exclusive Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MANAGEMENT: TopLevelDomainInfo = {
        name: 'management',
        description: 'John Goodbye, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MANGO: TopLevelDomainInfo = {
        name: 'mango',
        description: 'PUNTO FA S.L.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MAP: TopLevelDomainInfo = {
        name: 'map',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MARKET: TopLevelDomainInfo = {
        name: 'market',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MARKETING: TopLevelDomainInfo = {
        name: 'marketing',
        description: 'Fern Pass, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MARKETS: TopLevelDomainInfo = {
        name: 'markets',
        description: 'DOTMARKETS REGISTRY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MARRIOTT: TopLevelDomainInfo = {
        name: 'marriott',
        description: 'Marriott Worldwide Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MARSHALLS: TopLevelDomainInfo = {
        name: 'marshalls',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MATTEL: TopLevelDomainInfo = {
        name: 'mattel',
        description: 'Mattel Sites, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MBA: TopLevelDomainInfo = {
        name: 'mba',
        description: 'Lone Hollow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MC: TopLevelDomainInfo = {
        name: 'mc',
        description: 'Monaco (Principality of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MCKINSEY: TopLevelDomainInfo = {
        name: 'mckinsey',
        description: 'McKinsey Holdings, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MD: TopLevelDomainInfo = {
        name: 'md',
        description: 'Moldova (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ME: TopLevelDomainInfo = {
        name: 'me',
        description: 'Montenegro',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MED: TopLevelDomainInfo = {
        name: 'med',
        description: 'Medistry LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MEDIA: TopLevelDomainInfo = {
        name: 'media',
        description: 'Grand Glen, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MEET: TopLevelDomainInfo = {
        name: 'meet',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MELBOURNE: TopLevelDomainInfo = {
        name: 'melbourne',
        description: 'The Crown in right of the State of Victoria, represented by its Department of State Development, Business and Innovation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MEME: TopLevelDomainInfo = {
        name: 'meme',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MEMORIAL: TopLevelDomainInfo = {
        name: 'memorial',
        description: 'Dog Beach, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MENU: TopLevelDomainInfo = {
        name: 'menu',
        description: 'Wedding TLD2, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MERCKMSD: TopLevelDomainInfo = {
        name: 'merckmsd',
        description: 'MSD Registry Holdings, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MG: TopLevelDomainInfo = {
        name: 'mg',
        description: 'Madagascar (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MH: TopLevelDomainInfo = {
        name: 'mh',
        description: 'Marshall Islands (Republic of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MIAMI: TopLevelDomainInfo = {
        name: 'miami',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MICROSOFT: TopLevelDomainInfo = {
        name: 'microsoft',
        description: 'Microsoft Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MIL: TopLevelDomainInfo = {
        name: 'mil',
        description: 'United States Department of Defense Network Information Center',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MINI: TopLevelDomainInfo = {
        name: 'mini',
        description: 'Bayerische Motoren Werke Aktiengesellschaft',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MINT: TopLevelDomainInfo = {
        name: 'mint',
        description: 'Intuit Administrative Services, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MIT: TopLevelDomainInfo = {
        name: 'mit',
        description: 'Massachusetts Institute of Technology',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MITSUBISHI: TopLevelDomainInfo = {
        name: 'mitsubishi',
        description: 'Mitsubishi Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MK: TopLevelDomainInfo = {
        name: 'mk',
        description: 'Macedonia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ML: TopLevelDomainInfo = {
        name: 'ml',
        description: 'Mali (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MLB: TopLevelDomainInfo = {
        name: 'mlb',
        description: 'MLB Advanced Media DH, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MLS: TopLevelDomainInfo = {
        name: 'mls',
        description: 'The Canadian Real Estate Association',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MM: TopLevelDomainInfo = {
        name: 'mm',
        description: 'Myanmar (Union of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MMA: TopLevelDomainInfo = {
        name: 'mma',
        description: 'MMA IARD',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MN: TopLevelDomainInfo = {
        name: 'mn',
        description: 'Mongolia',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MO: TopLevelDomainInfo = {
        name: 'mo',
        description: 'Macao',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MOBI: TopLevelDomainInfo = {
        name: 'mobi',
        description: 'Afilias Technologies Limited dba dotMobi',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MOBILE: TopLevelDomainInfo = {
        name: 'mobile',
        description: 'Dish DBS Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MOBILY: TopLevelDomainInfo = {
        name: 'mobily',
        description: 'GreenTech Consultancy Company W.L.L.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MODA: TopLevelDomainInfo = {
        name: 'moda',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MOE: TopLevelDomainInfo = {
        name: 'moe',
        description: 'Interlink Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MOI: TopLevelDomainInfo = {
        name: 'moi',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MOM: TopLevelDomainInfo = {
        name: 'mom',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MONASH: TopLevelDomainInfo = {
        name: 'monash',
        description: 'Monash University',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MONEY: TopLevelDomainInfo = {
        name: 'money',
        description: 'Outer McCook, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MONSTER: TopLevelDomainInfo = {
        name: 'monster',
        description: 'Monster Worldwide, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MORMON: TopLevelDomainInfo = {
        name: 'mormon',
        description: 'IRI Domain Management, LLC ("Applicant")',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MORTGAGE: TopLevelDomainInfo = {
        name: 'mortgage',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MOSCOW: TopLevelDomainInfo = {
        name: 'moscow',
        description: 'Foundation for Assistance for Internet Technologies and Infrastructure Development (FAITID)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MOTO: TopLevelDomainInfo = {
        name: 'moto',
        description: 'Motorola Trademark Holdings, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MOTORCYCLES: TopLevelDomainInfo = {
        name: 'motorcycles',
        description: 'DERMotorcycles, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MOV: TopLevelDomainInfo = {
        name: 'mov',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MOVIE: TopLevelDomainInfo = {
        name: 'movie',
        description: 'New Frostbite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MP: TopLevelDomainInfo = {
        name: 'mp',
        description: 'Northern Mariana Islands (Commonwealth of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MQ: TopLevelDomainInfo = {
        name: 'mq',
        description: 'Martinique (French Department of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MR: TopLevelDomainInfo = {
        name: 'mr',
        description: 'Mauritania (Islamic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MS: TopLevelDomainInfo = {
        name: 'ms',
        description: 'Montserrat',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MSD: TopLevelDomainInfo = {
        name: 'msd',
        description: 'MSD Registry Holdings, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MT: TopLevelDomainInfo = {
        name: 'mt',
        description: 'Malta (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MTR: TopLevelDomainInfo = {
        name: 'mtr',
        description: 'MTR Corporation Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    MU: TopLevelDomainInfo = {
        name: 'mu',
        description: 'Mauritius (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MUSEUM: TopLevelDomainInfo = {
        name: 'museum',
        description: 'Museum Domain Management Association',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MUSIC: TopLevelDomainInfo = {
        name: 'music',
        description: 'DotMusic Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    MV: TopLevelDomainInfo = {
        name: 'mv',
        description: 'Maldives (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MW: TopLevelDomainInfo = {
        name: 'mw',
        description: 'Malawi (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MX: TopLevelDomainInfo = {
        name: 'mx',
        description: 'Mexico (United Mexican States)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MY: TopLevelDomainInfo = {
        name: 'my',
        description: 'Malaysia',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    MZ: TopLevelDomainInfo = {
        name: 'mz',
        description: 'Mozambique (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NA: TopLevelDomainInfo = {
        name: 'na',
        description: 'Namibia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NAB: TopLevelDomainInfo = {
        name: 'nab',
        description: 'National Australia Bank Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NAGOYA: TopLevelDomainInfo = {
        name: 'nagoya',
        description: 'GMO Registry, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NAME: TopLevelDomainInfo = {
        name: 'name',
        description: 'VeriSign Information Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NATURA: TopLevelDomainInfo = {
        name: 'natura',
        description: 'NATURA COSMÉTICOS S.A.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NAVY: TopLevelDomainInfo = {
        name: 'navy',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NBA: TopLevelDomainInfo = {
        name: 'nba',
        description: 'NBA REGISTRY, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NC: TopLevelDomainInfo = {
        name: 'nc',
        description: 'New Caledonia (Territorial Collectivity of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NE: TopLevelDomainInfo = {
        name: 'ne',
        description: 'Niger (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NEC: TopLevelDomainInfo = {
        name: 'nec',
        description: 'NEC Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NET: TopLevelDomainInfo = {
        name: 'net',
        description: 'VeriSign Global Registry Services',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NETBANK: TopLevelDomainInfo = {
        name: 'netbank',
        description: 'COMMONWEALTH BANK OF AUSTRALIA',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NETFLIX: TopLevelDomainInfo = {
        name: 'netflix',
        description: 'Netflix, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NETWORK: TopLevelDomainInfo = {
        name: 'network',
        description: 'Trixy Manor, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NEUSTAR: TopLevelDomainInfo = {
        name: 'neustar',
        description: 'NeuStar, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NEW: TopLevelDomainInfo = {
        name: 'new',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NEWS: TopLevelDomainInfo = {
        name: 'news',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NEXT: TopLevelDomainInfo = {
        name: 'next',
        description: 'Next plc',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NEXTDIRECT: TopLevelDomainInfo = {
        name: 'nextdirect',
        description: 'Next plc',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NEXUS: TopLevelDomainInfo = {
        name: 'nexus',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NF: TopLevelDomainInfo = {
        name: 'nf',
        description: 'Norfolk Island (Territory of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NFL: TopLevelDomainInfo = {
        name: 'nfl',
        description: 'NFL Reg Ops LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NG: TopLevelDomainInfo = {
        name: 'ng',
        description: 'Nigeria (Federal Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NGO: TopLevelDomainInfo = {
        name: 'ngo',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NHK: TopLevelDomainInfo = {
        name: 'nhk',
        description: 'Japan Broadcasting Corporation (NHK)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NI: TopLevelDomainInfo = {
        name: 'ni',
        description: 'Nicaragua (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NICO: TopLevelDomainInfo = {
        name: 'nico',
        description: 'DWANGO Co., Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NIKON: TopLevelDomainInfo = {
        name: 'nikon',
        description: 'NIKON CORPORATION',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NINJA: TopLevelDomainInfo = {
        name: 'ninja',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NISSAN: TopLevelDomainInfo = {
        name: 'nissan',
        description: 'NISSAN MOTOR CO., LTD.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NL: TopLevelDomainInfo = {
        name: 'nl',
        description: 'Netherlands (Kingdom of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NO: TopLevelDomainInfo = {
        name: 'no',
        description: 'Norway (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NOKIA: TopLevelDomainInfo = {
        name: 'nokia',
        description: 'Nokia Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NORTON: TopLevelDomainInfo = {
        name: 'norton',
        description: 'Symantec Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NOW: TopLevelDomainInfo = {
        name: 'now',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NOWRUZ: TopLevelDomainInfo = {
        name: 'nowruz',
        description: 'Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NOWTV: TopLevelDomainInfo = {
        name: 'nowtv',
        description: 'Starbucks (HK) Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NP: TopLevelDomainInfo = {
        name: 'np',
        description: 'Nepal (Federal Democratic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NR: TopLevelDomainInfo = {
        name: 'nr',
        description: 'Nauru (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NRA: TopLevelDomainInfo = {
        name: 'nra',
        description: 'NRA Holdings Company, INC.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NRW: TopLevelDomainInfo = {
        name: 'nrw',
        description: 'Minds + Machines GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NTT: TopLevelDomainInfo = {
        name: 'ntt',
        description: 'NIPPON TELEGRAPH AND TELEPHONE CORPORATION',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    NU: TopLevelDomainInfo = {
        name: 'nu',
        description: 'Niue',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    NYC: TopLevelDomainInfo = {
        name: 'nyc',
        description: 'The City of New York by and through the New York City Department of Information Technology & Telecommunications',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    NZ: TopLevelDomainInfo = {
        name: 'nz',
        description: 'New Zealand',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    OBI: TopLevelDomainInfo = {
        name: 'obi',
        description: 'OBI Group Holding SE & Co. KGaA',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    OBSERVER: TopLevelDomainInfo = {
        name: 'observer',
        description: 'Top Level Spectrum, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    OFFICE: TopLevelDomainInfo = {
        name: 'office',
        description: 'Microsoft Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    OKINAWA: TopLevelDomainInfo = {
        name: 'okinawa',
        description: 'BusinessRalliart inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    OLAYAN: TopLevelDomainInfo = {
        name: 'olayan',
        description: 'Crescent Holding GmbH',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    OLAYANGROUP: TopLevelDomainInfo = {
        name: 'olayangroup',
        description: 'Crescent Holding GmbH',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    OLDNAVY: TopLevelDomainInfo = {
        name: 'oldnavy',
        description: 'The Gap, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    OLLO: TopLevelDomainInfo = {
        name: 'ollo',
        description: 'Dish DBS Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    OM: TopLevelDomainInfo = {
        name: 'om',
        description: 'Oman (Sultanate of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    OMEGA: TopLevelDomainInfo = {
        name: 'omega',
        description: 'The Swatch Group Ltd',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ONE: TopLevelDomainInfo = {
        name: 'one',
        description: 'One.com A/S',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ONG: TopLevelDomainInfo = {
        name: 'ong',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ONL: TopLevelDomainInfo = {
        name: 'onl',
        description: 'I-Registry Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ONLINE: TopLevelDomainInfo = {
        name: 'online',
        description: 'DotOnline Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    OOO: TopLevelDomainInfo = {
        name: 'ooo',
        description: 'INFIBEAM INCORPORATION LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    OPEN: TopLevelDomainInfo = {
        name: 'open',
        description: 'American Express Travel Related Services Company, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ORACLE: TopLevelDomainInfo = {
        name: 'oracle',
        description: 'Oracle Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ORANGE: TopLevelDomainInfo = {
        name: 'orange',
        description: 'Orange Brand Services Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ORG: TopLevelDomainInfo = {
        name: 'org',
        description: 'Public Interest Registry (PIR)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ORGANIC: TopLevelDomainInfo = {
        name: 'organic',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ORIGINS: TopLevelDomainInfo = {
        name: 'origins',
        description: 'The Estée Lauder Companies Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    OSAKA: TopLevelDomainInfo = {
        name: 'osaka',
        description: 'Interlink Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    OTSUKA: TopLevelDomainInfo = {
        name: 'otsuka',
        description: 'Otsuka Holdings Co., Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    OTT: TopLevelDomainInfo = {
        name: 'ott',
        description: 'Dish DBS Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    OVH: TopLevelDomainInfo = {
        name: 'ovh',
        description: 'OVH SAS',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PA: TopLevelDomainInfo = {
        name: 'pa',
        description: 'Panama (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PAGE: TopLevelDomainInfo = {
        name: 'page',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PANASONIC: TopLevelDomainInfo = {
        name: 'panasonic',
        description: 'Panasonic Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PARIS: TopLevelDomainInfo = {
        name: 'paris',
        description: 'City of Paris',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PARS: TopLevelDomainInfo = {
        name: 'pars',
        description: 'Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PARTNERS: TopLevelDomainInfo = {
        name: 'partners',
        description: 'Magic Glen, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PARTS: TopLevelDomainInfo = {
        name: 'parts',
        description: 'Sea Goodbye, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PARTY: TopLevelDomainInfo = {
        name: 'party',
        description: 'Blue Sky Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PAY: TopLevelDomainInfo = {
        name: 'pay',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PCCW: TopLevelDomainInfo = {
        name: 'pccw',
        description: 'PCCW Enterprises Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PE: TopLevelDomainInfo = {
        name: 'pe',
        description: 'Peru (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PET: TopLevelDomainInfo = {
        name: 'pet',
        description: 'Afilias plc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PF: TopLevelDomainInfo = {
        name: 'pf',
        description: 'French Polynesia (Territorial Collectivity of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PFIZER: TopLevelDomainInfo = {
        name: 'pfizer',
        description: 'Pfizer Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PG: TopLevelDomainInfo = {
        name: 'pg',
        description: 'Papua New Guinea (Independent State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PH: TopLevelDomainInfo = {
        name: 'ph',
        description: 'Philippines (Republic of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PHARMACY: TopLevelDomainInfo = {
        name: 'pharmacy',
        description: 'National Association of Boards of Pharmacy',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PHD: TopLevelDomainInfo = {
        name: 'phd',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PHILIPS: TopLevelDomainInfo = {
        name: 'philips',
        description: 'Koninklijke Philips N.V.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PHONE: TopLevelDomainInfo = {
        name: 'phone',
        description: 'Dish DBS Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PHOTO: TopLevelDomainInfo = {
        name: 'photo',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PHOTOGRAPHY: TopLevelDomainInfo = {
        name: 'photography',
        description: 'Sugar Glen, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PHOTOS: TopLevelDomainInfo = {
        name: 'photos',
        description: 'Sea Corner, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PHYSIO: TopLevelDomainInfo = {
        name: 'physio',
        description: 'PhysBiz Pty Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PICS: TopLevelDomainInfo = {
        name: 'pics',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PICTET: TopLevelDomainInfo = {
        name: 'pictet',
        description: 'Pictet Europe S.A.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PICTURES: TopLevelDomainInfo = {
        name: 'pictures',
        description: 'Foggy Sky, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PID: TopLevelDomainInfo = {
        name: 'pid',
        description: 'Top Level Spectrum, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PIN: TopLevelDomainInfo = {
        name: 'pin',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PING: TopLevelDomainInfo = {
        name: 'ping',
        description: 'Ping Registry Provider, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PINK: TopLevelDomainInfo = {
        name: 'pink',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PIONEER: TopLevelDomainInfo = {
        name: 'pioneer',
        description: 'Pioneer Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PIZZA: TopLevelDomainInfo = {
        name: 'pizza',
        description: 'Foggy Moon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PK: TopLevelDomainInfo = {
        name: 'pk',
        description: 'Pakistan (Islamic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PL: TopLevelDomainInfo = {
        name: 'pl',
        description: 'Poland (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PLACE: TopLevelDomainInfo = {
        name: 'place',
        description: 'Snow Galley, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PLAY: TopLevelDomainInfo = {
        name: 'play',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PLAYSTATION: TopLevelDomainInfo = {
        name: 'playstation',
        description: 'Sony Computer Entertainment Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PLUMBING: TopLevelDomainInfo = {
        name: 'plumbing',
        description: 'Spring Tigers, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PLUS: TopLevelDomainInfo = {
        name: 'plus',
        description: 'Sugar Mill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PM: TopLevelDomainInfo = {
        name: 'pm',
        description: 'Saint Pierre and Miquelon (Territorial Collectivity of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PN: TopLevelDomainInfo = {
        name: 'pn',
        description: 'Pitcairn Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PNC: TopLevelDomainInfo = {
        name: 'pnc',
        description: 'PNC Domain Co., LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    POHL: TopLevelDomainInfo = {
        name: 'pohl',
        description: 'Deutsche Vermögensberatung Aktiengesellschaft DVAG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    POKER: TopLevelDomainInfo = {
        name: 'poker',
        description: 'Afilias Domains No. 5 Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    POLITIE: TopLevelDomainInfo = {
        name: 'politie',
        description: 'Politie Nederland',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PORN: TopLevelDomainInfo = {
        name: 'porn',
        description: 'ICM Registry PN LLC',
        public: true,
        category: TopLevelDomainCategory.SEXUAL,
    };
    POST: TopLevelDomainInfo = {
        name: 'post',
        description: 'Universal Postal Union',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PR: TopLevelDomainInfo = {
        name: 'pr',
        description: 'Puerto Rico (Commonwealth of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PRAMERICA: TopLevelDomainInfo = {
        name: 'pramerica',
        description: 'Prudential Financial, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PRAXI: TopLevelDomainInfo = {
        name: 'praxi',
        description: 'Praxi S.p.A.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PRESS: TopLevelDomainInfo = {
        name: 'press',
        description: 'DotPress Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PRIME: TopLevelDomainInfo = {
        name: 'prime',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PRO: TopLevelDomainInfo = {
        name: 'pro',
        description: 'Registry Services Corporation dba RegistryPro',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PROD: TopLevelDomainInfo = {
        name: 'prod',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PRODUCTIONS: TopLevelDomainInfo = {
        name: 'productions',
        description: 'Magic Birch, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PROF: TopLevelDomainInfo = {
        name: 'prof',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PROGRESSIVE: TopLevelDomainInfo = {
        name: 'progressive',
        description: 'Progressive Casualty Insurance Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PROMO: TopLevelDomainInfo = {
        name: 'promo',
        description: 'Afilias Domains No. 5 Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PROPERTIES: TopLevelDomainInfo = {
        name: 'properties',
        description: 'Big Pass, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PROPERTY: TopLevelDomainInfo = {
        name: 'property',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PROTECTION: TopLevelDomainInfo = {
        name: 'protection',
        description: 'XYZ.COM LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PRU: TopLevelDomainInfo = {
        name: 'pru',
        description: 'Prudential Financial, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PRUDENTIAL: TopLevelDomainInfo = {
        name: 'prudential',
        description: 'Prudential Financial, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PS: TopLevelDomainInfo = {
        name: 'ps',
        description: 'Palestine (State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PT: TopLevelDomainInfo = {
        name: 'pt',
        description: 'Portugal (Portuguese Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PUB: TopLevelDomainInfo = {
        name: 'pub',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    PW: TopLevelDomainInfo = {
        name: 'pw',
        description: 'Palau (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    PWC: TopLevelDomainInfo = {
        name: 'pwc',
        description: 'PricewaterhouseCoopers LLP',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    PY: TopLevelDomainInfo = {
        name: 'py',
        description: 'Paraguay (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    QA: TopLevelDomainInfo = {
        name: 'qa',
        description: 'Qatar (State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    QPON: TopLevelDomainInfo = {
        name: 'qpon',
        description: 'dotCOOL, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    QUEBEC: TopLevelDomainInfo = {
        name: 'quebec',
        description: 'PointQuébec Inc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    QUEST: TopLevelDomainInfo = {
        name: 'quest',
        description: 'Quest ION Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    RACING: TopLevelDomainInfo = {
        name: 'racing',
        description: 'Premier Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RADIO: TopLevelDomainInfo = {
        name: 'radio',
        description: 'European Broadcasting Union (EBU)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RE: TopLevelDomainInfo = {
        name: 're',
        description: 'Réunion (Department of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    READ: TopLevelDomainInfo = {
        name: 'read',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REALESTATE: TopLevelDomainInfo = {
        name: 'realestate',
        description: 'dotRealEstate LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REALTOR: TopLevelDomainInfo = {
        name: 'realtor',
        description: 'Real Estate Domains LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    REALTY: TopLevelDomainInfo = {
        name: 'realty',
        description: 'Fegistry, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RECIPES: TopLevelDomainInfo = {
        name: 'recipes',
        description: 'Grand Island, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RED: TopLevelDomainInfo = {
        name: 'red',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REDCROSS: TopLevelDomainInfo = {
        name: 'redcross',
        description: 'American Red Cross',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    REDSTONE: TopLevelDomainInfo = {
        name: 'redstone',
        description: 'Redstone Haute Couture Co., Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    REDUMBRELLA: TopLevelDomainInfo = {
        name: 'redumbrella',
        description: 'Travelers TLD, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    REHAB: TopLevelDomainInfo = {
        name: 'rehab',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REISE: TopLevelDomainInfo = {
        name: 'reise',
        description: 'Foggy Way, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REISEN: TopLevelDomainInfo = {
        name: 'reisen',
        description: 'New Cypress, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REIT: TopLevelDomainInfo = {
        name: 'reit',
        description: 'National Association of Real Estate Investment Trusts, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RELIANCE: TopLevelDomainInfo = {
        name: 'reliance',
        description: 'Reliance Industries Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    REN: TopLevelDomainInfo = {
        name: 'ren',
        description: 'Beijing Qianxiang Wangjing Technology Development Co., Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    RENT: TopLevelDomainInfo = {
        name: 'rent',
        description: 'XYZ.COM LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RENTALS: TopLevelDomainInfo = {
        name: 'rentals',
        description: 'Big Hollow,LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REPAIR: TopLevelDomainInfo = {
        name: 'repair',
        description: 'Lone Sunset, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REPORT: TopLevelDomainInfo = {
        name: 'report',
        description: 'Binky Glen, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REPUBLICAN: TopLevelDomainInfo = {
        name: 'republican',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REST: TopLevelDomainInfo = {
        name: 'rest',
        description: 'Punto 2012 Sociedad Anonima Promotora de Inversion de Capital Variable',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RESTAURANT: TopLevelDomainInfo = {
        name: 'restaurant',
        description: 'Snow Avenue, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REVIEW: TopLevelDomainInfo = {
        name: 'review',
        description: 'dot Review Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REVIEWS: TopLevelDomainInfo = {
        name: 'reviews',
        description: 'United TLD Holdco, Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    REXROTH: TopLevelDomainInfo = {
        name: 'rexroth',
        description: 'Robert Bosch GMBH',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    RICH: TopLevelDomainInfo = {
        name: 'rich',
        description: 'I-Registry Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RICHARDLI: TopLevelDomainInfo = {
        name: 'richardli',
        description: 'Pacific Century Asset Management (HK) Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    RICOH: TopLevelDomainInfo = {
        name: 'ricoh',
        description: 'Ricoh Company, Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    RIL: TopLevelDomainInfo = {
        name: 'ril',
        description: 'Reliance Industries Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    RIO: TopLevelDomainInfo = {
        name: 'rio',
        description: 'Empresa Municipal de Informática SA - IPLANRIO',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RIP: TopLevelDomainInfo = {
        name: 'rip',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RO: TopLevelDomainInfo = {
        name: 'ro',
        description: 'Romania',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ROCHER: TopLevelDomainInfo = {
        name: 'rocher',
        description: 'Ferrero Trading Lux S.A.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ROCKS: TopLevelDomainInfo = {
        name: 'rocks',
        description: 'United TLD Holdco, LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RODEO: TopLevelDomainInfo = {
        name: 'rodeo',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ROGERS: TopLevelDomainInfo = {
        name: 'rogers',
        description: 'Rogers Communications Canada Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ROOM: TopLevelDomainInfo = {
        name: 'room',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RS: TopLevelDomainInfo = {
        name: 'rs',
        description: 'Serbia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    RSVP: TopLevelDomainInfo = {
        name: 'rsvp',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RU: TopLevelDomainInfo = {
        name: 'ru',
        description: 'Russian Federation',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    RUGBY: TopLevelDomainInfo = {
        name: 'rugby',
        description: 'World Rugby Strategic Developments Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RUHR: TopLevelDomainInfo = {
        name: 'ruhr',
        description: 'regiodot GmbH & Co. KG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RUN: TopLevelDomainInfo = {
        name: 'run',
        description: 'Snow Park, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    RW: TopLevelDomainInfo = {
        name: 'rw',
        description: 'Rwanda (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    RWE: TopLevelDomainInfo = {
        name: 'rwe',
        description: 'RWE AG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    RYUKYU: TopLevelDomainInfo = {
        name: 'ryukyu',
        description: 'BusinessRalliart inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SA: TopLevelDomainInfo = {
        name: 'sa',
        description: 'Saudi Arabia (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SAARLAND: TopLevelDomainInfo = {
        name: 'saarland',
        description: 'dotSaarland GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SAFE: TopLevelDomainInfo = {
        name: 'safe',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SAFETY: TopLevelDomainInfo = {
        name: 'safety',
        description: 'Safety Registry Services, LLC.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SAKURA: TopLevelDomainInfo = {
        name: 'sakura',
        description: 'SAKURA Internet Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SALE: TopLevelDomainInfo = {
        name: 'sale',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SALON: TopLevelDomainInfo = {
        name: 'salon',
        description: 'Outer Orchard, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SAMSCLUB: TopLevelDomainInfo = {
        name: 'samsclub',
        description: 'Wal-Mart Stores, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SAMSUNG: TopLevelDomainInfo = {
        name: 'samsung',
        description: 'SAMSUNG SDS CO., LTD',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SANDVIK: TopLevelDomainInfo = {
        name: 'sandvik',
        description: 'Sandvik AB',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SANDVIKCOROMANT: TopLevelDomainInfo = {
        name: 'sandvikcoromant',
        description: 'Sandvik AB',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SANOFI: TopLevelDomainInfo = {
        name: 'sanofi',
        description: 'Sanofi',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SAP: TopLevelDomainInfo = {
        name: 'sap',
        description: 'SAP AG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SARL: TopLevelDomainInfo = {
        name: 'sarl',
        description: 'Delta Orchard, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SAS: TopLevelDomainInfo = {
        name: 'sas',
        description: 'Research IP LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SAVE: TopLevelDomainInfo = {
        name: 'save',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SAXO: TopLevelDomainInfo = {
        name: 'saxo',
        description: 'Saxo Bank A/S',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SB: TopLevelDomainInfo = {
        name: 'sb',
        description: 'Solomon Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SBI: TopLevelDomainInfo = {
        name: 'sbi',
        description: 'STATE BANK OF INDIA',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SBS: TopLevelDomainInfo = {
        name: 'sbs',
        description: 'SPECIAL BROADCASTING SERVICE CORPORATION',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SC: TopLevelDomainInfo = {
        name: 'sc',
        description: 'Seychelles (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SCA: TopLevelDomainInfo = {
        name: 'sca',
        description: 'SVENSKA CELLULOSA AKTIEBOLAGET SCA (publ)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SCB: TopLevelDomainInfo = {
        name: 'scb',
        description: 'The Siam Commercial Bank Public Company Limited ("SCB")',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SCHAEFFLER: TopLevelDomainInfo = {
        name: 'schaeffler',
        description: 'Schaeffler Technologies AG & Co. KG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SCHMIDT: TopLevelDomainInfo = {
        name: 'schmidt',
        description: 'SALM S.A.S.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SCHOLARSHIPS: TopLevelDomainInfo = {
        name: 'scholarships',
        description: 'Scholarships.com, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SCHOOL: TopLevelDomainInfo = {
        name: 'school',
        description: 'Little Galley, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SCHULE: TopLevelDomainInfo = {
        name: 'schule',
        description: 'Outer Moon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SCHWARZ: TopLevelDomainInfo = {
        name: 'schwarz',
        description: 'Schwarz Domains und Services GmbH & Co. KG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SCIENCE: TopLevelDomainInfo = {
        name: 'science',
        description: 'dot Science Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SCOT: TopLevelDomainInfo = {
        name: 'scot',
        description: 'Dot Scot Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SD: TopLevelDomainInfo = {
        name: 'sd',
        description: 'Sudan (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SE: TopLevelDomainInfo = {
        name: 'se',
        description: 'Sweden (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SEARCH: TopLevelDomainInfo = {
        name: 'search',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SEAT: TopLevelDomainInfo = {
        name: 'seat',
        description: 'SEAT, S.A. (Sociedad Unipersonal)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SECURE: TopLevelDomainInfo = {
        name: 'secure',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SECURITY: TopLevelDomainInfo = {
        name: 'security',
        description: 'XYZ.COM LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SEEK: TopLevelDomainInfo = {
        name: 'seek',
        description: 'Seek Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SELECT: TopLevelDomainInfo = {
        name: 'select',
        description: 'iSelect Ltd',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SENER: TopLevelDomainInfo = {
        name: 'sener',
        description: 'Sener Ingeniería y Sistemas, S.A.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SERVICES: TopLevelDomainInfo = {
        name: 'services',
        description: 'Fox Castle, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SEVEN: TopLevelDomainInfo = {
        name: 'seven',
        description: 'Seven West Media Ltd',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SEW: TopLevelDomainInfo = {
        name: 'sew',
        description: 'SEW-EURODRIVE GmbH & Co KG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SEX: TopLevelDomainInfo = {
        name: 'sex',
        description: 'ICM Registry SX LLC',
        public: true,
        category: TopLevelDomainCategory.SEXUAL,
    };
    SEXY: TopLevelDomainInfo = {
        name: 'sexy',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.SEXUAL,
    };
    SFR: TopLevelDomainInfo = {
        name: 'sfr',
        description: 'Societe Francaise du Radiotelephone - SFR',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SG: TopLevelDomainInfo = {
        name: 'sg',
        description: 'Singapore (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SH: TopLevelDomainInfo = {
        name: 'sh',
        description: 'Saint Helena, Ascension and Tristan da Cunha',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SHANGRILA: TopLevelDomainInfo = {
        name: 'shangrila',
        description: 'Shangri‐La International Hotel Management Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SHARP: TopLevelDomainInfo = {
        name: 'sharp',
        description: 'Sharp Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SHAW: TopLevelDomainInfo = {
        name: 'shaw',
        description: 'Shaw Cablesystems G.P.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SHELL: TopLevelDomainInfo = {
        name: 'shell',
        description: 'Shell Information Technology International Inc',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SHIA: TopLevelDomainInfo = {
        name: 'shia',
        description: 'Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SHIKSHA: TopLevelDomainInfo = {
        name: 'shiksha',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SHOES: TopLevelDomainInfo = {
        name: 'shoes',
        description: 'Binky Galley, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SHOP: TopLevelDomainInfo = {
        name: 'shop',
        description: 'GMO Registry, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SHOPPING: TopLevelDomainInfo = {
        name: 'shopping',
        description: 'Over Keep, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SHOUJI: TopLevelDomainInfo = {
        name: 'shouji',
        description: 'QIHOO 360 TECHNOLOGY CO. LTD.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SHOW: TopLevelDomainInfo = {
        name: 'show',
        description: 'Snow Beach, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SI: TopLevelDomainInfo = {
        name: 'si',
        description: 'Slovenia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SILK: TopLevelDomainInfo = {
        name: 'silk',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SINA: TopLevelDomainInfo = {
        name: 'sina',
        description: 'Sina Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SINGLES: TopLevelDomainInfo = {
        name: 'singles',
        description: 'Fern Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SITE: TopLevelDomainInfo = {
        name: 'site',
        description: 'DotSite Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SJ: TopLevelDomainInfo = {
        name: 'sj',
        description: 'Svalbard and Jan Mayen (Islands of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SK: TopLevelDomainInfo = {
        name: 'sk',
        description: 'Slovakia (Slovak Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SKI: TopLevelDomainInfo = {
        name: 'ski',
        description: 'STARTING DOT LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SKIN: TopLevelDomainInfo = {
        name: 'skin',
        description: 'L\'Oréal',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SKY: TopLevelDomainInfo = {
        name: 'sky',
        description: 'Sky International AG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SKYPE: TopLevelDomainInfo = {
        name: 'skype',
        description: 'Microsoft Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SL: TopLevelDomainInfo = {
        name: 'sl',
        description: 'Sierra Leone (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SLING: TopLevelDomainInfo = {
        name: 'sling',
        description: 'Hughes Satellite Systems Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SM: TopLevelDomainInfo = {
        name: 'sm',
        description: 'San Marino (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SMART: TopLevelDomainInfo = {
        name: 'smart',
        description: 'Smart Communications, Inc. (SMART)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SMILE: TopLevelDomainInfo = {
        name: 'smile',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SN: TopLevelDomainInfo = {
        name: 'sn',
        description: 'Senegal (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SNCF: TopLevelDomainInfo = {
        name: 'sncf',
        description: 'SNCF (Société Nationale des Chemins de fer Francais)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SO: TopLevelDomainInfo = {
        name: 'so',
        description: 'Somalia (Federal Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SOCCER: TopLevelDomainInfo = {
        name: 'soccer',
        description: 'Foggy Shadow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SOCIAL: TopLevelDomainInfo = {
        name: 'social',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SOFTBANK: TopLevelDomainInfo = {
        name: 'softbank',
        description: 'SoftBank Group Corp.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SOFTWARE: TopLevelDomainInfo = {
        name: 'software',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SOHU: TopLevelDomainInfo = {
        name: 'sohu',
        description: 'Sohu.com Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SOLAR: TopLevelDomainInfo = {
        name: 'solar',
        description: 'Ruby Town, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SOLUTIONS: TopLevelDomainInfo = {
        name: 'solutions',
        description: 'Silver Cover, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SONG: TopLevelDomainInfo = {
        name: 'song',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SONY: TopLevelDomainInfo = {
        name: 'sony',
        description: 'Sony Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SOY: TopLevelDomainInfo = {
        name: 'soy',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SPA: TopLevelDomainInfo = {
        name: 'spa',
        description: 'Asia Spa and Wellness Promotion Council Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SPACE: TopLevelDomainInfo = {
        name: 'space',
        description: 'DotSpace Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SPORT: TopLevelDomainInfo = {
        name: 'sport',
        description: 'Global Association of International Sports Federations (GAISF)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SPOT: TopLevelDomainInfo = {
        name: 'spot',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SR: TopLevelDomainInfo = {
        name: 'sr',
        description: 'Suriname (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SRL: TopLevelDomainInfo = {
        name: 'srl',
        description: 'InterNetX Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SS: TopLevelDomainInfo = {
        name: 'ss',
        description: 'South Sudan (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ST: TopLevelDomainInfo = {
        name: 'st',
        description: 'Sao Tome and Principe (Democratic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    STADA: TopLevelDomainInfo = {
        name: 'stada',
        description: 'STADA Arzneimittel AG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    STAPLES: TopLevelDomainInfo = {
        name: 'staples',
        description: 'Staples, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    STAR: TopLevelDomainInfo = {
        name: 'star',
        description: 'Star India Private Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    STATEBANK: TopLevelDomainInfo = {
        name: 'statebank',
        description: 'STATE BANK OF INDIA',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    STATEFARM: TopLevelDomainInfo = {
        name: 'statefarm',
        description: 'State Farm Mutual Automobile Insurance Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    STC: TopLevelDomainInfo = {
        name: 'stc',
        description: 'Saudi Telecom Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    STCGROUP: TopLevelDomainInfo = {
        name: 'stcgroup',
        description: 'Saudi Telecom Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    STOCKHOLM: TopLevelDomainInfo = {
        name: 'stockholm',
        description: 'Stockholms kommun',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    STORAGE: TopLevelDomainInfo = {
        name: 'storage',
        description: 'Self Storage Company LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    STORE: TopLevelDomainInfo = {
        name: 'store',
        description: 'DotStore Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    STREAM: TopLevelDomainInfo = {
        name: 'stream',
        description: 'dot Stream Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    STUDIO: TopLevelDomainInfo = {
        name: 'studio',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    STUDY: TopLevelDomainInfo = {
        name: 'study',
        description: 'OPEN UNIVERSITIES AUSTRALIA PTY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    STYLE: TopLevelDomainInfo = {
        name: 'style',
        description: 'Binky Moon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SU: TopLevelDomainInfo = {
        name: 'su',
        description: 'Sowjet Union',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SUCKS: TopLevelDomainInfo = {
        name: 'sucks',
        description: 'Vox Populi Registry Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SUPPLIES: TopLevelDomainInfo = {
        name: 'supplies',
        description: 'Atomic Fields, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SUPPLY: TopLevelDomainInfo = {
        name: 'supply',
        description: 'Half Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SUPPORT: TopLevelDomainInfo = {
        name: 'support',
        description: 'Grand Orchard, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SURF: TopLevelDomainInfo = {
        name: 'surf',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SURGERY: TopLevelDomainInfo = {
        name: 'surgery',
        description: 'Tin Avenue, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SUZUKI: TopLevelDomainInfo = {
        name: 'suzuki',
        description: 'SUZUKI MOTOR CORPORATION',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SV: TopLevelDomainInfo = {
        name: 'sv',
        description: 'El Salvador (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SWATCH: TopLevelDomainInfo = {
        name: 'swatch',
        description: 'The Swatch Group Ltd',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SWISS: TopLevelDomainInfo = {
        name: 'swiss',
        description: 'Swiss Confederation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    SX: TopLevelDomainInfo = {
        name: 'sx',
        description: 'Sint Maarten (Dutch part)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SY: TopLevelDomainInfo = {
        name: 'sy',
        description: 'Syrian Arab Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    SYDNEY: TopLevelDomainInfo = {
        name: 'sydney',
        description: 'State of New South Wales, Department of Premier and Cabinet',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SYSTEMS: TopLevelDomainInfo = {
        name: 'systems',
        description: 'Dash Cypress, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    SZ: TopLevelDomainInfo = {
        name: 'sz',
        description: 'Swaziland (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TAB: TopLevelDomainInfo = {
        name: 'tab',
        description: 'Tabcorp Holdings Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TAIPEI: TopLevelDomainInfo = {
        name: 'taipei',
        description: 'Taipei City Government',
        public: false,
        category: TopLevelDomainCategory.GENERIC,
    };
    TALK: TopLevelDomainInfo = {
        name: 'talk',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TAOBAO: TopLevelDomainInfo = {
        name: 'taobao',
        description: 'Alibaba Group Holding Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TARGET: TopLevelDomainInfo = {
        name: 'target',
        description: 'Target Domain Holdings, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TATAMOTORS: TopLevelDomainInfo = {
        name: 'tatamotors',
        description: 'Tata Motors Ltd',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TATAR: TopLevelDomainInfo = {
        name: 'tatar',
        description: 'Limited Liability Company "Coordination Center of Regional Domain of Tatarstan Republic"',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TATTOO: TopLevelDomainInfo = {
        name: 'tattoo',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TAX: TopLevelDomainInfo = {
        name: 'tax',
        description: 'Storm Orchard, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TAXI: TopLevelDomainInfo = {
        name: 'taxi',
        description: 'Pine Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TC: TopLevelDomainInfo = {
        name: 'tc',
        description: 'Turks and Caicos Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TCI: TopLevelDomainInfo = {
        name: 'tci',
        description: 'Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TD: TopLevelDomainInfo = {
        name: 'td',
        description: 'Chad (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TDK: TopLevelDomainInfo = {
        name: 'tdk',
        description: 'TDK Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TEAM: TopLevelDomainInfo = {
        name: 'team',
        description: 'Atomic Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TECH: TopLevelDomainInfo = {
        name: 'tech',
        description: 'Dot Tech LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TECHNOLOGY: TopLevelDomainInfo = {
        name: 'technology',
        description: 'Auburn Falls',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TEL: TopLevelDomainInfo = {
        name: 'tel',
        description: 'Telnic Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TEMASEK: TopLevelDomainInfo = {
        name: 'temasek',
        description: 'Temasek Holdings (Private) Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TENNIS: TopLevelDomainInfo = {
        name: 'tennis',
        description: 'Cotton Bloom, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TEVA: TopLevelDomainInfo = {
        name: 'teva',
        description: 'Teva Pharmaceutical Industries Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TF: TopLevelDomainInfo = {
        name: 'tf',
        description: 'French Southern and Antarctic Lands (Territory of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TG: TopLevelDomainInfo = {
        name: 'tg',
        description: 'Togo (Togolese Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TH: TopLevelDomainInfo = {
        name: 'th',
        description: 'Thailand (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    THD: TopLevelDomainInfo = {
        name: 'thd',
        description: 'Home Depot Product Authority, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    THEATER: TopLevelDomainInfo = {
        name: 'theater',
        description: 'Blue Tigers, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    THEATRE: TopLevelDomainInfo = {
        name: 'theatre',
        description: 'XYZ.COM LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TIAA: TopLevelDomainInfo = {
        name: 'tiaa',
        description: 'Teachers Insurance and Annuity Association of America',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TICKETS: TopLevelDomainInfo = {
        name: 'tickets',
        description: 'Accent Media Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TIENDA: TopLevelDomainInfo = {
        name: 'tienda',
        description: 'Victor Manor, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TIPS: TopLevelDomainInfo = {
        name: 'tips',
        description: 'Corn Willow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TIRES: TopLevelDomainInfo = {
        name: 'tires',
        description: 'Dog Edge, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TIROL: TopLevelDomainInfo = {
        name: 'tirol',
        description: 'punkt Tirol GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TJ: TopLevelDomainInfo = {
        name: 'tj',
        description: 'Tajikistan (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TJMAXX: TopLevelDomainInfo = {
        name: 'tjmaxx',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TJX: TopLevelDomainInfo = {
        name: 'tjx',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TK: TopLevelDomainInfo = {
        name: 'tk',
        description: 'Tokelau',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TKMAXX: TopLevelDomainInfo = {
        name: 'tkmaxx',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TL: TopLevelDomainInfo = {
        name: 'tl',
        description: 'Timor-Leste (Democratic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TM: TopLevelDomainInfo = {
        name: 'tm',
        description: 'Turkmenistan',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TMALL: TopLevelDomainInfo = {
        name: 'tmall',
        description: 'Alibaba Group Holding Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TN: TopLevelDomainInfo = {
        name: 'tn',
        description: 'Tunisia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TO: TopLevelDomainInfo = {
        name: 'to',
        description: 'Tonga (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TODAY: TopLevelDomainInfo = {
        name: 'today',
        description: 'Pearl Woods, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TOKYO: TopLevelDomainInfo = {
        name: 'tokyo',
        description: 'GMO Registry, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TOOLS: TopLevelDomainInfo = {
        name: 'tools',
        description: 'Pioneer North, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TOP: TopLevelDomainInfo = {
        name: 'top',
        description: 'Jiangsu Bangning Science & Technology Co.,Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TORAY: TopLevelDomainInfo = {
        name: 'toray',
        description: 'Toray Industries, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TOSHIBA: TopLevelDomainInfo = {
        name: 'toshiba',
        description: 'TOSHIBA Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TOTAL: TopLevelDomainInfo = {
        name: 'total',
        description: 'Total SA',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TOURS: TopLevelDomainInfo = {
        name: 'tours',
        description: 'Sugar Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TOWN: TopLevelDomainInfo = {
        name: 'town',
        description: 'Koko Moon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TOYOTA: TopLevelDomainInfo = {
        name: 'toyota',
        description: 'TOYOTA MOTOR CORPORATION',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TOYS: TopLevelDomainInfo = {
        name: 'toys',
        description: 'Pioneer Orchard, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TR: TopLevelDomainInfo = {
        name: 'tr',
        description: 'Turkey (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TRADE: TopLevelDomainInfo = {
        name: 'trade',
        description: 'Elite Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TRADING: TopLevelDomainInfo = {
        name: 'trading',
        description: 'DOTTRADING REGISTRY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TRAINING: TopLevelDomainInfo = {
        name: 'training',
        description: 'Wild Willow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TRAVEL: TopLevelDomainInfo = {
        name: 'travel',
        description: 'Tralliance Registry Management Company, LLC.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TRAVELERS: TopLevelDomainInfo = {
        name: 'travelers',
        description: 'Travelers TLD, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TRAVELERSINSURANCE: TopLevelDomainInfo = {
        name: 'travelersinsurance',
        description: 'Travelers TLD, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TRUST: TopLevelDomainInfo = {
        name: 'trust',
        description: 'Artemis Internet Inc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TRV: TopLevelDomainInfo = {
        name: 'trv',
        description: 'Travelers TLD, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TT: TopLevelDomainInfo = {
        name: 'tt',
        description: 'Trinidad and Tobago (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TUBE: TopLevelDomainInfo = {
        name: 'tube',
        description: 'Latin American Telecom LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TUI: TopLevelDomainInfo = {
        name: 'tui',
        description: 'TUI AG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TUNES: TopLevelDomainInfo = {
        name: 'tunes',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TUSHU: TopLevelDomainInfo = {
        name: 'tushu',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    TV: TopLevelDomainInfo = {
        name: 'tv',
        description: 'Tuvalu',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TVS: TopLevelDomainInfo = {
        name: 'tvs',
        description: 'T V SUNDRAM IYENGAR  & SONS PRIVATE LIMITED',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    TW: TopLevelDomainInfo = {
        name: 'tw',
        description: 'Taiwan (Republic of China)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    TZ: TopLevelDomainInfo = {
        name: 'tz',
        description: 'Tanzania (United Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    UA: TopLevelDomainInfo = {
        name: 'ua',
        description: 'Ukraine',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    UBANK: TopLevelDomainInfo = {
        name: 'ubank',
        description: 'National Australia Bank Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    UBS: TopLevelDomainInfo = {
        name: 'ubs',
        description: 'UBS AG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    UG: TopLevelDomainInfo = {
        name: 'ug',
        description: 'Uganda (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    UK: TopLevelDomainInfo = {
        name: 'uk',
        description: 'United Kingdom of Great Britain and Northern Ireland',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    UNICOM: TopLevelDomainInfo = {
        name: 'unicom',
        description: 'China United Network Communications Corporation Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    UNIVERSITY: TopLevelDomainInfo = {
        name: 'university',
        description: 'Little Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    UNO: TopLevelDomainInfo = {
        name: 'uno',
        description: 'Dot Latin LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    UOL: TopLevelDomainInfo = {
        name: 'uol',
        description: 'UBN INTERNET LTDA.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    UPS: TopLevelDomainInfo = {
        name: 'ups',
        description: 'UPS Market Driver, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    US: TopLevelDomainInfo = {
        name: 'us',
        description: 'United States of America',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    UY: TopLevelDomainInfo = {
        name: 'uy',
        description: 'Uruguay (Eastern Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    UZ: TopLevelDomainInfo = {
        name: 'uz',
        description: 'Uzbekistan (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    VA: TopLevelDomainInfo = {
        name: 'va',
        description: 'Holy See (Vatican City State)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    VACATIONS: TopLevelDomainInfo = {
        name: 'vacations',
        description: 'Atomic Tigers, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VANA: TopLevelDomainInfo = {
        name: 'vana',
        description: 'Lifestyle Domain Holdings, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VANGUARD: TopLevelDomainInfo = {
        name: 'vanguard',
        description: 'The Vanguard Group, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    VC: TopLevelDomainInfo = {
        name: 'vc',
        description: 'Saint Vincent and the Grenadines',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    VE: TopLevelDomainInfo = {
        name: 've',
        description: 'Venezuela (Bolivarian Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    VEGAS: TopLevelDomainInfo = {
        name: 'vegas',
        description: 'Dot Vegas, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VENTURES: TopLevelDomainInfo = {
        name: 'ventures',
        description: 'Binky Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VERISIGN: TopLevelDomainInfo = {
        name: 'verisign',
        description: 'VeriSign, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    VERSICHERUNG: TopLevelDomainInfo = {
        name: 'versicherung',
        description: 'TLD-BOX Registrydienstleistungen GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VET: TopLevelDomainInfo = {
        name: 'vet',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VG: TopLevelDomainInfo = {
        name: 'vg',
        description: 'Virgin Islands (British)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    VI: TopLevelDomainInfo = {
        name: 'vi',
        description: 'Virgin Islands (U.S.)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    VIAJES: TopLevelDomainInfo = {
        name: 'viajes',
        description: 'Black Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VIDEO: TopLevelDomainInfo = {
        name: 'video',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VIG: TopLevelDomainInfo = {
        name: 'vig',
        description: 'VIENNA INSURANCE GROUP AG Wiener Versicherung Gruppe',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VIKING: TopLevelDomainInfo = {
        name: 'viking',
        description: 'Viking River Cruises (Bermuda) Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    VILLAS: TopLevelDomainInfo = {
        name: 'villas',
        description: 'New Sky, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VIN: TopLevelDomainInfo = {
        name: 'vin',
        description: 'Holly Shadow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VIP: TopLevelDomainInfo = {
        name: 'vip',
        description: 'Minds + Machines Group Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VIRGIN: TopLevelDomainInfo = {
        name: 'virgin',
        description: 'Virgin Enterprises Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    VISA: TopLevelDomainInfo = {
        name: 'visa',
        description: 'Visa Worldwide Pte. Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    VISION: TopLevelDomainInfo = {
        name: 'vision',
        description: 'Koko Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VIVA: TopLevelDomainInfo = {
        name: 'viva',
        description: 'Saudi Telecom Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VIVO: TopLevelDomainInfo = {
        name: 'vivo',
        description: 'Telefonica Brasil S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VLAANDEREN: TopLevelDomainInfo = {
        name: 'vlaanderen',
        description: 'DNS.be vzw',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VN: TopLevelDomainInfo = {
        name: 'vn',
        description: 'Vietnam',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    VODKA: TopLevelDomainInfo = {
        name: 'vodka',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VOLKSWAGEN: TopLevelDomainInfo = {
        name: 'volkswagen',
        description: 'Volkswagen Group of America Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    VOLVO: TopLevelDomainInfo = {
        name: 'volvo',
        description: 'Volvo Holding Sverige Aktiebolag',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    VOTE: TopLevelDomainInfo = {
        name: 'vote',
        description: 'Monolith Registry LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VOTING: TopLevelDomainInfo = {
        name: 'voting',
        description: 'Valuetainment Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VOTO: TopLevelDomainInfo = {
        name: 'voto',
        description: 'Monolith Registry LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VOYAGE: TopLevelDomainInfo = {
        name: 'voyage',
        description: 'Ruby House, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    VU: TopLevelDomainInfo = {
        name: 'vu',
        description: 'Vanuatu (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    WALES: TopLevelDomainInfo = {
        name: 'wales',
        description: 'Nominet UK',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WALMART: TopLevelDomainInfo = {
        name: 'walmart',
        description: 'Wal-Mart Stores, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WALTER: TopLevelDomainInfo = {
        name: 'walter',
        description: 'Sandvik AB',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WANG: TopLevelDomainInfo = {
        name: 'wang',
        description: 'Zodiac Wang Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WANGGOU: TopLevelDomainInfo = {
        name: 'wanggou',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WATCH: TopLevelDomainInfo = {
        name: 'watch',
        description: 'Sand Shadow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WATCHES: TopLevelDomainInfo = {
        name: 'watches',
        description: 'Richemont DNS Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WEATHER: TopLevelDomainInfo = {
        name: 'weather',
        description: 'International Business Machines Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WEATHERCHANNEL: TopLevelDomainInfo = {
        name: 'weatherchannel',
        description: 'International Business Machines Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WEBCAM: TopLevelDomainInfo = {
        name: 'webcam',
        description: 'dot Webcam Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WEBER: TopLevelDomainInfo = {
        name: 'weber',
        description: 'Saint-Gobain Weber SA',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WEBSITE: TopLevelDomainInfo = {
        name: 'website',
        description: 'DotWebsite Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WED: TopLevelDomainInfo = {
        name: 'wed',
        description: 'Emergency Back-End Registry Operator Program - ICANN',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WEDDING: TopLevelDomainInfo = {
        name: 'wedding',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WEIBO: TopLevelDomainInfo = {
        name: 'weibo',
        description: 'Sina Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WEIR: TopLevelDomainInfo = {
        name: 'weir',
        description: 'Weir Group IP Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WF: TopLevelDomainInfo = {
        name: 'wf',
        description: 'Wallis and Futuna',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    WHOSWHO: TopLevelDomainInfo = {
        name: 'whoswho',
        description: 'Who\'s Who Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WIEN: TopLevelDomainInfo = {
        name: 'wien',
        description: 'punkt.wien GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WIKI: TopLevelDomainInfo = {
        name: 'wiki',
        description: 'Top Level Design, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WILLIAMHILL: TopLevelDomainInfo = {
        name: 'williamhill',
        description: 'William Hill Organization Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WIN: TopLevelDomainInfo = {
        name: 'win',
        description: 'First Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WINDOWS: TopLevelDomainInfo = {
        name: 'windows',
        description: 'Microsoft Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WINE: TopLevelDomainInfo = {
        name: 'wine',
        description: 'June Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WINNERS: TopLevelDomainInfo = {    
        name: 'winners',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WME: TopLevelDomainInfo = {
        name: 'wme',
        description: 'William Morris Endeavor Entertainment, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WOLTERSKLUWR: TopLevelDomainInfo = {
        name: 'wolterskluwer',
        description: 'Wolters Kluwer N.V.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WOODSIDE: TopLevelDomainInfo = {
        name: 'woodside',
        description: 'Woodside Petroleum Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WORK: TopLevelDomainInfo = {
        name: 'work',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WORKS: TopLevelDomainInfo = {
        name: 'works',
        description: 'Little Dynamite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WORLD: TopLevelDomainInfo = {
        name: 'world',
        description: 'Bitter Fields, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WOW: TopLevelDomainInfo = {
        name: 'wow',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    WS: TopLevelDomainInfo = {
        name: 'ws',
        description: 'Samoa (Independent State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    WTC: TopLevelDomainInfo = {
        name: 'wtc',
        description: 'World Trade Centers Association, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    WTF: TopLevelDomainInfo = {
        name: 'wtf',
        description: 'Hidden Way, LLC',
        public: true,
        category: TopLevelDomainCategory.FUN,
    };
    XBOX: TopLevelDomainInfo = {
        name: 'xbox',
        description: 'Microsoft Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    XEROX: TopLevelDomainInfo = {
        name: 'xerox',
        description: 'Xerox DNHC LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    XFINITY: TopLevelDomainInfo = {
        name: 'xfinity',
        description: 'Comcast IP Holdings I, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    XIHUAN: TopLevelDomainInfo = {
        name: '喜欢',
        description: 'QIHOO 360 TECHNOLOGY CO. LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XIN: TopLevelDomainInfo = {
        name: '新闻',
        description: 'Guangzhou YU Wei Information Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN11B4C3D: TopLevelDomainInfo = {
        name: 'कॉम',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN1CK2E1B: TopLevelDomainInfo = {
        name: 'セール',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN1QQW23A: TopLevelDomainInfo = {
        name: '佛山',
        description: 'Guangzhou YU Wei Information Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN2SCRJ9C: TopLevelDomainInfo = {
        name: 'ಭಾರತ',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN30RR7Y: TopLevelDomainInfo = {
        name: '慈善',
        description: 'Excellent First Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN3BST00M: TopLevelDomainInfo = {
        name: '集团',
        description: 'Eagle Horizon Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN3DS443G: TopLevelDomainInfo = {
        name: '在线',
        description: 'TLD REGISTRY LIMITED OY',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN3E0B707E: TopLevelDomainInfo = {
        name: '한국',
        description: 'KISA (Korea Internet &amp; Security Agency)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN3HCRJ9C: TopLevelDomainInfo = {
        name: 'ଭାରତ',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN3PXU8K: TopLevelDomainInfo = {
        name: 'ไทย',
        description: 'Thai Network Information Center Foundation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN42C2D9A: TopLevelDomainInfo = {
        name: '香港',
        description: 'Hong Kong Internet Registration Corporation Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN45BR5CYL: TopLevelDomainInfo = {
        name: '台湾',
        description: 'Taiwan Network Information Center (TWNIC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN45BRJ9C: TopLevelDomainInfo = {
        name: '台灣',
        description: 'Taiwan Network Information Center (TWNIC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN45Q11C: TopLevelDomainInfo = {
        name: '中文网',
        description: 'TLD REGISTRY LIMITED OY',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN4DBRK0CE: TopLevelDomainInfo = {
        name: '中信',
        description: 'CITIC Group Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN4GBRIM: TopLevelDomainInfo = {
        name: 'موقع',
        description: 'Suhub Electronic Establishment',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN54B7FTA0CC: TopLevelDomainInfo = {
        name: '企业',
        description: 'Dash McCook, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN55QW42G: TopLevelDomainInfo = {
        name: '香港',
        description: 'Hong Kong Internet Registration Corporation Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN55QX5D: TopLevelDomainInfo = {
        name: '公司',
        description: 'Computer Network Information Center of Chinese Academy of Sciences （China Internet Network Information Center）',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN5SU34J936BGSG: TopLevelDomainInfo = {
        name: '网店',
        description: 'Zodiac Aquarius Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN5TZM5G: TopLevelDomainInfo = {
        name: '移动',
        description: 'Afilias plc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN6FRZ82G: TopLevelDomainInfo = {
        name: '我爱你',
        description: 'Tycoon Treasure Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN6QQ986B3XL: TopLevelDomainInfo = {
        name: '政务',
        description: 'China Organizational Name Administration Center',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN80ADXHKS: TopLevelDomainInfo = {
        name: 'москва',
        description: 'ICM Registry LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN80AO21A: TopLevelDomainInfo = {
        name: 'қаз',
        description: 'Association of IT Companies of Kazakhstan',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN80AQECDR1A: TopLevelDomainInfo = {
        name: 'католик',
        description: 'Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN80ASEHDB: TopLevelDomainInfo = {
        name: 'онлайн',
        description: 'CORE Association',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN80ASWG: TopLevelDomainInfo = {
        name: 'сайт',
        description: 'CORE Association',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN8Y0A063A: TopLevelDomainInfo = {
        name: '联通',
        description: 'China United Network Communications Corporation Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN90A3AC: TopLevelDomainInfo = {
        name: 'срб',
        description: 'Serbian National Internet Domain Registry (RNIDS)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN90AE: TopLevelDomainInfo = {
        name: 'бг',
        description: 'Imena.BG AD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN90AIS: TopLevelDomainInfo = {
        name: 'бел',
        description: 'Reliable Software, Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN9DBQ2A: TopLevelDomainInfo = {
        name: 'קום',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN9ET52U: TopLevelDomainInfo = {
        name: '时尚',
        description: 'RISE VICTORY LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XN9KRT00A: TopLevelDomainInfo = {
        name: '微博',
        description: 'Sina Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNB4W605FERD: TopLevelDomainInfo = {
        name: '淡马锡',
        description: 'Temasek Holdings (Private) Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNBCK1B9A5DRE4C: TopLevelDomainInfo = {
        name: 'ファッション',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNC1AVG: TopLevelDomainInfo = {
        name: 'орг',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNC2BR7G : TopLevelDomainInfo = {
        name: 'नेट',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNCCK2B3B: TopLevelDomainInfo = {
        name: 'ストア',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNCCKWCXETD: TopLevelDomainInfo = {
        name: 'ポイント',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNCG4BKI: TopLevelDomainInfo = {
        name: '삼성',
        description: 'SAMSUNG SDS CO., LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNCLCHC0EA0B2G2A9GCD: TopLevelDomainInfo = {
        name: 'சிங்கப்பூர்',
        description: 'Singapore Network Information Centre (SGNIC) Pte Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNCZR694B: TopLevelDomainInfo = {
        name: '商标',
        description: 'HU YI GLOBAL INFORMATION RESOURCES(HOLDING) COMPANY.HONGKONG LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNCZRS0T: TopLevelDomainInfo = {
        name: '商店',
        description: 'Wild Island, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNCZRU2D: TopLevelDomainInfo = {
        name: '商城',
        description: 'Zodiac Aquarius Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XND1ACJ3B: TopLevelDomainInfo = {
        name: 'дети',
        description: 'The Foundation for Network Initiatives “The Smart Internet”',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XND1ALF: TopLevelDomainInfo = {
        name: 'мкд',
        description: 'Macedonian Academic Research Network Skopje',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNE1A4C: TopLevelDomainInfo = {
        name: 'ею',
        description: 'EURid vzw/asbl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNECKVDTC9D: TopLevelDomainInfo = {
        name: 'ポルテ',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNEFVY88H: TopLevelDomainInfo = {
        name: '新闻',
        description: 'Guangzhou YU Wei Information Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFCT429K: TopLevelDomainInfo = {
        name: '工行',
        description: 'Industrial and Commercial Bank of China Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFHBEI: TopLevelDomainInfo = {
        name: 'كوم',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFIQ228C5HS: TopLevelDomainInfo = {
        name: '中文网',
        description: 'TLD REGISTRY LIMITED OY',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFIQ64B: TopLevelDomainInfo = {
        name: '中信',
        description: 'CITIC Group Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFIQS8S: TopLevelDomainInfo = {
        name: '中国',
        description: 'China Internet Network Information Center (CNNIC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFIQZ9S: TopLevelDomainInfo = {
        name: '中國',
        description: 'China Internet Network Information Center (CNNIC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFJQ720A: TopLevelDomainInfo = {
        name: '嘉里大酒店',
        description: 'Kerry Trading Co. Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFLW351E: TopLevelDomainInfo = {
        name: '電訊盈科',
        description: 'PCCW Enterprises Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFPCRJ9C3D: TopLevelDomainInfo = {
        name: '购物',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFZC2C9E2C: TopLevelDomainInfo = {
        name: 'クラウド',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNFZYS8D69UVGM: TopLevelDomainInfo = {
        name: '通販',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNG2XX48C: TopLevelDomainInfo = {
        name: '网店',
        description: 'Zodiac Aquarius Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNGCKR3F0F: TopLevelDomainInfo = {
        name: 'संगठन',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNGECRJ9C: TopLevelDomainInfo = {
        name: 'คอม',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNGK3AT1E: TopLevelDomainInfo = {
        name: 'みんな',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNH2BREG3EVE: TopLevelDomainInfo = {
        name: 'グーグル',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNH2BRJ9C: TopLevelDomainInfo = {
        name: '世界',
        description: 'Stable Tone Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNH2BRJ9C8C: TopLevelDomainInfo = {
        name: '書籍',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNHXT814E: TopLevelDomainInfo = {
        name: '网址',
        description: 'KNET Co., Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNI1B6B1A6A2E: TopLevelDomainInfo = {
        name: '닷컴',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNIMR513N: TopLevelDomainInfo = {
        name: '政府',
        description: 'Net-Chinese Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNIO0A7I: TopLevelDomainInfo = {
        name: '삼성',
        description: 'SAMSUNG SDS CO., LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNJ1AEF: TopLevelDomainInfo = {
        name: 'சிங்கப்பூர்',
        description: 'Singapore Network Information Centre (SGNIC) Pte Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNJ1AMH: TopLevelDomainInfo = {
        name: 'ලංකා',
        description: 'LK Domain Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNJ6W193G: TopLevelDomainInfo = {
        name: '集团',
        description: 'Eagle Horizon Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNJLQ480N2RG: TopLevelDomainInfo = {
        name: '在线',
        description: 'TLD REGISTRY LIMITED OY',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNJVR189M: TopLevelDomainInfo = {
        name: '한국',
        description: 'KISA (Korea Internet &amp; Security Agency)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNKCRX77D1X4A: TopLevelDomainInfo = {
        name: '八卦',
        description: 'Zodiac Scorpio Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNKPRW13D: TopLevelDomainInfo = {
        name: 'موقع',
        description: 'Suhub Electronic Establishment',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNKPRY57D: TopLevelDomainInfo = {
        name: 'موقع',
        description: 'Suhub Electronic Establishment',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNKPUT3I: TopLevelDomainInfo = {
        name: 'বাংলা',
        description: 'Posts and Telecommunications Division',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNL1ACC: TopLevelDomainInfo = {
        name: 'укр',
        description: 'Ukrainian Network Information Centre (UANIC), Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNLGBBAT1AD8J: TopLevelDomainInfo = {
        name: 'مليسيا',
        description: 'MYNIC Berhad',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGB9AWBF: TopLevelDomainInfo = {
        name: 'المغرب',
        description: 'Agence Nationale de Réglementation des Télécommunications (ANRT)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBA3A3EJT: TopLevelDomainInfo = {
        name: 'ابوظبي',
        description: 'Abu Dhabi Systems and Information Centre',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBA3A4F16A: TopLevelDomainInfo = {
        name: 'السعودية',
        description: 'Communications and Information Technology Commission',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBA7C0BBN0A: TopLevelDomainInfo = {
        name: 'سودان',
        description: 'Sudan Internet Society',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBAAKC7DVF: TopLevelDomainInfo = {
        name: 'همراه',
        description: 'Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBAAM7A8H: TopLevelDomainInfo = {
        name: 'عرب',
        description: 'League of Arab States',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBAB2BD: TopLevelDomainInfo = {
        name: 'ارامكو',
        description: 'Aramco Services Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBAH1A3HJKRD: TopLevelDomainInfo = {
        name: 'ایران',
        description: 'Institute for Research in Fundamental Sciences (IPM)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBAI9AZGQP6J: TopLevelDomainInfo = {
        name: 'العليان',
        description: 'Crescent Holding GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBAYH7GPA: TopLevelDomainInfo = {
        name: 'اتصالات',
        description: 'Emirates Telecommunications Corporation (trading as Etisalat)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBBH1A: TopLevelDomainInfo = {
        name: 'بازار',
        description: 'CORE Association',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBBH1A71E: TopLevelDomainInfo = {
        name: 'موريتانيا',
        description: 'Université de Nouakchott Al Aasriya',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBC0A9AZCG: TopLevelDomainInfo = {
        name: 'پاکستان',
        description: 'National Telecommunication Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBCA7DZDO: TopLevelDomainInfo = {
        name: 'الاردن',
        description: 'National Information Technology Center (NITC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBCPQ6GPA1A: TopLevelDomainInfo = {
        name: 'موبايلي',
        description: 'GreenTech Consultancy Company W.L.L.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBERP4A5D4AR: TopLevelDomainInfo = {
        name: 'بارت',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBGU82A: TopLevelDomainInfo = {
        name: 'بھارت',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBI4ECEXP: TopLevelDomainInfo = {
        name: 'المغرب',
        description: 'Agence Nationale de Réglementation des Télécommunications (ANRT)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBPL2FH: TopLevelDomainInfo = {
        name: 'السعودية',
        description: 'Communications and Information Technology Commission',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBT3DHD: TopLevelDomainInfo = {
        name: 'ڀارت',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBTX2B: TopLevelDomainInfo = {
        name: 'مصر',
        description: 'National Telecommunication Regulatory Authority - NTRA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMGBX4CD0AB: TopLevelDomainInfo = {
        name: 'قطر',
        description: 'Communications Regulatory Authority',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMIX891F: TopLevelDomainInfo = {
        name: 'இலங்கை',
        description: 'LK Domain Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMK1BU44C: TopLevelDomainInfo = {
        name: 'இந்தியா',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNMXTQ1M: TopLevelDomainInfo = {
        name: 'آزمایشی',
        description: 'Internet Assigned Numbers Authority',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNNGBC5AZD: TopLevelDomainInfo = {
        name: 'الجزائر',
        description: 'CERIST',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNNGBE9E0A: TopLevelDomainInfo = {
        name: 'عمان',
        description: 'Telecommunications Regulatory Authority (TRA)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNNGBRX: TopLevelDomainInfo = {
        name: 'ارامكو',
        description: 'Aramco Services Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNNODE: TopLevelDomainInfo = {
        name: 'გე',
        description: 'Information Technologies Development Center (ITDC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNNQV7F: TopLevelDomainInfo = {
        name: '机构',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNNQV7FS00EMA: TopLevelDomainInfo = {
        name: '组织机构',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNNYQY26A: TopLevelDomainInfo = {
        name: '健康',
        description: 'Stable Tone Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNO3CW4H: TopLevelDomainInfo = {
        name: 'ไทย',
        description: 'Thai Network Information Center Foundation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNOGBPF8FL: TopLevelDomainInfo = {
        name: 'سورية',
        description: 'National Agency for Network Services (NANS)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNOTU796D: TopLevelDomainInfo = {
        name: '招聘',
        description: 'Dot Trademark TLD Holding Company Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNP1ACF: TopLevelDomainInfo = {
        name: 'рус',
        description: 'Rusnames Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNP1AI: TopLevelDomainInfo = {
        name: 'рф',
        description: 'Coordination Center for TLD RU',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNPGBS0DH: TopLevelDomainInfo = {
        name: 'بيتك',
        description: 'Kuwait Finance House',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNPSSY2U: TopLevelDomainInfo = {
        name: '机构',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNQ7CE6A: TopLevelDomainInfo = {
        name: 'グーグル',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNQ9JYB4C: TopLevelDomainInfo = {
        name: '삼성',
        description: 'SAMSUNG SDS CO., LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNQCKA1PMC: TopLevelDomainInfo = {
        name: 'ഭാരതം',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNQXA6A: TopLevelDomainInfo = {
        name: '广东',
        description: 'Guangzhou YU Wei Information Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNQXAM: TopLevelDomainInfo = {
        name: 'இலங்கை',
        description: 'LK Domain Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNRHQV96G: TopLevelDomainInfo = {
        name: 'இந்தியா',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNROVU88B: TopLevelDomainInfo = {
        name: 'ભારત',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNRVC1E0AM3E: TopLevelDomainInfo = {
        name: 'ಭಾರತ',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNS9BRJ9C: TopLevelDomainInfo = {
        name: 'ਭਾਰਤ',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNSES554G: TopLevelDomainInfo = {
        name: '网址',
        description: 'KNET Co., Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNT60B56A: TopLevelDomainInfo = {
        name: '닷넷',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNTCKWE: TopLevelDomainInfo = {
        name: 'コム',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNTIQ49XQYJ: TopLevelDomainInfo = {
        name: '天主教',
        description: 'Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNUNUP4Y: TopLevelDomainInfo = {
        name: '游戏',
        description: 'Spring Fields, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNVERMGENSBERATERCTB: TopLevelDomainInfo = {
        name: 'vermögensberater',
        description: 'Deutsche Vermögensberatung Aktiengesellschaft DVAG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNVERMGENSBERATUNGPWB: TopLevelDomainInfo = {
        name: 'vermögensberatung',
        description: 'Deutsche Vermögensberatung Aktiengesellschaft DVAG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNVHQUV: TopLevelDomainInfo = {
        name: '企业',
        description: 'Dash McCook, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNVUQ861B: TopLevelDomainInfo = {
        name: '信息',
        description: 'Beijing Tele-info Network Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNW4R85EL8FHU5DNRA: TopLevelDomainInfo = {
        name: '嘉里大酒店',
        description: 'Kerry Trading Co. Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNW4RS40L: TopLevelDomainInfo = {
        name: '嘉里',
        description: 'Kerry Trading Co. Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNWGBH1C: TopLevelDomainInfo = {
        name: '通販',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNWGBL6A: TopLevelDomainInfo = {
        name: 'みんな',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNXHQ521B: TopLevelDomainInfo = {
        name: '网店',
        description: 'Zodiac Aquarius Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNXKC2AL3HYE2A: TopLevelDomainInfo = {
        name: 'संगठन',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNXKC2DL3A5EE0H: TopLevelDomainInfo = {
        name: '餐厅',
        description: 'HU YI GLOBAL INFORMATION RESOURCES (HOLDING) COMPANY. HONGKONG LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNY9A3AQ: TopLevelDomainInfo = {
        name: '网络',
        description: 'Computer Network Information Center of Chinese Academy of Sciences （China Internet Network Information Center）',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNYFRO4I67O: TopLevelDomainInfo = {
        name: '新加坡',
        description: 'Sahara India Pariwar',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNYGBI2AMMX: TopLevelDomainInfo = {
        name: 'فلسطين',
        description: 'Alibaba Group Holding Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XNZFR164B: TopLevelDomainInfo = {
        name: '政务',
        description: 'TLD registry limited to registration of Hebrew domain names',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    XXX: TopLevelDomainInfo = {
        name: 'xxx',
        description: 'Adult entertainment',
        public: true,
        category: TopLevelDomainCategory.SEXUAL,
    };
    XYZ: TopLevelDomainInfo = {
        name: 'xyz',
        description: 'XYZ.COM LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    YACHTS: TopLevelDomainInfo = {
        name: 'yachts',
        description: 'DERYachts, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    YAHOO: TopLevelDomainInfo = {
        name: 'yahoo',
        description: 'Yahoo! Domain Services Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    YAMAXUN: TopLevelDomainInfo = {
        name: 'yamaxun',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    YANDEX: TopLevelDomainInfo = {
        name: 'yandex',
        description: 'YANDEX, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    YE: TopLevelDomainInfo = {
        name: 'ye',
        description: 'Yemen (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    YODOBASHI: TopLevelDomainInfo = {
        name: 'yodobashi',
        description: 'YODOBASHI CAMERA CO.,LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    YOGA: TopLevelDomainInfo = {
        name: 'yoga',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    YOKOHAMA: TopLevelDomainInfo = {
        name: 'yokohama',
        description: 'GMO Registry, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    YOU: TopLevelDomainInfo = {
        name: 'you',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    YOUTUBE: TopLevelDomainInfo = {
        name: 'youtube',
        description: 'Charleston Road Registry Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    YT: TopLevelDomainInfo = {
        name: 'yt',
        description: 'Mayotte (Department of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    YUN: TopLevelDomainInfo = {
        name: 'yun',
        description: 'QIHOO 360 TECHNOLOGY CO. LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ZA: TopLevelDomainInfo = {
        name: 'za',
        description: 'South Africa (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ZAPPOS: TopLevelDomainInfo = {
        name: 'zappos',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ZARA: TopLevelDomainInfo = {
        name: 'zara',
        description: 'Industria de Diseño Textil, S.A. (INDITEX, S.A.)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    };
    ZERO: TopLevelDomainInfo = {
        name: 'zero',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ZIP: TopLevelDomainInfo = {
        name: 'zip',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ZM: TopLevelDomainInfo = {
        name: 'zm',
        description: 'Zambia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ZONE: TopLevelDomainInfo = {
        name: 'zone',
        description: 'Outer Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    };
    ZUERICH: TopLevelDomainInfo = {
        name: 'zuerich',
        description: 'Kanton Zürich (Canton of Zurich)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };
    ZW: TopLevelDomainInfo = {
        name: 'zw',
        description: 'Zimbabwe (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    };

    getTLDInfo(tld: string): TopLevelDomainInfo | undefined {
        return this.getTLDInfos().find(tldInfo => tldInfo.name === String(tld).toLowerCase());
    }

    getTLDInfos(): Array<TopLevelDomainInfo> {
        return [
            this.AAA,
            this.AARP,
            this.ABB,
            this.ABBOTT,
            this.ABBVIE,
            this.ABC,
            this.ABLE,
            this.ABOGADO,
            this.ABUDHABI,
            this.AC,
            this.ACADEMY,
            this.ACCENTURE,
            this.ACCOUNTANT,
            this.ACCOUNTANTS,
            this.ACO,
            this.ACTOR,
            this.AD,
            this.ADS,
            this.ADULT,
            this.AE,
            this.AEG,
            this.AERO,
            this.AETNA,
            this.AF,
            this.AFL,
            this.AFRICA,
            this.AG,
            this.AGAKHAN,
            this.AGENCY,
            this.AI,
            this.AIG,
            this.AIRBUS,
            this.AIRFORCE,
            this.AIRTEL,
            this.AKDN,
            this.AL,
            this.ALIBABA,
            this.ALIPAY,
            this.ALLFINANZ,
            this.ALLSTATE,
            this.ALLY,
            this.ALSACE,
            this.ALSTOM,
            this.AM,
            this.AMAZON,
            this.AMERICANEXPRESS,
            this.AMERICANFAMILY,
            this.AMEX,
            this.AMFAM,
            this.AMICA,
            this.AMSTERDAM,
            this.ANALYTICS,
            this.ANDROID,
            this.ANQUAN,
            this.ANZ,
            this.AO,
            this.AOL,
            this.APARTMENTS,
            this.APP,
            this.APPLE,
            this.AQ,
            this.AQUARELLE,
            this.AR,
            this.ARAB,
            this.ARAMCO,
            this.ARCHI,
            this.ARMY,
            this.ARPA,
            this.ART,
            this.ARTE,
            this.AS,
            this.ASDA,
            this.ASIA,
            this.ASSOCIATES,
            this.AT,
            this.ATHLETA,
            this.ATTORNEY,
            this.AU,
            this.AUCTION,
            this.AUDI,
            this.AUDIBLE,
            this.AUDIO,
            this.AUSPOST,
            this.AUTHOR,
            this.AUTO,
            this.AUTOS,
            this.AVIANCA,
            this.AW,
            this.AWS,
            this.AX,
            this.AXA,
            this.AZ,
            this.AZURE,
            this.BA,
            this.BABY,
            this.BAIDU,
            this.BANAMEX,
            this.BANANAREPUBLIC,
            this.BAND,
            this.BANK,
            this.BAR,
            this.BARCELONA,
            this.BARCLAYCARD,
            this.BARCLAYS,
            this.BAREFOOT,
            this.BARGAINS,
            this.BASEBALL,
            this.BASKETBALL,
            this.BAUHAUS,
            this.BAYERN,
            this.BB,
            this.BBC,
            this.BBT,
            this.BBVA,
            this.BCG,
            this.BCN,
            this.BD,
            this.BE,
            this.BEATS,
            this.BEAUTY,
            this.BEER,
            this.BENTLEY,
            this.BERLIN,
            this.BEST,
            this.BESTBUY,
            this.BET,
            this.BF,
            this.BG,
            this.BH,
            this.BHARTI,
            this.BI,
            this.BIBLE,
            this.BID,
            this.BIKE,
            this.BING,
            this.BINGO,
            this.BIO,
            this.BIZ,
            this.BJ,
            this.BLACK,
            this.BLACKFRIDAY,
            this.BLOCKBUSTER,
            this.BLOG,
            this.BLOOMBERG,
            this.BLUE,
            this.BM,
            this.BMS,
            this.BMW,
            this.BN,
            this.BNPPARIBAS,
            this.BO,
            this.BOATS,
            this.BOEHRINGER,
            this.BOFA,
            this.BOM,
            this.BOND,
            this.BOO,
            this.BOOK,
            this.BOOKING,
            this.BOSCH,
            this.BOSTIK,
            this.BOSTON,
            this.BOT,
            this.BOUTIQUE,
            this.BOX,
            this.BR,
            this.BRADESCO,
            this.BRIDGESTONE,
            this.BROADWAY,
            this.BROKER,
            this.BROTHER,
            this.BRUSSELS,
            this.BS,
            this.BT,
            this.BUILD,
            this.BUILDERS,
            this.BUSINESS,
            this.BUY,
            this.BUZZ,
            this.BV,
            this.BW,
            this.BY,
            this.BZ,
            this.BZH,
            this.CA,
            this.CAB,
            this.CAFE,
            this.CAL,
            this.CALL,
            this.CALVINKLEIN,
            this.CAM,
            this.CAMERA,
            this.CAMP,
            this.CANON,
            this.CAPETOWN,
            this.CAPITAL,
            this.CAPITALONE,
            this.CAR,
            this.CARAVAN,
            this.CARDS,
            this.CARE,
            this.CAREER,
            this.CAREERS,
            this.CARS,
            this.CASA,
            this.CASE,
            this.CASH,
            this.CASINO,
            this.CAT,
            this.CATERING,
            this.CATHOLIC,
            this.CBA,
            this.CBN,
            this.CBRE,
            this.CC,
            this.CD,
            this.CENTER,
            this.CEO,
            this.CERN,
            this.CF,
            this.CFA,
            this.CFD,
            this.CG,
            this.CH,
            this.CHANEL,
            this.CHANNEL,
            this.CHARITY,
            this.CHASE,
            this.CHAT,
            this.CHEAP,
            this.CHINTAI,
            this.CHRISTMAS,
            this.CHROME,
            this.CHURCH,
            this.CI,
            this.CIPRIANI,
            this.CIRCLE,
            this.CISCO,
            this.CITADEL,
            this.CITI,
            this.CITIC,
            this.CITY,
            this.CK,
            this.CL,
            this.CLAIMS,
            this.CLEANING,
            this.CLICK,
            this.CLINIC,
            this.CLINIQUE,
            this.CLOTHING,
            this.CLOUD,
            this.CLUB,
            this.CLUBMED,
            this.CM,
            this.CN,
            this.CO,
            this.COACH,
            this.CODES,
            this.COFFEE,
            this.COLLEGE,
            this.COLOGNE,
            this.COM,
            this.COMCAST,
            this.COMMBANK,
            this.COMMUNITY,
            this.COMPANY,
            this.COMPARE,
            this.COMPUTER,
            this.COMSEC,
            this.CONDOS,
            this.CONSTRUCTION,
            this.CONSULTING,
            this.CONTACT,
            this.CONTRACTORS,
            this.COOKING,
            this.COOL,
            this.COOP,
            this.CORSICA,
            this.COUNTRY,
            this.COUPON,
            this.COUPONS,
            this.COURSES,
            this.CPA,
            this.CR,
            this.CREDIT,
            this.CREDITCARD,
            this.CREDITUNION,
            this.CRICKET,
            this.CROWN,
            this.CRS,
            this.CRUISE,
            this.CRUISES,
            this.CU,
            this.CUISINELLA,
            this.CV,
            this.CW,
            this.CX,
            this.CY,
            this.CYMRU,
            this.CYOU,
            this.CZ,
            this.DABUR,
            this.DAD,
            this.DANCE,
            this.DATA,
            this.DATE,
            this.DATING,
            this.DATSUN,
            this.DAY,
            this.DCLK,
            this.DDS,
            this.DE,
            this.DEAL,
            this.DEALER,
            this.DEALS,
            this.DEGREE,
            this.DELIVERY,
            this.DELL,
            this.DELOITTE,
            this.DELTA,
            this.DEMOCRAT,
            this.DENTAL,
            this.DENTIST,
            this.DESI,
            this.DESIGN,
            this.DEV,
            this.DHL,
            this.DIAMONDS,
            this.DIET,
            this.DIGITAL,
            this.DIRECT,
            this.DIRECTORY,
            this.DISCOUNT,
            this.DISCOVER,
            this.DISH,
            this.DIY,
            this.DJ,
            this.DK,
            this.DM,
            this.DNP,
            this.DO,
            this.DOCS,
            this.DOCTOR,
            this.DOG,
            this.DOMAINS,
            this.DOT,
            this.DOWNLOAD,
            this.DRIVE,
            this.DTV,
            this.DUBAI,
            this.DUNLOP,
            this.DUPONT,
            this.DURBAN,
            this.DVAG,
            this.DVR,
            this.DZ,
            this.EARTH,
            this.EAT,
            this.EC,
            this.ECO,
            this.EDEKA,
            this.EDU,
            this.EDUCATION,
            this.EE,
            this.EG,
            this.EMAIL,
            this.EMERCK,
            this.ENERGY,
            this.ENGINEER,
            this.ENGINEERING,
            this.ENTERPRISES,
            this.EPSON,
            this.EQUIPMENT,
            this.ER,
            this.ERICSSON,
            this.ERNI,
            this.ES,
            this.ESQ,
            this.ESTATE,
            this.ET,
            this.ETISALAT,
            this.EU,
            this.EUROVISION,
            this.EUS,
            this.EVENTS,
            this.EXCHANGE,
            this.EXPERT,
            this.EXPOSED,
            this.EXPRESS,
            this.EXTRASPACE,
            this.FAGE,
            this.FAIL,
            this.FAIRWINDS,
            this.FAITH,
            this.FAMILY,
            this.FAN,
            this.FANS,
            this.FARM,
            this.FARMERS,
            this.FASHION,
            this.FAST,
            this.FEDEX,
            this.FEEDBACK,
            this.FERRARI,
            this.FERRERO,
            this.FI,
            this.FIDELITY,
            this.FIDO,
            this.FILM,
            this.FINAL,
            this.FINANCE,
            this.FINANCIAL,
            this.FIRE,
            this.FIRESTONE,
            this.FIRMDALE,
            this.FISH,
            this.FISHING,
            this.FIT,
            this.FITNESS,
            this.FJ,
            this.FK,
            this.FLICKR,
            this.FLIGHTS,
            this.FLIR,
            this.FLORIST,
            this.FLOWERS,
            this.FLY,
            this.FM,
            this.FO,
            this.FOO,
            this.FOOD,
            this.FOOTBALL,
            this.FORD,
            this.FOREX,
            this.FORSALE,
            this.FORUM,
            this.FOUNDATION,
            this.FOX,
            this.FR,
            this.FREE,
            this.FRESENIUS,
            this.FRL,
            this.FROGANS,
            this.FRONTIER,
            this.FTR,
            this.FUJITSU,
            this.FUN,
            this.FUND,
            this.FURNITURE,
            this.FUTBOL,
            this.FYI,
            this.GA,
            this.GAL,
            this.GALLERY,
            this.GALLO,
            this.GALLUP,
            this.GAME,
            this.GAMES,
            this.GAP,
            this.GARDEN,
            this.GAY,
            this.GB,
            this.GBIZ,
            this.GD,
            this.GDN,
            this.GE,
            this.GEA,
            this.GENT,
            this.GENTING,
            this.GEORGE,
            this.GF,
            this.GG,
            this.GGEE,
            this.GH,
            this.GI,
            this.GIFT,
            this.GIFTS,
            this.GIVES,
            this.GIVING,
            this.GL,
            this.GLASS,
            this.GLE,
            this.GLOBAL,
            this.GLOBO,
            this.GM,
            this.GMAIL,
            this.GMBH,
            this.GMO,
            this.GMX,
            this.GN,
            this.GODADDY,
            this.GOLD,
            this.GOLDPOINT,
            this.GOLF,
            this.GOO,
            this.GOODYEAR,
            this.GOOG,
            this.GOOGLE,
            this.GOP,
            this.GOT,
            this.GOV,
            this.GP,
            this.GQ,
            this.GR,
            this.GRAINGER,
            this.GRAPHICS,
            this.GRATIS,
            this.GREEN,
            this.GRIPE,
            this.GROCERY,
            this.GROUP,
            this.GS,
            this.GT,
            this.GU,
            this.GUARDIAN,
            this.GUCCI,
            this.GUGE,
            this.GUIDE,
            this.GUITARS,
            this.GURU,
            this.GW,
            this.GY,
            this.HAIR,
            this.HAMBURG,
            this.HANGOUT,
            this.HAUS,
            this.HBO,
            this.HDFC,
            this.HDFCBANK,
            this.HEALTH,
            this.HEALTHCARE,
            this.HELP,
            this.HELSINKI,
            this.HERE,
            this.HERMES,
            this.HIPHOP,
            this.HISAMITSU,
            this.HITACHI,
            this.HIV,
            this.HK,
            this.HKT,
            this.HM,
            this.HN,
            this.HOCKEY,
            this.HOLDINGS,
            this.HOLIDAY,
            this.HOMEDEPOT,
            this.HOMEGOODS,
            this.HOMES,
            this.HOMESENSE,
            this.HONDA,
            this.HORSE,
            this.HOSPITAL,
            this.HOST,
            this.HOSTING,
            this.HOT,
            this.HOTELS,
            this.HOTMAIL,
            this.HOUSE,
            this.HOW,
            this.HR,
            this.HSBC,
            this.HT,
            this.HU,
            this.HUGHES,
            this.HYATT,
            this.HYUNDAI,
            this.IBM,
            this.ICBC,
            this.ICE,
            this.ICU,
            this.ID,
            this.IE,
            this.IEEE,
            this.IFM,
            this.IKANO,
            this.IL,
            this.IM,
            this.IMAMAT,
            this.IMDB,
            this.IMMO,
            this.IMMOBILIEN,
            this.IN,
            this.INC,
            this.INDUSTRIES,
            this.INFINITI,
            this.INFO,
            this.ING,
            this.INK,
            this.INSTITUTE,
            this.INSURANCE,
            this.INSURE,
            this.INT,
            this.INTERNATIONAL,
            this.INTUIT,
            this.INVESTMENTS,
            this.IO,
            this.IPIRANGA,
            this.IQ,
            this.IR,
            this.IRISH,
            this.IS,
            this.ISMAILI,
            this.IST,
            this.ISTANBUL,
            this.IT,
            this.ITAU,
            this.ITV,
            this.JAGUAR,
            this.JAVA,
            this.JCB,
            this.JE,
            this.JEEP,
            this.JETZT,
            this.JEWELRY,
            this.JIO,
            this.JLL,
            this.JM,
            this.JMP,
            this.JNJ,
            this.JO,
            this.JOBS,
            this.JOBURG,
            this.JOT,
            this.JOY,
            this.JP,
            this.JPMORGAN,
            this.JPRS,
            this.JUEGOS,
            this.JUNIPER,
            this.KAUFEN,
            this.KDDI,
            this.KE,
            this.KERRYHOTELS,
            this.KERRYLOGISTICS,
            this.KERRYPROPERTIES,
            this.KFH,
            this.KG,
            this.KH,
            this.KI,
            this.KIA,
            this.KIDS,
            this.KIM,
            this.KINDER,
            this.KINDLE,
            this.KITCHEN,
            this.KIWI,
            this.KM,
            this.KN,
            this.KOELN,
            this.KOMATSU,
            this.KOSHER,
            this.KP,
            this.KPMG,
            this.KPN,
            this.KR,
            this.KRD,
            this.KRED,
            this.KUOKGROUP,
            this.KW,
            this.KY,
            this.KYOTO,
            this.KZ,
            this.LA,
            this.LACAIXA,
            this.LAMBORGHINI,
            this.LAMER,
            this.LANCASTER,
            this.LAND,
            this.LANDROVER,
            this.LANXESS,
            this.LASALLE,
            this.LAT,
            this.LATINO,
            this.LATROBE,
            this.LAW,
            this.LAWYER,
            this.LB,
            this.LC,
            this.LDS,
            this.LEASE,
            this.LECLERC,
            this.LEFRAK,
            this.LEGAL,
            this.LEGO,
            this.LEXUS,
            this.LGBT,
            this.LI,
            this.LIDL,
            this.LIFE,
            this.LIFEINSURANCE,
            this.LIFESTYLE,
            this.LIGHTING,
            this.LIKE,
            this.LILLY,
            this.LIMITED,
            this.LIMO,
            this.LINCOLN,
            this.LINK,
            this.LIPSY,
            this.LIVE,
            this.LIVING,
            this.LK,
            this.LLC,
            this.LLP,
            this.LOAN,
            this.LOANS,
            this.LOCKER,
            this.LOCUS,
            this.LOL,
            this.LONDON,
            this.LOTTE,
            this.LOTTO,
            this.LOVE,
            this.LPL,
            this.LPLFINANCIAL,
            this.LR,
            this.LS,
            this.LT,
            this.LTD,
            this.LTDA,
            this.LU,
            this.LUNDBECK,
            this.LUXE,
            this.LUXURY,
            this.LV,
            this.LY,
            this.MA,
            this.MADRID,
            this.MAIF,
            this.MAISON,
            this.MAKEUP,
            this.MANAGEMENT,
            this.MANGO,
            this.MAP,
            this.MARKET,
            this.MARKETING,
            this.MARKETS,
            this.MARRIOTT,
            this.MARSHALLS,
            this.MATTEL,
            this.MBA,
            this.MC,
            this.MCKINSEY,
            this.MD,
            this.ME,
            this.MED,
            this.MEDIA,
            this.MEET,
            this.MELBOURNE,
            this.MEME,
            this.MEMORIAL,
            this.MEN,
            this.MENU,
            this.MERCKMSD,
            this.MG,
            this.MH,
            this.MIAMI,
            this.MICROSOFT,
            this.MIL,
            this.MINI,
            this.MINT,
            this.MIT,
            this.MITSUBISHI,
            this.MK,
            this.ML,
            this.MLB,
            this.MLS,
            this.MM,
            this.MMA,
            this.MN,
            this.MO,
            this.MOBI,
            this.MOBILE,
            this.MODA,
            this.MOE,
            this.MOI,
            this.MOM,
            this.MONASH,
            this.MONEY,
            this.MONSTER,
            this.MORMON,
            this.MORTGAGE,
            this.MOSCOW,
            this.MOTO,
            this.MOTORCYCLES,
            this.MOV,
            this.MOVIE,
            this.MP,
            this.MQ,
            this.MR,
            this.MS,
            this.MSD,
            this.MT,
            this.MTR,
            this.MU,
            this.MUSEUM,
            this.MUSIC,
            this.MV,
            this.MW,
            this.MX,
            this.MY,
            this.MZ,
            this.NA,
            this.NAB,
            this.NAGOYA,
            this.NAME,
            this.NATURA,
            this.NAVY,
            this.NBA,
            this.NC,
            this.NE,
            this.NEC,
            this.NET,
            this.NETBANK,
            this.NETFLIX,
            this.NETWORK,
            this.NEUSTAR,
            this.NEW,
            this.NEWS,
            this.NEXT,
            this.NEXTDIRECT,
            this.NEXUS,
            this.NF,
            this.NFL,
            this.NG,
            this.NGO,
            this.NHK,
            this.NI,
            this.NICO,
            this.NIKON,
            this.NINJA,
            this.NISSAN,
            this.NL,
            this.NO,
            this.NOKIA,
            this.NORTON,
            this.NOW,
            this.NOWRUZ,
            this.NOWTV,
            this.NP,
            this.NR,
            this.NRA,
            this.NRW,
            this.NTT,
            this.NU,
            this.NYC,
            this.NZ,
            this.OBI,
            this.OBSERVER,
            this.OFFICE,
            this.OKINAWA,
            this.OLAYAN,
            this.OLAYANGROUP,
            this.OLDNAVY,
            this.OLLO,
            this.OM,
            this.OMEGA,
            this.ONE,
            this.ONG,
            this.ONL,
            this.ONLINE,
            this.OOO,
            this.OPEN,
            this.ORACLE,
            this.ORANGE,
            this.ORG,
            this.ORGANIC,
            this.ORIGINS,
            this.OSAKA,
            this.OTSUKA,
            this.OTT,
            this.OVH,
            this.PA,
            this.PAGE,
            this.PANASONIC,
            this.PARIS,
            this.PARS,
            this.PARTNERS,
            this.PARTS,
            this.PARTY,
            this.PAY,
            this.PCCW,
            this.PE,
            this.PET,
            this.PF,
            this.PFIZER,
            this.PG,
            this.PH,
            this.PHARMACY,
            this.PHD,
            this.PHILIPS,
            this.PHONE,
            this.PHOTO,
            this.PHOTOGRAPHY,
            this.PHOTOS,
            this.PHYSIO,
            this.PICS,
            this.PICTET,
            this.PICTURES,
            this.PID,
            this.PIN,
            this.PING,
            this.PINK,
            this.PIONEER,
            this.PIZZA,
            this.PK,
            this.PL,
            this.PLACE,
            this.PLAY,
            this.PLAYSTATION,
            this.PLUMBING,
            this.PLUS,
            this.PM,
            this.PN,
            this.PNC,
            this.POHL,
            this.POKER,
            this.POLITIE,
            this.PORN,
            this.POST,
            this.PR,
            this.PRAMERICA,
            this.PRAXI,
            this.PRESS,
            this.PRIME,
            this.PRO,
            this.PROD,
            this.PRODUCTIONS,
            this.PROF,
            this.PROGRESSIVE,
            this.PROMO,
            this.PROPERTIES,
            this.PROPERTY,
            this.PROTECTION,
            this.PRU,
            this.PRUDENTIAL,
            this.PS,
            this.PT,
            this.PUB,
            this.PW,
            this.PWC,
            this.PY,
            this.QA,
            this.QPON,
            this.QUEBEC,
            this.QUEST,
            this.RACING,
            this.RADIO,
            this.RE,
            this.READ,
            this.REALESTATE,
            this.REALTOR,
            this.REALTY,
            this.RECIPES,
            this.RED,
            this.REDSTONE,
            this.REDUMBRELLA,
            this.REHAB,
            this.REISE,
            this.REISEN,
            this.REIT,
            this.RELIANCE,
            this.REN,
            this.RENT,
            this.RENTALS,
            this.REPAIR,
            this.REPORT,
            this.REPUBLICAN,
            this.REST,
            this.RESTAURANT,
            this.REVIEW,
            this.REVIEWS,
            this.REXROTH,
            this.RICH,
            this.RICHARDLI,
            this.RICOH,
            this.RIL,
            this.RIO,
            this.RIP,
            this.RO,
            this.ROCHER,
            this.ROCKS,
            this.RODEO,
            this.ROGERS,
            this.ROOM,
            this.RS,
            this.RSVP,
            this.RU,
            this.RUGBY,
            this.RUHR,
            this.RUN,
            this.RW,
            this.RWE,
            this.RYUKYU,
            this.SA,
            this.SAARLAND,
            this.SAFE,
            this.SAFETY,
            this.SAKURA,
            this.SALE,
            this.SALON,
            this.SAMSCLUB,
            this.SAMSUNG,
            this.SANDVIK,
            this.SANDVIKCOROMANT,
            this.SANOFI,
            this.SAP,
            this.SARL,
            this.SAS,
            this.SAVE,
            this.SAXO,
            this.SB,
            this.SBI,
            this.SBS,
            this.SC,
            this.SCA,
            this.SCB,
            this.SCHAEFFLER,
            this.SCHMIDT,
            this.SCHOLARSHIPS,
            this.SCHOOL,
            this.SCHULE,
            this.SCHWARZ,
            this.SCIENCE,
            this.SCOT,
            this.SD,
            this.SE,
            this.SEARCH,
            this.SEAT,
            this.SECURE,
            this.SECURITY,
            this.SEEK,
            this.SELECT,
            this.SENER,
            this.SERVICES,
            this.SEVEN,
            this.SEW,
            this.SEX,
            this.SEXY,
            this.SFR,
            this.SG,
            this.SH,
            this.SHANGRILA,
            this.SHARP,
            this.SHAW,
            this.SHELL,
            this.SHIA,
            this.SHIKSHA,
            this.SHOES,
            this.SHOP,
            this.SHOPPING,
            this.SHOUJI,
            this.SHOW,
            this.SI,
            this.SILK,
            this.SINA,
            this.SINGLES,
            this.SITE,
            this.SJ,
            this.SK,
            this.SKI,
            this.SKIN,
            this.SKY,
            this.SKYPE,
            this.SL,
            this.SLING,
            this.SM,
            this.SMART,
            this.SMILE,
            this.SN,
            this.SNCF,
            this.SO,
            this.SOCCER,
            this.SOCIAL,
            this.SOFTBANK,
            this.SOFTWARE,
            this.SOHU,
            this.SOLAR,
            this.SOLUTIONS,
            this.SONG,
            this.SONY,
            this.SOY,
            this.SPA,
            this.SPACE,
            this.SPORT,
            this.SPOT,
            this.SR,
            this.SRL,
            this.SS,
            this.ST,
            this.STADA,
            this.STAPLES,
            this.STAR,
            this.STATEBANK,
            this.STATEFARM,
            this.STC,
            this.STCGROUP,
            this.STOCKHOLM,
            this.STORAGE,
            this.STORE,
            this.STREAM,
            this.STUDIO,
            this.STUDY,
            this.STYLE,
            this.SU,
            this.SUCKS,
            this.SUPPLIES,
            this.SUPPLY,
            this.SUPPORT,
            this.SURF,
            this.SURGERY,
            this.SUZUKI,
            this.SV,
            this.SWATCH,
            this.SWISS,
            this.SX,
            this.SY,
            this.SYDNEY,
            this.SYSTEMS,
            this.SZ,
            this.TAB,
            this.TAIPEI,
            this.TALK,
            this.TAOBAO,
            this.TARGET,
            this.TATAMOTORS,
            this.TATAR,
            this.TATTOO,
            this.TAX,
            this.TAXI,
            this.TC,
            this.TCI,
            this.TD,
            this.TDK,
            this.TEAM,
            this.TECH,
            this.TECHNOLOGY,
            this.TEL,
            this.TEMASEK,
            this.TENNIS,
            this.TEVA,
            this.TF,
            this.TG,
            this.TH,
            this.THD,
            this.THEATER,
            this.THEATRE,
            this.TIAA,
            this.TICKETS,
            this.TIENDA,
            this.TIPS,
            this.TIRES,
            this.TIROL,
            this.TJ,
            this.TJMAXX,
            this.TJX,
            this.TK,
            this.TKMAXX,
            this.TL,
            this.TM,
            this.TMALL,
            this.TN,
            this.TO,
            this.TODAY,
            this.TOKYO,
            this.TOOLS,
            this.TOP,
            this.TORAY,
            this.TOSHIBA,
            this.TOTAL,
            this.TOURS,
            this.TOWN,
            this.TOYOTA,
            this.TOYS,
            this.TR,
            this.TRADE,
            this.TRADING,
            this.TRAINING,
            this.TRAVEL,
            this.TRAVELERS,
            this.TRAVELERSINSURANCE,
            this.TRUST,
            this.TRV,
            this.TT,
            this.TUBE,
            this.TUI,
            this.TUNES,
            this.TUSHU,
            this.TV,
            this.TVS,
            this.TW,
            this.TZ,
            this.UA,
            this.UBANK,
            this.UBS,
            this.UG,
            this.UK,
            this.UNICOM,
            this.UNIVERSITY,
            this.UNO,
            this.UOL,
            this.UPS,
            this.US,
            this.UY,
            this.UZ,
            this.VA,
            this.VACATIONS,
            this.VANA,
            this.VANGUARD,
            this.VC,
            this.VE,
            this.VEGAS,
            this.VENTURES,
            this.VERISIGN,
            this.VERSICHERUNG,
            this.VET,
            this.VG,
            this.VI,
            this.VIAJES,
            this.VIDEO,
            this.VIG,
            this.VIKING,
            this.VILLAS,
            this.VIN,
            this.VIP,
            this.VIRGIN,
            this.VISA,
            this.VISION,
            this.VIVA,
            this.VIVO,
            this.VLAANDEREN,
            this.VN,
            this.VODKA,
            this.VOLKSWAGEN,
            this.VOLVO,
            this.VOTE,
            this.VOTING,
            this.VOTO,
            this.VOYAGE,
            this.VU,
            this.WALES,
            this.WALMART,
            this.WALTER,
            this.WANG,
            this.WANGGOU,
            this.WATCH,
            this.WATCHES,
            this.WEATHER,
            this.WEATHERCHANNEL,
            this.WEBCAM,
            this.WEBER,
            this.WEBSITE,
            this.WED,
            this.WEDDING,
            this.WEIBO,
            this.WEIR,
            this.WF,
            this.WHOSWHO,
            this.WIEN,
            this.WIKI,
            this.WILLIAMHILL,
            this.WIN,
            this.WINDOWS,
            this.WINE,
            this.WINNERS,
            this.WME,
            this.WOLTERSKLUWR,
            this.WOODSIDE,
            this.WORK,
            this.WORKS,
            this.WORLD,
            this.WOW,
            this.WS,
            this.WTC,
            this.WTF,
            this.XBOX,
            this.XEROX,
            this.XFINITY,
            this.XIHUAN,
            this.XIN,
            this.XN11B4C3D,
            this.XN1CK2E1B,
            this.XN1QQW23A,
            this.XN2SCRJ9C,
            this.XN30RR7Y,
            this.XN3BST00M,
            this.XN3DS443G,
            this.XN3E0B707E,
            this.XN3HCRJ9C,
            this.XN3PXU8K,
            this.XN42C2D9A,
            this.XN45BR5CYL,
            this.XN45BRJ9C,
            this.XN45Q11C,
            this.XN4DBRK0CE,
            this.XN4GBRIM,
            this.XN54B7FTA0CC,
            this.XN55QW42G,
            this.XN55QX5D,
            this.XN5SU34J936BGSG,
            this.XN5TZM5G,
            this.XN6FRZ82G,
            this.XN6QQ986B3XL,
            this.XN80ADXHKS,
            this.XN80AO21A,
            this.XN80AQECDR1A,
            this.XN80ASEHDB,
            this.XN80ASWG,
            this.XN8Y0A063A,
            this.XN90A3AC,
            this.XN90AE,
            this.XN90AIS,
            this.XN9DBQ2A,
            this.XN9ET52U,
            this.XN9KRT00A,
            this.XNB4W605FERD,
            this.XNBCK1B9A5DRE4C,
            this.XNC1AVG,
            this.XNC2BR7G,
            this.XNCCK2B3B,
            this.XNCCKWCXETD,
            this.XNCG4BKI,
            this.XNCLCHC0EA0B2G2A9GCD,
            this.XNCZR694B,
            this.XNCZRS0T,
            this.XNCZRU2D,
            this.XND1ACJ3B,
            this.XND1ALF,
            this.XNE1A4C,
            this.XNECKVDTC9D,
            this.XNEFVY88H,
            this.XNFCT429K,
            this.XNFHBEI,
            this.XNFIQ228C5HS,
            this.XNFIQ64B,
            this.XNFIQS8S,
            this.XNFIQZ9S,
            this.XNFJQ720A,
            this.XNFLW351E,
            this.XNFPCRJ9C3D,
            this.XNFZC2C9E2C,
            this.XNFZYS8D69UVGM,
            this.XNG2XX48C,
            this.XNGCKR3F0F,
            this.XNGECRJ9C,
            this.XNGK3AT1E,
            this.XNH2BREG3EVE,
            this.XNH2BRJ9C,
            this.XNH2BRJ9C8C,
            this.XNHXT814E,
            this.XNI1B6B1A6A2E,
            this.XNIMR513N,
            this.XNIO0A7I,
            this.XNJ1AEF,
            this.XNJ1AMH,
            this.XNJ6W193G,
            this.XNJLQ480N2RG,
            this.XNJVR189M,
            this.XNKCRX77D1X4A,
            this.XNKPRW13D,
            this.XNKPRY57D,
            this.XNKPUT3I,
            this.XNL1ACC,
            this.XNLGBBAT1AD8J,
            this.XNMGB9AWBF,
            this.XNMGBA3A3EJT,
            this.XNMGBA3A4F16A,
            this.XNMGBA7C0BBN0A,
            this.XNMGBAAKC7DVF,
            this.XNMGBAAM7A8H,
            this.XNMGBAB2BD,
            this.XNMGBAH1A3HJKRD,
            this.XNMGBAI9AZGQP6J,
            this.XNMGBAYH7GPA,
            this.XNMGBBH1A,
            this.XNMGBBH1A71E,
            this.XNMGBC0A9AZCG,
            this.XNMGBCA7DZDO,
            this.XNMGBCPQ6GPA1A,
            this.XNMGBERP4A5D4AR,
            this.XNMGBGU82A,
            this.XNMGBI4ECEXP,
            this.XNMGBPL2FH,
            this.XNMGBT3DHD,
            this.XNMGBTX2B,
            this.XNMGBX4CD0AB,
            this.XNMIX891F,
            this.XNMK1BU44C,
            this.XNMXTQ1M,
            this.XNNGBC5AZD,
            this.XNNGBE9E0A,
            this.XNNGBRX,
            this.XNNODE,
            this.XNNQV7F,
            this.XNNQV7FS00EMA,
            this.XNNYQY26A,
            this.XNO3CW4H,
            this.XNOGBPF8FL,
            this.XNOTU796D,
            this.XNP1ACF,
            this.XNP1AI,
            this.XNPGBS0DH,
            this.XNPSSY2U,
            this.XNQ7CE6A,
            this.XNQ9JYB4C,
            this.XNQCKA1PMC,
            this.XNQXA6A,
            this.XNQXAM,
            this.XNRHQV96G,
            this.XNROVU88B,
            this.XNRVC1E0AM3E,
            this.XNS9BRJ9C,
            this.XNSES554G,
            this.XNT60B56A,
            this.XNTCKWE,
            this.XNTIQ49XQYJ,
            this.XNUNUP4Y,
            this.XNVERMGENSBERATERCTB,
            this.XNVERMGENSBERATUNGPWB,
            this.XNVHQUV,
            this.XNVUQ861B,
            this.XNW4R85EL8FHU5DNRA,
            this.XNW4RS40L,
            this.XNWGBH1C,
            this.XNWGBL6A,
            this.XNXHQ521B,
            this.XNXKC2AL3HYE2A,
            this.XNXKC2DL3A5EE0H,
            this.XNY9A3AQ,
            this.XNYFRO4I67O,
            this.XNYGBI2AMMX,
            this.XNZFR164B,
            this.XXX,
            this.XYZ,
            this.YACHTS,
            this.YAHOO,
            this.YAMAXUN,
            this.YANDEX,
            this.YE,
            this.YODOBASHI,
            this.YOGA,
            this.YOKOHAMA,
            this.YOU,
            this.YOUTUBE,
            this.YT,
            this.YUN,
            this.ZA,
            this.ZAPPOS,
            this.ZARA,
            this.ZERO,
            this.ZIP,
            this.ZM,
            this.ZONE,
            this.ZUERICH,
            this.ZW
        ];
    }
}

export default TopLevelDomain;

export {
    TopLevelDomainCategory
};

export type { TopLevelDomainInfo };
