/*
  DESIGN: "Warm Authority" — Experience & CV timeline
  - Navy background section for contrast
  - White/ivory text
  - Amber accent markers on timeline
  - Staggered reveal animation
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-navy overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-amber mb-3">
            {t.experience.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t.experience.titleLine1}
            <br />
            <span className="text-amber">{t.experience.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-amber" />
              {t.experience.professionalJourney}
            </h3>
            <div className="space-y-8">
              {t.experience.jobs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                  className="relative pl-8 border-l-2 border-amber/30"
                >
                  <div className="absolute left-0 top-1 -translate-x-[9px] w-4 h-4 rounded-full bg-amber border-2 border-navy" />
                  <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-amber mb-1">
                    {item.period}
                  </p>
                  <h4 className="font-display text-xl font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm font-medium text-white/60 mb-3">
                    {item.company}
                  </p>
                  <p className="font-body text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-12"
            >
              <h3 className="font-display text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-amber" />
                {t.experience.education}
              </h3>
              <div className="space-y-4">
                {t.experience.schools.map((school, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-sm border border-white/10">
                    <h4 className="font-display text-xl font-semibold text-white mb-1">
                      {school.name}
                    </h4>
                    <p className="font-body text-sm text-white/45 leading-relaxed">
                      {school.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3 className="font-display text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <Award className="w-5 h-5 text-amber" />
                {t.experience.awards}
              </h3>
              <div className="space-y-4">
                {t.experience.awardsList.map((award, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-sm border border-white/10">
                    <p className="font-body text-sm font-semibold text-white">{award.name}</p>
                    <p className="font-body text-xs text-white/50 mt-1">
                      {award.issuer} &middot; {award.year}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
