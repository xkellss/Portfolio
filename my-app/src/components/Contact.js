import React, { useState } from 'react';
import classes from './Contact.module.css'
import { IoIosContact } from 'react-icons/io';



function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const myForm = e.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => alert("Thank you for your submission"))
            .catch((error) => alert(error));
    }


    return(
        <section id="contact">
            <div className={classes.contactContainer}>
                <span className={classes.contactLogo}><IoIosContact/></span>

                <form name="contact" method="POST" netlify>
                    <input type="hidden" name="form-name" value="contact"/>
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Your Role: <select name="role[]" multiple>
                            <option value="leader">Leader</option>
                            <option value="follower">Follower</option>
                        </select></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>

            </div>

        </section>
    )


}export default Contact;
