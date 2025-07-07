'use client';

import React, { useRef, FormEvent } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

interface ContactOption {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  linkText: string;
}

interface ContactOptionProps {
  option: ContactOption;
}

const ContactOptionComponent: React.FC<ContactOptionProps> = ({ option }) => (
  <article className="contact__option">
    {option.icon}
    <h4>{option.title}</h4>
    <h5>{option.value}</h5>
    <a href={option.link} target="_blank" rel="noreferrer">
      {option.linkText}
    </a>
  </article>
);

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_gnqbm7b',
          'template_bljt4dt',
          form.current,
          'GF7DAfMX45ELhpGTC'
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            form.current?.reset();
          },
          (error) => {
            console.error('Error sending email:', error.text);
          }
        );
    }
  };

  const contactOptions: ContactOption[] = [
    {
      icon: <MdOutlineEmail className="contact__option-icon" />,
      title: 'Email',
      value: 'robsong369@gmail.com',
      link: 'mailto:robsong369@gmail.com',
      linkText: 'Envie uma mensagem',
    },
    {
      icon: <BsWhatsapp className="contact__option-icon" />,
      title: 'WhatsApp',
      value: '+55 (86) 988343839',
      link: 'https://api.whatsapp.com/send?phone=5586988343839',
      linkText: 'Envie uma mensagem',
    },
  ];

  return (
    <section id="contact">
      <h5>Entrar Em Contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map((option, index) => (
            <ContactOptionComponent key={index} option={option} />
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu Nome Completo"
            required
          />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Sua Mensagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;