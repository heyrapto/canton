// components/ui/dropdown.tsx
import { useState, useRef, useEffect } from 'react'
import { BiChevronDown, BiCheck } from 'react-icons/bi'

interface DropdownProps {
  label: string
  options: string[]
  selected: string
  onSelect: (option: string) => void
}

const Dropdown = ({ label, options, selected, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-3 bg-[#2a2a2a] text-white px-6 py-3 rounded-lg min-w-[200px] hover:bg-[#333] transition-colors"
      >
        <div className="flex items-center gap-2">
          {selected !== "Show All" && <BiCheck className="text-green-400 text-xl" />}
          <span>{label}</span>
        </div>
        <BiChevronDown className={`text-xl transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-[#2a2a2a] rounded-lg shadow-xl z-50 min-w-[250px] max-h-[400px] overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(option)
                setIsOpen(false)
              }}
              className={`w-full text-left px-6 py-3 hover:bg-[#333] transition-colors flex items-center gap-3 ${
                selected === option ? 'text-green-400' : 'text-white'
              }`}
            >
              {selected === option && <BiCheck className="text-xl" />}
              <span>{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown