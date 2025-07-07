import React from 'react';
import './footer.css';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

interface NavigationLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const Footer: React.FC = () => {
  const navigationLinks: NavigationLink[] = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'Sobre' },
    { href: '#experience', label: 'Experiências' },
    { href: '#services', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#contact', label: 'Contatos' },
  ];

  const socialLinks: SocialLink[] = [
    {
      href: 'https://github.com/robsongdev',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://instagram.com/rgbiell',
      icon: <FiInstagram />,
      label: 'Instagram',
    },
    {
      href: 'https://www.linkedin.com/in/robson-gabriel-rodrigues/',
      icon: <BsLinkedin />,
      label: 'LinkedIn',
    },
  ];

  return (
    <footer>
      <a href="#" className="footer__logo">
        Robson
      </a>

      <ul className="permalinks">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="footer__socials">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Robson Gabriel Dev</small>
      </div>
    </footer>
  );
};

export default Footer;