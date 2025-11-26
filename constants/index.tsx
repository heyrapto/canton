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
                href: "/connect"
            },
            {
                title: "Ecosystem",
                href: "/connect"
            },
            {
                title: "Connect",
                href: "/connect"
            },
            {
                title: "Connect",
                href: "/connect"
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
                href: "/connect"
            },
            {
                title: "Ecosystem",
                href: "/connect"
            },
            {
                title: "Connect",
                href: "/connect"
            },
            {
                title: "Connect",
                href: "/connect"
            },
        ]
    },
    {
        title: "Resources",
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
                href: "/connect"
            },
            {
                title: "Ecosystem",
                href: "/connect"
            },
            {
                title: "Connect",
                href: "/connect"
            },
            {
                title: "Connect",
                href: "/connect"
            },
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