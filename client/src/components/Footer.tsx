/*
  DESIGN: "Warm Authority" — Minimal footer
  - Navy background
  - Amber accent
  - Clean, minimal design
*/

import { Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-navy py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold text-white">
              Luis Coimbra
            </p>
            <p className="font-body text-xs text-white/40 mt-1">
              {t.hero.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/luiscoimbra/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center hover:bg-amber/20 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white/70" />
            </a>
            <a
              href="https://coimbra.eng.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-white/40 hover:text-amber transition-colors duration-300"
            >
              coimbra.eng.br
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-white/30">
            &copy; {currentYear} Luis Coimbra. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
