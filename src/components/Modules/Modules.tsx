import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import Square from './Square/Square';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';

const Modules = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 50,
        });
    }, []);

    const [ isSpecificPointReached ] = useState(false)

    const backgroundColor = isSpecificPointReached ? "#010425" : "#ffffff";
    const textColor = isSpecificPointReached ? "white" : "black";
    const borderColor = isSpecificPointReached ? "white" : "#ccc";
    const containerColor = isSpecificPointReached ? "#0a0730" : "#F0F0F0";

  return (
    <>
        <motion.div 
            className={style.container}
            style={{ backgroundColor }}
        >
            <section className={style.container}>
                <div className={style.content}>
                    <div className={style.title} data-aos="fade-up" data-aos-delay="900">
                        <h2> 
                            <span>Nossos Serviços</span> 
                        </h2>
                    </div>
                    <div className={style.row}  data-aos="fade-up" data-aos-delay="1000" >
                        <Square 
                            color={textColor}
                            title="Sites Institucionais"
                            bodyText="Sites profissionais e personalizados para empresas que buscam uma presença online sólida 
                            e confiável. Atraia clientes e passe credibilidade no mercado digital."
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="100%"
                        />
                        <Square 
                            color={textColor}
                            title="Landing Pages Otimizadas"
                            bodyText="Páginas de alta conversão, perfeitas para campanhas de marketing e captura de leads. 
                            Criadas para maximizar os resultados e ajudar a atingir seus objetivos com eficiência."
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="100%"
                        />
                    </div>
                    <div className={style.row}>
                        <Square 
                            color={textColor}
                            title="Portfólio Online"
                            bodyText="Sites incríveis para exibir seu trabalho ou projetos de maneira elegante e interativa. Ideal para 
                            artistas, designers e freelancers que desejam mostrar suas habilidades de forma única."
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="100%"
                        />
                        <Square 
                            color={textColor}
                            title="E-commerce Personalizado"
                            bodyText="Plataformas de comércio eletrônico modernas e funcionais, adaptadas às necessidades do seu negócio. 
                            Venda online com praticidade e segurança, proporcionando uma ótima experiência para o cliente."
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="130%"
                        />
                    </div>
                    <div className={style.row}>
                        <Square 
                            color={textColor}
                            title="Blogs e Sites Pessoais"
                            bodyText="Criação de blogs e sites pessoais que permitem expressar sua visão e alcançar seu público. 
                            Otimizados para SEO e com design responsivo para uma ótima experiência em qualquer dispositivo."
                            containerColor={containerColor} 
                            borderColor={borderColor} 
                            width="100%"
                        />
                        <Square 
                            color={textColor}
                            title="Sites para Serviços"
                            bodyText="Desenvolvimento de sites para empresas de serviços que desejam destacar sua expertise e 
                            facilitar o contato com clientes. Conteúdo claro e objetivos definidos para converter visitantes em clientes."
                            containerColor={containerColor} 
                            borderColor={borderColor}
                            width="100%"
                        />
                        <Square 
                            color={textColor}
                            title="Sites Mobile-First"
                            bodyText="Sites projetados e otimizados para funcionar perfeitamente em dispositivos móveis. Com a crescente 
                            utilização de smartphones, a experiência do usuário em qualquer dispositivo é nossa prioridade."
                            containerColor={containerColor} 
                            borderColor={borderColor}
                            width="100%"
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    </>
  )
}

export default Modules