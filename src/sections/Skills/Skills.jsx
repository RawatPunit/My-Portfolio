import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from '../../common/SkillList';

function Skills() {
   return (
      <section id='skills' className={styles.container}>
         <h1>Skills</h1>
         <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="Java"/>
            <SkillList src={checkMarkIcon} skill="Selenium"/>
            <SkillList src={checkMarkIcon} skill="Testing"/>
            <SkillList src={checkMarkIcon} skill="React.js"/>
            <SkillList src={checkMarkIcon} skill="MongoDB"/>
            <SkillList src={checkMarkIcon} skill="PostgreSQL"/>
         </div>
      </section>
   )
}

export default Skills