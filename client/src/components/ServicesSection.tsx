/*
  DESIGN: "Warm Authority" — Services section
  - Warm gray background for subtle contrast
  - Card-based layout with hover lift effects
  - Amber accent lines
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Layers, Cpu, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = [Target, Cpu, Layers, Users];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 md:py-32 bg-warm-gray grain-overlay">
      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-amber-dark mb-3">
            {t.services.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            {t.services.titleLine1}
            <br />
            <span className="text-amber-dark">{t.services.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.cards.map((service, i) => {
            const Icon = serviceIcons[i] || Target;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                className="group relative p-8 md:p-10 bg-white rounded-sm border border-navy/5 hover:shadow-[0_12px_40px_rgba(15,27,45,0.08)] transition-all duration-500"
              >
                {/* Amber top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-14 h-14 rounded-sm bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-amber/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-navy group-hover:text-amber-dark transition-colors duration-300" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>

                <p className="font-body text-sm text-navy/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
