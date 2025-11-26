import Image from "next/image"

const FeaturesSection = () => {
  const features = [
    {
      title: "Connections without the trade-offs",
      description: "Canton connects previously siloed financial systems and infrastructure, creating new potential for innovation and growth—without sacrificing privacy or control.",
      image: "/images/features/1.webp",
      imagePosition: "right" as const
    },
    {
      title: "Privacy fit for regulated institutions",
      description: "Canton is the first privacy-enabled open blockchain network, ensuring limitless connections that preserve privacy. Enabled by unique smart contract technology, network participants can confidently exchange data and value to unlock the potential of synchronized financial markets.",
      image: "/images/features/2.webp",
      imagePosition: "left" as const
    },
    {
      title: "Decentralization with control",
      description: "Canton distinctly balances the decentralization of public blockchain with the privacy and controls required for financial markets. No other network allows assets and data to move across applications with real-time synchronization and guaranteed privacy—without the need to sacrifice trust or give up control to central intermediaries.",
      image: "/images/features/3.webp",
      imagePosition: "right" as const
    }
  ]

  return (
    <section className="bg-[#1b1b1b] text-white py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col lg:flex-row items-center gap-12 mb-20 last:mb-0 ${
              feature.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-3xl lg:text-4xl font-bold max-w-[400px]">{feature.title}</h2>
              <p className="text-base lg:text-lg leading-relaxed text-gray-300">{feature.description}</p>
            </div>
            <div className="flex-1 relative w-full h-[300px] lg:h-[400px]">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection