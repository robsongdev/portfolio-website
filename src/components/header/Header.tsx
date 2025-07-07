import React from 'react';
import Image from 'next/image';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, Eu sou</h5>
        <h1>Robson Gabriel</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <Image src={ME} alt="Robson Gabriel" priority />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;