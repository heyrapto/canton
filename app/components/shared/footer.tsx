import Image from "next/image"
import Link from "next/link"
import Button from "../ui/button"
import { FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  const cantonNetworkLinks = [
    { title: "Connect", href: "/connect" },
    { title: "Build", href: "/build" },
    { title: "Run", href: "/run" },
    { title: "Ecosystem", href: "/global" },
    { title: "Why Canton?", href: "/why-us" },
    { title: "Global Synchronizer", href: "/global" },
    { title: "Developers", href: "/developers" }
  ]

  const resourcesLinks = [
    { title: "FAQs", href: "/faqs" },
    { title: "Pilot Reports", href: "/reports" },
    { title: "Insights", href: "/insights" },
    { title: "Newsroom", href: "/newsroom" },
    { title: "Whitepapers", href: "/whitepaper" },
    { title: "Brand Kit & Trademark Use", href: "/brand" }
  ]

  const useCasesLinks = [
    { title: "Crypto Derivatives", href: "/crypto" },
    { title: "24x7 On-Chain Financing", href: "/onchain-financing" },
    { title: "Private stablecoin payments on public blockchain", href: "/stablecoin-payments" }
  ]

  return (
    <footer className="bg-[#1b1b1b] text-white py-16">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Canton Network */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/canton-logo-white.svg"
                width={120}
                height={120}
                alt="Canton Logo"
                className="h-auto"
              />
              <span className="text-xl font-semibold">Canton</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Canton Network</h3>
              <ul className="flex flex-col gap-3">
                {cantonNetworkLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Resources</h3>
            <ul className="flex flex-col gap-3">
              {resourcesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Use Cases</h3>
            <ul className="flex flex-col gap-3">
              {useCasesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <Button variant="primary">
              Speak to an expert
            </Button>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <a href="#" className="bg-black p-3 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaLinkedin className="text-white text-xl" />
              </a>
              <a href="#" className="bg-black p-3 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaYoutube className="text-white text-xl" />
              </a>
              <a href="#" className="bg-black p-3 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaXTwitter className="text-white text-xl" />
              </a>
              <a href="#" className="bg-black p-3 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaDiscord className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Canton Network. All rights reserved</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Unsubscribe</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

