"use client"
import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import Link from 'next/link'

interface FaqItem {
  id: number
  question: string
  answer: string[]
  link?: {
    text: string
    href: string
  }
}

interface FaqAccordionProps {
  items: FaqItem[]
  className?: string
}

const FaqAccordion = ({ items, className }: FaqAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className={`"flex flex-col" ${className}`}>
      {items.map((item, index) => (
        <div 
          key={item.id} 
          className="border-t border-gray-300 first:border-t-0 max-w-[800px]"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-6 text-left group cursor-pointer"
          >
            <h3 className="text-xl font-medium pr-8 group-hover:text-gray-700 transition-colors">
              {item.question}
            </h3>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform ${
              activeIndex === index ? 'rotate-180 bg-black text-white' : 'bg-gray-100 text-black'
            }`}>
              <BiChevronDown className="text-2xl" />
            </div>
          </button>
          
          {activeIndex === index && (
            <div className="pb-6 space-y-4 animate-fadeIn">
              {item.answer.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {item.link && (
                <Link 
                  href={item.link.href}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors group"
                >
                  {item.link.text}
                  <BiChevronDown className="ml-1 -rotate-90 text-xl group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion