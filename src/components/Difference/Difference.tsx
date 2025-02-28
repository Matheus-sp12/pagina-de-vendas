import { useEffect } from 'react';
import style from './styles.module.scss';
import Image from 'next/image';
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';
import Link from 'next/link';

const Difference = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 50,
        });
    }, []);

  return (
    <section className={style.container}>
        <div className={style.content}>
            <div className={style.title} data-aos="fade-up" data-aos-delay="200">
                <h2>A diferença absurda entre ter
                    <span> um site profissional </span>
                    <span> com o Vinicius </span>
                    e continuar como está...
                </h2>
            </div>
            <div className={style.bottom}>
                <div className={style.leftBox} data-aos="fade-up" data-aos-delay="250">
                    <div className={style.titleBox}>
                        <h5>Sites genéricos e amadores</h5>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Site lento e inseguro</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Design ultrapassado e pouco atrativo</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Não aparece no Google</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Falta de personalização</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Não gera clientes nem vendas</p>
                    </div>
                    <div className={style.topics}>
                        <Image src="/redX.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Suporte inexistente</p>
                    </div>
                </div>
                <div className={style.rightBox} data-aos="fade-up" data-aos-delay="300">
                    <div className={style.titleBox}>
                        <h5>Sites feitos <span> pelo Vinicius </span> </h5>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Site rápido, seguro e responsivo</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Design moderno e personalizado</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>SEO otimizado para aparecer no Google</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Adaptado para sua marca e seu público</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Criado para converter visitas em clientes</p>
                    </div>
                    <div className={style.pros}>
                        <Image src="/correct.svg" alt="Ícone de correção" width={24} height={24} />
                        <p>Suporte dedicado para te acompanhar</p>
                    </div>
                </div>
            </div>
            <div className={style.button} data-aos="fade-up" data-aos-delay="250">
            <Link href="/?modal=true" shallow>
            <button>QUERO MEU SITE</button>
          </Link>
            </div>
        </div>
    </section>
  )
}

export default Difference;