import { Link, useLocation } from "react-router-dom"
import { Menu, X, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const Navigation = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { path: "/", label: "~", fullLabel: "Home" },
    { path: "/projects", label: "./projects", fullLabel: "Projects" },
    { path: "/experience", label: "./experience", fullLabel: "Experience" }
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Track scroll position for enhanced styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-md transition-all duration-300",
      isScrolled
        ? "bg-background/95 shadow-lg shadow-black/5"
        : "bg-background/80"
    )}>
      <div className="container flex h-14 sm:h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-sm sm:text-base hover:text-terminal-green transition-colors group"
        >
          <div className="p-1.5 rounded bg-terminal-green/10 group-hover:bg-terminal-green/20 transition-colors">
            <Terminal className="h-4 w-4 text-terminal-green" />
          </div>
          <span className="hidden sm:inline-block">
            <span className="text-muted-foreground">bhuvan</span>
            <span className="text-terminal-green">@</span>
            <span className="text-muted-foreground">devops</span>
          </span>
          <span className="sm:hidden text-muted-foreground">bhuvan</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-mono transition-all duration-200 relative group",
                location.pathname === item.path
                  ? "text-terminal-green bg-terminal-green/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <span className={cn(
                "transition-opacity",
                location.pathname === item.path ? "opacity-100" : "opacity-70 group-hover:opacity-100"
              )}>
                {location.pathname === item.path && (
                  <span className="text-terminal-green mr-1">$</span>
                )}
                {item.label}
              </span>
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-3 right-3 h-px bg-terminal-green/50" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 rounded-md hover:bg-secondary/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <X className={cn(
              "absolute inset-0 h-6 w-6 transition-all duration-300 text-terminal-green",
              isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
            )} />
            <Menu className={cn(
              "absolute inset-0 h-6 w-6 transition-all duration-300",
              isMobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
            )} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/40",
        isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-t-0"
      )}>
        <div className="px-4 py-3 space-y-1 bg-background/95 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 rounded-md text-base font-mono transition-all duration-200",
                location.pathname === item.path
                  ? "text-terminal-green bg-terminal-green/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {location.pathname === item.path && (
                <span className="text-terminal-green">▸</span>
              )}
              <span>{item.fullLabel}</span>
              <span className="text-muted-foreground/50 text-sm ml-auto">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
