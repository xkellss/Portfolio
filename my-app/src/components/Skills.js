import React from "react";
import {skills} from '../data.js';
import classes from './Skills.module.css'


function Skills(){
    return(
        <div className={classes.skillsContainer}>
        <h1>SKILLS</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
            </p>
            <div className={classes.skillsGrid} >
                {skills.map((skill) => (
                    <div className={classes.skillsItem} key={skill}>
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    )


}export default Skills;
