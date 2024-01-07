const mymenubar = document.querySelector('#myicondiv');
const myullist = document.querySelector('.ul-links');
const mybodyy = document.querySelector('body');

mymenubar.addEventListener('click', () => {
    myullist.classList.toggle('addul')
    mybodyy.classList.toggle('byaxis')
    
})

let nav_atag = document.querySelectorAll(".ul-links li a");
let nav_1st_a_tag=document.querySelector(".f");
nav_atag.forEach((anchor_tag) => {
    anchor_tag.addEventListener("mouseover", () => {
        nav_1st_a_tag.classList.remove('activee')
        anchor_tag.classList.add('activee');

        

    })

    anchor_tag.addEventListener('mouseout',()=>{
        anchor_tag.classList.remove('activee')
    })


})



/********************** Slider Tab  *************************/



/********************* Swiper js  **************************/

let swiperCards = new Swiper('.swipercard-js-style', {
    // Optional parameters
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
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


