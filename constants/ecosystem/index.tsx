// Add to @/constants/developers.ts or create a new constants file

export const ecosystemRoles = [
    "Show All",
    "Apps (All)",
    "Apps (Featured)",
    "Canton Foundation Member",
    "Industry Bodies",
    "Financial Institutions",
    "Market Infrastructure",
    "Service Provider",
    "Super Validator",
    "Validator"
  ]
  
  export const ecosystemUtilities = [
    "Show All",
    "Compliance",
    "Custody",
    "Data & Analytics",
    "Developer Tools",
    "Exchanges",
    "Financing",
    "Forensics & Security",
    "Interoperability",
    "Liquidity",
    "NaaS",
    "Payments",
    "Stablecoins",
    "Tokenized Assets"
  ]
  
  // Mock data for ecosystem partners - replace with your actual data
  export const ecosystemPartners = [
    {
      id: 1,
      name: "4MGroup",
      logo: "/images/partners/4mgroup.png",
      description: "Strategy and integration services.",
      tags: ["Tokenized assets"],
      role: "Service Provider",
      utility: "Network Utility",
      href: "#"
    },
    {
      id: 2,
      name: "5N Loop Wallet",
      logo: "/images/partners/5nloop.png",
      description: "A self-custody web-based wallet that emphasizes on security and UX.",
      tags: ["WALLETS"],
      role: "Apps (All)",
      utility: "Custody",
      href: "#"
    },
    {
      id: 3,
      name: "7Ridge",
      logo: "/images/partners/7ridge.png",
      description: "A global investment firm developing next-generation financial applications on Canton Network.",
      tags: ["DATA & ANALYTICS", "NAAS", "DEVELOPER TOOLS"],
      role: "Apps (All)",
      utility: "Developer Tools",
      href: "#"
    },
    {
      id: 4,
      name: "21shares",
      logo: "/images/partners/21shares.png",
      description: "Offers a large suite of crypto-currency exchange-traded products (ETPs).",
      tags: ["TOKENIZED ASSETS"],
      role: "Financial Institutions",
      utility: "Tokenized Assets",
      href: "#"
    },
    {
      id: 5,
      name: "Akua Finance",
      logo: "/images/partners/akua.png",
      description: "Digital asset infrastructure provider.",
      tags: [],
      role: "Service Provider",
      utility: "Custody",
      href: "#"
    },
    {
      id: 6,
      name: "Alchemy",
      logo: "/images/partners/alchemy.png",
      description: "Blockchain developer platform.",
      tags: ["DEVELOPER TOOLS"],
      role: "Service Provider",
      utility: "Developer Tools",
      href: "#"
    },
    {
      id: 7,
      name: "Amberdata",
      logo: "/images/partners/amberdata.png",
      description: "Digital asset data and analytics.",
      tags: ["DATA & ANALYTICS"],
      role: "Service Provider",
      utility: "Data & Analytics",
      href: "#"
    },
    {
      id: 8,
      name: "AmberTrading",
      logo: "/images/partners/ambertrading.png",
      description: "Digital asset trading solutions.",
      tags: ["LIQUIDITY"],
      role: "Financial Institutions",
      utility: "Liquidity",
      href: "#"
    }
    // Add more partners as needed
  ]