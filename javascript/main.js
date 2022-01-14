/* Abertura e fechamento de Menu quando clicado no Ícone. */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* Quando clicar em um item do Menu, esconde o Menu */
const links =  document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function (){ 
        nav.classList.remove('show')
    })
}

/* Aplicar sombra ao Header da página quando ocorrer o scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll () {

    if(this.window.scrollY > navHeight) {
        // Maior que a altura do Header
        header.classList.add('scroll')
    } 
    else {
        // Menor que a altura do Header
        header.classList.remove('scroll')
    }
}


// Testimonials Slider Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    paginations: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});
 
//  Mostrando elementos quando der scroll na página utilizando Scroll Reveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true4
})

scrollReveal.reveal('#home .image, #home .text, #about .text, #services header, #services .cards, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social ', {interval: 100})

// Botão Back to Top
const  backToTopButton = document.querySelector('.back-to-top')

function backToTop () {
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    }
    else {
        backToTopButton.classList.remove('show')
    }
}

// Menu ativo conforme a seção na página.
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStar = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionId + sectionHeight

        if (checkpointStar && checkpointEnd) {
            document.
            querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')

        } 
        else {
            document.
            querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

// When Scroll
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})

