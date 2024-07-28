import React from 'react';
import viberr from '../../assets/viberr.png';
import freshVurger from "../../assets/fresh-burger.png"
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className= {styles.projectContainer}>
        <ProjectCard src={viberr} 
          link="{Link of the project }"
          h3 = "Project Title Name"
          p="project desc title"
        />
        <ProjectCard src={freshVurger} 
          link="{Link of the project }"
          h3 = "Project Title Name"
          p="project desc title"
        />
        <ProjectCard src={viberr} 
          link="{Link of the project }"
          h3 = "Project Title Name"
          p="project desc title"
        />
      </div>
    </section>
  )
}

export default Projects