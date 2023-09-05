import React from 'react';
import SectionHeader from './section-header';
import { projectsData } from '@/lib/data';
import Project from './project';

const Projects = () => {
  return (
    <section>
      <SectionHeader text="My Projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};



export default Projects;
