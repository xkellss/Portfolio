import React, { useState, useEffect } from 'react';
import projects from '../data.js';
import classes from './Projects.module.css'

import { ImHtmlFive2 } from 'react-icons/im';

function Projects() {


    return (

        <section id="projects">
            <div className={classes.projectContainer}>
               <span className={classes.projectLogo}><ImHtmlFive2/></span>
                <h1 className={classes.projectText}>Apps I've Built</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
                </p>
                <div className={classes.projectGrid} >
                    {projects.map((project) => (
                        <div className={classes.projectItem} key={project.title}>
                            <img className={classes.gif} src={project.image} />
                            <div>
                                <div className={classes.projectSummary} >
                            <h1 className={classes.projectTitle}>{project.title}</h1>

                            <p>{project.description}</p>
                                <span className={classes.projectLinks}>
                            <a className={classes.github} href="">Github</a>
                            <a href={project.link}>Website</a>
                                </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
