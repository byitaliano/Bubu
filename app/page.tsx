"use client"

import Image from "next/image"
import { YoutubeVideo } from "@/components/youtube-video"
import { SocialIcon } from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LanguageSelector } from "@/components/LanguageSelector"
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext"
import translations from "@/translations"
import { MapPin } from "lucide-react"

function HomeContent() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      {/* Header/Banner Section */}
      <header className="relative h-[50vh] w-full bg-black">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-03-03%20a%20las%2022.11.47_098bfc09.jpg-U79AmFZFRYTgFWsv4npSglk4lRVp9r.jpeg"
            alt="Logo de Pizza"
            width={150}
            height={150}
            className="mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.greeting}</h1>
          <p className="text-xl md:text-2xl text-purple-300">{t.role}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Profile and Social Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-600 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-26%20a%20las%2001.10.42_3b17d032.jpg-IBnWDbEmd6mdvCVBDZaa9CzuQuCgIK.jpeg"
                alt="Perfil de By Italiano"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="flex items-center justify-center text-purple-400 mt-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{t.location}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.socialNetworks}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SocialIcon platform="YouTube" url="https://youtube.com/" />
              <SocialIcon platform="Instagram" url="https://instagram.com/" />
              <SocialIcon platform="TikTok" url="https://tiktok.com/" />
              <SocialIcon platform="Twitter" url="https://twitter.com/" />
              <SocialIcon platform="Twitch" url="https://twitch.tv/" />
            </div>
          </div>
        </div>

        {/* Recent Video Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">{t.recentVideo}</h2>
          <div className="w-full max-w-4xl mx-auto">
            <YoutubeVideo
              title={t.lastVideoUploaded}
              thumbnail="/placeholder.svg?height=360&width=640"
              views={`1.2K ${t.views}`}
              date="2 días atrás"
            />
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mb-16">
          <Tabs defaultValue="progreso" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-purple-900/50">
              <TabsTrigger value="progreso">{t.progress}</TabsTrigger>
              <TabsTrigger value="links">{t.links}</TabsTrigger>
              <TabsTrigger value="contacto">{t.contact}</TabsTrigger>
            </TabsList>
            <TabsContent value="progreso" className="p-6 bg-purple-900/20 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-4">{t.progress}</h3>
              <p className="text-center py-8 text-lg text-gray-300">{t.comingSoon}</p>
            </TabsContent>
            <TabsContent value="links" className="p-6 bg-purple-900/20 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-4">{t.usefulLinks}</h3>
              <p className="text-center py-8 text-lg text-gray-300">{t.comingSoon}</p>
            </TabsContent>
            <TabsContent value="contacto" className="p-6 bg-purple-900/20 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-4">{t.contact}</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 rounded bg-gray-800 border border-purple-700 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 rounded bg-gray-800 border border-purple-700 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 rounded bg-gray-800 border border-purple-700 focus:border-purple-500 focus:outline-none"
                  ></textarea>
                </div>
                <Button className="bg-purple-700 hover:bg-purple-600">{t.send}</Button>
              </form>
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">{t.projects}</h2>
          <div className="bg-purple-900/20 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-03-04%20a%20las%2016.00.30_d719e96a.jpg-l2L27CLOG6GraYa694o0SrCXYTHcTi.jpeg"
                  alt="Bot Bubu Logo"
                  fill
                  className="rounded-full object-cover border-4 border-purple-500"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t.discordBot}</h3>
                <p className="mb-6">{t.securityBot}</p>
                <p className="text-sm text-gray-400">{t.moreProjects}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900/30 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-gray-400">© 2025 By Italiano</p>
        </div>
      </footer>
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}

