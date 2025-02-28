import { useEffect } from 'react';
import style from './styles.module.scss';
import Image from 'next/image';
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';
import Link from 'next/link';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.leftSide} data-aos="fade-up" data-aos-delay="200">
          <h1>
            Transforme sua presença online com um
            <span> site profissional </span> 
            e aumente suas vendas!
          </h1>
          <h5>
            Seu negócio precisa de presença digital? Criamos sites modernos, 
            rápidos e otimizados para atrair mais clientes e aumentar seu faturamento.
          </h5>
          {/* 🔹 Alterado para Link que adiciona "?modal=true" */}
          <Link href="/?modal=true" shallow>
            <button>QUERO MEU SITE</button>
          </Link>
          
          <div className={style.discount} data-aos="fade-up" data-aos-delay="200">
            <Image src="/discountTag.svg" alt="Ícone de correção" width={36} height={36} />
            <p>Peça um orçamento gratuito agora!</p>
          </div>
        </div>
        <div className={style.rightSide} data-aos="fade-up" data-aos-delay="200">
          <div className={style.backgroundImages}>
            <Image src="/pix1.svg" alt="Background 1" width={285} height={83} />
            <Image src="/pix1.svg" alt="Background 2" width={285} height={83} />
            <Image src="/pix1.svg" alt="Background 3" width={285} height={83} />
            <Image src="/pix1.svg" alt="Background 4" width={285} height={83} />
          </div>
          <Image className={style.pedro} src="/ilustracaohero-removebg.png" alt="Imagem de pedro" width={540} height={547} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
