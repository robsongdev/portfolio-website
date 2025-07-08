'use client';

import React, { useRef, FormEvent, useState, useEffect } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

// Configurações do EmailJS - usando variáveis de ambiente
const EMAIL_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
};

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
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Inicializar EmailJS
  useEffect(() => {
    // Validar se as variáveis de ambiente estão configuradas
    if (!EMAIL_CONFIG.serviceId || !EMAIL_CONFIG.templateId || !EMAIL_CONFIG.publicKey) {
      console.error('EmailJS: Variáveis de ambiente não configuradas');
      setMessage('Erro de configuração: Verifique as variáveis de ambiente do EmailJS');
      return;
    }

    emailjs.init(EMAIL_CONFIG.publicKey);
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      setMessage('Erro: Formulário não encontrado');
      return;
    }

    setIsLoading(true);
    setMessage('');

    emailjs
      .sendForm(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        form.current,
        EMAIL_CONFIG.publicKey
      )
      .then(
        () => {
          setMessage('Mensagem enviada com sucesso! 🎉');
          form.current?.reset();
          setIsLoading(false);
        },
        (error) => {
          setMessage(`Erro ao enviar mensagem: ${error.text || error.message || 'Erro desconhecido'}`);
          setIsLoading(false);
        }
      )
      .catch((error) => {
        setMessage(`Erro inesperado: ${error.message || 'Verifique sua conexão'}`);
        setIsLoading(false);
      });
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
            disabled={isLoading}
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            required
            disabled={isLoading}
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Sua Mensagem"
            required
            disabled={isLoading}
          ></textarea>

          {message && (
            <div className={`contact__message ${message.includes('sucesso') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;