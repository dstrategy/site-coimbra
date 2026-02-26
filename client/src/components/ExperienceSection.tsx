/*
  DESIGN: "Warm Authority" — Experience & CV timeline
  - Navy background section for contrast
  - White/ivory text
  - Amber accent markers on timeline
  - Staggered reveal animation
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Briefcase, Shield } from "lucide-react";

const experience = [
  {
    period: "Present",
    title: "Founder & Strategic Advisor",
    company: "DSTRATEGY LLC",
    description:
      "Leading strategic advisory services for CEOs and boards of directors, specializing in digital transformation, platform strategy, and innovation leadership across multiple industries.",
    type: "work",
  },
  {
    period: "Education & Technology",
    title: "C-Level Executive & CIO",
    company: "Poliedro Educação / Bernoulli Educação / Kroton",
    description:
      "Drove technology and innovation strategies at Brazil's leading educational institutions. Recognized as CIO of the Year in Education by IDC and Computerworld (IT Leaders 2015).",
    type: "work",
  },
  {
    period: "Consulting",
    title: "Strategic Consulting & Execution",
    company: "DesignStrategy",
    description:
      "Partnering with organizations to transform strategies into tangible results through agile methodologies and multidisciplinary teams. Bridging executive advisory with hands-on implementation.",
    type: "work",
  },
];

const certifications = [
  { name: "SAFe 4 Certified Agilist", issuer: "Scaled Agile, Inc.", year: "2018" },
  { name: "ACAMS Certified AML Specialist", issuer: "ACAMS", year: "Recent" },
];

const awards = [
  {
    name: "Top 100 Innovative Companies",
    issuer: "PwC & ITMIDIA",
    year: "2015",
  },
  {
    name: "IT Leaders — CIO of the Year in Education",
    issuer: "IDC & Computerworld",
    year: "2015",
  },
  {
    name: "Microsoft WPC Award — Public Sector Education in LATAM",
    issuer: "Microsoft",
    year: "2015",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Experience & Credentials
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            A Career Built on
            <br />
            <span className="text-amber">Impact & Innovation</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-amber" />
              Professional Journey
            </h3>
            <div className="space-y-8">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                  className="relative pl-8 border-l-2 border-amber/30"
                >
                  {/* Timeline dot */}
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
                Education
              </h3>
              <div className="p-6 bg-white/5 rounded-sm border border-white/10">
                <h4 className="font-display text-xl font-semibold text-white mb-1">
                  Instituto Tecnol&oacute;gico de Aeron&aacute;utica (ITA)
                </h4>
                <p className="font-body text-sm text-white/60 mb-2">
                  Engineering Degree &middot; Class of 1992
                </p>
                <p className="font-body text-sm text-white/45 leading-relaxed">
                  One of Brazil's most prestigious engineering institutions, known for producing
                  top-tier leaders in technology and aerospace.
                </p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-12"
            >
              <h3 className="font-display text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <Shield className="w-5 h-5 text-amber" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-sm border border-white/10">
                    <p className="font-body text-sm font-semibold text-white">{cert.name}</p>
                    <p className="font-body text-xs text-white/50 mt-1">
                      {cert.issuer} &middot; {cert.year}
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
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {awards.map((award, i) => (
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
