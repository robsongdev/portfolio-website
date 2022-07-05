import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
// import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gnqbm7b', 'template_bljt4dt', form.current, 'GF7DAfMX45ELhpGTC')
        e.target.reset()
    }

    return (
        <section id='contact'>
            <h5>Entrar Em Contato</h5>
            <h2>Contate-me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>robsong369@gmail.com</h5>
                        <a href="mailto:robsong369@gmail.com" target="_blank" rel="noreferrer">Envie uma mensagem</a>
                    </article>

                    {/* <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>robsong369@gmail.com</h5>
                        <a href="mailto:robsong369@gmail.com" target="_blank" rel="noreferrer">Envie uma mensagem</a>
                    </article> */}

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+55 (86) 988343839</h5>
                        <a href="https://api.whatsapp.com/send?phone=5586988343839" target="_blank" rel="noreferrer">Envie uma mensagem</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Seu Nome Completo' required/>
                    <input type="email" name="email" placeholder='Seu Email' required />
                    <textarea name="message" rows="7" placeholder='Sua Mensagem' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contact