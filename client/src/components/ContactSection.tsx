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
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
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
    const subject = encodeURIComponent(
      `Speaking Engagement Request from ${formData.name} — ${formData.organization}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nEvent Type: ${formData.eventType}\nPreferred Date: ${formData.eventDate}\n\nMessage:\n${formData.message}`
    );
    window.open(
      `mailto:info@coimbra.eng.br?subject=${subject}&body=${body}`,
      "_blank"
    );
    toast.success(t.contact.emailOpening);
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
            {t.contact.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            {t.contact.titleLine1}
            <br />
            <span className="text-amber-dark">{t.contact.titleHighlight}</span>
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
              {t.contact.description}
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-navy/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-navy/60" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-navy">{t.contact.location}</p>
                  <p className="font-body text-xs text-navy/50">{t.contact.locationSub}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-navy/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-navy/60" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-navy">{t.contact.email}</p>
                  <p className="font-body text-xs text-navy/50">{t.contact.emailSub}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-navy/5 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-navy/60" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-navy">{t.contact.scheduling}</p>
                  <p className="font-body text-xs text-navy/50">{t.contact.schedulingSub}</p>
                </div>
              </div>
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/luiscoimbra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Luis Coimbra on LinkedIn"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#0a66c2] text-white font-body text-sm font-medium rounded-sm hover:bg-[#004182] transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              {t.contact.connectLinkedIn}
            </a>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} aria-label="Book a keynote speaking engagement with Luis Coimbra" className="p-8 md:p-10 bg-white rounded-sm border border-navy/5 shadow-[0_4px_20px_rgba(15,27,45,0.04)]">
              <h3 className="font-display text-2xl font-semibold text-navy mb-6">
                {t.contact.formTitle}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-name" className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                    {t.contact.fullName}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-org" className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                    {t.contact.organization}
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    required
                    autoComplete="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                    placeholder={t.contact.orgPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="contact-event-type" className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                    {t.contact.eventType}
                  </label>
                  <select
                    id="contact-event-type"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                  >
                    <option value="">{t.contact.selectType}</option>
                    <option value="keynote">{t.contact.keynote}</option>
                    <option value="workshop">{t.contact.workshop}</option>
                    <option value="panel">{t.contact.panel}</option>
                    <option value="mentoring">{t.contact.mentoring}</option>
                    <option value="advisory">{t.contact.advisory}</option>
                    <option value="other">{t.contact.other}</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="contact-date" className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                  {t.contact.preferredDate}
                </label>
                <input
                  id="contact-date"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block font-body text-xs font-medium text-navy/60 mb-1.5 uppercase tracking-wider">
                  {t.contact.message}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-ivory border border-navy/10 rounded-sm font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-amber text-navy font-body text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-amber-light transition-all duration-300 hover:shadow-[0_4px_20px_rgba(212,168,83,0.4)]"
              >
                <Send className="w-4 h-4" />
                {t.contact.sendRequest}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
