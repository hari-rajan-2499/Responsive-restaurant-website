const mymenubar = document.querySelector('#myicondiv');
const myullist = document.querySelector('.ul-links');
const mybodyy = document.querySelector('body');
mymenubar.addEventListener('click', () => {
    myullist.classList.toggle('addul')
    mybodyy.classList.toggle('byaxis')
})



/********************* Swiper js  **************************/
let swiperCards = new Swiper('.swipercard-js-style', {
    // Optional parameters
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets:true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
    },


});


