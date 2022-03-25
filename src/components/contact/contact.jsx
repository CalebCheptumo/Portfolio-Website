import React, { useRef } from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs  from 'emailjs-com'



const Contact = () => {
    const form  = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bqwn4kj', 'template_c17rekn', form.current, 'DCSgnkGl4Olr2hs8i')

          e.target.reset()
      };
    return (
        <section id='contact'>
            <h5>Satisfied with me? Please contact me</h5>
            <h2>Connect with me:</h2>

            <div className='container contact__container'>
                <div className="contact__options">
                    <article className='contact__option'>
                        <SiGmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>ckibusia@gmail.com</h5>
                        <a href="mailto:ckibusia@gmail.com" target='_blank'>Send A Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>0719450250</h5>
                        <a href="https://api.whatsapp.com/send?phone=+254719450250" target='_blank'>Whatsapp</a>
                    </article>
                </div>
               <form ref={form} onSubmit={sendEmail}>
                   <input type="text" name='name' placeholder='Your Full Name' required />
                   <input type="email" name='email' placeholder='Your Email' required />
                   <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                   <button type='submit' className='btn btn-primary'>Send Message</button>
               </form>
            </div>
            </section>
    )
}

export default Contact
