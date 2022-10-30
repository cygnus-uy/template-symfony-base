import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { startCommonScript } from './index'

startCommonScript()

window.addEventListener('load', () => {
    const swiper = new Swiper('.galeria', {
        slidesPerView: 8,
        spaceBetween: 30,
        freeMode: true,
        autoHeight: true,
        setWrapperSize: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        }
    })
})
