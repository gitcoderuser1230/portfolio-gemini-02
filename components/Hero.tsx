import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const name = "Paramveer Singh";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-connection-of-dots-and-lines-42813-large.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-70"></div>
      </div>
      <div className="relative z-10 px-4">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {name.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: name.length * 0.1 + 0.5, duration: 0.8 }}
        >
          B.Tech CSE | Data Science Specialist
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;