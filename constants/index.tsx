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