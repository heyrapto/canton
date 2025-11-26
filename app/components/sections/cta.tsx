import Link from "next/link"
import Button from "../ui/button"
import { BiChevronRight } from "react-icons/bi"
import Image from "next/image"

const CTASection = () => {
  const cards = [
    {
      title: "Create valuable connections",
      description: "Connect with the live applications and participants in the ecosystem and start using institutional grade tokenized assets - with privacy. Get started with a validator today.",
      linkText: "Connect",
      href: "/connect"
    },
    {
      title: "Unlock exponential growth",
      description: "Rapidly launch privacy enabled, interoperable applications and tokenized assets on Canton, and connect with leading institutions in capital markets, payments and institutional crypto.",
      linkText: "Build",
      href: "/build"
    },
    {
      title: "Power market-level transformation",
      description: "Actively contribute and gain reciprocal value from the network by running infrastructure and services for Canton.",
      linkText: "run",
      href: "/run"
    }
  ]

  return (
    <section className=" text-white py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-[#1b1b1b] border border-gray-700 rounded-[20px] p-8 flex flex-col gap-6 hover:border-gray-500 transition-colors"
            >
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-gray-300 leading-relaxed grow">{card.description}</p>
              <Link 
                href={card.href} 
                className="flex items-center gap-2 text-white hover:text-[#f6ffa4] transition-colors group"
              >
                <span>{card.linkText}</span>
                <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Foundation Section */}
        <div className="bg-white rounded-[20px] p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-black">Synchronized finance is open</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-[700px]">
              The Canton Foundation facilitates transparent governance and organizational neutrality in the adoption and evolution of the Global Synchronizer - the decentralized interoperability backbone of the Canton Network.
            </p>
            <Button variant="primary">
              Learn more
            </Button>
          </div>
          <Image src="/images/cta-image.webp" alt="Foundation" width={500} height={500} />
        </div>
      </div>
    </section>
  )
}

export default CTASection

