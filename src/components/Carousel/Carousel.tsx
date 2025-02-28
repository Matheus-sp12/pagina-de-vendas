import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import style from './style.module.scss';
import Image from 'next/image';
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';

const images = [
  '/student1.svg',
  '/student2.svg',
  '/student3.svg',
  '/student4.svg',
  '/student1.svg',
  '/student2.svg',
  '/student4.svg',
];

const CoverflowCarousel = () => {

    useEffect(() => {
            AOS.init({
              duration: 1000,
              offset: 50,
            });
    }, []);

  return (
    <div className={style.swiperContainer}>
        <div className={style.header} data-aos="fade-up" data-aos-delay="200">
            <h2>O que nossos <span>clientes</span> falam <span>sobre nós</span> </h2>
            <p>
                A satisfação dos nossos clientes é nossa maior motivação. Confira os 
                depoimentos sobre as soluções digitais que desenvolvemos para seus negócios.
            </p>
        </div>
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            spaceBetween={30}
            coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className={style.swiper}
            data-aos="fade-up" data-aos-delay="300"
        >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={style.swiperSlide}>
            <Image src={image} alt={`Image ${index + 1}`} width={300} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoverflowCarousel;
