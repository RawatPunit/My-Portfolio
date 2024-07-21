import React from 'react';
import viberr from '../../assets/viberr.png';
import styles from './ProjectsStyles.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className= {styles.projectContainer}>
         <a 
            href=""
            target='_blank'>
            <img className='hover' src={viberr} alt="projectname"/>
            <h3>Project Name</h3>
            <p>Yet to be confirmed</p>
             
         </a>
      </div>
    </section>
  )
}

export default Projects