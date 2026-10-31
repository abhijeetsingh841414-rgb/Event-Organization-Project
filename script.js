const menuBar = document.querySelector(".menuBtn")
const navBar = document.querySelector(".navBar")


menuBar.addEventListener('click', () =>{
    menuBar.querySelector('i').classList.toggle("fa-bars")
    menuBar.querySelector('i').classList.toggle("fa-times")
    navBar.classList.toggle("active")
})

const menuLink = document.querySelectorAll(".header .navBar a")
menuLink.forEach(link =>{
    link.addEventListener('click', () =>{
        menuBar.querySelector('i').classList.add("fa-bars")
        menuBar.querySelector('i').classList.remove("fa-times")
        navBar.classList.remove("active")
    })
})

let swiper = new Swiper('.homeScroll', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
        },
        loop:true,
        autoplay:{
            delay:1000,
            disableOnInteraction:false
        }
    });

    let swiper = new Swiper('.review-slider', {
       slidesPerView: 1,
       grabCursor: true,
       loop: true,
       spaceBetween: 10,
       breakpoint:{
        0: {
            slidesPerView:1,
        },
        700:{
            slidesPerView: 2,
        },
        1050:{
            slidesPerView:3,
        },
    },autoplay:{
        delay:5000,
        dis:false,
    }
    });