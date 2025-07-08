import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

interface ServiceItem {
  description: string;
}

interface ServiceData {
  title: string;
  items: ServiceItem[];
}

interface ServiceCardProps {
  service: ServiceData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <article className="service">
    <div className="service__head">
      <h3>{service.title}</h3>
    </div>
    <ul className="service__list">
      {service.items.map((item, index) => (
        <li key={index}>
          <BiCheck className="service__list-icon" />
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  </article>
);

const Services: React.FC = () => {
  const servicesData: ServiceData[] = [
    // {
    //   title: 'UI/UX Design',
    //   items: [
    //     { description: 'Design de interfaces modernas e responsivas' },
    //     { description: 'Prototipagem e wireframes' },
    //     { description: 'Experiência do usuário otimizada' },
    //     { description: 'Design system e componentes reutilizáveis' },
    //     { description: 'Testes de usabilidade' },
    //   ],
    // },
    {
      title: 'Web Development',
      items: [
        { description: 'Desenvolvimento de aplicações React/Next.js' },
        { description: 'Sites responsivos e otimizados' },
        { description: 'Integração com APIs e serviços' },
        { description: 'Performance e SEO otimizados' },
        { description: 'Manutenção e atualizações' },
        { description: 'Deploy e hospedagem' },
      ],
    },
    {
      title: 'Frontend Consulting',
      items: [
        { description: 'Consultoria em tecnologias frontend' },
        { description: 'Code review e otimização' },
        { description: 'Migração de projetos legados' },
        { description: 'Treinamento em React/TypeScript' },
        { description: 'Arquitetura de projetos frontend' },
      ],
    },
  ];

  return (
    <section id="services">
      <h5>O Que Eu Ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;