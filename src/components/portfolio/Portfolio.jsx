import React from 'react'
import './portfolio.css'

//IMAGENS 480px/360px
import IMG1 from '../../assets/portfolio-alurakut.png'
import IMG2 from '../../assets/portfolio-alura-studies.png'
// import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio-MyListflix.png'
import IMG5 from '../../assets/portfolio-formulario.png'
import IMG6 from '../../assets/portfolio-optimustech.png'


const data = [
    {
        id: 0,
        image: IMG1,
        title: "Alurakut - Logando com Github",
        github:'https://github.com/robsongdev/Alurakut',
        demo: 'https://alurakut-neon-psi.vercel.app'

    },
    {
        id: 1,
        image: IMG2,
        title: "Alura Studies",
        github:'https://github.com/robsongdev/alura-studies',
        demo: 'https://alura-studies-swart.vercel.app/'

    },
    // {
    //     id: 2,
    //     image: IMG3,
    //     title: "title here",
    //     github:"",
    //     demo: ""

    // },
    {
        id: 3,
        image: IMG4,
        title: "MyListFlix",
        github:'https://github.com/robsongdev/My-ListFlix',
        demo: 'https://robflix.vercel.app/'

    },
    {
        id: 4,
        image: IMG5,
        title: "Cadastro de Aniversário CRUD ",
        github:'https://github.com/robsongdev/Cadastro-aniversario-CRUD',
        demo: 'https://robsongdev.github.io/Cadastro-aniversario-CRUD/'

    },
    {
        id: 5,
        image: IMG6,
        title: "OptimusTech",
        github:'https://github.com/robsongdev/OptimusTech',
        demo: 'https://robsongdev.github.io/OptimusTech/'

    },

]

const Portfolio = () => {
    return (
        <section id='portifolio'>
            <h5>Meus Trabalhos Recentes</h5>
            <h2>Portfólio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo})=>{
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live a Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio