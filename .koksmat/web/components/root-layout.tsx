'use client'

import React, { useState, useEffect, createContext, useContext } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MenuIcon, BellIcon, UserIcon, CheckCircle2Icon, Calendar, MessageSquare, Code, Users, Lightbulb, Globe, Rocket, Zap, Heart, Sun, Moon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { translations } from '@/components/translations'

const NexiLogo = ({ isDark }: { isDark: boolean }) => (
  <svg width="88" height="27" viewBox="0 0 88.100002 26.602287" xmlns="http://www.w3.org/2000/svg" aria-label="Nexi Logo">
    {/* SVG content */}
  </svg>
)

const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
}>({
  language: 'en',
  setLanguage: () => { },
})

const useTranslation = () => {
  const { language } = useContext(LanguageContext)
  return translations[language as keyof typeof translations] || translations.en
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [language, setLanguage] = useState('da')

  const t = useTranslation()

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'mission', 'approach', 'values', 'tech']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-[#212861] dark:text-white font-sans transition-colors duration-300">
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body {
              font-family: 'Inter', sans-serif;
            }
          `}</style>

          <header className="bg-white dark:bg-gray-800 text-[#2d32aa] dark:text-white py-4 px-4 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <NexiLogo isDark={isDarkMode} />
                <h1 className="text-xl font-bold ml-4">{t.international}</h1>{language}
              </div>
              <nav className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
                <a href="#" className="text-[#2d32aa] hover:text-[#00b49d] dark:text-white dark:hover:text-[#00b49d]">{t.learningHub}</a>
                <a href="#" className="text-[#2d32aa] hover:text-[#00b49d] dark:text-white  dark:hover:text-[#00b49d]">{t.diversityInclusion}</a>
                <a href="#" className="text-[#2d32aa] hover:text-[#00b49d] dark:text-white dark:hover:text-[#00b49d]">{t.collaboration}</a>
                <a href="#" className="text-[#2d32aa] hover:text-[#00b49d] dark:text-white dark:hover:text-[#00b49d]">{t.employeeResources}</a>
              </nav>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <Select onValueChange={setLanguage} defaultValue={language}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="da">Dansk</SelectItem>
                    <SelectItem value="no">Norsk</SelectItem>
                    <SelectItem value="sv">Svenska</SelectItem>
                    <SelectItem value="fi">Suomi</SelectItem>
                    <SelectItem value="et">Eesti</SelectItem>
                    <SelectItem value="pl">Polski</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="cs">Čeština</SelectItem>
                    <SelectItem value="hr">Hrvatski</SelectItem>
                    <SelectItem value="sl">Slovenščina</SelectItem>
                    <SelectItem value="it">Italiano</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                    <SelectItem value="hi">हिन्दी</SelectItem>
                    <SelectItem value="ur">اردو</SelectItem>
                    <SelectItem value="bn">বাংলা</SelectItem>
                    <SelectItem value="zh">中文</SelectItem>
                    <SelectItem value="ms">Bahasa Melayu</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon" className="text-[#2d32aa] dark:text-white" onClick={toggleDarkMode}>
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                {/* <Button variant="ghost" size="icon" className="text-[#2d32aa] dark:text-white">
                  <BellIcon className="h-5 w-5" />
                </Button> */}
                <Button variant="ghost" size="icon" className="text-[#2d32aa] dark:text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <MenuIcon className="h-5 w-5" />
                </Button>
                {/* <Button variant="outline" size="sm" className="hidden md:inline-flex text-[#2d32aa] dark:text-white">
                  <UserIcon className="h-4 w-4 mr-2" /> {t.profile}
                </Button> */}
              </div>
            </div>
          </header>
          <div >
            {children}
          </div>

          <footer className="bg-[#212861] dark:bg-gray-900 text-white py-6 px-4">
            <div className="container mx-auto text-center text-sm">
              <p>{t.copyright}</p>
            </div>
          </footer>
        </div>
      </div>
    </LanguageContext.Provider>
  )
}
