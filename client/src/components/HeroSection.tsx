/*
  DESIGN: "Warm Authority" — Full-viewport hero with dramatic speaking image
  - Immersive background image with dark overlay
  - White/ivory text for contrast against dark image
  - Elegant serif headline with sans-serif subtitle
  - Amber CTA button
*/

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMAGE = "/images/speaking-1-v2.jpg";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden" role="banner" aria-label="Hero section - Luis Coimbra">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Luis Coimbra delivering a keynote speech at a major technology conference with a large audience"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b2d]/85 via-[#0f1b2d]/60 to-[#0f1b2d]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2d]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-sm md:text-base font-medium tracking-[0.25em] uppercase text-amber-light mb-6"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-white mb-6"
          >
            Luis Coimbra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-lg md:text-xl text-white/80 leading-relaxed max-w-lg mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-amber text-navy font-body text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-amber-light transition-all duration-300 hover:shadow-[0_4px_20px_rgba(212,168,83,0.4)]"
            >
              {t.hero.bookKeynote}
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-body text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              {t.hero.learnMore}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
