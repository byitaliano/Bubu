import Link from "next/link"
import { Youtube, Instagram, Twitter, Twitch } from "lucide-react"

interface SocialIconProps {
  platform: "YouTube" | "Instagram" | "TikTok" | "Twitter" | "Twitch"
  url: string
}

export function SocialIcon({ platform, url }: SocialIconProps) {
  const getIcon = () => {
    switch (platform) {
      case "YouTube":
        return <Youtube className="w-6 h-6" />
      case "Instagram":
        return <Instagram className="w-6 h-6" />
      case "TikTok":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
          </svg>
        )
      case "Twitter":
        return <Twitter className="w-6 h-6" />
      case "Twitch":
        return <Twitch className="w-6 h-6" />
    }
  }

  const getColor = () => {
    switch (platform) {
      case "YouTube":
        return "bg-red-600 hover:bg-red-700"
      case "Instagram":
        return "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
      case "TikTok":
        return "bg-black hover:bg-gray-900 border border-gray-700"
      case "Twitter":
        return "bg-blue-500 hover:bg-blue-600"
      case "Twitch":
        return "bg-purple-600 hover:bg-purple-700"
    }
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${getColor()}`}
    >
      {getIcon()}
      <span>{platform}</span>
    </Link>
  )
}

