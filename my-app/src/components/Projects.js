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
                                        <a className={classes.github} href="" target="_blank" >Github</a>
                                        <a className={classes.website} href={project.link}target="_blank">Website</a>
                                    </span>

                                    {project.table && (
                                        <a href={project.table} target="_blank" >
                                            View Table
                                        </a>
                                    )}
                                    {project.keys && (
                                        <a href={project.keys} target="_blank" >
                                            View Table Keys
                                        </a>
                                    )}
                                    {project.fd && (
                                        <a href={project.fd} target="_blank" >
                                            View Functional Dependencies
                                        </a>
                                    )}
                                    {project.erDiagram && (
                                        <a href={project.erDiagram} target="_blank" >
                                            View Image ER Diagram
                                        </a>
                                    )}
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
