
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';


import assins from '../assets/assins.jpg';
import bg from '../assets/bg.jpg';

import { useEffect } from 'react';

const Carrousel = () => {
    useEffect(() => {
        new Splide('#carousel', {
            type: 'fade',
            heightRatio: 0.5,
            pagination: true,
            arrows: true,
            cover: true,
            autoplay: true,
            interval: 3000,
        }).mount();
    }, []);

    return (
        <div id="carousel" className="splide w-full">
            <div className="splide__track">
                <ul className="splide__list">
                    <li className="splide__slide">
                        <img src={assins} alt="Imagem 1" className="w-full h-full object-cover" />
                    </li>
                    <li className="splide__slide">
                        <img src={bg} alt="Imagem 2" className="w-full h-full object-cover" />
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Carrousel;
