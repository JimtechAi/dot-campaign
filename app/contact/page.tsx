"use client";

import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8F9FA] text-[#2E2E2E]">
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-[-7rem] h-72 w-72 rounded-full bg-[#0B5D3B]/10 blur-3xl" />
          <div className="absolute right-[-7rem] top-6 h-72 w-72 rounded-full bg-[#C8A24C]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]"
          >
            Contact DOT
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
            className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#0B5D3B] sm:text-5xl"
          >
            Let’s Connect and Build a Greater Ikeja Club
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
            className="mt-5 max-w-3xl text-lg leading-8 text-[#2E2E2E]/80"
          >
            Reach out to support the campaign, share your ideas, or request more information.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-3xl border border-[#C8A24C]/30 bg-[linear-gradient(160deg,#0B5D3B,#0a3f29)] p-6 text-white shadow-[0_22px_60px_rgba(11,93,59,0.24)] sm:p-8"
          >
            <h2 className="text-2xl font-bold tracking-tight">Campaign Contact Desk</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/82">
              Reach the campaign office directly for member conversations, support requests, and campaign engagements.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold transition-all hover:bg-white/16"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </span>
                <span>Open</span>
              </a>

              <a
                href="tel:+2340000000000"
                className="inline-flex items-center justify-between rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold transition-all hover:bg-white/16"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </span>
                <span>Call</span>
              </a>

              <a
                href="mailto:campaign@dotcampaign.org"
                className="inline-flex items-center justify-between rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold transition-all hover:bg-white/16 sm:col-span-2"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </span>
                <span>Send</span>
              </a>
            </div>

            <form className="mt-7 space-y-5" action="#" method="post">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-white">
                  <span>First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full rounded-xl border border-white/25 bg-white/95 px-4 py-3 text-sm text-[#2E2E2E] outline-none transition focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/20"
                    placeholder="First name"
                    required
                  />
                </label>

                <label className="space-y-2 text-sm font-medium text-white">
                  <span>Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full rounded-xl border border-white/25 bg-white/95 px-4 py-3 text-sm text-[#2E2E2E] outline-none transition focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/20"
                    placeholder="Last name"
                    required
                  />
                </label>
              </div>

              <label className="block space-y-2 text-sm font-medium text-white">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-white/25 bg-white/95 px-4 py-3 text-sm text-[#2E2E2E] outline-none transition focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/20"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="block space-y-2 text-sm font-medium text-white">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  className="w-full rounded-xl border border-white/25 bg-white/95 px-4 py-3 text-sm text-[#2E2E2E] outline-none transition focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/20"
                  placeholder="How can we help?"
                  required
                />
              </label>

              <label className="block space-y-2 text-sm font-medium text-white">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full rounded-xl border border-white/25 bg-white/95 px-4 py-3 text-sm text-[#2E2E2E] outline-none transition focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/20"
                  placeholder="Type your message"
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#C8A24C] px-7 py-3 text-sm font-semibold text-[#0B5D3B] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C8A24C]/40"
              >
                Send Message
              </button>
            </form>
          </motion.article>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0B5D3B]">Direct Contact</h2>
              <p className="mt-3 text-sm leading-7 text-[#2E2E2E]/80">
                Prefer direct communication? Reach the campaign team through WhatsApp or email.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/2340000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-[#0B5D3B]/12 bg-[#F8F9FA] px-4 py-3 text-sm font-semibold text-[#0B5D3B] transition-all hover:border-[#C8A24C]"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </span>
                  <span>Open Chat</span>
                </a>

                <a
                  href="tel:+2340000000000"
                  className="inline-flex items-center justify-between rounded-2xl border border-[#0B5D3B]/12 bg-[#F8F9FA] px-4 py-3 text-sm font-semibold text-[#0B5D3B] transition-all hover:border-[#C8A24C]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone
                  </span>
                  <span>Call Now</span>
                </a>

                <a
                  href="mailto:campaign@dotcampaign.org"
                  className="inline-flex items-center justify-between rounded-2xl border border-[#0B5D3B]/12 bg-[#F8F9FA] px-4 py-3 text-sm font-semibold text-[#0B5D3B] transition-all hover:border-[#C8A24C]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </span>
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-2 text-[#0B5D3B]">
                <MapPin className="h-5 w-5" />
                <h2 className="text-xl font-bold tracking-tight">Campaign Office</h2>
              </div>

              <p className="mt-3 text-sm leading-7 text-[#2E2E2E]/78">
                Ikeja Club 1966, 1, Joel Ogunnaike Street, GRA Ikeja, Lagos.
              </p>

              <div className="mt-5 overflow-hidden rounded-2xl border border-[#0B5D3B]/12 bg-[#F8F9FA]">
                <iframe
                  title="Ikeja Club location"
                  src="https://maps.google.com/maps?q=Ikeja%20Club%201966%20Lagos&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="h-[260px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-5 rounded-2xl border border-[#0B5D3B]/12 bg-[#F8F9FA] p-4">
                <div className="flex items-center gap-2 text-[#0B5D3B]">
                  <Clock3 className="h-4 w-4" />
                  <p className="text-sm font-semibold uppercase tracking-[0.14em]">Working Hours</p>
                </div>
                <div className="mt-3 space-y-1.5 text-sm text-[#2E2E2E]/80">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
