import "./ContactMe.css"
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
const ContactMe = ()=>{

    const formRef = useRef()
   


    const formSubmitHandler = (event)=>{
        event.preventDefault();
        
        emailjs.sendForm('service_u1txmpq', 'template_ayshv7r', formRef.current, 'xwHUCW1bs2oeeSstE')
        .then((result) => {
            console.log(result.text);
            alert("message sent!")
        }, (error) => {
            console.log(error.text);
            alert("error sending message")
        });
    }




return <section id="contactSection" className="contactMe">
    <h2>Get In touch</h2>
    <form ref={formRef} onSubmit={formSubmitHandler}>
        <input name="user_email" type="email" placeholder="Email"  required/>
        <input name="user_name" type="text" placeholder="Name"  required/>
        <textarea id="textA" name="message"  placeholder="message" required/>
        <button type="submit" >Submit</button>
    </form>
</section>

}

export default ContactMe