import Image from "next/image"
import Link from "next/link"

interface YoutubeVideoProps {
  title: string
  thumbnail: string
  views: string
  date: string
}

export function YoutubeVideo({ title, thumbnail, views, date }: YoutubeVideoProps) {
  return (
    <Link href="#" className="block group">
      <div className="relative overflow-hidden rounded-lg mb-2 aspect-video">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">10:25</div>
      </div>
      <h3 className="font-bold text-xl mb-1 group-hover:text-purple-400 transition-colors">{title}</h3>
      <div className="flex items-center text-sm text-gray-400">
        <span>{views} visualizaciones</span>
        <span className="mx-2">•</span>
        <span>{date}</span>
      </div>
    </Link>
  )
}

