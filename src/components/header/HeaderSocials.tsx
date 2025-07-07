import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials: React.FC = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/robson-gabriel-rodrigues"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Profile"
      >
        <BsLinkedin />
      </a>
      <a
        href="http://github.com/robsongdev"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;