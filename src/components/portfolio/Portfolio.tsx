import React from 'react';
import Image from 'next/image';
import './portfolio.css';

// IMAGENS 480px/360px
import IMG1 from '../../assets/portfolio-alurakut.png';
import IMG2 from '../../assets/portfolio-alura-studies.png';
import IMG4 from '../../assets/portfolio-MyListflix.png';
import IMG5 from '../../assets/portfolio-formulario.png';
import IMG6 from '../../assets/portfolio-optimustech.png';

interface PortfolioItem {
  id: number;
  image: any;
  title: string;
  github: string;
  demo: string;
}

interface PortfolioItemProps {
  item: PortfolioItem;
}

const PortfolioItemComponent: React.FC<PortfolioItemProps> = ({ item }) => (
  <article className="portfolio__item">
    <div className="portfolio__item-image">
      <Image
        src={item.image}
        alt={item.title}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
    <h3>{item.title}</h3>
    <div className="portfolio__item-cta">
      <a
        href={item.github}
        className="btn"
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver código do projeto ${item.title} no GitHub`}
      >
        GitHub
      </a>
      <a
        href={item.demo}
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver demonstração do projeto ${item.title}`}
      >
        Live Demo
      </a>
    </div>
  </article>
);

const Portfolio: React.FC = () => {
  const portfolioData: PortfolioItem[] = [
    {
      id: 0,
      image: IMG1,
      title: 'Alurakut - Logando com Github',
      github: 'https://github.com/robsongdev/Alurakut',
      demo: 'https://alurakut-neon-psi.vercel.app',
    },
    {
      id: 1,
      image: IMG2,
      title: 'Alura Studies',
      github: 'https://github.com/robsongdev/alura-studies',
      demo: 'https://alura-studies-swart.vercel.app/',
    },
    {
      id: 3,
      image: IMG4,
      title: 'MyListFlix',
      github: 'https://github.com/robsongdev/My-ListFlix',
      demo: 'https://robflix.vercel.app/',
    },
    {
      id: 4,
      image: IMG5,
      title: 'Cadastro de Aniversário CRUD',
      github: 'https://github.com/robsongdev/Cadastro-aniversario-CRUD',
      demo: 'https://robsongdev.github.io/Cadastro-aniversario-CRUD/',
    },
    {
      id: 5,
      image: IMG6,
      title: 'OptimusTech',
      github: 'https://github.com/robsongdev/OptimusTech',
      demo: 'https://robsongdev.github.io/OptimusTech/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((item) => (
          <PortfolioItemComponent key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;