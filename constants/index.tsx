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
  