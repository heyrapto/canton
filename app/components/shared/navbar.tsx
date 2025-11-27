"use client"

import Image from "next/image"
import Button from "../ui/button"
import { navItems } from "@/constants"
import Link from "next/link"
import { useState, useEffect } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const handleToggle = (index: number, hasDropdown: boolean) => {
    if (!hasDropdown) return
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full h-[10%] justify-center flex items-center z-50 transition-all duration-300
      ${scrolled ? "bg-[#1b1b1b] backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-[1440px] px-6 flex justify-between w-full">
        
        <Image 
          src="/canton-logo-white.svg"
          width={250}
          height={250}
          alt="Logo"
        />

        <div className="flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {navItems.map((n, i) => (
              <li key={i} className="text-white relative">
                
                <button
                  onClick={() => handleToggle(i, n.hasDropdown)}
                  className="font-bold inline-flex items-center gap-3 cursor-pointer"
                >
                  {n.href ? (
                    <Link href={n.href}>{n.title}</Link>
                  ) : (
                    <span>{n.title}</span>
                  )}

                  {n.hasDropdown && n.dropdownItems && n.dropdownItems.length > 0 && (openIndex === i ? <BiChevronUp /> : <BiChevronDown />)}
                </button>

                {openIndex === i && n.hasDropdown && n.dropdownItems && (
                  <div className="absolute bg-[#f6ffa4] p-6 top-[50px] rounded-[20px] flex flex-col gap-3 shadow-xl z-50 w-[300px]">
                    {n.dropdownItems.map((d, idx) => (
                      <Link href={d.href} key={idx} className="text-black hover:opacity-70">
                        {d.title}
                      </Link>
                    ))}
                  </div>
                )}

              </li>
            ))}
          </ul>

          <Button variant={"primary"} onClick={() => router.push("/contact-us")}>
            Speak to an expert
          </Button> 
        </div>

      </div>
    </nav>
  )
}

export default Navbar;