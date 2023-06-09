import React from 'react';
import classes from './Nav.module.css'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Nav(){
    return(
        <header className={classes.navHeader}>
            <div className={classes.navContainer}>
                <a className={classes.name}>
                <a href="#about" className={classes.name}> Raquel Gonzalez</a>
                </a>
                <nav className={classes.navBar}>
                    <a className={classes.projects} href="#projects"> Past Work</a>
                    <a className={classes.skills} href="#skills"> Skills</a>
                </nav>
                <a className={classes.contact} href="#contact">Hire me </a>
                <span className={classes.arrow}><AiOutlineArrowRight/></span>
            </div>
        </header>
    )


}export default Nav;
