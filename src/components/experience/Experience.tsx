import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

interface Skill {
  name: string;
  level: string;
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
  className: string;
}

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icon" />
    <div>
      <h4>{skill.name}</h4>
      <small>{skill.level}</small>
    </div>
  </article>
);

const SkillSection: React.FC<SkillSectionProps> = ({
  title,
  skills,
  className,
}) => (
  <div className={className}>
    <h3>{title}</h3>
    <div className="experience__content">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML', level: 'Avançado' },
    { name: 'CSS', level: 'Intermediário-Avançado' },
    { name: 'JavaScript', level: 'Intermediário' },
    { name: 'TypeScript', level: 'Intermediário' },
    { name: 'React', level: 'Intermediário' },
    { name: 'Next.js', level: 'Intermediário' },
    { name: 'API RestFul', level: 'Básico' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Python', level: 'Básico' },
    { name: 'MySQL', level: 'Básico' },
    { name: 'Node.js', level: 'Básico' },
  ];

  return (
    <section id="experience">
      <h5>Que Habilidades Eu Tenho</h5>
      <h2>Minhas Experiências</h2>

      <div className="container experience__container">
        <SkillSection
          title="Frontend Development"
          skills={frontendSkills}
          className="experience__frontend"
        />
        <SkillSection
          title="Backend Development"
          skills={backendSkills}
          className="experience__backend"
        />
      </div>
    </section>
  );
};

export default Experience;