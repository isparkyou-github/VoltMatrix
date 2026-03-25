const STANDARDS_LIBRARY = [
    {
        id: "UL508A",
        name: "UL 508A",
        title: "Standard for Industrial Control Panels",
        regions: ["North America", "South America (Partial)"],
        url: "https://www.shopulstandards.com/ProductDetail.aspx?productId=UL508A",
        desc: "The primary standard in the US market for the construction of industrial control panels."
    },
    {
        id: "UL1053",
        name: "UL 1053",
        title: "Standard for Ground-Fault Sensing and Relaying Equipment",
        regions: ["North America"],
        url: "https://www.shopulstandards.com/ProductDetail.aspx?productId=UL1053",
        desc: "Covers ground-fault sensing and relaying equipment for protection of circuits, equipment, and people against fault currents."
    },
    {
        id: "NFPA70",
        name: "NFPA 70",
        title: "National Electrical Code (NEC)",
        regions: ["North America", "South America (Partial)"],
        url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70",
        desc: "The foundational standard for safe installation of electrical wiring and equipment in the United States."
    },
    {
        id: "NFPA79",
        name: "NFPA 79",
        title: "Electrical Standard for Industrial Machinery",
        regions: ["North America"],
        url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=79",
        desc: "Provides safeguards for industrial machinery to protect operators, equipment, and facilities in the US."
    },
    {
        id: "CSAC22.1",
        name: "CSA C22.1",
        title: "Canadian Electrical Code (CEC) Part I",
        regions: ["North America (Canada)"],
        url: "https://www.csagroup.org/store/product/CSA%20C22.1:21/",
        desc: "Safety standard for electrical installations in Canada, broadly comparable to the US NEC."
    },
    {
        id: "CSAC22.3",
        name: "CSA C22.3",
        title: "Overhead and Underground Systems",
        regions: ["North America (Canada)"],
        url: "https://www.csagroup.org/store/product/CSA%20C22.3%20NO.%201:15/",
        desc: "Standardizes general requirements for electrical overhead and underground distribution systems."
    },
    {
        id: "IEC60204-1",
        name: "IEC 60204-1",
        title: "Safety of machinery - Electrical equipment of machines",
        regions: ["Europe (EN 60204-1)", "Asia", "South America", "Middle East", "Africa"],
        url: "https://webstore.iec.ch/publication/60756",
        desc: "The comprehensive international standard for electrical equipment of machines, widely adopted globally."
    },
    {
        id: "IEC61439",
        name: "IEC 61439 Series",
        title: "Low-voltage switchgear and controlgear assemblies",
        regions: ["Europe", "Asia", "South America"],
        url: "https://webstore.iec.ch/publication/60166",
        desc: "Defines the specific requirements for low-voltage switchgear and controlgear assemblies."
    },
    {
        id: "GB5226.1",
        name: "GB 5226.1",
        title: "Electrical equipment of machines - Part 1: General requirements",
        regions: ["Asia (China)"],
        url: "https://openstd.samr.gov.cn/bzgk/gb/newGbInfo",
        desc: "The Chinese national standard heavily harmonized with IEC 60204-1."
    },
    {
        id: "GBT15706",
        name: "GB/T 15706",
        title: "Safety of machinery - General principles for design",
        regions: ["Asia (China)"],
        url: "https://openstd.samr.gov.cn/bzgk/gb/newGbInfo",
        desc: "Basic terminology and methodology for risk assessment and risk reduction for machinery."
    },
    {
        id: "AS60204.1",
        name: "AS 60204.1",
        title: "Safety of machinery - Electrical equipment",
        regions: ["Australia", "New Zealand"],
        url: "https://store.standards.org.au/product/as-60204-1-2005-r2016",
        desc: "Australian and New Zealand joint standard derived directly from the IEC standards."
    }
];

