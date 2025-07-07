import React from 'react';
import Image from 'next/image';
import './about.css';
import ME from '../../assets/me-about-3.jpg';
import { FaAward } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';
import { VscFolderLibrary } from 'react-icons/vsc';

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description }) => (
  <article className="about__card">
    {icon}
    <h5>{title}</h5>
    <small>{description}</small>
  </article>
);

const About: React.FC = () => {
  const aboutCards = [
    {
      icon: <FaAward className="about__icon" />,
      title: 'Experiência',
      description: 'Apenas Projetos Pessoais',
    },
    {
      icon: <BsBook className="about__icon" />,
      title: 'Cursos',
      description: '40+ Cursos na Área',
    },
    {
      icon: <VscFolderLibrary className="about__icon" />,
      title: 'Projetos',
      description: '20+ Completos',
    },
  ];

  return (
    <section id="about">
      <h5>Um Pouco</h5>
      <h2>Sobre Mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Image src={ME} alt="Robson Gabriel - About" />
          </div>
        </div>
        {/* =====================CARDS ABOUT ======================= */}
        <div className="about__content">
          <div className="about__cards">
            {aboutCards.map((card, index) => (
              <AboutCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          <p>
            Formado em Técnico em Desenvolvimento de Sistemas pelo IFPI, tive
            contato com vários segmentos de programação, e me apaixonei pelo
            Frontend. Aprimorei meus conhecimento usando a internet ao meu
            favor, sempre procurando respeitar as boas praticas. Procuro iniciar
            minha carreira de programador, e mais importante aprender e crescer
            nessa área que gosto muito.
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;