import { useState, useEffect } from "react"
import { Menu, X, Cloud, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./theme-provider"

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState("#home")
  const { theme, setTheme } = useTheme()

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" }
  ]

  // Track scroll position for header blur and active link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map(item => item.href.substring(1))
      let current = sections[0]
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = `#${section}`
        }
      }
      setActiveHash(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 transition-all duration-300 border-b border-transparent",
      isMobileMenuOpen ? "z-[99999] bg-background" : "z-50",
      isScrolled && !isMobileMenuOpen
        ? "bg-background/80 backdrop-blur-md py-3 border-border" 
        : "bg-transparent py-5"
    )}>
      <div className="container max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-[10000]">
        {/* Brand */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group relative z-50">
          <span className="font-extrabold text-xl tracking-tighter text-foreground">
            Bhuvan<span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative text-xs font-bold tracking-widest uppercase transition-colors hover:text-foreground"
              style={{ color: activeHash === item.href ? 'inherit' : 'var(--muted-foreground)' }}
            >
              {item.label}
              {activeHash === item.href && (
                <motion.div
                  layoutId="indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all ml-4 shadow-sm hover:scale-110 active:scale-95 border border-border"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center -mr-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background z-[9999] flex flex-col pt-32 px-10"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-2xl font-bold tracking-tight transition-colors",
                    activeHash === item.href ? "text-blue-600" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-auto pb-12 flex flex-col gap-4">
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center w-full py-4 rounded-xl text-base font-bold bg-secondary text-secondary-foreground transition-colors border border-border"
              >
                {theme === "dark" ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
