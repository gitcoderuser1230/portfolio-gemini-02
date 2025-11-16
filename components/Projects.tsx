
import React from 'react';
import Section from './Section';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="text-center p-8 bg-slate-800/50 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-300">Coming Soon...</h3>
        <p className="mt-4 text-slate-400">
          I am currently working on several projects that showcase my skills in data science and machine learning. Please check back later to see my work.
        </p>
      </div>
    </Section>
  );
};

export default Projects;
