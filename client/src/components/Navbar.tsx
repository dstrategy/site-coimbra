/*
  DESIGN: "Warm Authority" — Frosted glass navigation bar
  - Transparent on top, transitions to frosted glass on scroll
  - Navy text, amber accent on active link
  - Cormorant Garamond for brand, Outfit for nav links
  - Language toggle EN/PT
*/

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, t, toggleLocale } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.speaking, href: "#speaking" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(15,27,45,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-18 md:h-20">
        {/* Brand - scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-8"
          aria-label="Scroll to top"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 amber-underline uppercase ${scrolled ? 'text-navy/70 hover:text-navy' : 'text-white/80 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            aria-label={locale === "en" ? "Mudar para Português" : "Switch to English"}
            className={`flex items-center gap-1.5 font-body text-xs font-semibold tracking-wider uppercase transition-colors duration-300 px-3 py-1.5 rounded-sm border ${
              scrolled
                ? "text-navy/60 hover:text-navy border-navy/15 hover:border-navy/30"
                : "text-white/70 hover:text-white border-white/20 hover:border-white/40"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === "en" ? "PT" : "EN"}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className={`ml-2 px-5 py-2.5 font-body text-sm font-medium tracking-wide rounded-sm transition-all duration-300 ${scrolled ? 'bg-navy text-ivory hover:bg-navy-light' : 'bg-amber text-navy hover:bg-amber-light'}`}
          >
            {t.nav.bookKeynote}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'} ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'} ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-navy' : 'bg-white'} ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-ivory/95 backdrop-blur-xl"
      >
        <div className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-body text-base font-medium text-navy/80 hover:text-navy transition-colors py-2"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-2 font-body text-base font-medium text-navy/80 hover:text-navy transition-colors py-2"
          >
            <Globe className="w-4 h-4" />
            {locale === "en" ? "Português" : "English"}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="mt-2 px-5 py-3 bg-navy text-ivory font-body text-sm font-medium tracking-wide rounded-sm text-center"
          >
            {t.nav.bookKeynote}
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
