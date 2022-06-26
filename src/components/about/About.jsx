import React from 'react'
import './about.css'
import ME from '../../assets/me-about-3.jpg'
import {FaAward} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Um Pouco</h5>
            <h2>Sobre Mim</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
{/* =====================CARDS ABOUT =======================*/}
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experiência</h5>
                            <small>Apenas Projetos Pessoais</small>
                        </article>

                        <article className='about__card'>
                            <BsBook className='about__icon'/>
                            <h5>Cursos</h5>
                            <small>40+ Cursos na Área</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projetos</h5>
                            <small>20+ Completos</small>
                        </article>
                    </div>

                    <p>
                    Formado em Técnico em Desenvolvimento de Sistemas pelo IFPI, tive contato com vários segmentos de programação, e me apaixonei pelo Frontend.
                    Aprimorei meus conhecimento usando a internet ao meu favor, sempre procurando respeitar as boas praticas.
                    Procuro iniciar minha carreira de programador, e mais importante aprender e crescer nessa área que  gosto muito.

                    </p>

                    <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
                </div>
            </div>
        </section>
    )
}

export default About