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

const SPEAKING_1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663280816898/VorIyyzNumqOnVCJ.png";
const SPEAKING_2 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663280816898/RNeWDkwbfnWPAbLe.png";
const SPEAKING_4 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663280816898/eHRRuTVyhOCyLnQE.png";

const topics = [
  {
    icon: Lightbulb,
    title: "Digital Transformation & Strategy",
    description:
      "How to navigate the digital landscape with clarity, turning disruption into competitive advantage for your organization.",
  },
  {
    icon: Globe,
    title: "Platform Ecosystems & Innovation",
    description:
      "Building scalable platform strategies that create new business opportunities and drive sustainable growth.",
  },
  {
    icon: Users,
    title: "Leadership in Times of Change",
    description:
      "Developing organizational cultures that embrace transformation while maintaining human-centered values.",
  },
  {
    icon: Mic,
    title: "Cloud, AI & Emerging Technologies",
    description:
      "Practical insights on leveraging cloud computing, artificial intelligence, and emerging tech for real business impact.",
  },
];

export default function SpeakingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Speaking
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Inspiring Audiences
            <br />
            <span className="text-amber-dark">Around the World</span>
          </h2>
          <p className="font-body text-lg text-navy/60 mt-6 max-w-2xl leading-relaxed">
            Luis Coimbra's keynotes inspire and provoke simultaneously. His talks are anchored in
            real-world experience, translated into insights that connect innovation, strategy,
            execution, and humanity.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {[
            { src: SPEAKING_1, alt: "Luis Coimbra at Digital Transformation conference" },
            { src: SPEAKING_2, alt: "Luis Coimbra delivering Innovation Leadership keynote" },
            { src: SPEAKING_4, alt: "Luis Coimbra at Cloud Computing & AI conference" },
          ].map((img, i) => (
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
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="group p-6 md:p-8 bg-white rounded-sm border border-navy/5 hover:shadow-[0_8px_30px_rgba(15,27,45,0.08)] transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors duration-300">
                  <topic.icon className="w-5 h-5 text-amber-dark" />
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
          ))}
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
            Request a Speaking Engagement
          </a>
        </motion.div>
      </div>
    </section>
  );
}