const MATRIX_DB = {
    "Short Circuit": [
        {
            standard: "UL 508A",
            region: "North America",
            clause: "Section 31",
            text: "Overcurrent protection for power circuits shall be provided by branch-circuit protective devices. The short-circuit current rating (SCCR) of the panel must be calculated and clearly marked.",
            type: "critical"
        },
        {
            standard: "IEC 60204-1",
            region: "Europe, South America",
            clause: "Section 7.2",
            text: "Short-circuit protection shall be provided for all unarthed live conductors. Fuses or circuit-breakers may be used.",
            type: "critical"
        },
        {
            standard: "GB 5226.1",
            region: "Asia",
            clause: "Section 7.2.2",
            text: "Short-circuit protection shall be provided for all ungrounded conductors of main and control circuits.",
            type: "critical"
        },
        {
            standard: "AS 60204.1",
            region: "Australia",
            clause: "Section 7.2.1",
            text: "Overcurrent protection must coordinate with equipment parameters to break fault currents avoiding thermal breakdown.",
            type: "info"
        }
    ],
    "Wire Color": [
        {
            standard: "UL 508A",
            region: "North America",
            clause: "Section 66.9",
            text: "AC power wiring: Black. AC control: Red. DC control: Blue. Grounding: Green or Green/Yellow.",
            type: "critical"
        },
        {
            standard: "IEC 60204-1",
            region: "Europe, South/North America, Asia, Australia",
            clause: "Section 13.2.4",
            text: "Black for AC/DC power. Red for AC control. Light Blue for neutral. Green-and-Yellow for protective earth. Orange for interlock circuits.",
            type: "info"
        }
    ],
    "E-Stop": [
        {
            standard: "NFPA 79",
            region: "North America",
            clause: "Section 9.2.5.3",
            text: "Emergency stop circuits shall be hardwired and shall not strictly rely on electronic logic or software.",
            type: "critical"
        },
        {
            standard: "IEC 60204-1",
            region: "Europe",
            clause: "Section 9.2.3",
            text: "Emergency stop functions must conform to category 0 or 1. Category 0 requires immediate removal of power to actuators.",
            type: "critical"
        }
    ]
};

const FULL_TEXT_MOCK = [
    { std: "UL 508A", clause: "Clause 31.4.1", text: "The Short Circuit Current Rating (SCCR) shall be determined by the lowest rated component in the power circuit." },
    { std: "IEC 60204-1", clause: "Clause 7.2.3", text: "The breaking capacity of the short-circuit protective device shall be at least equal to the prospective short-circuit current at the point of installation." },
    { std: "NFPA 79", clause: "Clause 7.2.1.1", text: "Short-circuit protection shall be provided for each ungrounded conductor of a machine circuit to mitigate fire hazard risks." },
    { std: "AS 60204.1", clause: "Clause 14.1.2", text: "Conductors within enclosures containing protective devices should be routed avoiding crossing over sharp edges where short-circuit faults might occur." }
];

