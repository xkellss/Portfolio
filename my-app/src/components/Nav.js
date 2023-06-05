import React from 'react';
import classes from './Nav.module.css'

function Nav(){
    return(
        <header className={classes.navHeader}>
            <div className={classes.navContainer}>
                <a className={classes.navName}>
                <a href="#about"> Raquel Gonzalez</a>
                </a>
                <nav>
                    <a href="#projects"> Past Work</a>
                    <a href="#skills"> Skills</a>
                </nav>
                <a href="#contact">Hire me</a>
            </div>
        </header>
    )


}export default Nav;
