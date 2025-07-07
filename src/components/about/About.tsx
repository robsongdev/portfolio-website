import React from 'react';
import Image from 'next/image';
import './about.css';
import ME from '../../assets/me-about-3.jpg';
import { FaAward, FaGraduationCap } from 'react-icons/fa';
import { BsPatchCheckFill } from 'react-icons/bs';

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  type?: 'experience' | 'education' | 'projects';
  workExperience?: WorkExperience;
  education?: Education[];
}

interface WorkExperience {
  company: string;
  positions: {
    title: string;
    period: string;
  }[];
  responsibilities: string[];
}

interface Education {
  institution: string;
  course: string;
  period: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  icon,
  title,
  description,
  type,
  workExperience,
  education
}) => (
  <article className={`about__card ${type ? `about__card--${type}` : ''}`}>
    <div className="about__card-header">
      {icon}
      <h5>{title}</h5>
      <small>{description}</small>
    </div>

    {type === 'experience' && workExperience && (
      <div className="about__card-content">
        <div className="about__card-company">
          <h6>{workExperience.company}</h6>
          <div className="about__card-positions">
            {workExperience.positions.map((position, index) => (
              <div key={index} className="about__card-position">
                <span className="about__card-position-title">{position.title}</span>
                <span className="about__card-position-period">{position.period}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about__card-responsibilities">
          {workExperience.responsibilities.slice(0, 3).map((responsibility, index) => (
            <div key={index} className="about__card-responsibility">
              <BsPatchCheckFill className="about__card-check" />
              <span>{responsibility}</span>
            </div>
          ))}
        </div>
      </div>
    )}

    {type === 'education' && education && (
      <div className="about__card-content">
        {education.map((edu, index) => (
          <div key={index} className="about__card-education">
            <h6>{edu.institution}</h6>
            <p>{edu.course}</p>
            <span className="about__card-education-period">{edu.period}</span>
          </div>
        ))}
      </div>
    )}
  </article>
);



const About: React.FC = () => {
  const aboutCards = [
    {
      icon: <FaAward className="about__icon" />,
      title: 'Experiência',
      description: '2+ Anos Profissional',
      type: 'experience' as const,
    },
    {
      icon: <FaGraduationCap className="about__icon" />,
      title: 'Formação',
      description: 'Técnico + Superior',
      type: 'education' as const,
    },
    // {
    //   icon: <VscFolderLibrary className="about__icon" />,
    //   title: 'Projetos',
    //   description: '20+ Completos',
    //   type: 'projects' as const,
    // },
  ];

  const workExperience: WorkExperience = {
    company: 'Maida.health',
    positions: [
      {
        title: 'Desenvolvedor Pleno - Front-end',
        period: 'Fev 2023 – Presente (2 anos+)'
      },
      {
        title: 'Desenvolvedor Júnior - Front-end',
        period: 'Jul 2022 – Fev 2023'
      }
    ],
    responsibilities: [
      'Criação de interfaces performáticas com React.js, Next.js e TypeScript',
      'Otimização de carregamento e estrutura para SEO',
      'Integração com APIs REST para funcionalidades dinâmicas',
      'Desenvolvimento de componentes reutilizáveis com Material UI',
      'Atuação colaborativa em squads e revisão de código',
      'Participação em dailies e sprints com metodologia Scrum'
    ]
  };

  const education: Education[] = [
    {
      institution: 'IPOG – Instituto de pós-graduação e graduação',
      course: 'Análise e desenvolvimento de sistemas',
      period: '2024 – atual'
    },
    {
      institution: 'IFPI – Instituto Federal do Piauí',
      course: 'Técnico em Desenvolvimento de Sistemas',
      period: '2019 – 2020'
    }
  ];

  return (
    <section id="about">
      <h5>Um Pouco</h5>
      <h2>Sobre Mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Image
              src={ME}
              alt="Robson Gabriel - About"
              fill
              style={{ objectFit: 'cover' }}
            />
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
                type={card.type}
                workExperience={card.type === 'experience' ? workExperience : undefined}
                education={card.type === 'education' ? education : undefined}
              />
            ))}
          </div>

          <p>
            Desenvolvedor Front-end com mais de 2 anos de experiência profissional na Maida.health,
            especializado em React.js, Next.js e TypeScript. Formado em Técnico em Desenvolvimento
            de Sistemas pelo IFPI e atualmente cursando Análise e Desenvolvimento de Sistemas no IPOG.
            Apaixonado por criar interfaces performáticas e sempre buscando aplicar as melhores práticas
            de desenvolvimento.
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