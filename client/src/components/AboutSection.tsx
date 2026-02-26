/*
  DESIGN: "Warm Authority" — About section
  - Asymmetric layout: profile image left, text right
  - Warm ivory background with subtle grain
  - Amber accent on key stats
  - Progressive reveal on scroll
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PROFILE_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663280816898/qAZznJVqDIUfHpfW.png";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const stats = [
    { number: "30+", label: t.about.stats.years },
    { number: "500+", label: t.about.stats.speeches },
    { number: "10+", label: t.about.stats.organizations },
    { number: "6K+", label: t.about.stats.followers },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-ivory grain-overlay">
      <div className="container relative z-10">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-amber-dark mb-3">
            {t.about.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            {t.about.titleLine1}
            <br />
            <span className="text-amber-dark">{t.about.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={PROFILE_IMAGE}
                  alt="Luis Coimbra - Strategic Advisor, Keynote Speaker, and Board Member"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-amber/30 rounded-sm" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <p className="font-body text-lg md:text-xl text-navy/80 leading-relaxed mb-10">
              {t.about.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-navy/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                >
                  <p className="font-display text-3xl md:text-4xl font-bold text-amber-dark">
                    {stat.number}
                  </p>
                  <p className="font-body text-xs md:text-sm text-navy/60 mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
