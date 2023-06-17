import React from 'react'
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import classes from './App.module.css'
function App() {
    return (
        <main className={classes.main}>
            <Nav/>
            <div className={classes.underline}><About/></div>
            <div className={classes.underline}><Projects/></div>
            <div className={classes.underline}><Skills/></div>
            <div><Contact/></div>
        </main>
    );
}

export default App;
