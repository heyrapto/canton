export interface DropdownItem {
    title: string
    href: string
  }
  
  export interface NavItem {
    title: string
    hasDropdown: boolean
    href?: string
    dropdownItems?: DropdownItem[]
  }  

export const navItems: NavItem[] = [
    {
        title: "Carton Network",
        hasDropdown: true,
        dropdownItems: [
            {
                title: "Connect",
                href: "/connect"
            },
            {
                title: "Build",
                href: "/build"
            },
            {
                title: "Run",
                href: "/run"
            },
            {
                title: "Ecosystem",
                href: "/ecosystem"
            },
            {
                title: "Why Us",
                href: "/why-us"
            },
            {
                title: "Global Synchronizer",
                href: "/global"
            },
        ]
    },
    {
        title: "Developers",
        hasDropdown: false,
        href: "/developers"
    },
    {
        title: "Use Cases",
        hasDropdown: true,
        dropdownItems: [
            { title: "Crypto Derivatives", href: "/crypto" },
            { title: "24x7 On-Chain Financing", href: "/onchain-financing" },
            { title: "Private stablecoin payments on public blockchain", href: "/stablecoin-payments" }
        ]
    },
    {
        title: "Resources",
        hasDropdown: true,
        dropdownItems: [
            { title: "FAQs", href: "/faqs" },
            { title: "Pilot Reports", href: "/reports" },
            { title: "Insights", href: "/insights" },
            { title: "Newsroom", href: "/newsroom" },
            { title: "Whitepapers", href: "/whitepaper" },
            { title: "Brand Kit & Trademark Use", href: "/brand" }
        ]
    },
]

export const newsCards = [
    {
        tag: "Press",
        date: "November 18, 2025",
        title: "2026 is the year of pragmatic privacy in crypto: Canton, Zcash and more"
    },
    {
        tag: "Press",
        date: "November 18, 2025",
        title: "2026 is the year of pragmatic privacy in crypto: Canton, Zcash and more"
    },
    {
        tag: "Bloomberg",
        date: "November 18, 2025",
        title: "2026 is the year of pragmatic privacy in crypto: Canton, Zcash and more"
    },
]

export const testimonials = [
    {
      quote:
        "As we deliver on our goal of a single source of truth for the industry, the Canton Network showcased how our platform could play within the wider capital markets ecosystem to unlock settlement efficiencies and greater collateral mobility. Key to this is Canton’s ability to deliver both the unified ledger, but also the granular controls we need as an app operator, and the privacy demanded by our customers",
      author: "Gary Klahr",
      role: "Director of Strategic Initiatives, EquiLend 1Source",
    },
    {
      quote:
        "Building on the capital efficiencies and cost savings our solution is already bringing participants, connectivity with the broader Canton tokenization ecosystem can play an important role in driving the liquidity that supports the continued adoption of this emerging digital infrastructure for capital markets.",
      author: "Horacio Barakat",
      role:
        "Head of Digital Innovation Capital Markets, GM of DLT Repo Platform, Broadridge",
    },
  ];
  

// Add to @/constants/build.ts or your constants file

export const connectionsData = [
    {
      id: 1,
      title: "Asset tokenization",
      description: [
        "Launch your tokenization offering and issue real-world assets and cash that move with privacy across the Canton Network.",
        "Use pre-built tokenization utilities for fast time to market and DeFi like composability across the network. Onboard investors with verifiable credentials, automated on-chain."
      ],
      gifPath: "/gifs/Asset-Tokenization.gif"
    },
    {
      id: 2,
      title: "Custody and wallets",
      description: [
        "Connect with or provide digital asset custody services and solutions for assets, stablecoins and tokens on the Canton Network.",
        "Access or build on top of wallet providers live on Canton and offer highly flexible custodial arrangements."
      ],
      gifPath: "/gifs/Custody-Services-and-Wallets.gif"
    },
    {
      id: 3,
      title: "Collateral mobility",
      description: [
        "Enable seamless movement of collateral across different applications and institutions on the Canton Network.",
        "Unlock liquidity and improve capital efficiency through atomic, cross-application collateral transfers."
      ],
      gifPath: "/gifs/Collateral-Mobility.gif"
    },
    {
      id: 4,
      title: "On-chain payments",
      description: [
        "Process instant, secure payments on-chain with full privacy and regulatory compliance.",
        "Integrate with existing payment rails and enable real-time settlement for institutional transactions."
      ],
      gifPath: "/gifs/On-chain-Payments.gif"
    },
    {
      id: 5,
      title: "24/7 financing",
      description: [
        "Access continuous financing markets that operate around the clock on the Canton Network.",
        "Enable instant liquidity provision and borrowing with automated smart contract execution."
      ],
      gifPath: "/gifs/24-7-Financing.gif"
    }
  ]