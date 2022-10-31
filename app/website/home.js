import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
// import '@splidejs/splide/css/core';

import { startCommonScript } from './index'

document.addEventListener('DOMContentLoaded', function () {
    startCommonScript()

    new Splide('.splide', {
        perPage: 8,
        breakpoints: {
            640: {
                perPage: 2
            }
        },
        classes: {
            arrows: 'splide__arrows',
            arrow: 'splide__arrow',
            prev: 'splide__arrow--prev prev',
            next: 'splide__arrow--next next'
        }
    }).mount()
})
