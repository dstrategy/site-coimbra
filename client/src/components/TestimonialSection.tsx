/*
  DESIGN: "Warm Authority" — Testimonial section
  - Large pull-quote style
  - Navy background with amber accent
  - Elegant serif typography for the quote
*/

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-navy overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="w-12 h-12 text-amber/40 mx-auto mb-8" />

          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 leading-relaxed mb-8 italic">
            "A great professional. Dedicated, zealous about his projects, a fighter from start to
            finish, with technical knowledge rarely found. In technology, systems, innovation, and
            operations, there are few people in Brazil like Luis Coimbra. A builder of great
            projects, a tireless researcher who brought many innovations and was creative and
            decisive at critical moments. He is someone you want on winning teams."
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-amber/40" />
            <div>
              <p className="font-body text-sm font-semibold text-white">
                Jo&atilde;o Lu&iacute;s de Almeida Machado
              </p>
              <p className="font-body text-xs text-white/50 mt-0.5">
                LinkedIn Recommendation
              </p>
            </div>
            <div className="w-12 h-px bg-amber/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
