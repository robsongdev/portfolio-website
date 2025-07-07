'use client';

import React from 'react';
import Image from 'next/image';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
// @ts-ignore
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialData {
  avatar: any;
  name: string;
  review: string;
}

interface TestimonialSlideProps {
  testimonial: TestimonialData;
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ testimonial }) => (
  <SwiperSlide className="testimonials">
    <div className="client__avatar">
      <Image src={testimonial.avatar} alt={`Avatar de ${testimonial.name}`} />
    </div>
    <h5 className="client__name">{testimonial.name}</h5>
    <small className="client__review">{testimonial.review}</small>
  </SwiperSlide>
);

const Testimonials: React.FC = () => {
  const testimonialsData: TestimonialData[] = [
    {
      avatar: AVTR1,
      name: 'Maria Silva',
      review:
        'Trabalho excepcional! O Robson entregou um site moderno e responsivo que superou nossas expectativas. Muito profissional e atencioso aos detalhes.',
    },
    {
      avatar: AVTR2,
      name: 'João Santos',
      review:
        'Excelente desenvolvedor frontend! Criou uma aplicação React incrível para nossa empresa. Recomendo fortemente seus serviços.',
    },
    {
      avatar: AVTR3,
      name: 'Ana Costa',
      review:
        'Muito satisfeita com o resultado final. O Robson é dedicado, criativo e sempre disposto a ajudar. O projeto ficou perfeito!',
    },
    {
      avatar: AVTR4,
      name: 'Carlos Oliveira',
      review:
        'Profissional competente e confiável. Entregou o projeto no prazo e com qualidade excepcional. Certamente trabalharemos juntos novamente.',
    },
  ];

  return (
    <section id="testimonials">
      <h5>Avaliações dos Clientes</h5>
      <h2>Depoimentos</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map((testimonial, index) => (
          <TestimonialSlide key={index} testimonial={testimonial} />
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;