type TopLevelDomainInfo = {
    name: string,
    description: string,
    public: boolean, // everyone can register
    category: TopLevelDomainCategory,
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

enum TopLevelDomain {
    AAA = TopLevelDomainInfo = {
        name: 'aaa',
        description: 'American Automobile Association, Inc.',
        public: false,
        category: TopLevelDomainCategory.FUNCTIONAL,
    },
    AARP = TopLevelDomainInfo = {
        name: 'aarp',
        description: 'American Association of Retired Persons',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ABB = TopLevelDomainInfo = {
        name: 'abb',
        description: 'ABB Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ABBOTT = TopLevelDomainInfo = {
        name: 'abbott',
        description: 'Abbott Laboratories, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ABBVIE = TopLevelDomainInfo = {
        name: 'abbvie',
        description: 'AbbVie Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ABC = TopLevelDomainInfo = {
        name: 'abc',
        description: 'Disney Enterprises, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ABLE = TopLevelDomainInfo = {
        name: 'able',
        description: 'Able Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ABOGADO = TopLevelDomainInfo = {
        name: 'abogado',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ABUDHABI = TopLevelDomainInfo = {
        name: 'abudhabi',
        description: 'Abu Dhabi Systems and Information Centre',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AC = TopLevelDomainInfo = {
        name: 'ac',
        description: 'Ascension Island',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ACADEMY = TopLevelDomainInfo = {
        name: 'academy',
        description: 'Half Oaks, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ACCENTURE = TopLevelDomainInfo = {
        name: 'accenture',
        description: 'Accenture plc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ACCOUNTANT = TopLevelDomainInfo = {
        name: 'accountant',
        description: 'dot Accountant Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ACCOUNTANTS = TopLevelDomainInfo = {
        name: 'accountants',
        description: 'Knob Town, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ACO = TopLevelDomainInfo = {
        name: 'aco',
        description: 'ACO Severin Ahlmann GmbH & Co. KG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ACTOR = TopLevelDomainInfo = {
        name: 'actor',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AD = TopLevelDomainInfo = {
        name: 'ad',
        description: 'Andorra (Principality of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ADS = TopLevelDomainInfo = {
        name: 'ads',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ADULT = TopLevelDomainInfo = {
        name: 'adult',
        description: 'ICM Registry AD LLC',
        public: true,
        category: TopLevelDomainCategory.SEUXAL,
    },
    AE = TopLevelDomainInfo = {
        name: 'ae',
        description: 'United Arab Emirates',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AEG = TopLevelDomainInfo = {
        name: 'aeg',
        description: 'Aktiebolaget Electrolux',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AERO = TopLevelDomainInfo = {
        name: 'aero',
        description: 'Societe Internationale de Telecommunications Aeronautique (SITA INC USA)',
        public: false,
        category: TopLevelDomainCategory.INFRASTRUCTURE,
    },
    AETNA = TopLevelDomainInfo = {
        name: 'aetna',
        description: 'Aetna Life Insurance Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AF = TopLevelDomainInfo = {
        name: 'af',
        description: 'Afghanistan',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AFL = TopLevelDomainInfo = {
        name: 'afl',
        description: 'Australian Football League',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AFRICA = TopLevelDomainInfo = {
        name: 'africa',
        description: 'ZA Central Registry NPC trading as Registry.Africa',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AG = TopLevelDomainInfo = {
        name: 'ag',
        description: 'Antigua and Barbuda',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AGAKHAN = TopLevelDomainInfo = {
        name: 'agakhan',
        description: 'Fondation Aga Khan (Aga Khan Foundation)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AGENCY = TopLevelDomainInfo = {
        name: 'agency',
        description: 'Steel Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AI = TopLevelDomainInfo = {
        name: 'ai',
        description: 'Anguilla',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AIG = TopLevelDomainInfo = {
        name: 'aig',
        description: 'American International Group, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AIRBUS = TopLevelDomainInfo = {
        name: 'airbus',
        description: 'Airbus S.A.S.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AIRFORCE = TopLevelDomainInfo = {
        name: 'airforce',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AIRTEL = TopLevelDomainInfo = {
        name: 'airtel',
        description: 'Bharti Airtel Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AKDN = TopLevelDomainInfo = {
        name: 'akdn',
        description: 'Fondation Aga Khan (Aga Khan Foundation)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AL = TopLevelDomainInfo = {
        name: 'al',
        description: 'Albania',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ALIBABA = TopLevelDomainInfo = {
        name: 'alibaba',
        description: 'Alibaba Group Holding Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ALIPAY = TopLevelDomainInfo = {
        name: 'alipay',
        description: 'Alibaba Group Holding Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ALLFINANZ = TopLevelDomainInfo = {
        name: 'allfinanz',
        description: 'Allfinanz Deutsche Vermögensberatung Aktiengesellschaft',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ALLSTATE = TopLevelDomainInfo = {
        name: 'allstate',
        description: 'Allstate Fire and Casualty Insurance Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ALLY = TopLevelDomainInfo = {
        name: 'ally',
        description: 'Ally Financial Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ALSACE = TopLevelDomainInfo = {
        name: 'alsace',
        description: 'REGION D ALSACE',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ALSTOM = TopLevelDomainInfo = {
        name: 'alstom',
        description: 'ALSTOM',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AM = TopLevelDomainInfo = {
        name: 'am',
        description: 'Armenia',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AMAZON = TopLevelDomainInfo = {
        name: 'amazon',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AMERICANEXPRESS = TopLevelDomainInfo = {
        name: 'americanexpress',
        description: 'American Express Travel Related Services Company, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AMERICANFAMILY = TopLevelDomainInfo = {
        name: 'americanfamily',
        description: 'AmFam, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AMEX = TopLevelDomainInfo = {
        name: 'amex',
        description: 'American Express Travel Related Services Company, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AMFAM = TopLevelDomainInfo = {
        name: 'amfam',
        description: 'AmFam, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AMICA = TopLevelDomainInfo = {
        name: 'amica',
        description: 'Amica Mutual Insurance Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AMSTERDAM = TopLevelDomainInfo = {
        name: 'amsterdam',
        description: 'Gemeente Amsterdam',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ANALYTICS = TopLevelDomainInfo = {
        name: 'analytics',
        description: 'Campus IP LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ANDROID = TopLevelDomainInfo = {
        name: 'android',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ANQUAN = TopLevelDomainInfo = {
        name: 'anquan',
        description: 'QIHOO 360 TECHNOLOGY CO. LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ANZ = TopLevelDomainInfo = {
        name: 'anz',
        description: 'Australia and New Zealand Banking Group Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AO = TopLevelDomainInfo = {
        name: 'ao',
        description: 'Angola',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AOL = TopLevelDomainInfo = {
        name: 'aol',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    APARTMENTS = TopLevelDomainInfo = {
        name: 'apartments',
        description: 'June Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    APP = TopLevelDomainInfo = {
        name: 'app',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    APPLE = TopLevelDomainInfo = {
        name: 'apple',
        description: 'Apple Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AQ = TopLevelDomainInfo = {
        name: 'aq',
        description: 'Antarctica',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AQUARELLE = TopLevelDomainInfo = {
        name: 'aquarelle',
        description: 'Aquarelle.com',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AR = TopLevelDomainInfo = {
        name: 'ar',
        description: 'Argentina',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ARAB = TopLevelDomainInfo = {
        name: 'arab',
        description: 'League of Arab States',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ARAMCO = TopLevelDomainInfo = {
        name: 'aramco',
        description: 'Aramco Services Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ARCHI = TopLevelDomainInfo = {
        name: 'archi',
        description: 'STARTING DOT LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ARMY = TopLevelDomainInfo = {
        name: 'army',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ARPA = TopLevelDomainInfo = {
        name: 'arpa',
        description: 'Internet Architecture Board (IAB)',
        public: false,
        category: TopLevelDomainCategory.INFRASTRUCTURE,
    },
    ART = TopLevelDomainInfo = {
        name: 'art',
        description: 'UK Creative Ideas Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ARTE = TopLevelDomainInfo = {
        name: 'arte',
        description: 'Association Relative à la Télévision Européenne G.E.I.E.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AS = TopLevelDomainInfo = {
        name: 'as',
        description: 'American Samoa',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ASDA = TopLevelDomainInfo = {
        name: 'asda',
        description: 'Wal-Mart Stores, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ASIA = TopLevelDomainInfo = {
        name: 'asia',
        description: 'DotAsia Organisation Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ASSOCIATES = TopLevelDomainInfo = {
        name: 'associates',
        description: 'Baxter Hill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AT = TopLevelDomainInfo = {
        name: 'at',
        description: 'Austria',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ATHLETA = TopLevelDomainInfo = {
        name: 'athleta',
        description: 'The Gap, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ATTORNEY = TopLevelDomainInfo = {
        name: 'attorney',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AU = TopLevelDomainInfo = {
        name: 'au',
        description: 'Australia',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AUCTION = TopLevelDomainInfo = {
        name: 'auction',
        description: 'United TLD HoldCo, Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AUDI = TopLevelDomainInfo = {
        name: 'audi',
        description: 'AUDI Aktiengesellschaft',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AUDIBLE = TopLevelDomainInfo = {
        name: 'audible',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AUDIO = TopLevelDomainInfo = {
        name: 'audio',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AUSPOST = TopLevelDomainInfo = {
        name: 'auspost',
        description: 'Australian Postal Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AUTHOR = TopLevelDomainInfo = {
        name: 'author',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AUTO = TopLevelDomainInfo = {
        name: 'auto',
        description: 'Cars Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AUTOS = TopLevelDomainInfo = {
        name: 'autos',
        description: 'DERAutos, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AVIANCA = TopLevelDomainInfo = {
        name: 'avianca',
        description: 'Aerovias del Continente Americano S.A. Avianca',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AW = TopLevelDomainInfo = {
        name: 'aw',
        description: 'Aruba',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AWS = TopLevelDomainInfo = {
        name: 'aws',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AX = TopLevelDomainInfo = {
        name: 'ax',
        description: 'Åland Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AXA = TopLevelDomainInfo = {
        name: 'axa',
        description: 'AXA SA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    AZ = TopLevelDomainInfo = {
        name: 'az',
        description: 'Azerbaijan',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    AZURE = TopLevelDomainInfo = {
        name: 'azure',
        description: 'Microsoft Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BA = TopLevelDomainInfo = {
        name: 'ba',
        description: 'Bosnia and Herzegovina',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BABY = TopLevelDomainInfo = {
        name: 'baby',
        description: 'Johnson & Johnson Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BAIDU = TopLevelDomainInfo = {
        name: 'baidu',
        description: 'Baidu, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BANAMEX = TopLevelDomainInfo = {
        name: 'banamex',
        description: 'Citigroup Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BANANAREPUBLIC = TopLevelDomainInfo = {
        name: 'bananarepublic',
        description: 'The Gap, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BAND = TopLevelDomainInfo = {
        name: 'band',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BANK = TopLevelDomainInfo = {
        name: 'bank',
        description: 'fTLD Registry Services, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BAR = TopLevelDomainInfo = {
        name: 'bar',
        description: 'Punto 2012 Sociedad Anonima Promotora de Inversion de Capital Variable',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BARCELONA = TopLevelDomainInfo = {
        name: 'barcelona',
        description: 'Municipi de Barcelona',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BARCLAYCARD = TopLevelDomainInfo = {
        name: 'barclaycard',
        description: 'Barclays Bank PLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BARCLAYS = TopLevelDomainInfo = {
        name: 'barclays',
        description: 'Barclays Bank PLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BAREFOOT = TopLevelDomainInfo = {
        name: 'barefoot',
        description: 'Gallo Vineyards, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BARGAINS = TopLevelDomainInfo = {
        name: 'bargains',
        description: 'Half Hallow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BASEBALL = TopLevelDomainInfo = {
        name: 'baseball',
        description: 'MLB Advanced Media DH, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BASKETBALL = TopLevelDomainInfo = {
        name: 'basketball',
        description: 'Fédération Internationale de Basketball (FIBA)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BAUHAUS = TopLevelDomainInfo = {
        name: 'bauhaus',
        description: 'Werkhaus GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BAYERN = TopLevelDomainInfo = {
        name: 'bayern',
        description: 'Bayern Connect GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BB = TopLevelDomainInfo = {
        name: 'bb',
        description: 'Barbados',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BBC = TopLevelDomainInfo = {
        name: 'bbc',
        description: 'British Broadcasting Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BBT = TopLevelDomainInfo = {
        name: 'bbt',
        description: 'BB&T Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BBVA = TopLevelDomainInfo = {
        name: 'bbva',
        description: 'BANCO BILBAO VIZCAYA ARGENTARIA, S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BCG = TopLevelDomainInfo = {
        name: 'bcg',
        description: 'The Boston Consulting Group, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BCN = TopLevelDomainInfo = {
        name: 'bcn',
        description: 'Municipi de Barcelona',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BD = TopLevelDomainInfo = {
        name: 'bd',
        description: 'Bangladesh (People\'s Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BE = TopLevelDomainInfo = {
        name: 'be',
        description: 'Belgium',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BEATS = TopLevelDomainInfo = {
        name: 'beats',
        description: 'Beats Electronics, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BEAUTY = TopLevelDomainInfo = {
        name: 'beauty',
        description: 'L\'Oréal',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    BEER = TopLevelDomainInfo = {
        name: 'beer',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BENTLEY = TopLevelDomainInfo = {
        name: 'bentley',
        description: 'Bentley Motors Limited',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    BERLIN = TopLevelDomainInfo = {
        name: 'berlin',
        description: 'dotBERLIN GmbH & Co. KG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BEST = TopLevelDomainInfo = {
        name: 'best',
        description: 'BestTLD Pty Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BESTBUY = TopLevelDomainInfo = {
        name: 'bestbuy',
        description: 'BBY Solutions, Inc.',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    BET = TopLevelDomainInfo = {
        name: 'bet',
        description: 'Afilias plc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BF = TopLevelDomainInfo = {
        name: 'bf',
        description: 'Burkina Faso',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BG = TopLevelDomainInfo = {
        name: 'bg',
        description: 'Bulgaria',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BH = TopLevelDomainInfo = {
        name: 'bh',
        description: 'Bahrain (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BHARTI = TopLevelDomainInfo = {
        name: 'bharti',
        description: 'Bharti Enterprises (Holding) Private Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BI = TopLevelDomainInfo = {
        name: 'bi',
        description: 'Burundi (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BIBLE = TopLevelDomainInfo = {
        name: 'bible',
        description: 'American Bible Society',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BID = TopLevelDomainInfo = {
        name: 'bid',
        description: 'dot Bid Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BIKE = TopLevelDomainInfo = {
        name: 'bike',
        description: 'Grand Hollow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BING = TopLevelDomainInfo = {
        name: 'bing',
        description: 'Microsoft Corporation',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    BINGO = TopLevelDomainInfo = {
        name: 'bingo',
        description: 'Sand Cedar, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BIO = TopLevelDomainInfo = {
        name: 'bio',
        description: 'STARTING DOT LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BIZ = TopLevelDomainInfo = {
        name: 'biz',
        description: 'Business',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BJ = TopLevelDomainInfo = {
        name: 'bj',
        description: 'Benin (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BLACK = TopLevelDomainInfo = {
        name: 'black',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BLACKFRIDAY = TopLevelDomainInfo = {
        name: 'blackfriday',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BLOCKBUSTER = TopLevelDomainInfo = {
        name: 'blockbuster',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BLOG = TopLevelDomainInfo = {
        name: 'blog',
        description: 'Knock Knock WHOIS There, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BLOOMBERG = TopLevelDomainInfo = {
        name: 'bloomberg',
        description: 'Bloomberg IP Holdings LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BLUE = TopLevelDomainInfo = {
        name: 'blue',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BM = TopLevelDomainInfo = {
        name: 'bm',
        description: 'Bermuda',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BMS = TopLevelDomainInfo = {
        name: 'bms',
        description: 'Bristol-Myers Squibb Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BMW = TopLevelDomainInfo = {
        name: 'bmw',
        description: 'Bayerische Motoren Werke Aktiengesellschaft',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    BN = TopLevelDomainInfo = {
        name: 'bn',
        description: 'Brunei Darussalam',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BNPPARIBAS = TopLevelDomainInfo = {
        name: 'bnpparibas',
        description: 'BNP Paribas',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BO = TopLevelDomainInfo = {
        name: 'bo',
        description: 'Bolivia (Plurinational State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BOATS = TopLevelDomainInfo = {
        name: 'boats',
        description: 'DERBoats, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOEHRINGER = TopLevelDomainInfo = {
        name: 'boehringer',
        description: 'Boehringer Ingelheim International GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOFA = TopLevelDomainInfo = {
        name: 'bofa',
        description: 'Bank of America Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOM = TopLevelDomainInfo = {
        name: 'bom',
        description: 'Núcleo de Informação e Coordenação do Ponto BR - NIC.br',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOND = TopLevelDomainInfo = {
        name: 'bond',
        description: 'Bond University Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOO = TopLevelDomainInfo = {
        name: 'boo',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOOK = TopLevelDomainInfo = {
        name: 'book',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOOKING = TopLevelDomainInfo = {
        name: 'booking',
        description: 'Booking.com B.V.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOSCH = TopLevelDomainInfo = {
        name: 'bosch',
        description: 'Robert Bosch GMBH',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    BOSTIK = TopLevelDomainInfo = {
        name: 'bostik',
        description: 'Bostik SA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOSTON = TopLevelDomainInfo = {
        name: 'boston',
        description: 'Boston TLD Management, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOT = TopLevelDomainInfo = {
        name: 'bot',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOUTIQUE = TopLevelDomainInfo = {
        name: 'boutique',
        description: 'Over Galley, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BOX = TopLevelDomainInfo = {
        name: 'box',
        description: 'NS1 Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BR = TopLevelDomainInfo = {
        name: 'br',
        description: 'Brazil (Federative Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BRADESCO = TopLevelDomainInfo = {
        name: 'bradesco',
        description: 'Banco Bradesco S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BRIDGESTONE = TopLevelDomainInfo = {
        name: 'bridgestone',
        description: 'Bridgestone Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BROADWAY = TopLevelDomainInfo = {
        name: 'broadway',
        description: 'Celebrate Broadway, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BROKER = TopLevelDomainInfo = {
        name: 'broker',
        description: 'DOTBROKER REGISTRY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BROTHER = TopLevelDomainInfo = {
        name: 'brother',
        description: 'Brother Industries, Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BRUSSELS = TopLevelDomainInfo = {
        name: 'brussels',
        description: 'DNS.be vzw',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BS = TopLevelDomainInfo = {
        name: 'bs',
        description: 'Bahamas (Commonwealth of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BT = TopLevelDomainInfo = {
        name: 'bt',
        description: 'Bhutan (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BUILD = TopLevelDomainInfo = {
        name: 'build',
        description: 'Plan Bee LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BUILDERS = TopLevelDomainInfo = {
        name: 'builders',
        description: 'Atomic Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BUSINESS = TopLevelDomainInfo = {
        name: 'business',
        description: 'Spring Cross, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BUY = TopLevelDomainInfo = {
        name: 'buy',
        description: 'Amazon Registry Services, INC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BUZZ = TopLevelDomainInfo = {
        name: 'buzz',
        description: 'DOTSTRATEGY CO.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    BV = TopLevelDomainInfo = {
        name: 'bv',
        description: 'Bouvet Island',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BW = TopLevelDomainInfo = {
        name: 'bw',
        description: 'Botswana (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BY = TopLevelDomainInfo = {
        name: 'by',
        description: 'Belarus (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BZ = TopLevelDomainInfo = {
        name: 'bz',
        description: 'Belize',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    BZH = TopLevelDomainInfo = {
        name: 'bzh',
        description: 'Association www.bzh',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CA = TopLevelDomainInfo = {
        name: 'ca',
        description: 'Canada',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CAB = TopLevelDomainInfo = {
        name: 'cab',
        description: 'Half Sunset, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAFE = TopLevelDomainInfo = {
        name: 'cafe',
        description: 'Pioneer Canyon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAL = TopLevelDomainInfo = {
        name: 'cal',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CALL = TopLevelDomainInfo = {
        name: 'call',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CALVINKLEIN = TopLevelDomainInfo = {
        name: 'calvinklein',
        description: 'PVH gTLD Holdings LLC',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    CAM = TopLevelDomainInfo = {
        name: 'cam',
        description: 'AC Webconnecting Holding B.V.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAMERA = TopLevelDomainInfo = {
        name: 'camera',
        description: 'Atomic Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAMP = TopLevelDomainInfo = {
        name: 'camp',
        description: 'Delta Dynamite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CANON = TopLevelDomainInfo = {
        name: 'canon',
        description: 'Canon Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAPETOWN = TopLevelDomainInfo = {
        name: 'capetown',
        description: 'ZA Central Registry NPC trading as ZA Central Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAPITAL = TopLevelDomainInfo = {
        name: 'capital',
        description: 'Delta Mill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAPITALONE = TopLevelDomainInfo = {
        name: 'capitalone',
        description: 'Capital One Financial Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAR = TopLevelDomainInfo = {
        name: 'car',
        description: 'Cars Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CARAVAN = TopLevelDomainInfo = {
        name: 'caravan',
        description: 'Caravan International, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CARDS = TopLevelDomainInfo = {
        name: 'cards',
        description: 'Foggy Hollow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CARE = TopLevelDomainInfo = {
        name: 'care',
        description: 'Goose Cross',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAREER = TopLevelDomainInfo = {
        name: 'career',
        description: 'dotCareer LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAREERS = TopLevelDomainInfo = {
        name: 'careers',
        description: 'Wild Corner, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CARS = TopLevelDomainInfo = {
        name: 'cars',
        description: 'Cars Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CASA = TopLevelDomainInfo = {
        name: 'casa',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CASE = TopLevelDomainInfo = {
        name: 'case',
        description: 'CNH Industrial N.V.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CASH = TopLevelDomainInfo = {
        name: 'cash',
        description: 'Delta Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CASINO = TopLevelDomainInfo = {
        name: 'casino',
        description: 'Binky Sky, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CAT = TopLevelDomainInfo = {
        name: 'cat',
        description: 'Fundacio puntCAT',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CATERING = TopLevelDomainInfo = {
        name: 'catering',
        description: 'New Falls. LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CATHOLIC = TopLevelDomainInfo = {
        name: 'catholic',
        description: 'Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CBA = TopLevelDomainInfo = {
        name: 'cba',
        description: 'COMMONWEALTH BANK OF AUSTRALIA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CBN = TopLevelDomainInfo = {
        name: 'cbn',
        description: 'The Christian Broadcasting Network, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CBRE = TopLevelDomainInfo = {
        name: 'cbre',
        description: 'CBRE, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CC = TopLevelDomainInfo = {
        name: 'cc',
        description: 'Cocos (Keeling) Islands (Territory of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CD = TopLevelDomainInfo = {
        name: 'cd',
        description: 'Congo (Democratic Republic of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CENTER = TopLevelDomainInfo = {
        name: 'center',
        description: 'Tin Mill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CEO = TopLevelDomainInfo = {
        name: 'ceo',
        description: 'CEOTLD Pty Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CERN = TopLevelDomainInfo = {
        name: 'cern',
        description: 'European Organization for Nuclear Research ("CERN")',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CF = TopLevelDomainInfo = {
        name: 'cf',
        description: 'Central African Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CFA = TopLevelDomainInfo = {
        name: 'cfa',
        description: 'CFA Institute',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CFD = TopLevelDomainInfo = {
        name: 'cfd',
        description: 'DOTCFD REGISTRY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CG = TopLevelDomainInfo = {
        name: 'cg',
        description: 'Congo (Republic of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CH = TopLevelDomainInfo = {
        name: 'ch',
        description: 'Switzerland (Swiss Confederation)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CHANEL = TopLevelDomainInfo = {
        name: 'chanel',
        description: 'Chanel International B.V.',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    CHANNEL = TopLevelDomainInfo = {
        name: 'channel',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CHARITY = TopLevelDomainInfo = {
        name: 'charity',
        description: 'Corn Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CHASE = TopLevelDomainInfo = {
        name: 'chase',
        description: 'JPMorgan Chase Bank, National Association',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CHAT = TopLevelDomainInfo = {
        name: 'chat',
        description: 'Sand Fields, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CHEAP = TopLevelDomainInfo = {
        name: 'cheap',
        description: 'Sand Cover, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CHINTAI = TopLevelDomainInfo = {
        name: 'chintai',
        description: 'CHINTAI Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CHRISTMAS = TopLevelDomainInfo = {
        name: 'christmas',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CHROME = TopLevelDomainInfo = {
        name: 'chrome',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CHURCH = TopLevelDomainInfo = {
        name: 'church',
        description: 'Holly Fileds, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CI = TopLevelDomainInfo = {
        name: 'ci',
        description: 'Côte d\'Ivoire (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CIPRIANI = TopLevelDomainInfo = {
        name: 'cipriani',
        description: 'Hotel Cipriani Srl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CIRCLE = TopLevelDomainInfo = {
        name: 'circle',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CISCO = TopLevelDomainInfo = {
        name: 'cisco',
        description: 'Cisco Technology, Inc.',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    CITADEL = TopLevelDomainInfo = {
        name: 'citadel',
        description: 'Citadel Domain LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CITI = TopLevelDomainInfo = {
        name: 'citi',
        description: 'Citigroup Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CITIC = TopLevelDomainInfo = {
        name: 'citic',
        description: 'CITIC Group Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CITY = TopLevelDomainInfo = {
        name: 'city',
        description: 'Snow Sky, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CK = TopLevelDomainInfo = {
        name: 'ck',
        description: 'Cook Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CL = TopLevelDomainInfo = {
        name: 'cl',
        description: 'Chile (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CLAIMS = TopLevelDomainInfo = {
        name: 'claims',
        description: 'Black Corner, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CLEANING = TopLevelDomainInfo = {
        name: 'cleaning',
        description: 'Fox Shadow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CLICK = TopLevelDomainInfo = {
        name: 'click',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CLINIC = TopLevelDomainInfo = {
        name: 'clinic',
        description: 'Goose Park, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CLINIQUE = TopLevelDomainInfo = {
        name: 'clinique',
        description: 'The Estée Lauder Companies Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CLOTHING = TopLevelDomainInfo = {
        name: 'clothing',
        description: 'Steel Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CLOUD = TopLevelDomainInfo = {
        name: 'cloud',
        description: 'ARUBA PEC S.p.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CLUB = TopLevelDomainInfo = {
        name: 'club',
        description: 'CLUB DOMAINS, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CLUBMED = TopLevelDomainInfo = {
        name: 'clubmed',
        description: 'Club Méditerranée S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CM = TopLevelDomainInfo = {
        name: 'cm',
        description: 'Cameroon (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CN = TopLevelDomainInfo = {
        name: 'cn',
        description: 'China (People\'s Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CO = TopLevelDomainInfo = {
        name: 'co',
        description: 'Colombia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    COACH = TopLevelDomainInfo = {
        name: 'coach',
        description: 'Koko Island, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CODES = TopLevelDomainInfo = {
        name: 'codes',
        description: 'Puff Willow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COFFEE = TopLevelDomainInfo = {
        name: 'coffee',
        description: 'Trixy Cover, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COLLEGE = TopLevelDomainInfo = {
        name: 'college',
        description: 'XYZ.COM LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COLOGNE = TopLevelDomainInfo = {
        name: 'cologne',
        description: 'NetCologne Gesellschaft für Telekommunikation mbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COM = TopLevelDomainInfo = {
        name: 'com',
        description: 'Commercial',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COMCAST = TopLevelDomainInfo = {
        name: 'comcast',
        description: 'Comcast IP Holdings I, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COMMBANK = TopLevelDomainInfo = {
        name: 'commbank',
        description: 'COMMONWEALTH BANK OF AUSTRALIA',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    COMMUNITY = TopLevelDomainInfo = {
        name: 'community',
        description: 'Fox Orchard, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COMPANY = TopLevelDomainInfo = {
        name: 'company',
        description: 'Silver Avenue, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COMPARE = TopLevelDomainInfo = {
        name: 'compare',
        description: 'iSelect Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COMPUTER = TopLevelDomainInfo = {
        name: 'computer',
        description: 'Pine Mill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COMSEC = TopLevelDomainInfo = {
        name: 'comsec',
        description: 'VeriSign, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CONDOS = TopLevelDomainInfo = {
        name: 'condos',
        description: 'Pine House, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CONSTRUCTION = TopLevelDomainInfo = {
        name: 'construction',
        description: 'Fox Dynamite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CONSULTING = TopLevelDomainInfo = {
        name: 'consulting',
        description: 'United TLD Holdco, LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CONTACT = TopLevelDomainInfo = {
        name: 'contact',
        description: 'Top Level Spectrum, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CONTRACTORS = TopLevelDomainInfo = {
        name: 'contractors',
        description: 'Magic Woods, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COOKING = TopLevelDomainInfo = {
        name: 'cooking',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COOL = TopLevelDomainInfo = {
        name: 'cool',
        description: 'Koko Lake, LLC',
        public: true,
        category: TopLevelDomainCategory.FUN,
    },
    COOP = TopLevelDomainInfo = {
        name: 'coop',
        description: 'Cooperatives',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    CORSICA = TopLevelDomainInfo = {
        name: 'corsica',
        description: 'Collectivité Territoriale de Corse',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COUNTRY = TopLevelDomainInfo = {
        name: 'country',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COUPON = TopLevelDomainInfo = {
        name: 'coupon',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COUPONS = TopLevelDomainInfo = {
        name: 'coupons',
        description: 'Black Island, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    COURSES = TopLevelDomainInfo = {
        name: 'courses',
        description: 'OPEN UNIVERSITIES AUSTRALIA PTY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CPA = TopLevelDomainInfo = {
        name: 'cpa',
        description: 'American Institute of Certified Public Accountants',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    CR = TopLevelDomainInfo = {
        name: 'cr',
        description: 'Costa Rica (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CREDIT = TopLevelDomainInfo = {
        name: 'credit',
        description: 'Snow Shadow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CREDITCARD = TopLevelDomainInfo = {
        name: 'creditcard',
        description: 'Binky Frostbite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CREDITUNION = TopLevelDomainInfo = {
        name: 'creditunion',
        description: 'CUNA Performance Resources, LLC',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    CRICKET = TopLevelDomainInfo = {
        name: 'cricket',
        description: 'dot Cricket Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CROWN = TopLevelDomainInfo = {
        name: 'crown',
        description: 'Crown Equipment Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CRS = TopLevelDomainInfo = {
        name: 'crs',
        description: 'Federated Co-operatives Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CRUISE = TopLevelDomainInfo = {
        name: 'cruise',
        description: 'Viking River Cruises (Bermuda) Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CRUISES = TopLevelDomainInfo = {
        name: 'cruises',
        description: 'Spring Way, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CU = TopLevelDomainInfo = {
        name: 'cu',
        description: 'Cuba (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CUISINELLA = TopLevelDomainInfo = {
        name: 'cuisinella',
        description: 'SALM S.A.S.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CV = TopLevelDomainInfo = {
        name: 'cv',
        description: 'Cabo Verde (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CW = TopLevelDomainInfo = {
        name: 'cw',
        description: 'Curaçao (Country of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CX = TopLevelDomainInfo = {
        name: 'cx',
        description: 'Christmas Island (Territory of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CY = TopLevelDomainInfo = {
        name: 'cy',
        description: 'Cyprus (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    CYMRU = TopLevelDomainInfo = {
        name: 'cymru',
        description: 'Nominet UK',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CYOU = TopLevelDomainInfo = {
        name: 'cyou',
        description: 'Beijing Gamease Age Digital Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    CZ = TopLevelDomainInfo = {
        name: 'cz',
        description: 'Czech Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    DABUR = TopLevelDomainInfo = {
        name: 'dabur',
        description: 'Dabur India Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DAD = TopLevelDomainInfo = {
        name: 'dad',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DANCE = TopLevelDomainInfo = {
        name: 'dance',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.FUN,
    },
    DATA = TopLevelDomainInfo = {
        name: 'data',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DATE = TopLevelDomainInfo = {
        name: 'date',
        description: 'dot Date Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DATING = TopLevelDomainInfo = {
        name: 'dating',
        description: 'Pine Fest, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DATSUN = TopLevelDomainInfo = {
        name: 'datsun',
        description: 'NISSAN MOTOR CO., LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DAY = TopLevelDomainInfo = {
        name: 'day',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DCLK = TopLevelDomainInfo = {
        name: 'dclk',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DDS = TopLevelDomainInfo = {
        name: 'dds',
        description: 'Minds + Machines Group Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DE = TopLevelDomainInfo = {
        name: 'de',
        description: 'Germany (Federal Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    DEAL = TopLevelDomainInfo = {
        name: 'deal',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DEALER = TopLevelDomainInfo = {
        name: 'dealer',
        description: 'Dealer Dot Com, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DEALS = TopLevelDomainInfo = {
        name: 'deals',
        description: 'Sand Sunset, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DEGREE = TopLevelDomainInfo = {
        name: 'degree',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DELIVERY = TopLevelDomainInfo = {
        name: 'delivery',
        description: 'Steel Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DELL = TopLevelDomainInfo = {
        name: 'dell',
        description: 'Dell Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    DELOITTE = TopLevelDomainInfo = {
        name: 'deloitte',
        description: 'Deloitte Touche Tohmatsu',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    DELTA = TopLevelDomainInfo = {
        name: 'delta',
        description: 'Delta Air Lines, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    DEMOCRAT = TopLevelDomainInfo = {
        name: 'democrat',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DENTAL = TopLevelDomainInfo = {
        name: 'dental',
        description: 'Steel Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DENTIST = TopLevelDomainInfo = {
        name: 'dentist',
        description: 'United TLD Holdco, Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DESI = TopLevelDomainInfo = {
        name: 'desi',
        description: 'Desi Networks LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DESIGN = TopLevelDomainInfo = {
        name: 'design',
        description: 'Top Level Design, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DEV = TopLevelDomainInfo = {
        name: 'dev',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DHL = TopLevelDomainInfo = {
        name: 'dhl',
        description: 'Deutsche Post AG',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    DIAMONDS = TopLevelDomainInfo = {
        name: 'diamonds',
        description: 'John Edge, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DIET = TopLevelDomainInfo = {
        name: 'diet',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DIGITAL = TopLevelDomainInfo = {
        name: 'digital',
        description: 'Dash Park, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DIRECT = TopLevelDomainInfo = {
        name: 'direct',
        description: 'Half Trail, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DIRECTORY = TopLevelDomainInfo = {
        name: 'directory',
        description: 'Extra Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DISCOUNT = TopLevelDomainInfo = {
        name: 'discount',
        description: 'Holly Hill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DISCOVER = TopLevelDomainInfo = {
        name: 'discover',
        description: 'Discover Financial Services',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DISH = TopLevelDomainInfo = {
        name: 'dish',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DIY = TopLevelDomainInfo = {
        name: 'diy',
        description: 'Lifestyle Domain Holdings, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DJ = TopLevelDomainInfo = {
        name: 'dj',
        description: 'Djibouti (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    DK = TopLevelDomainInfo = {
        name: 'dk',
        description: 'Denmark (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    DM = TopLevelDomainInfo = {
        name: 'dm',
        description: 'Dominica (Commonwealth of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    DNP = TopLevelDomainInfo = {
        name: 'dnp',
        description: 'Dai Nippon Printing Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DO = TopLevelDomainInfo = {
        name: 'do',
        description: 'Dominican Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    DOCS = TopLevelDomainInfo = {
        name: 'docs',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DOCTOR = TopLevelDomainInfo = {
        name: 'doctor',
        description: 'Brice Trail, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DOG = TopLevelDomainInfo = {
        name: 'dog',
        description: 'Koko Mill, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DOMAINS = TopLevelDomainInfo = {
        name: 'domains',
        description: 'Sugar Cross, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DOT = TopLevelDomainInfo = {
        name: 'dot',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DOWNLOAD = TopLevelDomainInfo = {
        name: 'download',
        description: 'dot Support Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DRIVE = TopLevelDomainInfo = {
        name: 'drive',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DTV = TopLevelDomainInfo = {
        name: 'dtv',
        description: 'Dish DBS Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DUBAI = TopLevelDomainInfo = {
        name: 'dubai',
        description: 'Dubai Smart Government Department',
        public: false,
        category: TopLevelDomainCategory.GENERIC,
    },
    DUNLOP = TopLevelDomainInfo = {
        name: 'dunlop',
        description: 'The Goodyear Tire & Rubber Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DUPONT = TopLevelDomainInfo = {
        name: 'dupont',
        description: 'E. I. du Pont de Nemours and Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DURBAN = TopLevelDomainInfo = {
        name: 'durban',
        description: 'ZA Central Registry NPC trading as ZA Central Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DVAG = TopLevelDomainInfo = {
        name: 'dvag',
        description: 'Deutsche Vermögensberatung Aktiengesellschaft DVAG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DVR = TopLevelDomainInfo = {
        name: 'dvr',
        description: 'Hughes Satellite Systems Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    DZ = TopLevelDomainInfo = {
        name: 'dz',
        description: 'Algeria (People\'s Democratic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    EARTH = TopLevelDomainInfo = {
        name: 'earth',
        description: 'Interlink Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EAT = TopLevelDomainInfo = {
        name: 'eat',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EC = TopLevelDomainInfo = {
        name: 'ec',
        description: 'Ecuador (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ECO = TopLevelDomainInfo = {
        name: 'eco',
        description: 'Big Room Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EDEKA = TopLevelDomainInfo = {
        name: 'edeka',
        description: 'EDEKA Verband kaufmännischer Genossenschaften e.V.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    EDU = TopLevelDomainInfo = {
        name: 'edu',
        description: 'Educational',
        public: false,
        category: TopLevelDomainCategory.GENERIC,
    },
    EDUCATION = TopLevelDomainInfo = {
        name: 'education',
        description: 'Brice Way, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EE = TopLevelDomainInfo = {
        name: 'ee',
        description: 'Estonia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    EG = TopLevelDomainInfo = {
        name: 'eg',
        description: 'Egypt (Arab Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    EMAIL = TopLevelDomainInfo = {
        name: 'email',
        description: 'Spring Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EMERCK = TopLevelDomainInfo = {
        name: 'emerck',
        description: 'Merck KGaA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ENERGY = TopLevelDomainInfo = {
        name: 'energy',
        description: 'Binky Birch, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ENGINEER = TopLevelDomainInfo = {
        name: 'engineer',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ENGINEERING = TopLevelDomainInfo = {
        name: 'engineering',
        description: 'Romeo Canyon',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ENTERPRISES = TopLevelDomainInfo = {
        name: 'enterprises',
        description: 'Snow Oaks, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EPSON = TopLevelDomainInfo = {
        name: 'epson',
        description: 'Seiko Epson Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    EQUIPMENT = TopLevelDomainInfo = {
        name: 'equipment',
        description: 'Corn Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ER = TopLevelDomainInfo = {
        name: 'er',
        description: 'Eritrea (State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ERICSSON = TopLevelDomainInfo = {
        name: 'ericsson',
        description: 'Telefonaktiebolaget L M Ericsson',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    ERNI = TopLevelDomainInfo = {
        name: 'erni',
        description: 'ERNI Group Holding AG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ES = TopLevelDomainInfo = {
        name: 'es',
        description: 'Spain (Kingdom of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ESQ = TopLevelDomainInfo = {
        name: 'esq',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ESTATE = TopLevelDomainInfo = {
        name: 'estate',
        description: 'Trixy Park, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ET = TopLevelDomainInfo = {
        name: 'et',
        description: 'Ethiopia (Federal Democratic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ETISALAT = TopLevelDomainInfo = {
        name: 'etisalat',
        description: 'Emirates Telecommunications Corporation (trading as Etisalat)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    EU = TopLevelDomainInfo = {
        name: 'eu',
        description: 'European Union',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    EUROVISION = TopLevelDomainInfo = {
        name: 'eurovision',
        description: 'European Broadcasting Union (EBU)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    EUS = TopLevelDomainInfo = {
        name: 'eus',
        description: 'Puntueus Fundazioa',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EVENTS = TopLevelDomainInfo = {
        name: 'events',
        description: 'Pioneer Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EXCHANGE = TopLevelDomainInfo = {
        name: 'exchange',
        description: 'Spring Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EXPERT = TopLevelDomainInfo = {
        name: 'expert',
        description: 'Magic Pass, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EXPOSED = TopLevelDomainInfo = {
        name: 'exposed',
        description: 'Victor Beach, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EXPRESS = TopLevelDomainInfo = {
        name: 'express',
        description: 'Binky Moon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    EXTRASPACE = TopLevelDomainInfo = {
        name: 'extraspace',
        description: 'Extra Space Storage LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FAGE = TopLevelDomainInfo = {
        name: 'fage',
        description: 'Fage International S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FAIL = TopLevelDomainInfo = {
        name: 'fail',
        description: 'Atomic Pipe, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FAIRWINDS = TopLevelDomainInfo = {
        name: 'fairwinds',
        description: 'FairWinds Partners, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    FAITH = TopLevelDomainInfo = {
        name: 'faith',
        description: 'dot Faith Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FAMILY = TopLevelDomainInfo = {
        name: 'family',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FAN = TopLevelDomainInfo = {
        name: 'fan',
        description: 'Asiamix Digital Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FANS = TopLevelDomainInfo = {
        name: 'fans',
        description: 'Asiamix Digital Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FARM = TopLevelDomainInfo = {
        name: 'farm',
        description: 'Just Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FARMERS = TopLevelDomainInfo = {
        name: 'farmers',
        description: 'Farmers Insurance Exchange',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FASHION = TopLevelDomainInfo = {
        name: 'fashion',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FAST = TopLevelDomainInfo = {
        name: 'fast',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FEDEX = TopLevelDomainInfo = {
        name: 'fedex',
        description: 'Federal Express Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    FEEDBACK = TopLevelDomainInfo = {
        name: 'feedback',
        description: 'Top Level Spectrum, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FERRARI = TopLevelDomainInfo = {
        name: 'ferrari',
        description: 'Fiat Chrysler Automobiles N.V.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    FERRERO = TopLevelDomainInfo = {
        name: 'ferrero',
        description: 'Ferrero Trading Lux S.A.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    FI = TopLevelDomainInfo = {
        name: 'fi',
        description: 'Finland (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    FIDELITY = TopLevelDomainInfo = {
        name: 'fidelity',
        description: 'Fidelity Brokerage Services LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FIDO = TopLevelDomainInfo = {
        name: 'fido',
        description: 'Rogers Communications Canada Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FILM = TopLevelDomainInfo = {
        name: 'film',
        description: 'Motion Picture Domain Registry Pty Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FINAL = TopLevelDomainInfo = {
        name: 'final',
        description: 'Núcleo de Informação e Coordenação do Ponto BR - NIC.br',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FINANCE = TopLevelDomainInfo = {
        name: 'finance',
        description: 'Cotton Cypress, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FINANCIAL = TopLevelDomainInfo = {
        name: 'financial',
        description: 'Just Cover, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FIRE = TopLevelDomainInfo = {
        name: 'fire',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FIRESTONE = TopLevelDomainInfo = {
        name: 'firestone',
        description: 'Bridgestone Licensing Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FIRMDALE = TopLevelDomainInfo = {
        name: 'firmdale',
        description: 'Firmdale Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FISH = TopLevelDomainInfo = {
        name: 'fish',
        description: 'Fox Woods, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FISHING = TopLevelDomainInfo = {
        name: 'fishing',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FIT = TopLevelDomainInfo = {
        name: 'fit',
        description: 'Minds + Machines Group Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FITNESS = TopLevelDomainInfo = {
        name: 'fitness',
        description: 'Brice Orchard, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FJ = TopLevelDomainInfo = {
        name: 'fj',
        description: 'Fiji (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    FK = TopLevelDomainInfo = {
        name: 'fk',
        description: 'Falkland Islands (Malvinas)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    FLICKR = TopLevelDomainInfo = {
        name: 'flickr',
        description: 'Yahoo! Domain Services Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FLIGHTS = TopLevelDomainInfo = {
        name: 'flights',
        description: 'Fox Station, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FLIR = TopLevelDomainInfo = {
        name: 'flir',
        description: 'FLIR Systems, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FLORIST = TopLevelDomainInfo = {
        name: 'florist',
        description: 'Half Cypress, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FLOWERS = TopLevelDomainInfo = {
        name: 'flowers',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FLY = TopLevelDomainInfo = {
        name: 'fly',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FM = TopLevelDomainInfo = {
        name: 'fm',
        description: 'Micronesia (Federated States of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    FO = TopLevelDomainInfo = {
        name: 'fo',
        description: 'Faroe Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    FOO = TopLevelDomainInfo = {
        name: 'foo',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FOOD = TopLevelDomainInfo = {
        name: 'food',
        description: 'Lifestyle Domain Holdings, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FOOTBALL = TopLevelDomainInfo = {
        name: 'football',
        description: 'Foggy Farms, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FORD = TopLevelDomainInfo = {
        name: 'ford',
        description: 'Ford Motor Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    FOREX = TopLevelDomainInfo = {
        name: 'forex',
        description: 'DOTFOREX REGISTRY LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FORSALE = TopLevelDomainInfo = {
        name: 'forsale',
        description: 'United TLD Holdco, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FORUM = TopLevelDomainInfo = {
        name: 'forum',
        description: 'Fegistry, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FOUNDATION = TopLevelDomainInfo = {
        name: 'foundation',
        description: 'John Dale, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FOX = TopLevelDomainInfo = {
        name: 'fox',
        description: 'FOX Registry, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    FR = TopLevelDomainInfo = {
        name: 'fr',
        description: 'France (French Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    FREE = TopLevelDomainInfo = {
        name: 'free',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FRESENIUS = TopLevelDomainInfo = {
        name: 'fresenius',
        description: 'Fresenius Immobilien-Verwaltungs-GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FRL = TopLevelDomainInfo = {
        name: 'frl',
        description: 'FRLregistry B.V.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FROGANS = TopLevelDomainInfo = {
        name: 'frogans',
        description: 'OP3FT',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FRONTIER = TopLevelDomainInfo = {
        name: 'frontier',
        description: 'Frontier Communications Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    FTR = TopLevelDomainInfo = {
        name: 'ftr',
        description: 'Frontier Communications Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    FUJITSU = TopLevelDomainInfo = {
        name: 'fujitsu',
        description: 'Fujitsu Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    FUN = TopLevelDomainInfo = {
        name: 'fun',
        description: 'DotSpace, Inc.',
        public: true,
        category: TopLevelDomainCategory.FUN,
    },
    FUND = TopLevelDomainInfo = {
        name: 'fund',
        description: 'John Castle, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FURNITURE = TopLevelDomainInfo = {
        name: 'furniture',
        description: 'Lone Fields, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FUTBOL = TopLevelDomainInfo = {
        name: 'futbol',
        description: 'United TLD Holdco, Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    FYI = TopLevelDomainInfo = {
        name: 'fyi',
        description: 'Silver Tigers, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GA = TopLevelDomainInfo = {
        name: 'ga',
        description: 'Gabonese Republic',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GAL = TopLevelDomainInfo = {
        name: 'gal',
        description: 'Asociación puntoGAL',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GALLERY = TopLevelDomainInfo = {
        name: 'gallery',
        description: 'Sugar House, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GALLO = TopLevelDomainInfo = {
        name: 'gallo',
        description: 'Gallo Vineyards, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GALLUP = TopLevelDomainInfo = {
        name: 'gallup',
        description: 'Gallup, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GAME = TopLevelDomainInfo = {
        name: 'game',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GAMES = TopLevelDomainInfo = {
        name: 'games',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GAP = TopLevelDomainInfo = {
        name: 'gap',
        description: 'The Gap, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    GARDEN = TopLevelDomainInfo = {
        name: 'garden',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GAY = TopLevelDomainInfo = {
        name: 'gay',
        description: 'Top Level Design, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GB = TopLevelDomainInfo = {
        name: 'gb',
        description: 'United Kingdom of Great Britain and Northern Ireland',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GBIZ = TopLevelDomainInfo = {
        name: 'gbiz',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GD = TopLevelDomainInfo = {
        name: 'gd',
        description: 'Grenada',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GDN = TopLevelDomainInfo = {
        name: 'gdn',
        description: 'Joint Stock Company "Navigation-information systems"',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GE = TopLevelDomainInfo = {
        name: 'ge',
        description: 'Georgia',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GEA = TopLevelDomainInfo = {
        name: 'gea',
        description: 'GEA Group Aktiengesellschaft',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GENT = TopLevelDomainInfo = {
        name: 'gent',
        description: 'Combell nv',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GENTING = TopLevelDomainInfo = {
        name: 'genting',
        description: 'Resorts World Inc. Pte. Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GEORGE = TopLevelDomainInfo = {
        name: 'george',
        description: 'Wal-Mart Stores, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GF = TopLevelDomainInfo = {
        name: 'gf',
        description: 'French Guiana (French Department of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GG = TopLevelDomainInfo = {
        name: 'gg',
        description: 'Guernsey (Bailiwick of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GGEE = TopLevelDomainInfo = {
        name: 'gee',
        description: 'Lifestyle Domain Holdings, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GH = TopLevelDomainInfo = {
        name: 'gh',
        description: 'Ghana (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GI = TopLevelDomainInfo = {
        name: 'gi',
        description: 'Gibraltar',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GIFT = TopLevelDomainInfo = {
        name: 'gift',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GIFTS = TopLevelDomainInfo = {
        name: 'gifts',
        description: 'Goose Sky, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GIVES = TopLevelDomainInfo = {
        name: 'gives',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GIVING = TopLevelDomainInfo = {
        name: 'giving',
        description: 'Giving Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GL = TopLevelDomainInfo = {
        name: 'gl',
        description: 'Greenland',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GLASS = TopLevelDomainInfo = {
        name: 'glass',
        description: 'Black Cover, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GLE = TopLevelDomainInfo = {
        name: 'gle',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GLOBAL = TopLevelDomainInfo = {
        name: 'global',
        description: 'Dot Global Domain Registry Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GLOBO = TopLevelDomainInfo = {
        name: 'globo',
        description: 'Globo Comunicação e Participações S.A',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    GM = TopLevelDomainInfo = {
        name: 'gm',
        description: 'Gambia (Republic of the)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GMAIL = TopLevelDomainInfo = {
        name: 'gmail',
        description: 'Charleston Road Registry Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    GMBH = TopLevelDomainInfo = {
        name: 'gmbh',
        description: 'Extra Dynamite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GMO = TopLevelDomainInfo = {
        name: 'gmo',
        description: 'GMO Internet, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GMX = TopLevelDomainInfo = {
        name: 'gmx',
        description: '1&1 Mail & Media GmbH',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    GN = TopLevelDomainInfo = {
        name: 'gn',
        description: 'Guinea (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GODADDY = TopLevelDomainInfo = {
        name: 'godaddy',
        description: 'Go Daddy East, LLC',
        public: false,
        category: TopLevelDomainCategory.GENERIC,
    },
    GOLD = TopLevelDomainInfo = {
        name: 'gold',
        description: 'June Edge, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GOLDPOINT = TopLevelDomainInfo = {
        name: 'goldpoint',
        description: 'YODOBASHI CAMERA CO.,LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GOLF = TopLevelDomainInfo = {
        name: 'golf',
        description: 'Lone Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GOO = TopLevelDomainInfo = {
        name: 'goo',
        description: 'NTT Resonant Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GOODYEAR = TopLevelDomainInfo = {
        name: 'goodyear',
        description: 'The Goodyear Tire & Rubber Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GOOG = TopLevelDomainInfo = {
        name: 'goog',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GOOGLE = TopLevelDomainInfo = {
        name: 'google',
        description: 'Charleston Road Registry Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    GOP = TopLevelDomainInfo = {
        name: 'gop',
        description: 'Republican State Leadership Committee, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GOT = TopLevelDomainInfo = {
        name: 'got',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GOV = TopLevelDomainInfo = {
        name: 'gov',
        description: 'U.S. national government agencies',
        public: false,
        category: TopLevelDomainCategory.GOVERNMENT,
    },
    GP = TopLevelDomainInfo = {
        name: 'gp',
        description: 'Guadeloupe (French Department of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GQ = TopLevelDomainInfo = {
        name: 'gq',
        description: 'Equatorial Guinea (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GR = TopLevelDomainInfo = {
        name: 'gr',
        description: 'Greece (Hellenic Republic)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GRAINGER = TopLevelDomainInfo = {
        name: 'grainger',
        description: 'Grainger Registry Services, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GRAPHICS = TopLevelDomainInfo = {
        name: 'graphics',
        description: 'Over Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GRATIS = TopLevelDomainInfo = {
        name: 'gratis',
        description: 'Pioneer Tigers, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GREEN = TopLevelDomainInfo = {
        name: 'green',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GRIPE = TopLevelDomainInfo = {
        name: 'gripe',
        description: 'Corn Sunset, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GROCERY = TopLevelDomainInfo = {
        name: 'grocery',
        description: 'Wal-Mart Stores, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GROUP = TopLevelDomainInfo = {
        name: 'group',
        description: 'Romeo Town, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GS = TopLevelDomainInfo = {
        name: 'gs',
        description: 'South Georgia and the South Sandwich Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GT = TopLevelDomainInfo = {
        name: 'gt',
        description: 'Guatemala (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GU = TopLevelDomainInfo = {
        name: 'gu',
        description: 'Guam',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GUARDIAN = TopLevelDomainInfo = {
        name: 'guardian',
        description: 'The Guardian Life Insurance Company of America',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    GUCCI = TopLevelDomainInfo = {
        name: 'gucci',
        description: 'Guccio Gucci S.p.a.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    GUGE = TopLevelDomainInfo = {
        name: 'guge',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GUIDE = TopLevelDomainInfo = {
        name: 'guide',
        description: 'Snow Moon, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GUITARS = TopLevelDomainInfo = {
        name: 'guitars',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GURU = TopLevelDomainInfo = {
        name: 'guru',
        description: 'Pioneer Cypress, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    GW = TopLevelDomainInfo = {
        name: 'gw',
        description: 'Guinea-Bissau (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    GY = TopLevelDomainInfo = {
        name: 'gy',
        description: 'Guyana (Co-operative Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    HAIR = TopLevelDomainInfo = {
        name: 'hair',
        description: 'L\'Oreal',
        public: true,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HAMBURG = TopLevelDomainInfo = {
        name: 'hamburg',
        description: 'Hamburg Top-Level-Domain GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HANGOUT = TopLevelDomainInfo = {
        name: 'hangout',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HAUS = TopLevelDomainInfo = {
        name: 'haus',
        description: 'United TLD Holdco, LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HBO = TopLevelDomainInfo = {
        name: 'hbo',
        description: 'HBO Registry Services, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HDFC = TopLevelDomainInfo = {
        name: 'hdfc',
        description: 'HOUSING DEVELOPMENT FINANCE CORPORATION LIMITED',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HDFCBANK = TopLevelDomainInfo = {
        name: 'hdfcbank',
        description: 'HDFC Bank Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HEALTH = TopLevelDomainInfo = {
        name: 'health',
        description: 'DotHealth, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HEALTHCARE = TopLevelDomainInfo = {
        name: 'healthcare',
        description: 'Silver Glen, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HELP = TopLevelDomainInfo = {
        name: 'help',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HELSINKI = TopLevelDomainInfo = {
        name: 'helsinki',
        description: 'City of Helsinki',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HERE = TopLevelDomainInfo = {
        name: 'here',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HERMES = TopLevelDomainInfo = {
        name: 'hermes',
        description: 'Hermes International',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HIPHOP = TopLevelDomainInfo = {
        name: 'hiphop',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HISAMITSU = TopLevelDomainInfo = {
        name: 'hisamitsu',
        description: 'Hisamitsu Pharmaceutical Co.,Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HITACHI = TopLevelDomainInfo = {
        name: 'hitachi',
        description: 'Hitachi, Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HIV = TopLevelDomainInfo = {
        name: 'hiv',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HK = TopLevelDomainInfo = {
        name: 'hk',
        description: 'Hong Kong (Hong Kong Special Administrative Region of the People\'s Republic of China)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    HKT = TopLevelDomainInfo = {
        name: 'hkt',
        description: 'PCCW-HKT DataCom Services Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HM = TopLevelDomainInfo = {
        name: 'hm',
        description: 'Heard and McDonald Islands',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    HN = TopLevelDomainInfo = {
        name: 'hn',
        description: 'Honduras (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    HOCKEY = TopLevelDomainInfo = {
        name: 'hockey',
        description: 'Half Willow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOLDINGS = TopLevelDomainInfo = {
        name: 'holdings',
        description: 'John Madison, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOLIDAY = TopLevelDomainInfo = {
        name: 'holiday',
        description: 'Goose Woods, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOMEDEPOT = TopLevelDomainInfo = {
        name: 'homedepot',
        description: 'Home Depot Product Authority, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HOMEGOODS = TopLevelDomainInfo = {
        name: 'homegoods',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HOMES = TopLevelDomainInfo = {
        name: 'homes',
        description: 'DERHomes, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOMESENSE = TopLevelDomainInfo = {
        name: 'homesense',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HONDA = TopLevelDomainInfo = {
        name: 'honda',
        description: 'Honda Motor Co., Ltd.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HORSE = TopLevelDomainInfo = {
        name: 'horse',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOSPITAL = TopLevelDomainInfo = {
        name: 'hospital',
        description: 'Ruby Pike, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOST = TopLevelDomainInfo = {
        name: 'host',
        description: 'DotHost Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOSTING = TopLevelDomainInfo = {
        name: 'hosting',
        description: 'Uniregistry, Corp.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOT = TopLevelDomainInfo = {
        name: 'hot',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.SEXUAL,
    },
    HOTELS = TopLevelDomainInfo = {
        name: 'hotels',
        description: 'Booking.com B.V.',
        public: false,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOTMAIL = TopLevelDomainInfo = {
        name: 'hotmail',
        description: 'Microsoft Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HOUSE = TopLevelDomainInfo = {
        name: 'house',
        description: 'Sugar Park, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HOW = TopLevelDomainInfo = {
        name: 'how',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    HR = TopLevelDomainInfo = {
        name: 'hr',
        description: 'Croatia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    HSBC = TopLevelDomainInfo = {
        name: 'hsbc',
        description: 'HSBC Global Services (UK) Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HT = TopLevelDomainInfo = {
        name: 'ht',
        description: 'Haiti (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    HU = TopLevelDomainInfo = {
        name: 'hu',
        description: 'Hungary (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    HUGHES = TopLevelDomainInfo = {
        name: 'hughes',
        description: 'Hughes Satellite Systems Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HYATT = TopLevelDomainInfo = {
        name: 'hyatt',
        description: 'Hyatt GTLD, L.L.C.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    HYUNDAI = TopLevelDomainInfo = {
        name: 'hyundai',
        description: 'Hyundai Motor Company',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    IBM = TopLevelDomainInfo = {
        name: 'ibm',
        description: 'International Business Machines Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    ICBC = TopLevelDomainInfo = {
        name: 'icbc',
        description: 'Industrial and Commercial Bank of China Limited',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    ICE = TopLevelDomainInfo = {
        name: 'ice',
        description: 'IntercontinentalExchange, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    ICU = TopLevelDomainInfo = {
        name: 'icu',
        description: 'One.com A/S',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ID = TopLevelDomainInfo = {
        name: 'id',
        description: 'Indonesia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    IE = TopLevelDomainInfo = {
        name: 'ie',
        description: 'Ireland',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    IEEE = TopLevelDomainInfo = {
        name: 'ieee',
        description: 'IEEE Global LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    IFM = TopLevelDomainInfo = {
        name: 'ifm',
        description: 'ifm electronic gmbh',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    IKANO = TopLevelDomainInfo = {
        name: 'ikano',
        description: 'Ikano S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    IL = TopLevelDomainInfo = {
        name: 'il',
        description: 'Israel (State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    IM = TopLevelDomainInfo = {
        name: 'im',
        description: 'Isle of Man',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    IMAMAT = TopLevelDomainInfo = {
        name: 'imamat',
        description: 'Fondation Aga Khan (Aga Khan Foundation)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    IMDB = TopLevelDomainInfo = {
        name: 'imdb',
        description: 'Amazon Registry Services, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    IMMO = TopLevelDomainInfo = {
        name: 'immo',
        description: 'Auburn Bloom, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    IMMOBILIEN = TopLevelDomainInfo = {
        name: 'immobilien',
        description: 'United TLD Holdco Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    IN = TopLevelDomainInfo = {
        name: 'in',
        description: 'India (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    INC = TopLevelDomainInfo = {
        name: 'inc',
        description: 'Intercap Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    INDUSTRIES = TopLevelDomainInfo = {
        name: 'industries',
        description: 'Outer House, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    INFINITI = TopLevelDomainInfo = {
        name: 'infiniti',
        description: 'NISSAN MOTOR CO., LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    INFO = TopLevelDomainInfo = {
        name: 'info',
        description: 'Afilias Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ING = TopLevelDomainInfo = {
        name: 'ing',
        description: 'Charleston Road Registry Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    INK = TopLevelDomainInfo = {
        name: 'ink',
        description: 'Top Level Design, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    INSTITUTE = TopLevelDomainInfo = {
        name: 'institute',
        description: 'Outer Maple, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    INSURANCE = TopLevelDomainInfo = {
        name: 'insurance',
        description: 'fTLD Registry Services LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    INSURE = TopLevelDomainInfo = {
        name: 'insure',
        description: 'Pioneer Willow, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    INT = TopLevelDomainInfo = {
        name: 'int',
        description: 'International Organizations',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    INTERNATIONAL = TopLevelDomainInfo = {
        name: 'international',
        description: 'Wild Way, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    INTUIT = TopLevelDomainInfo = {
        name: 'intuit',
        description: 'Intuit Administrative Services, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    INVESTMENTS = TopLevelDomainInfo = {
        name: 'investments',
        description: 'Holly Glen, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    IO = TopLevelDomainInfo = {
        name: 'io',
        description: 'British Indian Ocean Territory',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    IPIRANGA = TopLevelDomainInfo = {
        name: 'ipiranga',
        description: 'Ipiranga Produtos de Petroleo S.A.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    IQ = TopLevelDomainInfo = {
        name: 'iq',
        description: 'Iraq (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    IR = TopLevelDomainInfo = {
        name: 'ir',
        description: 'Iran (Islamic Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },  
    IRISH = TopLevelDomainInfo = {
        name: 'irish',
        description: 'Dot-Irish LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    IS = TopLevelDomainInfo = {
        name: 'is',
        description: 'Iceland',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ISMAILI = TopLevelDomainInfo = {
        name: 'ismaili',
        description: 'Fondation Aga Khan (Aga Khan Foundation)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    IST
    ISTANBUL
    IT
    ITAU
    ITV
    JAGUAR
    JAVA
    JCB
    JE
    JEEP
    JETZT
    JEWELRY
    JIO
    JLL
    JM
    JMP
    JNJ
    JO
    JOBS
    JOBURG
    JOT
    JOY
    JP
    JPMORGAN
    JPRS
    JUEGOS
    JUNIPER
    KAUFEN
    KDDI
    KE
    KERRYHOTELS
    KERRYLOGISTICS
    KERRYPROPERTIES
    KFH
    KG
    KH
    KI
    KIA
    KIDS
    KIM
    KINDER
    KINDLE
    KITCHEN
    KIWI
    KM
    KN
    KOELN
    KOMATSU
    KOSHER
    KP
    KPMG
    KPN
    KR
    KRD
    KRED
    KUOKGROUP
    KW
    KY
    KYOTO
    KZ
    LA
    LACAIXA
    LAMBORGHINI
    LAMER
    LANCASTER
    LAND
    LANDROVER
    LANXESS
    LASALLE
    LAT
    LATINO
    LATROBE
    LAW
    LAWYER
    LB
    LC
    LDS
    LEASE
    LECLERC
    LEFRAK
    LEGAL
    LEGO
    LEXUS
    LGBT
    LI
    LIDL
    LIFE
    LIFEINSURANCE
    LIFESTYLE
    LIGHTING
    LIKE
    LILLY
    LIMITED
    LIMO
    LINCOLN
    LINK
    LIPSY
    LIVE
    LIVING
    LK
    LLC
    LLP
    LOAN
    LOANS
    LOCKER
    LOCUS
    LOL
    LONDON
    LOTTE
    LOTTO
    LOVE
    LPL
    LPLFINANCIAL
    LR
    LS
    LT
    LTD
    LTDA
    LU
    LUNDBECK
    LUXE
    LUXURY
    LV
    LY
    MA
    MADRID
    MAIF
    MAISON
    MAKEUP
    MAN
    MANAGEMENT
    MANGO
    MAP
    MARKET
    MARKETING
    MARKETS
    MARRIOTT
    MARSHALLS
    MATTEL
    MBA
    MC
    MCKINSEY
    MD
    ME
    MED
    MEDIA
    MEET
    MELBOURNE
    MEME
    MEMORIAL
    MEN
    MENU
    MERCKMSD
    MG
    MH
    MIAMI
    MICROSOFT
    MIL
    MINI
    MINT
    MIT
    MITSUBISHI
    MK
    ML
    MLB
    MLS
    MM
    MMA
    MN
    MO
    MOBI
    MOBILE
    MODA
    MOE
    MOI
    MOM
    MONASH
    MONEY
    MONSTER
    MORMON
    MORTGAGE
    MOSCOW
    MOTO
    MOTORCYCLES
    MOV
    MOVIE
    MP
    MQ
    MR
    MS
    MSD
    MT
    MTN
    MTR
    MU
    MUSEUM
    MUSIC
    MV
    MW
    MX
    MY
    MZ
    NA
    NAB
    NAGOYA
    NAME
    NATURA
    NAVY
    NBA
    NC
    NE
    NEC
    NET
    NETBANK
    NETFLIX
    NETWORK
    NEUSTAR
    NEW
    NEWS
    NEXT
    NEXTDIRECT
    NEXUS
    NF
    NFL
    NG
    NGO
    NHK
    NI
    NICO
    NIKE
    NIKON
    NINJA
    NISSAN
    NISSAY
    NL
    NO
    NOKIA
    NORTON
    NOW
    NOWRUZ
    NOWTV
    NP
    NR
    NRA
    NRW
    NTT
    NU
    NYC
    NZ
    OBI
    OBSERVER
    OFFICE
    OKINAWA
    OLAYAN
    OLAYANGROUP
    OLDNAVY
    OLLO
    OM
    OMEGA
    ONE
    ONG
    ONL
    ONLINE
    OOO
    OPEN
    ORACLE
    ORANGE
    ORG
    ORGANIC
    ORIGINS
    OSAKA
    OTSUKA
    OTT
    OVH
    PA
    PAGE
    PANASONIC
    PARIS
    PARS
    PARTNERS
    PARTS
    PARTY
    PAY
    PCCW
    PE
    PET
    PF
    PFIZER
    PG
    PH
    PHARMACY
    PHD
    PHILIPS
    PHONE
    PHOTO
    PHOTOGRAPHY
    PHOTOS
    PHYSIO
    PICS
    PICTET
    PICTURES
    PID
    PIN
    PING
    PINK
    PIONEER
    PIZZA
    PK
    PL
    PLACE
    PLAY
    PLAYSTATION
    PLUMBING
    PLUS
    PM
    PN
    PNC
    POHL
    POKER
    POLITIE
    PORN = TopLevelDomainInfo = {
        name: 'porn',
        description: 'ICM Registry PN LLC',
        public: true,
        category: TopLevelDomainCategory.SEXUAL,
    },
    POST
    PR
    PRAMERICA
    PRAXI
    PRESS
    PRIME
    PRO
    PROD
    PRODUCTIONS
    PROF
    PROGRESSIVE
    PROMO
    PROPERTIES
    PROPERTY
    PROTECTION
    PRU
    PRUDENTIAL
    PS
    PT
    PUB
    PW
    PWC
    PY
    QA
    QPON
    QUEBEC
    QUEST
    RACING
    RADIO
    RE
    READ
    REALESTATE
    REALTOR
    REALTY
    RECIPES
    RED
    REDSTONE
    REDUMBRELLA
    REHAB
    REISE
    REISEN
    REIT
    RELIANCE
    REN
    RENT
    RENTALS
    REPAIR
    REPORT
    REPUBLICAN
    REST
    RESTAURANT
    REVIEW
    REVIEWS
    REXROTH
    RICH
    RICHARDLI
    RICOH
    RIL
    RIO
    RIP
    RO
    ROCHER
    ROCKS
    RODEO
    ROGERS
    ROOM
    RS
    RSVP
    RU
    RUGBY
    RUHR
    RUN
    RW
    RWE
    RYUKYU
    SA
    SAARLAND
    SAFE
    SAFETY
    SAKURA
    SALE
    SALON
    SAMSCLUB
    SAMSUNG
    SANDVIK
    SANDVIKCOROMANT
    SANOFI
    SAP
    SARL
    SAS
    SAVE
    SAXO
    SB
    SBI
    SBS
    SC
    SCA
    SCB
    SCHAEFFLER
    SCHMIDT
    SCHOLARSHIPS
    SCHOOL
    SCHULE
    SCHWARZ
    SCIENCE
    SCOT
    SD
    SE
    SEARCH
    SEAT
    SECURE
    SECURITY
    SEEK
    SELECT
    SENER
    SERVICES
    SEVEN
    SEW
    SEX
    SEXY
    SFR
    SG
    SH
    SHANGRILA
    SHARP
    SHAW
    SHELL
    SHIA
    SHIKSHA
    SHOES
    SHOP
    SHOPPING
    SHOUJI
    SHOW
    SI
    SILK
    SINA
    SINGLES
    SITE
    SJ
    SK
    SKI
    SKIN
    SKY
    SKYPE
    SL
    SLING
    SM
    SMART
    SMILE
    SN
    SNCF
    SO
    SOCCER
    SOCIAL
    SOFTBANK
    SOFTWARE
    SOHU
    SOLAR
    SOLUTIONS
    SONG
    SONY
    SOY
    SPA
    SPACE
    SPORT
    SPOT
    SR
    SRL
    SS
    ST
    STADA
    STAPLES
    STAR
    STATEBANK
    STATEFARM
    STC
    STCGROUP
    STOCKHOLM
    STORAGE
    STORE
    STREAM
    STUDIO
    STUDY
    STYLE
    SU
    SUCKS
    SUPPLIES
    SUPPLY
    SUPPORT
    SURF
    SURGERY
    SUZUKI
    SV
    SWATCH
    SWISS
    SX
    SY
    SYDNEY
    SYSTEMS
    SZ
    TAB
    TAIPEI
    TALK
    TAOBAO
    TARGET
    TATAMOTORS
    TATAR
    TATTOO
    TAX
    TAXI
    TC
    TCI
    TD
    TDK
    TEAM
    TECH
    TECHNOLOGY
    TEL
    TEMASEK
    TENNIS
    TEVA
    TF
    TG
    TH
    THD
    THEATER
    THEATRE
    TIAA
    TICKETS
    TIENDA
    TIPS
    TIRES
    TIROL
    TJ
    TJMAXX
    TJX
    TK
    TKMAXX = TopLevelDomainInfo = {
        name: 'tkmaxx',
        description: 'The TJX Companies, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    TL
    TM
    TMALL
    TN
    TO
    TODAY
    TOKYO
    TOOLS
    TOP
    TORAY
    TOSHIBA = TopLevelDomainInfo = {
        name: 'toshiba',
        description: 'TOSHIBA Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    TOTAL
    TOURS
    TOWN
    TOYOTA = TopLevelDomainInfo = {
        name: 'toyota',
        description: 'TOYOTA MOTOR CORPORATION',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    TOYS
    TR
    TRADE
    TRADING
    TRAINING
    TRAVEL
    TRAVELERS
    TRAVELERSINSURANCE
    TRUST
    TRV
    TT
    TUBE
    TUI
    TUNES
    TUSHU
    TV = TopLevelDomainInfo = {
        name: 'tv',
        description: 'Tuvalu',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    TVS
    TW
    TZ
    UA
    UBANK
    UBS
    UG
    UK
    UNICOM
    UNIVERSITY
    UNO
    UOL
    UPS
    US
    UY
    UZ
    VA
    VACATIONS
    VANA
    VANGUARD
    VC
    VE
    VEGAS
    VENTURES
    VERISIGN
    VERSICHERUNG
    VET
    VG
    VI
    VIAJES
    VIDEO
    VIG
    VIKING
    VILLAS
    VIN
    VIP
    VIRGIN
    VISA
    VISION
    VIVA
    VIVO
    VLAANDEREN
    VN
    VODKA
    VOLKSWAGEN = TopLevelDomainInfo = {
        name: 'volkswagen',
        description: 'Volkswagen Group of America Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    VOLVO = TopLevelDomainInfo = {
        name: 'volvo',
        description: 'Volvo Holding Sverige Aktiebolag',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    VOTE
    VOTING
    VOTO
    VOYAGE
    VU
    WALES
    WALMART
    WALTER
    WANG
    WANGGOU
    WATCH
    WATCHES
    WEATHER
    WEATHERCHANNEL
    WEBCAM
    WEBER
    WEBSITE
    WED
    WEDDING
    WEIBO
    WEIR
    WF
    WHOSWHO
    WIEN
    WIKI
    WILLIAMHILL
    WIN
    WINDOWS
    WINE
    WINNERS
    WME
    WOLTERSKLUWER
    WOODSIDE
    WORK
    WORKS = TopLevelDomainInfo = {
        name: 'works',
        description: 'Little Dynamite, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    WORLD = TopLevelDomainInfo = {
        name: 'world',
        description: 'Bitter Fields, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    WOW = TopLevelDomainInfo = {
        name: 'wow',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    WS = TopLevelDomainInfo = {
        name: 'ws',
        description: 'Samoa (Independent State of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    WTC = TopLevelDomainInfo = {
        name: 'wtc',
        description: 'World Trade Centers Association, Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    WTF = TopLevelDomainInfo = {
        name: 'wtf',
        description: 'Hidden Way, LLC',
        public: true,
        category: TopLevelDomainCategory.FUN,
    },
    XBOX = TopLevelDomainInfo = {
        name: 'xbox',
        description: 'Microsoft Corporation',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    XEROX = TopLevelDomainInfo = {
        name: 'xerox',
        description: 'Xerox DNHC LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    XFINITY = TopLevelDomainInfo = {
        name: 'xfinity',
        description: 'Comcast IP Holdings I, LLC',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    XIHUAN = TopLevelDomainInfo = {
        name: '喜欢',
        description: 'QIHOO 360 TECHNOLOGY CO. LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XIN = TopLevelDomainInfo = {
        name: '新闻',
        description: 'Guangzhou YU Wei Information Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--11B4C3D = TopLevelDomainInfo = {
        name: 'कॉम',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--1CK2E1B = TopLevelDomainInfo = {
        name: 'セール',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--1QQW23A = TopLevelDomainInfo = {
        name: '佛山',
        description: 'Guangzhou YU Wei Information Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--2SCRJ9C = TopLevelDomainInfo = {
        name: 'ಭಾರತ',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--30RR7Y = TopLevelDomainInfo = {
        name: '慈善',
        description: 'Excellent First Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--3BST00M = TopLevelDomainInfo = {
        name: '集团',
        description: 'Eagle Horizon Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--3DS443G = TopLevelDomainInfo = {
        name: '在线',
        description: 'TLD REGISTRY LIMITED OY',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--3E0B707E = TopLevelDomainInfo = {
        name: '한국',
        description: 'KISA (Korea Internet &amp; Security Agency)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--3HCRJ9C = TopLevelDomainInfo = {
        name: 'ଭାରତ',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--3PXU8K = TopLevelDomainInfo = {
        name: 'ไทย',
        description: 'Thai Network Information Center Foundation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--42C2D9A = TopLevelDomainInfo = {
        name: '香港',
        description: 'Hong Kong Internet Registration Corporation Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--45BR5CYL = TopLevelDomainInfo = {
        name: '台湾',
        description: 'Taiwan Network Information Center (TWNIC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--45BRJ9C = TopLevelDomainInfo = {
        name: '台灣',
        description: 'Taiwan Network Information Center (TWNIC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--45Q11C = TopLevelDomainInfo = {
        name: '中文网',
        description: 'TLD REGISTRY LIMITED OY',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--4DBRK0CE = TopLevelDomainInfo = {
        name: '中信',
        description: 'CITIC Group Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--4GBRIM = TopLevelDomainInfo = {
        name: 'موقع',
        description: 'Suhub Electronic Establishment',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--54B7FTA0CC = TopLevelDomainInfo = {
        name: '企业',
        description: 'Dash McCook, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--55QW42G = TopLevelDomainInfo = {
        name: '香港',
        description: 'Hong Kong Internet Registration Corporation Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--55QX5D = TopLevelDomainInfo = {
        name: '公司',
        description: 'Computer Network Information Center of Chinese Academy of Sciences （China Internet Network Information Center）',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--5SU34J936BGSG = TopLevelDomainInfo = {
        name: '网店',
        description: 'Zodiac Aquarius Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--5TZM5G = TopLevelDomainInfo = {
        name: '移动',
        description: 'Afilias plc',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--6FRZ82G = TopLevelDomainInfo = {
        name: '我爱你',
        description: 'Tycoon Treasure Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--6QQ986B3XL = TopLevelDomainInfo = {
        name: '政务',
        description: 'China Organizational Name Administration Center',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--80ADXHKS = TopLevelDomainInfo = {
        name: 'москва',
        description: 'ICM Registry LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--80AO21A = TopLevelDomainInfo = {
        name: 'қаз',
        description: 'Association of IT Companies of Kazakhstan',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--80AQECDR1A = TopLevelDomainInfo = {
        name: 'католик',
        description: 'Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--80ASEHDB = TopLevelDomainInfo = {
        name: 'онлайн',
        description: 'CORE Association',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--80ASWG = TopLevelDomainInfo = {
        name: 'сайт',
        description: 'CORE Association',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--8Y0A063A = TopLevelDomainInfo = {
        name: '联通',
        description: 'China United Network Communications Corporation Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--90A3AC = TopLevelDomainInfo = {
        name: 'срб',
        description: 'Serbian National Internet Domain Registry (RNIDS)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--90AE = TopLevelDomainInfo = {
        name: 'бг',
        description: 'Imena.BG AD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--90AIS = TopLevelDomainInfo = {
        name: 'бел',
        description: 'Reliable Software, Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--9DBQ2A = TopLevelDomainInfo = {
        name: 'קום',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--9ET52U = TopLevelDomainInfo = {
        name: '时尚',
        description: 'RISE VICTORY LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--9KRT00A = TopLevelDomainInfo = {
        name: '微博',
        description: 'Sina Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--B4W605FERD = TopLevelDomainInfo = {
        name: '淡马锡',
        description: 'Temasek Holdings (Private) Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--BCK1B9A5DRE4C = TopLevelDomainInfo = {
        name: 'ファッション',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--C1AVG = TopLevelDomainInfo = {
        name: 'орг',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--C2BR7G  = TopLevelDomainInfo = {
        name: 'नेट',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--CCK2B3B = TopLevelDomainInfo = {
        name: 'ストア',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--CCKWCXETD = TopLevelDomainInfo = {
        name: 'ポイント',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--CG4BKI = TopLevelDomainInfo = {
        name: '삼성',
        description: 'SAMSUNG SDS CO., LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--CLCHC0EA0B2G2A9GCD = TopLevelDomainInfo = {
        name: 'சிங்கப்பூர்',
        description: 'Singapore Network Information Centre (SGNIC) Pte Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--CZR694B = TopLevelDomainInfo = {
        name: '商标',
        description: 'HU YI GLOBAL INFORMATION RESOURCES(HOLDING) COMPANY.HONGKONG LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--CZRS0T = TopLevelDomainInfo = {
        name: '商店',
        description: 'Wild Island, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--CZRU2D = TopLevelDomainInfo = {
        name: '商城',
        description: 'Zodiac Aquarius Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--D1ACJ3B = TopLevelDomainInfo = {
        name: 'дети',
        description: 'The Foundation for Network Initiatives “The Smart Internet”',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--D1ALF = TopLevelDomainInfo = {
        name: 'мкд',
        description: 'Macedonian Academic Research Network Skopje',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--E1A4C = TopLevelDomainInfo = {
        name: 'ею',
        description: 'EURid vzw/asbl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--ECKVDTC9D = TopLevelDomainInfo = {
        name: 'ポルテ',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--EFVY88H = TopLevelDomainInfo = {
        name: '新闻',
        description: 'Guangzhou YU Wei Information Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FCT429K = TopLevelDomainInfo = {
        name: '工行',
        description: 'Industrial and Commercial Bank of China Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FHBEI = TopLevelDomainInfo = {
        name: 'كوم',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FIQ228C5HS = TopLevelDomainInfo = {
        name: '中文网',
        description: 'TLD REGISTRY LIMITED OY',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FIQ64B = TopLevelDomainInfo = {
        name: '中信',
        description: 'CITIC Group Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FIQS8S = TopLevelDomainInfo = {
        name: '中国',
        description: 'China Internet Network Information Center (CNNIC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FIQZ9S = TopLevelDomainInfo = {
        name: '中國',
        description: 'China Internet Network Information Center (CNNIC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FJQ720A = TopLevelDomainInfo = {
        name: '嘉里大酒店',
        description: 'Kerry Trading Co. Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FLW351E = TopLevelDomainInfo = {
        name: '電訊盈科',
        description: 'PCCW Enterprises Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FPCRJ9C3D = TopLevelDomainInfo = {
        name: '购物',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FZC2C9E2C = TopLevelDomainInfo = {
        name: 'クラウド',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--FZYS8D69UVGM = TopLevelDomainInfo = {
        name: '通販',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--G2XX48C = TopLevelDomainInfo = {
        name: '网店',
        description: 'Zodiac Aquarius Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--GCKR3F0F = TopLevelDomainInfo = {
        name: 'संगठन',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--GECRJ9C = TopLevelDomainInfo = {
        name: 'คอม',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--GK3AT1E = TopLevelDomainInfo = {
        name: 'みんな',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--H2BREG3EVE = TopLevelDomainInfo = {
        name: 'グーグル',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--H2BRJ9C = TopLevelDomainInfo = {
        name: '世界',
        description: 'Stable Tone Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--H2BRJ9C8C = TopLevelDomainInfo = {
        name: '書籍',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--HXT814E = TopLevelDomainInfo = {
        name: '网址',
        description: 'KNET Co., Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--I1B6B1A6A2E = TopLevelDomainInfo = {
        name: '닷컴',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--IMR513N = TopLevelDomainInfo = {
        name: '政府',
        description: 'Net-Chinese Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--IO0A7I = TopLevelDomainInfo = {
        name: '삼성',
        description: 'SAMSUNG SDS CO., LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--J1AEF = TopLevelDomainInfo = {
        name: 'சிங்கப்பூர்',
        description: 'Singapore Network Information Centre (SGNIC) Pte Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--J1AMH = TopLevelDomainInfo = {
        name: 'ලංකා',
        description: 'LK Domain Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--J6W193G = TopLevelDomainInfo = {
        name: '集团',
        description: 'Eagle Horizon Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--JLQ480N2RG = TopLevelDomainInfo = {
        name: '在线',
        description: 'TLD REGISTRY LIMITED OY',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--JVR189M = TopLevelDomainInfo = {
        name: '한국',
        description: 'KISA (Korea Internet &amp; Security Agency)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--KCRX77D1X4A = TopLevelDomainInfo = {
        name: '八卦',
        description: 'Zodiac Scorpio Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--KPRW13D = TopLevelDomainInfo = {
        name: 'موقع',
        description: 'Suhub Electronic Establishment',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--KPRY57D = TopLevelDomainInfo = {
        name: 'موقع',
        description: 'Suhub Electronic Establishment',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--KPUT3I = TopLevelDomainInfo = {
        name: 'বাংলা',
        description: 'Posts and Telecommunications Division',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--L1ACC = TopLevelDomainInfo = {
        name: 'укр',
        description: 'Ukrainian Network Information Centre (UANIC), Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--LGBBAT1AD8J = TopLevelDomainInfo = {
        name: 'مليسيا',
        description: 'MYNIC Berhad',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGB9AWBF = TopLevelDomainInfo = {
        name: 'المغرب',
        description: 'Agence Nationale de Réglementation des Télécommunications (ANRT)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBA3A3EJT = TopLevelDomainInfo = {
        name: 'ابوظبي',
        description: 'Abu Dhabi Systems and Information Centre',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBA3A4F16A = TopLevelDomainInfo = {
        name: 'السعودية',
        description: 'Communications and Information Technology Commission',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBA7C0BBN0A = TopLevelDomainInfo = {
        name: 'سودان',
        description: 'Sudan Internet Society',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBAAKC7DVF = TopLevelDomainInfo = {
        name: 'همراه',
        description: 'Asia Green IT System Bilgisayar San. ve Tic. Ltd. Sti.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBAAM7A8H = TopLevelDomainInfo = {
        name: 'عرب',
        description: 'League of Arab States',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBAB2BD = TopLevelDomainInfo = {
        name: 'ارامكو',
        description: 'Aramco Services Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBAH1A3HJKRD = TopLevelDomainInfo = {
        name: 'ایران',
        description: 'Institute for Research in Fundamental Sciences (IPM)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBAI9AZGQP6J = TopLevelDomainInfo = {
        name: 'العليان',
        description: 'Crescent Holding GmbH',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBAYH7GPA = TopLevelDomainInfo = {
        name: 'اتصالات',
        description: 'Emirates Telecommunications Corporation (trading as Etisalat)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBBH1A = TopLevelDomainInfo = {
        name: 'بازار',
        description: 'CORE Association',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBBH1A71E = TopLevelDomainInfo = {
        name: 'موريتانيا',
        description: 'Université de Nouakchott Al Aasriya',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBC0A9AZCG = TopLevelDomainInfo = {
        name: 'پاکستان',
        description: 'National Telecommunication Corporation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBCA7DZDO = TopLevelDomainInfo = {
        name: 'الاردن',
        description: 'National Information Technology Center (NITC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBCPQ6GPA1A = TopLevelDomainInfo = {
        name: 'موبايلي',
        description: 'GreenTech Consultancy Company W.L.L.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBERP4A5D4AR = TopLevelDomainInfo = {
        name: 'بارت',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBGU82A = TopLevelDomainInfo = {
        name: 'بھارت',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBI4ECEXP = TopLevelDomainInfo = {
        name: 'المغرب',
        description: 'Agence Nationale de Réglementation des Télécommunications (ANRT)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBPL2FH = TopLevelDomainInfo = {
        name: 'السعودية',
        description: 'Communications and Information Technology Commission',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBT3DHD = TopLevelDomainInfo = {
        name: 'ڀارت',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBTX2B = TopLevelDomainInfo = {
        name: 'مصر',
        description: 'National Telecommunication Regulatory Authority - NTRA',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MGBX4CD0AB = TopLevelDomainInfo = {
        name: 'قطر',
        description: 'Communications Regulatory Authority',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MIX891F = TopLevelDomainInfo = {
        name: 'இலங்கை',
        description: 'LK Domain Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MK1BU44C = TopLevelDomainInfo = {
        name: 'இந்தியா',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--MXTQ1M = TopLevelDomainInfo = {
        name: 'آزمایشی',
        description: 'Internet Assigned Numbers Authority',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--NGBC5AZD = TopLevelDomainInfo = {
        name: 'الجزائر',
        description: 'CERIST',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--NGBE9E0A = TopLevelDomainInfo = {
        name: 'عمان',
        description: 'Telecommunications Regulatory Authority (TRA)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--NGBRX = TopLevelDomainInfo = {
        name: 'ارامكو',
        description: 'Aramco Services Company',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--NODE = TopLevelDomainInfo = {
        name: 'გე',
        description: 'Information Technologies Development Center (ITDC)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--NQV7F = TopLevelDomainInfo = {
        name: '机构',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--NQV7FS00EMA = TopLevelDomainInfo = {
        name: '组织机构',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--NYQY26A = TopLevelDomainInfo = {
        name: '健康',
        description: 'Stable Tone Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--O3CW4H = TopLevelDomainInfo = {
        name: 'ไทย',
        description: 'Thai Network Information Center Foundation',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--OGBPF8FL = TopLevelDomainInfo = {
        name: 'سورية',
        description: 'National Agency for Network Services (NANS)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--OTU796D = TopLevelDomainInfo = {
        name: '招聘',
        description: 'Dot Trademark TLD Holding Company Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--P1ACF = TopLevelDomainInfo = {
        name: 'рус',
        description: 'Rusnames Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--P1AI = TopLevelDomainInfo = {
        name: 'рф',
        description: 'Coordination Center for TLD RU',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--PGBS0DH = TopLevelDomainInfo = {
        name: 'بيتك',
        description: 'Kuwait Finance House',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--PSSY2U = TopLevelDomainInfo = {
        name: '机构',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--Q7CE6A = TopLevelDomainInfo = {
        name: 'グーグル',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--Q9JYB4C = TopLevelDomainInfo = {
        name: '삼성',
        description: 'SAMSUNG SDS CO., LTD',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--QCKA1PMC = TopLevelDomainInfo = {
        name: 'ഭാരതം',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--QXA6A = TopLevelDomainInfo = {
        name: '广东',
        description: 'Guangzhou YU Wei Information Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--QXAM = TopLevelDomainInfo = {
        name: 'இலங்கை',
        description: 'LK Domain Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--RHQV96G = TopLevelDomainInfo = {
        name: 'இந்தியா',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--ROVU88B = TopLevelDomainInfo = {
        name: 'ભારત',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--RVC1E0AM3E = TopLevelDomainInfo = {
        name: 'ಭಾರತ',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--S9BRJ9C = TopLevelDomainInfo = {
        name: 'ਭਾਰਤ',
        description: 'National Internet Exchange of India',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--SES554G = TopLevelDomainInfo = {
        name: '网址',
        description: 'KNET Co., Ltd',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--T60B56A = TopLevelDomainInfo = {
        name: '닷넷',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--TCKWE = TopLevelDomainInfo = {
        name: 'コム',
        description: 'VeriSign Sarl',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--TIQ49XQYJ = TopLevelDomainInfo = {
        name: '天主教',
        description: 'Pontificium Consilium de Comunicationibus Socialibus (PCCS) (Pontifical Council for Social Communication)',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--UNUP4Y = TopLevelDomainInfo = {
        name: '游戏',
        description: 'Spring Fields, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--VERMGENSBERATER-CTB = TopLevelDomainInfo = {
        name: 'vermögensberater',
        description: 'Deutsche Vermögensberatung Aktiengesellschaft DVAG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--VERMGENSBERATUNG-PWB = TopLevelDomainInfo = {
        name: 'vermögensberatung',
        description: 'Deutsche Vermögensberatung Aktiengesellschaft DVAG',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--VHQUV = TopLevelDomainInfo = {
        name: '企业',
        description: 'Dash McCook, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--VUQ861B = TopLevelDomainInfo = {
        name: '信息',
        description: 'Beijing Tele-info Network Technology Co., Ltd.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--W4R85EL8FHU5DNRA = TopLevelDomainInfo = {
        name: '嘉里大酒店',
        description: 'Kerry Trading Co. Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--W4RS40L = TopLevelDomainInfo = {
        name: '嘉里',
        description: 'Kerry Trading Co. Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--WGBH1C = TopLevelDomainInfo = {
        name: '通販',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--WGBL6A = TopLevelDomainInfo = {
        name: 'みんな',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--XHQ521B = TopLevelDomainInfo = {
        name: '网店',
        description: 'Zodiac Aquarius Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--XKC2AL3HYE2A = TopLevelDomainInfo = {
        name: 'संगठन',
        description: 'Public Interest Registry',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--XKC2DL3A5EE0H = TopLevelDomainInfo = {
        name: '餐厅',
        description: 'HU YI GLOBAL INFORMATION RESOURCES (HOLDING) COMPANY. HONGKONG LIMITED',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--Y9A3AQ = TopLevelDomainInfo = {
        name: '网络',
        description: 'Computer Network Information Center of Chinese Academy of Sciences （China Internet Network Information Center）',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--YFRO4I67O = TopLevelDomainInfo = {
        name: '新加坡',
        description: 'Sahara India Pariwar',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--YGBI2AMMX = TopLevelDomainInfo = {
        name: 'فلسطين',
        description: 'Alibaba Group Holding Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XN--ZFR164B = TopLevelDomainInfo = {
        name: '政务',
        description: 'TLD registry limited to registration of Hebrew domain names',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    XXX = TopLevelDomainInfo = {
        name: 'xxx',
        description: 'Adult entertainment',
        public: true,
        category: TopLevelDomainCategory.SEXUAL,
    },
    XYZ = TopLevelDomainInfo = {
        name: 'xyz',
        description: 'XYZ.COM LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    YACHTS = TopLevelDomainInfo = {
        name: 'yachts',
        description: 'DERYachts, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    YAHOO = TopLevelDomainInfo = {
        name: 'yahoo',
        description: 'Yahoo! Domain Services Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    YAMAXUN = TopLevelDomainInfo = {
        name: 'yamaxun',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    YANDEX = TopLevelDomainInfo = {
        name: 'yandex',
        description: 'YANDEX, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    YE = TopLevelDomainInfo = {
        name: 'ye',
        description: 'Yemen (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    YODOBASHI = TopLevelDomainInfo = {
        name: 'yodobashi',
        description: 'YODOBASHI CAMERA CO.,LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    YOGA = TopLevelDomainInfo = {
        name: 'yoga',
        description: 'Top Level Domain Holdings Limited',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    YOKOHAMA = TopLevelDomainInfo = {
        name: 'yokohama',
        description: 'GMO Registry, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    YOU = TopLevelDomainInfo = {
        name: 'you',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    YOUTUBE = TopLevelDomainInfo = {
        name: 'youtube',
        description: 'Charleston Road Registry Inc.',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    YT = TopLevelDomainInfo = {
        name: 'yt',
        description: 'Mayotte (Department of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    YUN = TopLevelDomainInfo = {
        name: 'yun',
        description: 'QIHOO 360 TECHNOLOGY CO. LTD.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ZA = TopLevelDomainInfo = {
        name: 'za',
        description: 'South Africa (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ZAPPOS = TopLevelDomainInfo = {
        name: 'zappos',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ZARA = TopLevelDomainInfo = {
        name: 'zara',
        description: 'Industria de Diseño Textil, S.A. (INDITEX, S.A.)',
        public: false,
        category: TopLevelDomainCategory.SPONSORED,
    },
    ZERO = TopLevelDomainInfo = {
        name: 'zero',
        description: 'Amazon Registry Services, Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ZIP = TopLevelDomainInfo = {
        name: 'zip',
        description: 'Charleston Road Registry Inc.',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ZM = TopLevelDomainInfo = {
        name: 'zm',
        description: 'Zambia (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ZONE = TopLevelDomainInfo = {
        name: 'zone',
        description: 'Outer Falls, LLC',
        public: true,
        category: TopLevelDomainCategory.GENERIC,
    },
    ZUERICH = TopLevelDomainInfo = {
        name: 'zuerich',
        description: 'Kanton Zürich (Canton of Zurich)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
    ZW = TopLevelDomainInfo = {
        name: 'zw',
        description: 'Zimbabwe (Republic of)',
        public: true,
        category: TopLevelDomainCategory.GEOGRAPHIC,
    },
}