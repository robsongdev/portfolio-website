import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdCode } from 'react-icons/md';

interface Skill {
  name: string;
  level: string;
  category: string;
  description?: string;
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
  className: string;
}

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <article className="skill__item">
    <div className="skill__item-header">
      <BsPatchCheckFill className="skill__item-icon" />
      <div className="skill__item-info">
        <h4>{skill.name}</h4>
        <span className="skill__category">{skill.category}</span>
      </div>
    </div>
    <div className="skill__level">
      <span className="skill__level-text">{skill.level}</span>
      <div className="skill__level-bar">
        <div className={`skill__level-progress skill__level-${skill.level.toLowerCase().replace('-', '_')}`}></div>
      </div>
    </div>
  </article>
);



const SkillSection: React.FC<SkillSectionProps> = ({
  title,
  skills,
  className,
}) => (
  <div className={className}>
    <h3>
      <MdCode className="experience__skills-icon" />
      {title}
    </h3>
    <div className="skills__content">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML', level: 'Avançado', category: 'Markup' },
    { name: 'CSS', level: 'Intermediário-Avançado', category: 'Styling' },
    { name: 'JavaScript', level: 'Intermediário', category: 'Programming' },
    { name: 'TypeScript', level: 'Intermediário', category: 'Programming' },
    { name: 'React', level: 'Intermediário', category: 'Framework' },
    { name: 'Next.js', level: 'Intermediário', category: 'Framework' },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Material UI', level: 'Intermediário', category: 'UI Library' },
    { name: 'API REST', level: 'Intermediário', category: 'Integration' },
    { name: 'Git', level: 'Intermediário', category: 'Version Control' },
    { name: 'Scrum', level: 'Intermediário', category: 'Methodology' },
  ];

  return (
    <section id="experience">
      <h5>Minhas Competências</h5>
      <h2>Habilidades Técnicas</h2>
      <div className="container experience__container">
        <SkillSection
          title="Frontend Development"
          skills={frontendSkills}
          className="experience__frontend"
        />
        <SkillSection
          title="Ferramentas & Metodologias"
          skills={toolsSkills}
          className="experience__tools"
        />
      </div>
    </section>
  );
};

export default Experience;
