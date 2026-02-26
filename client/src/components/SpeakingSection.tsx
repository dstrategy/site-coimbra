/*
  DESIGN: "Warm Authority" — Speaking engagements gallery
  - Immersive image gallery with hover effects
  - Warm ivory background
  - Topics listed with amber accents
  - Progressive reveal
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Users, Globe, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SPEAKING_1 = "/images/speaking-1.jpg";
const SPEAKING_2 = "/images/speaking-2.jpg";
const SPEAKING_4 = "/images/speaking-4.jpg";

const topicIcons = [Lightbulb, Globe, Users, Mic];

export default function SpeakingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const images = [
    { src: SPEAKING_1, alt: t.speaking.images[0]?.alt || "" },
    { src: SPEAKING_2, alt: t.speaking.images[1]?.alt || "" },
    { src: SPEAKING_4, alt: t.speaking.images[2]?.alt || "" },
  ];

  return (
    <section id="speaking" className="relative py-24 md:py-32 bg-ivory grain-overlay">
      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-amber-dark mb-3">
            {t.speaking.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            {t.speaking.titleLine1}
            <br />
            <span className="text-amber-dark">{t.speaking.titleHighlight}</span>
          </h2>
          <p className="font-body text-lg text-navy/60 mt-6 max-w-2xl leading-relaxed">
            {t.speaking.description}
          </p>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Keynote Topics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-navy mb-10">
            Keynote Topics
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.speaking.topics.map((topic, i) => {
            const Icon = topicIcons[i] || Mic;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="group p-6 md:p-8 bg-white rounded-sm border border-navy/5 hover:shadow-[0_8px_30px_rgba(15,27,45,0.08)] transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-amber-dark" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-navy mb-2">
                      {topic.title}
                    </h4>
                    <p className="font-body text-sm text-navy/60 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-ivory font-body text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-navy-light transition-all duration-300"
          >
            <Mic className="w-4 h-4" />
            {t.nav.bookKeynote}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
