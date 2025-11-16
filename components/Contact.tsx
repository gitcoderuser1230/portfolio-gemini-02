
import React from 'react';
import Section from './Section';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com' },
  { name: 'Email', icon: <FaEnvelope />, url: 'mailto:email@example.com' },
];

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-slate-400 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
        </p>
        <div className="flex justify-center items-center space-x-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <span className="text-5xl">{link.icon}</span>
            </motion.a>
          ))}
        </div>
        <footer className="mt-20 pt-8 border-t border-slate-700">
            <p className="text-slate-500">Designed & Built by Paramveer Singh</p>
        </footer>
      </div>
    </Section>
  );
};

export default Contact;
