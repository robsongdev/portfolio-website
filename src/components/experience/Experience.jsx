import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h5>Que Habilidades Eu Tenho</h5>
            <h2>Minhas Experiencias</h2>

            <div className='container experience__container'>
                {/* FRONTEND SKILLS */}
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small>Avançado</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small>Intermediário-Avançado</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small>Intermediário</small>    
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>TypeScript</h4>
                                <small>Básico-Intermediário</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>React</h4>
                                <small>Básico-Intermediário</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>API RestFul</h4>
                                <small>Básico</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* BACKEND SKILS */}
                <div className='experience__backend'>
                <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Python</h4>
                                <small>Básico</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>MySQL</h4>
                                <small>Básico</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience