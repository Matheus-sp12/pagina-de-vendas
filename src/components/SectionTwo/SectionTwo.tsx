import { useEffect } from 'react';
import style from './styles.module.scss';
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';import { FaGlobe, FaSearch,  FaBriefcase, FaClock, FaBullseye } from "react-icons/fa";


const SectionTwo = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        offset: 50,
      });
  }, []);

  const benefits = [
      { icon: <FaGlobe />, title: "Presença online", desc: "Seja encontrado por clientes a qualquer hora, em qualquer lugar." },
      { icon: <FaSearch />, title: "Mais visibilidade", desc: "Apareça no Google e amplie seu alcance." },
      { icon: <FaBriefcase />, title: "Credibilidade", desc: "Demonstre profissionalismo e ganhe confiança." },
      { icon: <RiMoneyDollarCircleFill />, title: "Mais vendas", desc: "Aumente suas oportunidades de faturamento." },
      { icon: <FaClock />, title: "Acessível 24h", desc: "Seu site funciona mesmo quando você não está disponível." },
      { icon: <FaBullseye />, title: "Marketing eficaz", desc: "Anuncie seus serviços de forma estratégica." },
  ];

  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.title} data-aos="fade-up" data-aos-delay="200">
          <h5>
            Por que ter um
            <span> Site ?</span>
          </h5>
          <p>
            Ter um site é essencial para fortalecer sua presença online, alcançar mais clientes e transmitir 
            credibilidade. Com um site, seu negócio fica disponível 24/7, aumentando as chances de conversão 
            e crescimento. 🚀
          </p>
        </div>
        <div className={style.grid}>
          {benefits.map((item, index) => (
              <div className={style.info} key={index}  data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className={style.icon} >
                      <div className={style.gradientBackground}></div>
                      {item.icon}
                  </div>
                  <div className={style.text}>
                      <h5>{item.title}</h5>
                      <p>
                          {item.desc}
                      </p>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SectionTwo;