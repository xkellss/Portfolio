import React, { useState } from 'react';
import classes from './Contact.module.css'
import { IoIosContact } from 'react-icons/io';



function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // function handleSubmit(e){
    //     e.preventDefault();
    //     const myForm = e.target;
    //     const formData = new FormData(myForm);
    //
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: new URLSearchParams(formData).toString(),
    //     })
    //         .then(() => alert("Thank you for your submission"))
    //         .catch((error) => alert(error));
    // }
    // document
    //     .querySelector("form")
    //     .addEventListener("submit", handleSubmit);

    return(
        <section id="contact">
            <div className={classes.contactContainer}>
                <span className={classes.contactLogo}><IoIosContact/></span>
                <form
                    name={"contactForm"}
                    data-netlify={"true"}
                    className={classes.form}
                    method='POST'
                    // onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contactForm" />
                    <h2 className={classes.contactText} >Contact me!</h2>
                    <p className={classes.summary}> You can contact me by messaging me on <a href="https://www.linkedin.com/in/raquel-gonzalez-6b4a05219/" target="_blank" >Linkedin </a>
                        or filling out the form below :)</p>
                    <div className={classes.contactInput}>
                        <label htmlFor="name">Name</label>
                        <input type="text"  name="name" placeholder={"Raquel Gonzalez(Kels)"} value={name} onChange={(e => setName(e.target.value))}/>
                    </div>
                    <div className={classes.contactInput}>
                    <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder={"Raquel@gmail.com"} value={email} onChange={(e => setEmail(e.target.value))}/>
                    </div>
                    <div className={classes.contactInput}>
                    <label htmlFor="message">Message</label>
                        <textarea  name="message" id="message" placeholder={"I found your portfolio interesting and I would like to " +
                        "schedule a call whenever you're available!"} value={message} onChange={(e => setMessage(e.target.value))}/>
                    </div>
                    <button type={"submit"}> Submit</button>
                </form>

            </div>

        </section>
    )


}export default Contact;
