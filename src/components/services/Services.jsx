import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
    return (
        <section id='services'>
            <h5>O Que Eu Ofereço</h5>
            <h2>Serviços</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        
                    </ul>
                    {/* FIM DO UI/UX */}
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        
                    </ul>
                    {/* FIM DO Web Development */}
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        
                    </ul>
                    {/* FIM DO CONTENT CREATION */}
                </article>
            </div>
        </section>
    )
}

export default Service