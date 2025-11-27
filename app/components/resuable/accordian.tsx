"use client"

import { useState } from 'react'
import Link from 'next/link'

interface AccordionItem {
  title: string
  content: string[]
  linkText?: string
  linkHref?: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-8">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center gap-4 text-left group cursor-pointer"
          >
            <div 
              className={`w-2 h-10 rounded-full transition-colors ${
                activeIndex === index ? 'bg-[#6366F1]' : 'bg-[#C4B5FD]'
              }`} 
            />
            <p className="text-2xl group-hover:text-gray-700 transition-colors">
              {item.title}
            </p>
          </button>
          
          {activeIndex === index && (
            <div className="ml-8 mt-6 space-y-4 animate-fadeIn">
              {item.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {item.linkText && item.linkHref && (
                <Link 
                  href={item.linkHref}
                  className="inline-block text-[#6366F1] hover:text-[#4F46E5] font-medium transition-colors"
                >
                  {item.linkText}
                </Link>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion