
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiPostgresql, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython className="text-5xl text-yellow-400" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="text-5xl text-orange-500" /> },
  { name: 'PyTorch', icon: <SiPytorch className="text-5xl text-orange-600" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="text-5xl text-orange-400" /> },
  { name: 'Pandas', icon: <SiPandas className="text-5xl text-blue-500" /> },
  { name: 'NumPy', icon: <SiNumpy className="text-5xl text-blue-400" /> },
  { name: 'SQL (PostgreSQL)', icon: <SiPostgresql className="text-5xl text-blue-700" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-green-500" /> },
  { name: 'React', icon: <FaReact className="text-5xl text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-5xl text-green-600" /> },
  { name: 'Docker', icon: <FaDocker className="text-5xl text-blue-600" /> },
];

const Skills: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-slate-800/50 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:shadow-blue-500/30 hover:scale-105 hover:-translate-y-2 cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill.icon}
            <p className="mt-4 text-center font-semibold text-slate-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
