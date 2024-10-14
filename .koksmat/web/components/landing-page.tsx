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
import { LanguageProvider, useLanguage } from './language-context'
import { translations } from './translations'

const NexiLogo = ({ isDark }: { isDark: boolean }) => (
  <svg width="88" height="27" viewBox="0 0 88.100002 26.602287" xmlns="http://www.w3.org/2000/svg" aria-label="Nexi Logo">
    <g transform="translate(-0.2,-3.222222)">
      <g transform="translate(0,-5)">
        <g transform="translate(0,5)">
          <g transform="translate(0,3.222222)">
            <polygon fill={isDark ? "#FFFFFF" : "#2D32AA"} points="88.3,0.8 81.9,0.8 81.9,25.9 88.3,25.9" />
            <path fill={isDark ? "#FFFFFF" : "#2D32AA"} d="M12.5,0.1C6.5,0.1,0.2,2.2,0.2,2.2V26H6.8V6.6c0,0,2.3-1,5.8-1c4.3,0,6,2.3,6,5.9v14.4h6.5 c0-0.4,0-14,0-14.4C25.1,3.8,21.5,0.1,12.5,0.1" />
            <path fill={isDark ? "#FFFFFF" : "#2D32AA"} d="M80.1,0.8H72.2L66.2,8.2L63,4C61.4,1.9,58.7,0.7,56.1,0.7h-3.9l9.9,12.5l-10.2,12.7h7.8l6.4-7.8l3.7,4.6 c1.6,2.1,4.3,3.2,6.9,3.2h3.8L70.2,13L80.1,0.8z" />
            <path fill={isDark ? "#FFFFFF" : "#2D32AA"} d="M40.6,5.5c2.9,0,5.3,1.3,6.2,3.6l-13,2.3C34.5,7.6,37.2,5.5,40.6,5.5 M53,21.1l-4.3-3.5 c-1.4,1.6-3.7,3.5-7.5,3.5c-3,0-5.7-1.6-6.9-4.4L53.6,13.3C53.6,11.4,53.2,9.6,52.5,8C50.5,3.3,46,0,40.4,0 C33,0,27.3,5.3,27.3,13.3c0,7.8,5.6,13.3,13.8,13.3C47.4,26.7,51.1,23.5,53,21.1" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => { },
})



const useTranslation = (language: string) => {
  // const { language } = useContext(LanguageContext)
  return translations[language as keyof typeof translations] || translations.en
}

