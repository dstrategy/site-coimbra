/*
  DESIGN: "Warm Authority" — Services section
  - Warm gray background for subtle contrast
  - Card-based layout with hover lift effects
  - Amber accent lines
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Layers, Cpu, Users } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Strategic Advisory",
    description:
      "Expert guidance for critical business decisions, aligning technology and corporate strategy. Serving as a trusted advisor to CEOs and boards of directors navigating complex transformations.",
    features: ["Board-level advisory", "Strategic roadmapping", "Executive mentoring"],
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "End-to-end advisory on the digital transformation journey, identifying opportunities and minimizing risks. From cloud migration to DevSecOps implementation and AI integration.",
    features: ["Cloud & DevSecOps", "AI strategy", "Technology governance"],
  },
  {
    icon: Layers,
    title: "Platform Strategy",
    description:
      "Developing platform ecosystems that amplify growth and create new business opportunities. Building scalable models that generate lasting competitive advantages.",
    features: ["Ecosystem design", "Scalable architectures", "Market positioning"],
  },
  {
    icon: Users,
    title: "Executive Mentoring",
    description:
      "One-on-one mentoring with active listening, focused on value generation and commitment to the integral development of talents and leadership. Elevating strategic maturity across organizations.",
    features: ["Leadership development", "Culture transformation", "Team acceleration"],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            How I Can Help
            <br />
            <span className="text-amber-dark">Your Organization</span>
          </h2>
          <p className="font-body text-lg text-navy/60 mt-6 leading-relaxed">
            Specialized advisory services designed to help CEOs, boards, and leadership teams
            navigate complexity and drive meaningful transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
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
                <service.icon className="w-6 h-6 text-navy group-hover:text-amber-dark transition-colors duration-300" />
              </div>

              <h3 className="font-display text-2xl font-semibold text-navy mb-3">
                {service.title}
              </h3>

              <p className="font-body text-sm text-navy/60 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-body font-medium text-navy/50 bg-navy/5 rounded-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
