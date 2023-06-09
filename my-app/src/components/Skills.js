import React from "react";
import {skills} from '../data.js';
import classes from './Skills.module.css'
import {BsCodeSlash} from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Skills(){
    return(
        <div id="skills" className={classes.skillsContainer}>
            <span className={classes.skillsLogo}><BsCodeSlash/></span>
        <h1 className={classes.skillsText}>SKILLS </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
            </p>
            <div className={classes.skillsGrid} >
                {skills.map((skill) => (
                    <div className={classes.skillsItem} key={skill}>
                        <span className={classes.itemsCheck}>
                        <FontAwesomeIcon icon={faCheck} className="fa-beat" style={{ animationDuration: '3s' }} />
                        </span>
                        <span className={classes.skillName}>{skill}</span>

                    </div>
                ))}
            </div>
        </div>
    )


}export default Skills;
