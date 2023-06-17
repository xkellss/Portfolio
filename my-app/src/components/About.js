import classes from './About.module.css'
import myImage from './portfolio.jpg';
import Typewriter from 'typewriter-effect';
function About(){

    return(
        <div id="about" className={classes.container}>
            <p className={classes.text}>
                <div className={classes.name}>
                <Typewriter
                options={{
                    strings: ["Hello, I'm Kels!"],
                    autoStart: true,
                    loop: true,
                }}
            /></div>
            </p>

            <div className={classes.image}>
            <p className={classes.summary}>
                I'm a recent graduate and future software developer! I'm a passionate programmer who is willing to
                explore new skills/technologies. I'm determined to put in the effort and dedication required to grow
                and excel in my field. My goal is to continuously evolve and become the best version of myself
                throughout this journey.
            </p>
                <img className={classes.photo} src={myImage} alt=""/>
            </div>
            <div className={classes.linkContainer}>
        <a href="#contact" className={classes.link}>
            Work with me
        </a>
            <a href="#projects" className={classes.link}>
            Past work
        </a>
            </div>
        </div>

    )


}export default About;
