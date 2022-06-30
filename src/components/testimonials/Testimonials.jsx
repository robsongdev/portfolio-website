import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Nome do Cliente',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam reprehenderit soluta blanditiis nisi explicabo molestias, provident accusantium, culpa ipsa mollitia aspernatur natus, rem recusandae non nostrum quam quis tenetur."
    },
    {
        avatar: AVTR2,
        name: 'Nome do Cliente',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam reprehenderit soluta blanditiis nisi explicabo molestias, provident accusantium, culpa ipsa mollitia aspernatur natus, rem recusandae non nostrum quam quis tenetur."
    },
    {
        avatar: AVTR3,
        name: 'Nome do Cliente',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam reprehenderit soluta blanditiis nisi explicabo molestias, provident accusantium, culpa ipsa mollitia aspernatur natus, rem recusandae non nostrum quam quis tenetur."
    },
    {
        avatar: AVTR4,
        name: 'Nome do Cliente',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam reprehenderit soluta blanditiis nisi explicabo molestias, provident accusantium, culpa ipsa mollitia aspernatur natus, rem recusandae non nostrum quam quis tenetur."
    },
]

const Testimonials = () => {
    return (
        <section id='testimoials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container' 
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable:true}}    
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide className='testimonials'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials