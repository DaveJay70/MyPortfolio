'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jaydave8305@gmail.com',
      href: 'mailto:jaydave8305@gmail.com',
      color: 'cyan',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8347083205',
      href: 'tel:+918347083205',
      color: 'purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jamnagar, Gujarat, India',
      href: '#',
      color: 'pink',
    },
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto rounded-full" />
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all duration-300 bg-black/50 text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-cyan-500 opacity-0 group-hover:opacity-5 blur-xl transition-opacity" />

              <div className="relative z-10">
                <div className="inline-block p-4 rounded-full border border-cyan-500 bg-cyan-500/10 mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.label}</h3>
                <p className="text-gray-400">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="group relative p-8 md:p-12 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all duration-300 bg-black/50">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />

            <form className="relative z-10 space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-cyan-500 focus:outline-none text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-cyan-500 focus:outline-none text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-cyan-500 focus:outline-none text-white transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="group/btn relative w-full px-8 py-4 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-lg"
              >
                <Send className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                <span>Send Message</span>
                <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-0 group-hover/btn:opacity-20 blur-lg transition-opacity" />
              </button>
            </form>
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/DaveJay70"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full border border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
          >
            <Github className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </a>
          <a
            href="https://linkedin.com/in/jaydave07"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full border border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
