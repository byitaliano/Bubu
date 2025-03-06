"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const languages = [
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "it", name: "Italiano" },
] as const

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (langCode: (typeof languages)[number]["code"]) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700 transition-colors"
      >
        <span>{currentLanguage?.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="w-full text-left px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

