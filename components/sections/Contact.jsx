"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jaydave8305@gmail.com",
      href: "mailto:jaydave8305@gmail.com",
      color:
        "from-cyan-500/20 via-cyan-500/5 to-transparent border-cyan-500/30 text-cyan-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8347083205",
      href: "tel:+918347083205",
      color:
        "from-violet-500/20 via-violet-500/5 to-transparent border-violet-500/30 text-violet-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jamnagar, Gujarat, India",
      href: "https://www.google.com/maps/search/?api=1&query=Jamnagar%2C%20Gujarat%2C%20India",
      color:
        "from-pink-500/20 via-pink-500/5 to-transparent border-pink-500/30 text-pink-400",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-28 sm:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="portfolio-eyebrow mx-auto">Contact Me</span>

          <h2 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Let&apos;s Build
            <span className="portfolio-gradient-text"> Something Great</span>
          </h2>

          <p className="portfolio-muted mt-6 text-lg leading-relaxed md:text-xl">
            Available for freelance projects, full-time opportunities, startup
            ideas, or collaborations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-3xl border bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 ${item.color}`}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/5" />

              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="h-7 w-7" />
                </div>

                <h3 className="mb-2 text-2xl font-semibold text-white">
                  {item.label}
                </h3>

                <p className="portfolio-muted text-sm leading-relaxed sm:text-base">
                  {item.value}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/80 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                  Connect
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 flex flex-col items-center justify-center gap-6"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Find me on
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/DaveJay70"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <Github className="h-6 w-6 text-zinc-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/jaydave07"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50"
            >
              <Linkedin className="h-6 w-6 text-zinc-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-violet-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
