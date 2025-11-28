"use client"
import { useState } from 'react'
import Image from 'next/image'

interface Connection {
  id: number
  title: string
  description: string[]
  imagePath?: string
  gifPath?: string
}

interface ConnectionsShowcaseProps {
  connections: Connection[]
}

const ConnectionsShowcase = ({ connections }: ConnectionsShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Tabs */}
      <div className="flex flex-col gap-6">
        {connections.map((connection, index) => (
          <button
            key={connection.id}
            onClick={() => setActiveIndex(index)}
            className={`text-left transition-all cursor-pointer ${
              activeIndex === index ? 'opacity-100' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <div 
                className={`w-1 h-16 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">{connection.title}</h3>
                {activeIndex === index && (
                  <div className="space-y-3 animate-fadeIn">
                    {connection.description.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Right Side - Image/GIF Display */}
      <div className="relative w-full aspect-video bg-[#1b1b1b] rounded-3xl overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={connections[activeIndex].gifPath || connections[activeIndex].imagePath || ''}
            alt={connections[activeIndex].title}
            fill
            className="object-cover"
            unoptimized={!!connections[activeIndex].gifPath} // Use unoptimized only for GIFs
          />
        </div>
      </div>
    </div>
  )
}

export default ConnectionsShowcase