export function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { language, setLanguage } = useLanguage()
  //const [language, setLanguage] = useState('en')
  const t = useTranslation(language)

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
                <h1 className="text-xl font-bold ml-4">{t.international}</h1>
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

          {/* <nav className="bg-gray-100 dark:bg-gray-700 sticky top-[104px] md:top-[72px] z-40">
            <div className="container mx-auto px-4">
              <ul className="flex space-x-4 overflow-x-auto py-2 text-sm">
                {['hero', 'mission', 'approach', 'values', 'tech'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`text-[#2d32aa] dark:text-white hover:text-[#00b49d] dark:hover:text-[#00b49d] transition-colors duration-200 ${activeSection === section ? 'font-bold' : ''
                        }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav> */}

          {/* {isOpen && (
            <nav className="px-4 py-2 bg-[#212861] dark:bg-gray-700 md:hidden">
              <a href="#hero" className="block py-2 text-white">Home</a>
              <a href="#mission" className="block py-2 text-white">Mission</a>
              <a href="#approach" className="block py-2 text-white">Approach</a>
              <a href="#values" className="block py-2 text-white">Values</a>
              <a href="#tech" className="block py-2 text-white">Tech Stack</a>
            </nav>
          )} */}

          <main>
            <section id="hero" className="bg-[#2d32aa] dark:bg-gray-800 text-white py-20">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-6">{t.buildingBetterFuture}</h1>
                    <p className="text-xl mb-8">{t.forEmployeesPartners}</p>
                    <Button size="lg" className="bg-[#ff6065] hover:bg-[#ff7a7e] text-white text-lg font-medium px-8 py-3">
                      {t.joinUs}
                    </Button>
                  </div>
                  <div className="md:w-1/2">
                    <Card className="bg-white dark:bg-gray-700 text-[#212861] dark:text-white p-4 rounded-lg shadow-lg">
                      <CardContent>
                        <h2 className="text-2xl font-bold mb-4">{t.nexiDigitalWorkplace}</h2>
                        <div className="grid grid-cols-2 gap-4">
                          <Button className="flex items-center justify-center bg-[#00b49d] text-white hover:bg-[#00a38d] h-24">
                            <div className="text-center">
                              <CheckCircle2Icon className="h-8 w-8 mx-auto mb-2" />
                              <span>{t.checkIn}</span>
                            </div>
                          </Button>
                          <Button className="flex items-center justify-center bg-[#2bd4d9] text-[#212861] hover:bg-[#25bfc4] h-24">
                            <div className="text-center">
                              <Calendar className="h-8 w-8 mx-auto mb-2" />
                              <span>{t.schedule}</span>
                            </div>
                          </Button>
                          <Button className="flex items-center justify-center bg-[#ff6065] text-white hover:bg-[#ff4b50] h-24">
                            <div className="text-center">
                              <MessageSquare className="h-8 w-8 mx-auto mb-2" />
                              <span>{t.teamChat}</span>
                            </div>
                          </Button>
                          <Button className="flex items-center justify-center bg-[#2d32aa] text-white hover:bg-[#252aa8] h-24">
                            <div className="text-center">
                              <UserIcon className="h-8 w-8 mx-auto mb-2" />
                              <span>{t.profile}</span>
                            </div>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            <section id="mission" className="py-20 bg-gray-100 dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#2d32aa] dark:text-white">{t.ourMission}</h2>
                <p className="text-xl mb-8 text-center max-w-3xl mx-auto dark:text-gray-300">
                  {t.missionDescription}
                </p>
              </div>
            </section>

            <section id="approach" className="py-20 dark:bg-gray-900">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#2d32aa] dark:text-white">{t.multiChannelApproach}</h2>
                <p className="text-xl mb-8 text-center max-w-3xl mx-auto dark:text-gray-300">
                  {t.approachDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-white dark:bg-gray-700 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-[#2d32aa] dark:text-white">{t.inStoreSolutions}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="dark:text-gray-300">{t.inStoreDescription}</p>
                      <Button className="mt-4 bg-[#2d32aa] text-white hover:bg-[#252aa8]">{t.discoverMore}</Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-white dark:bg-gray-700  shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-[#2d32aa] dark:text-white">{t.eCommerceSolutions}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="dark:text-gray-300">{t.eCommerceDescription}</p>
                      <Button className="mt-4 bg-[#2d32aa] text-white hover:bg-[#252aa8]">{t.learnMore}</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section id="values" className="py-20 bg-gray-100 dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#2d32aa] dark:text-white">{t.ourValues}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-[#2bd4d9] dark:bg-[#1a8a8e] text-[#212861] dark:text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-center text-2xl font-medium">
                        <Zap className="mr-2" /> {t.innovation}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-left space-y-2 text-base">
                        <li className="flex items-start">
                          <Rocket className="mr-2 mt-1 flex-shrink-0" />
                          <span>{t.innovationDescription1}</span>
                        </li>
                        <li className="flex items-start">
                          <Code className="mr-2 mt-1 flex-shrink-0" />
                          <span>{t.innovationDescription2}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#00b49d] dark:bg-[#007a6b] text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-center text-2xl font-medium">
                        <Heart className="mr-2" /> {t.inclusion}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-left space-y-2 text-base">
                        <li className="flex items-start">
                          <Users className="mr-2 mt-1 flex-shrink-0" />
                          <span>{t.inclusionDescription1}</span>
                        </li>
                        <li className="flex items-start">
                          <Globe className="mr-2 mt-1 flex-shrink-0" />
                          <span>{t.inclusionDescription2}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section id="tech" className="py-20 dark:bg-gray-900">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#2d32aa] dark:text-white">{t.techStack}</h2>
                <Tabs defaultValue="ai" className="max-w-3xl mx-auto">
                  <TabsList className="grid w-full grid-cols-3 bg-[#2d32aa] dark:bg-gray-700">
                    <TabsTrigger value="ai" className="text-white data-[state=active]:bg-[#00b49d] dark:data-[state=active]:bg-[#007a6b] text-sm">{t.aiPoweredLearning}</TabsTrigger>
                    <TabsTrigger value="dev" className="text-white data-[state=active]:bg-[#00b49d] dark:data-[state=active]:bg-[#007a6b] text-sm">{t.modernDevelopment}</TabsTrigger>
                    <TabsTrigger value="tech" className="text-white data-[state=active]:bg-[#00b49d] dark:data-[state=active]:bg-[#007a6b] text-sm">{t.technologiesWeUse}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ai">
                    <Card className="border-[#2d32aa] dark:border-gray-600">
                      <CardHeader>
                        <CardTitle className="text-[#2d32aa] dark:text-white text-2xl font-medium">{t.aiPoweredLearning}</CardTitle>
                        <CardDescription className="dark:text-gray-300">{t.aiDescription}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base dark:text-gray-300">{t.aiContent}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="dev">
                    <Card className="border-[#2d32aa] dark:border-gray-600">
                      <CardHeader>
                        <CardTitle className="text-[#2d32aa] dark:text-white text-2xl font-medium">{t.modernDevelopment}</CardTitle>
                        <CardDescription className="dark:text-gray-300">{t.modernDevDescription}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base dark:text-gray-300">{t.modernDevContent}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="tech">
                    <Card className="border-[#2d32aa] dark:border-gray-600">
                      <CardHeader>
                        <CardTitle className="text-[#2d32aa] dark:text-white text-2xl font-medium">{t.technologiesWeUse}</CardTitle>
                        <CardDescription className="dark:text-gray-300">{t.techDescription}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-left text-base dark:text-gray-300">
                          <li>Microsoft 365 (Exchange, Teams, Office Graph, Outlook, Microsoft Spaces)</li>
                          <li>AI & Machine Learning</li>
                          <li>React</li>
                          <li>Node.js</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            <section className="py-20 bg-[#2d32aa] dark:bg-gray-800 text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">{t.joinCava2}</h2>
                <p className="text-xl mb-8">{t.joinDescription}</p>
                <Button size="lg" className="bg-[#ff6065] hover:bg-[#ff7a7e] text-white text-lg font-medium px-8 py-3">
                  {t.learnMore}
                </Button>
              </div>
            </section>
          </main>

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

export default function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  )
}