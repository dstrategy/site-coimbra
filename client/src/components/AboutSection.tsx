/*
  DESIGN: "Warm Authority" — About section
  - Asymmetric layout: profile image left, text right
  - Warm ivory background with subtle grain
  - Amber accent on key stats
  - Progressive reveal on scroll
*/

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PROFILE_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663280816898/qAZznJVqDIUfHpfW.png";

const stats = [
  { number: "30+", label: "Years of Experience" },
  { number: "500+", label: "Keynote Speeches" },
  { number: "10+", label: "Organizations Advised" },
  { number: "6K+", label: "LinkedIn Followers" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Where Strategy Meets
            <br />
            <span className="text-amber-dark">Human Insight</span>
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
              {/* Decorative amber line */}
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
            <p className="font-body text-lg md:text-xl text-navy/80 leading-relaxed mb-6">
              With more than two decades of experience at the intersection of technology, strategy,
              and innovation, Luis Coimbra is a high-impact professional who combines strategic
              vision, technical depth, and human sensitivity — an essential combination for
              organizations seeking to grow with intelligence and sustainability in times of
              transformation.
            </p>

            <p className="font-body text-base md:text-lg text-navy/70 leading-relaxed mb-10">
              More than a visionary executive, Luis is a natural communicator. As a keynote speaker
              and mentor, he is dedicated to sharing experiences with leaders, entrepreneurs,
              educators, and technical teams seeking to elevate their strategic maturity, accelerate
              results, and transform organizational cultures.
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
