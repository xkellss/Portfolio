import classes from './About.module.css'
import myImage from './portfolio.jpg';
function About(){
    return(
        <div className={classes.container}>
            <p className={classes.text}>
           Hello, I'm <span className={classes.name}>Kels!</span>
            </p>

            <div className={classes.image}>
            <p className={classes.summary}>
                I'm a recent graduate and future software developer! I'm a passionate programmer who is willing to
                explore new skills/technologies. I'm ready to put in the work in order to grow and be the best I
                can be!
            </p>
                <img src={myImage} alt=""/>
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
