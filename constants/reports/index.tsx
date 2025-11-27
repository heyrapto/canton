// Add to your constants file (e.g., @/constants/index.ts or @/constants/reports.ts)

export const pilotCards = [
    {
      id: 1,
      title: "Connected capital markets take flight",
      description: "In this pilot, 45 leading financial institutions, asset managers and service providers connected on the Canton Network, showcasing the exponential power of interoperable capital markets.",
      backgroundColor: "#f6ffa4",
      linkText: "Link",
      linkHref: "#"
    },
    {
      id: 2,
      title: "Gilts, Eurobonds and Gold",
      description: "Euroclear, the World Gold Council, and Clifford Chance joined a broad group of pilot participants to demonstrate how tokenized assets on blockchain can unlock collateral mobility, enhance liquidity, and streamline transactions.",
      backgroundColor: "#e8f5e9",
      linkText: "Link",
      linkHref: "#"
    },
    {
      id: 3,
      title: "US Treasuries Use Case",
      description: "Digital Asset, the DTCC and an industry group of investors, banks, CCPs, custodians/collateral agents and a CSD completed a successful pilot using tokenized US Treasuries (USTs) as collateral.",
      backgroundColor: "#fff9c4",
      linkText: "Link",
      linkHref: "#"
    }
  ]
  
  export const detailedPilots = [
    {
      id: 1,
      title: "Connected capital markets take flight",
      subtitle: "Insights from the Canton Network Pilot",
      description: [
        "In this pilot, 45 leading financial institutions, asset managers and service providers connected on the Canton Network, showcasing the exponential power of interoperable capital markets.",
        "This report reveals insights and key learnings from participants, detailing how the Canton Network facilitated atomic transactions at scale across 22 permissioned blockchains. This sets a new precedent for the mobilization and utility of tokenized real-world assets.",
        "Discover how Canton uniquely addressed threshold issues for capital markets firms related to privacy, control and interoperability to demonstrate for the first time how the industry can realize the core value of blockchain technology without the trade-offs of other networks."
      ],
      buttonText: "Watch the demo",
      buttonHref: "#",
      image: "/images/use-cases/1.webp"
    },
    {
      id: 2,
      title: "Unlocking collateral mobility through tokenization: Gilts, Eurobonds and Gold",
      subtitle: "Euroclear harnessing Canton Network for 24×7 mobility",
      description: [
        "Euroclear, The World Gold Council, and global law firm Clifford Chance were among a broad group of pilot participants- which included investors, banks, CCPs, custodians, and a central securities depository. The aim was to demonstrate how tokenized assets on a blockchain can enhance collateral mobility, improve liquidity, and increase transactional efficiency.",
        "With more than 500 executed transactions involving 6 complex workflows and executed by 27 market participants, the pilot demonstrated the ability to enhance collateral mobility, improve liquidity, and increase transactional efficiency."
      ],
      buttonText: "Read the report",
      buttonHref: "#",
      image: "/images/use-cases/2.webp"
    },
    {
      id: 3,
      title: "Unlocking Collateral Mobility through Tokenization: US Treasuries Use Case",
      subtitle: "DTCC's LedgerScan connecting to Canton Network",
      description: [
        "Digital Asset, the DTCC and an industry group of investors, banks, CCPs, custodians/collateral agents and a CSD completed a successful pilot using tokenized US Treasuries (USTs) as collateral, leveraging DTCC's LedgerScan solution to support dynamic tracking and governance of the assets involved in the pilot transactions.",
        "The pilot proved the feasibility of more complex real-world transactions, including:"
      ],
      bullets: [
        "Creation of Digital Twin for USTs: Investors asked custodians to create a digital twin of existing USTs, updating holdings instantly and setting aside equivalent real-world assets.",
        "Margin Call Delivery: Secured parties made margin calls using USTs as collateral, with real-time transaction status updates and instant settlement.",
        "Margin Call Return: Investors called for the return of margin, with collateral released and transactions settled instantly.",
        "Closeout Due to Default: Secured parties seized pledged assets, transferring ownership in atomic transactions, ensuring legal certainty and control."
      ],
      buttonText: "Read the report",
      buttonHref: "#",
      image: "/images/use-cases/3.webp"
    }
  ]