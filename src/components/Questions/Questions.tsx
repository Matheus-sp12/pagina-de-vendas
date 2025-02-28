import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from './style.module.scss';
import Link from 'next/link';
import Accordion from '../Accordion/Accordion';
import Image from 'next/image';
import Modal from '../Modal/Modal';

const Questions = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!router.isReady) return; // Evita executar antes do carregamento completo da URL
        setIsOpen(router.query.modal === "true");
    }, [router, router.isReady, router.query]);

    // Função para fechar o modal e remover ?modal=true da URL
    const closeModal = () => {
        setIsOpen(false);
        router.replace("/", undefined, { shallow: true }); // Remove o query param sem recarregar a página
    };

    return (
        <main className={style.container}>
            <div className={style.content}>
                <div className={style.leftSide}>
                    <div className={style.title}>
                        <h2>
                            Vamos criar o seu <br /> site dos<span> sonhos ?</span>
                        </h2>
                    </div>
                    <div className={style.subtitle}>
                        <h4>
                            Entre em contato agora e garanta um site profissional
                            que destaque seu negócio e atraia mais clientes!
                        </h4>
                    </div>
                    <div className={style.box}>
                        <div className={style.icon}>
                            <Image src="/whats.svg" alt="Ícone de whatsapp" width={80} height={80} />
                        </div>
                        <Link href="/?modal=true" shallow>
                            <div className={style.text}>
                                <h3>
                                    Fazer Orçamento <span>Gratuito</span>
                                </h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={style.rightSide}>
                    <Accordion
                        title="Quanto tempo leva para meu site ficar pronto?"
                        content="O prazo varia conforme a complexidade do projeto, mas sites institucionais costumam ficar prontos entre 7 a 15 dias."
                    />
                    <Accordion
                        title="O site será responsivo para celulares e tablets?"
                        content="Sim! Todos os sites que desenvolvemos são responsivos, garantindo uma ótima experiência em qualquer dispositivo."
                    />
                    <Accordion
                        title="Meu site será otimizado para aparecer no Google?"
                        content="Sim! Aplicamos técnicas de SEO para melhorar o posicionamento do seu site nos motores de busca e atrair mais visitantes."
                    />
                    <Accordion
                        title="Posso atualizar meu site sozinho depois de pronto?"
                        content="Claro! Se precisar, podemos integrar um painel administrativo para que você mesmo gerencie conteúdos e atualizações."
                    />
                    <Accordion
                        title="Como funciona o pagamento?"
                        content="O pagamento pode ser feito via Pix, boleto ou cartão de crédito. Também oferecemos a opção de parcelamento para facilitar!"
                    />
                </div>
            </div>

            <Modal isOpen={isOpen} setIsOpen={closeModal} />
        </main>
    );
};

export default Questions;
