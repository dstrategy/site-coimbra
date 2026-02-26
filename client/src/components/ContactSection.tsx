/*
  DESIGN: "Warm Authority" — Contact & Booking section
  - Warm ivory background
  - Split layout: info left, form right
  - Amber CTA button
  - LinkedIn integration
*/

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, MapPin, Send, Calendar } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(
      `Speaking Engagement Request from ${formData.name} — ${formData.organization}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nEvent Type: ${formData.eventType}\nPreferred Date: ${formData.eventDate}\n\nMessage:\n${formData.message}`
    );
    window.open(
      `mailto:contact@coimbra.eng.br?subject=${subject}&body=${body}`,
      "_blank"
    );
    toast.success("Opening your email client to send the request.");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-ivory grain-overlay">
      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-amber-dark mb-3">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Let's Create
            <br />
            <span className="text-amber-dark">Something Impactful</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <p className="font-body text-lg text-navy/70 leading-relaxed mb-8">
              Whether your company, event, or team needs an experienced, provocative, and practical
              voice — someone who speaks the language of business, people, and transformation —
              Luis Coimbra is ready to contribute. On stage, in a boardroom, or in executive
              mentoring, he delivers clarity, direction, and impact.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-navy/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-navy/60" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-navy">United States</p>
                  <p className="font-body text-xs text-navy/50">Available worldwide</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-navy/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-navy/60" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-navy">contact@coimbra.eng.br</p>
                  <p className="font-body text-xs text-navy/50">For inquiries and proposals</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-navy/5 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-navy/60" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-navy">Flexible Scheduling</p>
                  <p className="font-body text-xs text-navy/50">In-person & virtual events</p>
                </div>
              </div>
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/luiscoimbra/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#0a66c2] text-white font-body text-sm font-medium rounded-sm hover:bg-[#004182] transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white rounded-sm border border-navy/5 shadow-[0_4px_20px_rgba(15,27,45,0.04)]">
              <h3 className="font-display text-2xl font-semibold text-navy mb-6">
                Book a Keynote
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                    Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                    placeholder="Company or organization"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                  >
                    <option value="">Select type</option>
                    <option value="keynote">Keynote Speech</option>
                    <option value="workshop">Workshop</option>
                    <option value="panel">Panel Discussion</option>
                    <option value="mentoring">Executive Mentoring</option>
                    <option value="advisory">Strategic Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all resize-none"
                  placeholder="Tell us about your event, audience, and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-amber text-navy font-body text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-amber-light transition-all duration-300 hover:shadow-[0_4px_20px_rgba(212,168,83,0.4)]"
              >
                <Send className="w-4 h-4" />
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
