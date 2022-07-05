import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Robson</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#experience">Experiências</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#testmonials">Testimonials</a></li>
                <li><a href="#contact">Contatos</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com/robsongdev" target="_blank"><FaGithub/></a>
                <a href="https://instagram.com/rgbiell" target="_blank"><FiInstagram/></a>
                <a href="https://www.linkedin.com/in/robson-gabriel-rodrigues/" target="_blank"><BsLinkedin/></a>
                
            </div>

            <div className="footer__copyright">
                <small>&copy; Robson Gabriel Dev</small>
            </div>
        </footer>
    )
}

export default Footer