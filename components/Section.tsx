import React, { ReactNode } from 'react';
// Fix: Import Variants type from framer-motion to explicitly type animation variants.
import { motion, Variants } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  // Fix: Explicitly type sectionVariants with Variants to resolve TypeScript error where 'ease' was inferred as a generic string.
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id={id} className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <motion.div
        className="w-full max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-100">
          <span className="text-blue-500">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
        </h2>
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