const app = {
    init: function() {
        this.cacheDOM();
        this.bindEvents();
        this.currentMode = 'matrix';
        this.renderLibrary();
    },

    cacheDOM: function() {
        this.searchInput = document.getElementById('searchInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.navMatrix = document.getElementById('navMatrix');
        this.navLibrary = document.getElementById('navLibrary');
        this.navSearch = document.getElementById('navSearch');
        
        this.matrixSection = document.getElementById('matrixSection');
        this.librarySection = document.getElementById('librarySection');
        this.fullTextSection = document.getElementById('fullTextSection');
        
        this.matrixGrid = document.getElementById('matrixGrid');
        this.libraryGrid = document.getElementById('libraryGrid');
        this.fullTextList = document.getElementById('fullTextList');
        
        this.currentTopicSpan = document.getElementById('currentTopic');
        this.fullTextQuerySpan = document.getElementById('fullTextQuery');
    },

    bindEvents: function() {
        var self = this;
        this.searchBtn.addEventListener('click', function() { self.handleSearch(); });
        this.searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') self.handleSearch();
        });
        
        this.navMatrix.addEventListener('click', function(e) { e.preventDefault(); self.switchMode('matrix'); });
        this.navLibrary.addEventListener('click', function(e) { e.preventDefault(); self.switchMode('library'); });
        this.navSearch.addEventListener('click', function(e) { 
            e.preventDefault(); 
            self.switchMode('fulltext');
            if(self.searchInput.value.trim() !== '') self.handleSearch();
        });
    },

    switchMode: function(mode) {
        this.currentMode = mode;
        this.navMatrix.classList.remove('active');
        this.navLibrary.classList.remove('active');
        this.navSearch.classList.remove('active');
        
        if (mode === 'matrix') this.navMatrix.classList.add('active');
        if (mode === 'library') this.navLibrary.classList.add('active');
        if (mode === 'fulltext') this.navSearch.classList.add('active');
        
        this.matrixSection.classList.add('hidden');
        this.librarySection.classList.add('hidden');
        this.fullTextSection.classList.add('hidden');
        
        if (mode === 'library') {
            this.librarySection.classList.remove('hidden');
            void this.librarySection.offsetWidth;
            this.librarySection.style.animation = 'slideUp 0.6s ease-out';
        }
    },

    setSearch: function(term) {
        this.searchInput.value = term;
        this.switchMode('matrix');
        this.handleSearch();
    },

    handleSearch: function() {
        const term = this.searchInput.value.trim();
        if (!term) return;

        if (this.currentMode === 'library') {
            this.switchMode('matrix');
        }

        if (this.currentMode === 'matrix') {
            this.matrixSection.classList.remove('hidden');
            void this.matrixSection.offsetWidth; 
            this.matrixSection.style.animation = 'slideUp 0.6s ease-out';
            this.currentTopicSpan.textContent = term;
            this.renderMatrix(term);
        } else if (this.currentMode === 'fulltext') {
            this.fullTextSection.classList.remove('hidden');
            void this.fullTextSection.offsetWidth; 
            this.fullTextSection.style.animation = 'slideUp 0.6s ease-out';
            this.fullTextQuerySpan.textContent = term;
            this.renderFullText(term);
        }
    },

    renderMatrix: function(query) {
        this.matrixGrid.innerHTML = '';
        let data = [];
        
        for (const [key, value] of Object.entries(MATRIX_DB)) {
            if (query.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(query.toLowerCase())) {
                data = value;
                break;
            }
        }
        
        if (data.length === 0) {
            data = [{
                standard: "AI Engine",
                region: "Global Database",
                clause: "Analysis pending",
                text: "No pre-mapped matrix found for '" + query + "'. The system would conceptually embed this query, search vector databases containing UL/IEC/GB texts, and generate a dynamic report.",
                type: "info"
            }];
        }
        
        let self = this;
        data.forEach(function(item, index) {
            const col = document.createElement('div');
            col.className = 'standard-col';
            col.style.animation = "slideUp " + (0.4 + index * 0.15) + "s ease-out forwards";
            col.style.opacity = '0';

            let typeDisplay = item.type === 'critical' ? 'Mandatory Requirement' : 'Reference / Info';
            
            col.innerHTML = '<div class="std-header">' +
                '<span class="std-name">' + item.standard + '</span>' +
                '<span class="std-region">' + item.region + '</span>' +
                '</div>' +
                '<div class="clause-num">Clause: ' + item.clause + '</div>' +
                '<div class="clause-text">' + item.text + '</div>' +
                '<div>' +
                '<span class="clause-tag tag-' + item.type + '">' + typeDisplay + '</span>' +
                '</div>';
            self.matrixGrid.appendChild(col);
        });
    },

    renderLibrary: function() {
        this.libraryGrid.innerHTML = '';
        let self = this;
        STANDARDS_LIBRARY.forEach(function(std, index) {
            const card = document.createElement('div');
            card.className = 'standard-col library-card';
            card.style.animation = "slideUp " + (0.4 + index * 0.1) + "s ease-out forwards";
            card.style.opacity = '0';
            
            let regionsHtml = "";
            std.regions.forEach(function(r) {
                regionsHtml += '<span class="region-chip">' + r + '</span>';
            });
            
            card.innerHTML = '<div class="std-header">' +
                '<span class="std-name" style="font-size:1.4rem;">' + std.id + '</span>' +
                '</div>' +
                '<div class="std-title" style="font-weight:600; font-size:1.1rem; margin-bottom: 0.8rem;">' + std.title + '</div>' +
                '<div class="clause-text" style="margin-bottom: 1.5rem;">' + std.desc + '</div>' +
                '<div class="regions-container" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom: 1.5rem;">' +
                regionsHtml +
                '</div>' +
                '<div style="margin-top:auto">' +
                '<a href="' + std.url + '" target="_blank" class="ext-link-btn">Official Standard Form ↗</a>' +
                '</div>';
            self.libraryGrid.appendChild(card);
        });
    },

    renderFullText: function(query) {
        this.fullTextList.innerHTML = '';
        
        let results = FULL_TEXT_MOCK.filter(function(item) {
            return item.text.toLowerCase().includes(query.toLowerCase()) || 
                   item.std.toLowerCase().includes(query.toLowerCase());
        });
                                                    
        if (results.length === 0) {
            this.fullTextList.innerHTML = '<div style="color:var(--text-secondary); padding: 1rem;">No snippets matched "' + query + '" in mock database. </div>';
            return;
        }

        let self = this;
        results.forEach(function(item, index) {
            const row = document.createElement('div');
            row.className = 'fulltext-row glass';
            row.style.animation = "slideUp " + (0.4 + index * 0.1) + "s ease-out forwards";
            row.style.opacity = '0';
            
            const highlightRegex = new RegExp("(" + query + ")", "gi");
            const highlightedText = item.text.replace(highlightRegex, '<mark class="highlight-mark">$1</mark>');
            
            row.innerHTML = '<div class="std-name" style="color:var(--accent-color); font-weight:700; margin-bottom:0.5rem">' +
                item.std + ' - ' + item.clause +
                '</div>' +
                '<div class="clause-text" style="font-size: 1.05rem;">' + highlightedText + '</div>';
            self.fullTextList.appendChild(row);
        });
    }
};

document.addEventListener('DOMContentLoaded', function() { app.init(); });
