// Add to @/constants/faqs.ts or your constants file

export const faqData = [
    {
      id: 1,
      question: "What is Canton Coin?",
      answer: [
        "Canton Coin (CC), the network's native utility token, was designed to reward real network usage over speculation. It aligns the success of the network with the participants who make it work, fairly rewarding app builders and app users, as well as those operating decentralized infrastructure. The result is a fundamentally different model where rewards flow to those creating value through real activity, not only miners or early investors.",
        "Canton's tokenomics aim to sidestep the pitfalls seen in earlier networks:",
        "No pre-mine, no VC allocations: Every token in circulation has been earned by delivering utility.",
        "Burn-and-Mint equilibrium: Usage fees are burned, and new coins are minted based on participation. This keeps supply responsive to demand and ties value to network usage.",
        "Enterprise-grade transparency: Even though transactions on Canton are private by default, reward distributions and Canton Coin fees are published, providing insight into what's driving value without compromising privacy."
      ],
      link: {
        text: "You can learn more about Canton Coin here.",
        href: "#"
      }
    },
    {
      id: 2,
      question: "How can I get Canton Coin?",
      answer: [
        "Every Canton Coin in supply is earned. It's continuously distributed based on apps, users and infrastructure providers' contributions to network utility. Canton Coin is also supported by a growing list of wallets, custodians and exchanges."
      ],
      link: {
        text: "See the official list of those venues and services here.",
        href: "#"
      }
    },
    {
      id: 3,
      question: "How does Canton Coin's burn-mint equilibrium create sustainable economics?",
      answer: [
        "Canton Coin uses a burn-mint equilibrium model that keeps the tokenomics aligned with real network activity and long-term value creation.",
        "The total supply of Canton Coin follows a steady, pre-defined supply curve, which means the network makes coins available to claim by participants over time in a predictable way. Network contributors are then able to continuously mint rewards for their activity, sustainably bringing Canton Coin into circulation.",
        "New coins in circulation are not created automatically. Coins are only earned and minted by participants when they add measurable utility to the network, such as operating validator infrastructure, building and running applications, or running the decentralized Global Synchronizer software.",
        "When users use the network's public infrastructure to trade, settle transactions, synchronize data, or transfer assets, fees are paid in Canton Coin. Fees are burned, permanently removing these coins from circulation. This helps offset new coins coming into circulation and maintains a healthy balance between supply and demand.",
        "The result is a self-regulating economic system. Minted rewards are earned in proportion to contribution, while burning reduces circulating supply as network usage increases. When activity grows quickly, more fees are burned and the system becomes slightly deflationary. When additional participation is needed, minting provides incentives that create a mild inflationary effect to support growth.",
        "This creates a dynamic yet disciplined economy where the value of Canton Coin is aligned with real adoption. As more institutions build, transact, and settle on Canton, demand for Canton Coin increases while issuance remains linked to productive activity rather than speculation.",
        "In short:",
        "Canton Coin's value is not based on artificial scarcity. It is governed by real network utility, with a steady supply curve that adjusts through minting and burning to support sustainable growth and long-term value as global finance moves on Canton."
      ]
    },
    {
      id: 4,
      question: "Is Canton Network a public network?",
      answer: [
        "Canton Network is a public network. Anyone can request a validator node (currently sponsorship is needed) and then participate in consensus related to transactions they are a party to. Anyone can take part in governance via the Foundation. Permissioning for any given application is defined on an application by application basis - as permissioned, or permissionless as the app provider wants.",
        "Similarly, the internet operates as a public network, but not all websites are open or permissionless. For example, your bank's customer portal is part of the internet but is permissioned. In the same way, Canton enables each application to define its own level of openness and privacy. This flexibility allows applications to range from fully permissionless to entirely private, all operating on an open network that allows applications to interoperate with each other."
      ]
    },
    {
      id: 5,
      question: "How do I start building on Canton?",
      answer: [
        "Getting started with Canton is straightforward. You can explore our developer documentation, join our community forums, and access our SDK and tools to begin building applications on the network.",
        "We also offer regular hackathons, workshops, and developer support programs to help you get up to speed quickly."
      ]
    },
    {
      id: 6,
      question: "How does Canton Network compare to other L1s?",
      answer: [
        "Canton Network differs from traditional Layer 1 blockchains in several key ways. Unlike most L1s that prioritize transparency, Canton provides privacy by default while maintaining verifiability. It enables institutional-grade applications with native compliance and regulatory features built in.",
        "Canton's unique architecture allows for atomic, cross-application transactions without compromising privacy or control, something traditional L1s struggle to achieve."
      ]
    },
    {
      id: 7,
      question: "Who provides custody for Canton Coin?",
      answer: [
        "Canton Coin is supported by a growing ecosystem of institutional-grade custodians and wallet providers. These include both self-custody solutions and third-party custody services that meet enterprise security requirements.",
        "Our ecosystem page provides a comprehensive list of custody providers and wallet solutions that support Canton Coin."
      ]
    },
    {
      id: 8,
      question: "How does privacy work in Canton Network?",
      answer: [
        "Canton Network provides privacy by default through its unique architecture. Transactions and data are only visible to the parties involved, while still maintaining verifiability and compliance capabilities.",
        "This is achieved through advanced cryptographic techniques and a permissioned visibility model that gives users and institutions control over their data while enabling necessary regulatory oversight."
      ]
    },
    {
      id: 9,
      question: "How could financial institutions benefit from being a participant / user of the Canton Network?",
      answer: [
        "Financial institutions benefit from Canton Network through reduced settlement times, lower operational costs, and improved capital efficiency. The network enables atomic settlement across different asset classes and institutions, reducing counterparty risk.",
        "Additionally, Canton's privacy features allow institutions to maintain confidentiality while still meeting regulatory requirements, making it ideal for institutional use cases."
      ]
    },
    {
      id: 10,
      question: "What applications are being built for the Canton Network?",
      answer: [
        "A wide range of applications are being built on Canton Network, including digital asset trading platforms, tokenized securities exchanges, repo markets, collateral management systems, and payment rails.",
        "Major financial institutions and fintech companies are leveraging Canton to build next-generation financial infrastructure that combines the benefits of blockchain with institutional requirements."
      ]
    },
    {
      id: 11,
      question: "How does the Canton Network support interoperability?",
      answer: [
        "Canton Network is designed for interoperability at its core. Applications built on Canton can seamlessly interact with each other through atomic, composable transactions. This means assets and data can flow between different applications and institutions without intermediaries.",
        "The network also supports bridges and integrations with other blockchain networks and traditional financial systems, enabling true cross-platform interoperability."
      ]
    },
    {
      id: 12,
      question: "How does validation and consensus work on the Canton Network?",
      answer: [
        "Canton Network uses a Byzantine Fault Tolerant (BFT) consensus mechanism that ensures finality and security. Validators participate in consensus for transactions they are parties to, creating a scalable and efficient validation model.",
        "This approach differs from traditional blockchains by allowing parallel processing of independent transactions while maintaining strong consistency guarantees for related transactions."
      ]
    }
  ]