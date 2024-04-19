import React, { useRef } from 'react'
import './Contact.css';
import Youtube from '../../assets/youtube.png';
import Insta from '../../assets/insta.png';
import Thread from '../../assets/thread.png';
import Linkedin from '../../assets/linkedIn.png';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r65brvh' , 'template_7u50f8q' ,form.current, '97O5gkHgwLNPtgyUy')
        .then((result) => {
            console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        )
    }
  return (
<div id='contactPage'> 
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to connect with me</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input className='name' type='text' placeholder='Your Name' name='your_name'></input>
            <input className='email' type='email' placeholder='Your Email' name='your_email'></input>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
            <a href='https://www.linkedin.com/in/vaishnavi-dhare-145810249' target="_blank"rel="noopener noreferrer">
                <img src={Linkedin} alt='LinkedIn' className='link' />
            </a>
            <a href='https://www.youtube.com/@vaishnavidhare1813' target="_blank" rel="noopener noreferrer">
                <img src={Youtube} alt='YouTUbe' className='link' />
            </a>   
            <a href='http://instagram.com/vaish.u_01' target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt='insta' className='link' />
            </a>    
            <a href='https://www.threads.net/@vaish.u_01' target="_blank" rel="noopener noreferrer">
                <img src={Thread} alt='thread' className='link' />
            </a>                 
            </div>
        </form>
    </div>  
    )
}
