const getOffset = (selector) => {
    const rect =
        typeof selector === 'string'
            ? document.querySelector(selector).getBoundingClientRect()
            : selector.getBoundingClientRect()

    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
    }
}

const getBaseVars = () => {
    const wBody = window.innerWidth
    const hBody = window.innerHeight

    const wCont = document.querySelector('.cont').offsetWidth
    const hCont = document.querySelector('.cont').offsetHeight

    const contOffset = getOffset('.cont')
    const contOffsetLeft = contOffset.left

    const wHeader = document.querySelector('#header').offsetWidth
    const hHeader = document.querySelector('#header').offsetHeight

    return {
        wBody,
        hBody,
        wCont,
        hCont,
        contOffset,
        contOffsetLeft,
        wHeader,
        hHeader
    }
}

const reassignPositions = ({ contOffsetLeft, mCont, hBody }) => {
    /* paddins left right */
    const pLeft = document.querySelector('.p-left')
    if (pLeft) {
        pLeft.setAttribute('style', `padding-left: ${contOffsetLeft + mCont}`)
    }

    const pRight = document.querySelector('.p-right')
    if (pRight) {
        pRight.setAttribute('style', `padding-right: ${contOffsetLeft + mCont}`)
    }

    /* margins left right */
    const mLeft = document.querySelector('.m-left')
    if (mLeft) {
        mLeft.setAttribute('style', `margin-left: ${contOffsetLeft + mCont}`)
    }

    const mRight = document.querySelector('.m-right')
    if (mRight) {
        mRight.setAttribute('style', `margin-right: ${contOffsetLeft + mCont}`)
    }

    /* absolute left right */
    const aLeft = document.querySelector('.a-left')
    if (aLeft) {
        aLeft.setAttribute('style', `left: ${contOffsetLeft + mCont}`)
    }

    const aRight = document.querySelector('.a-right')
    if (aRight) {
        aRight.setAttribute('style', `right: ${contOffsetLeft + mCont}`)
    }

    /* full */
    const fullHeight = document.querySelector('.full-height')
    if (fullHeight) {
        fullHeight.setAttribute('style', `height: ${hBody}px`)
    }

    /* MENÚ */
    const mainMenuVisible = document.querySelector('.main-menu.visible')
    if (mainMenuVisible) {
        mainMenuVisible.setAttribute(
            'style',
            `height: ${contOffsetLeft + mCont}`
        )
    }
}

const aplicarEfectoScroll = () => {
    const items = document.querySelectorAll('.efecto, .no-efecto')
    const hw = window.innerHeight
    const wTop = window.scrollY
    const screenH = wTop + hw

    items.forEach((currentValue) => {
        const yPos = getOffset(currentValue).top

        if (yPos <= screenH) {
            currentValue.classList.add('no-efecto')
            currentValue.classList.remove('efecto')
        } else {
            currentValue.classList.remove('no-efecto')
            currentValue.classList.add('efecto')
        }
    })
}

const onScroll = (event) => {
    const sections = document.querySelectorAll('section')
    const header = 70
    const scrollPos = window.scrollY

    sections.forEach((currentValue) => {
        const id = '#' + currentValue.id

        if (
            getOffset(currentValue).top - header <= scrollPos &&
            getOffset(currentValue).top + currentValue.offsetHeight - header >
                scrollPos
        ) {
            const menuLink = document.querySelector('.menu li a')
            if (menuLink) {
                menuLink.classList.remove('active')
            }

            const menuHashLink = document.querySelector(
                '.menu li a[href="' + id + '"]'
            )
            if (menuHashLink) {
                menuHashLink.classList.add('active')
            }
        }
    })
}

const resolution = () => {
    return window.innerWidth
}

export {
    getOffset,
    aplicarEfectoScroll,
    onScroll,
    getBaseVars,
    reassignPositions,
    resolution
}
