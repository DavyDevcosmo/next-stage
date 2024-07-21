
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '../components/Carousel.css'

 
import assins from '../assets/assins.jpg';
import bg from '../assets/bg.jpg';
import theLast from '../assets/theLast.png';
import { useEffect } from 'react';

const Carrousel = () => {
    useEffect(() => {
        new Splide('#carousel', {
            type       : 'fade',         // Configura a transição para fade
            heightRatio: 1,            // Ajuste a razão de altura conforme necessário
            
            pagination : true,           // Ativa a paginação com bolinhas
            arrows     : true,           // Ativa as setas de navegação
            cover      : true,           // Faz com que as imagens cubram todo o slide
            autoplay   : true,           // Ativa o autoplay (opcional)
            interval   : 3000,           // Intervalo de autoplay em milissegundos (opcional)
        }).mount();
    }, []);

    return (
        <div id="carousel" className="splide">
            <div className="splide__track">
                <ul className="splide__list">
                    <li className="splide__slide">
                        <img src={assins} alt="Imagem 1" />
                    </li>
                    <li className="splide__slide">
                        <img src={bg} alt="Imagem 2" />
                    </li>
                    <li className="splide__slide">
                        <img src={theLast} alt="Imagem 3" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Carrousel;
