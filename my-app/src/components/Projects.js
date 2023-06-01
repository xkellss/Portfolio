import React, { useState, useEffect } from 'react';
import projects from '../data.js';
import classes from './Projects.module.css'

function Projects() {


    return (
        <section id="projects">
            <div className={classes.projectContainer}>
                <h1>Apps I've Built</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
                </p>
                <div className={classes.projectGrid} >
                    {projects.map((project) => (
                        <div className={classes.projectItem} key={project.title}>
                            <img src={project.image} />
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
