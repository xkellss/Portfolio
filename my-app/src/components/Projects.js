import projects from '../data.js';
import classes from './Projects.module.css'

import { ImHtmlFive2 } from 'react-icons/im';

function Projects() {


    return (

        <section id="projects">
            <div className={classes.projectContainer}>
               <span className={classes.projectLogo}><ImHtmlFive2/></span>
                <h1 className={classes.projectText}>Apps I've Built</h1>
                <p className={classes.summary}>
                    These apps represent my collaborative contributions, where I worked with a team to develop them. Alongside these projects,
                    I have also undertaken smaller, more enjoyable projects to experiment, learn, and have fun while expanding my skill set.
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

                                        {project.link && <a className={classes.github} href={project.link} target="_blank">Github</a>}
                                        {project.website && <a className={classes.website} href={project.website} target="_blank">Website</a>}
                                        {project.assignment && (
                                             <a className={classes.databaseImages} href={project.assignment} target="_blank" >
                                                Assignment
                                            </a>
                                        )}
                                        {project.table && (
                                            <p>
                                                View requirements: <span> </span>
                                        {project.table && (
                                        <a className={classes.databaseImages} href={project.table} target="_blank" >
                                             Table
                                        </a>
                                        )}
                                        {project.keys && (
                                        <a className={classes.databaseImages} href={project.keys} target="_blank" >
                                            , Table Keys
                                        </a>
                                        )}
                                        {project.fd && (
                                        <a className={classes.databaseImages} href={project.fd} target="_blank" >
                                            , Functional Dependencies
                                        </a>
                                        )}
                                        {project.erDiagram && (
                                        <a className={classes.databaseImages} href={project.erDiagram} target="_blank" >
                                            , ER Diagram
                                        </a>
                                        )}
                                            </p>
                                        )}
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
