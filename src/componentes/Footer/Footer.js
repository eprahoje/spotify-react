import React from 'react';
import './Footer.css';
import '../../componentes/vars.css';

const Footer = () => {
    return(
        <footer class="disclaimer-premium">
            <div class="disclaimer-premium__content__text">
                <span class="disclaimer-text disclaimer-text__title">TESTAR O PREMIUM DE GRAÇA</span>
                <span class="disclaimer-text">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</span>                
            </div>
            <button class="disclaimer-premium__content__button">
                <span>Inscreva-se grátis</span>
            </button>
        </footer>
    )
};

export default Footer;