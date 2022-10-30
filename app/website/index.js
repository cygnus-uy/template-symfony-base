import './styles/base.css'
import './styles/estilos.css'
import './styles/movil.css'

import {
    aplicarEfectoScroll,
    getBaseVars,
    onScroll,
    reassignPositions
} from './utils'

const startCommonScript = () => {
    window.addEventListener('load', () => {
        /* BASE JS */
        const { hBody, contOffsetLeft, hHeader } = getBaseVars()
        const mCont = 0

        reassignPositions({
            contOffsetLeft,
            mCont,
            hBody
        })

        window.addEventListener('scroll', () => {
            aplicarEfectoScroll()

            if (window.scrollY > hBody - hHeader - 5) {
                document.querySelector('#header').classList.add('scroll')
            } else {
                document.querySelector('#header').classList.remove('scroll')
            }
        })

        /* MENÚ */
        // const res = '960'

        // $('.btn-menu').toggle(
        //     function (e) {
        //         e.preventDefault()
        //         $('.menu').slideDown()
        //         $('header .col-8').css({ height: 'auto', 'padding-bottom': '5px' })
        //     },
        //     function (e) {
        //         e.preventDefault()
        //         $('.menu').slideUp()
        //         $('header .col-8').css({ height: '0', 'padding-bottom': '0' })
        //     }
        // )

        // $('.btn-menu').on('click', function (e) {
        //     e.stopPropagation()
        //     if (resolution() < res) {
        //         var obj = $('.menu')
        //         var activo = $(obj).css('right')
        //         if (activo != '0') {
        //             $(this).hide()
        //             $('body').css('overflow', 'hidden')
        //             $('.main-menu').addClass('visible')
        //         } else {
        //             $(this).show()
        //             $('body').css('overflow', 'inherit')
        //             $('.main-menu').removeClass('visible')
        //         }
        //     }
        // })

        // $('.main-menu').on('click', function (e) {
        //     e.stopPropagation()

        //     if (resolution() < res) {
        //         if ($(this).hasClass('visible')) {
        //             $('.main-menu').removeClass('visible')
        //             $('.btn-menu').show()
        //             $('body').css('overflow', 'inherit')
        //         }
        //     }
        // })

        // $(document).on('keyup', function (e) {
        //     if (e.keyCode == 27) {
        //         if (resolution() < res) {
        //             $('.main-menu').removeClass('visible')
        //             $('.btn-menu').show()
        //             $('body').css('overflow', 'inherit')
        //         }
        //     }
        // })

        // $('.menu li .ico-drop').on('click', function (e) {
        //     e.stopPropagation()

        //     if (resolution() < res) {
        //         if ($(this).next('.sub-menu').css('display') == 'none') {
        //             $('.sub-menu').hide()
        //             $(this).next('.sub-menu').show()
        //             $('.menu li').removeClass('act')
        //             $(this).parent('.menu li').addClass('act')
        //             $(this).addClass('activo')
        //         } else {
        //             $(this).next('.sub-menu').toggle()
        //             $('.menu li').removeClass('act')
        //             $(this).parent('.menu li').removeClass('act')
        //             $(this).removeClass('activo')
        //         }
        //     }
        // })

        /* REISIZE */
        window.addEventListener('resize', () => {
            /* BASE JS */
            const { hBody, contOffsetLeft } = getBaseVars()
            const mCont = 0

            reassignPositions({
                contOffsetLeft,
                mCont,
                hBody
            })
        })

        document.addEventListener('scroll', onScroll)

        // const header = 70

        // $('a[href^="#"]').on('click', function (e) {
        //     e.preventDefault()
        //     $(document).off('scroll')

        //     $('a').each(function () {
        //         $(this).removeClass('active')
        //     })
        //     $(this).addClass('active')

        //     var target = this.hash,
        //         menu = target
        //     $target = $(target)
        //     $('html, body')
        //         .stop()
        //         .animate(
        //             {
        //                 scrollTop: $target.offset().top - header
        //             },
        //             900,
        //             'swing',
        //             function () {
        //                 window.history.pushState(
        //                     '',
        //                     '',
        //                     '' + target.replace('#', '<?=$lg?>/')
        //                 )
        //                 $(document).on('scroll', onScroll)
        //             }
        //         )
        // })
    })
}

startCommonScript()

export { startCommonScript }
