
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          <img 
            src="https://picsum.photos/seed/paramveer/400/400" 
            alt="Paramveer Singh"
            className="rounded-full shadow-lg shadow-blue-500/20 w-64 h-64 mx-auto object-cover border-4 border-blue-800"
          />
        </motion.div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-lg text-slate-400 leading-relaxed">
            Hello! I'm Paramveer Singh, a passionate and driven undergraduate student pursuing a Bachelor of Technology in Computer Science and Engineering with a specialization in Data Science. I am fascinated by the power of data to uncover insights and drive decision-making. My journey into the world of technology is fueled by a relentless curiosity and a desire to build solutions that make a tangible impact.
          </p>
          <br />
          <p className="text-lg text-slate-400 leading-relaxed">
            I am constantly exploring new technologies and honing my skills in Machine Learning, Deep Learning, and Artificial Intelligence. I believe in the principle of lifelong learning and am excited to apply my academic knowledge to solve real-world challenges.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
