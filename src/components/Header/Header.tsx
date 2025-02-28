import React from 'react';
import style from './styles.module.scss';

const Header = () => {
  return (
    <header>
      <div className={style.header}>
        <div className={style.content}>
          <p>Descubra como negócios e empreendedores estão faturando<strong>mais de R$ 30 mil por mês</strong> com um site profissional.</p>
        </div>
      </div>
    </header>
  )
}

export default Header