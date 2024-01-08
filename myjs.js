const mymenubar = document.querySelector('#myicondiv');
const myullist = document.querySelector('.ul-links');
const mybodyy = document.querySelector('body');

mymenubar.addEventListener('click', () => {
    myullist.classList.toggle('addul')
    mybodyy.classList.toggle('byaxis')

})

let nav_atag = document.querySelectorAll(".ul-links li a");
let nav_1st_a_tag = document.querySelector(".f");
nav_atag.forEach((anchor_tag) => {
    anchor_tag.addEventListener("mouseover", () => {
        nav_1st_a_tag.classList.remove('activee')
        anchor_tag.classList.add('activee');



    })

    anchor_tag.addEventListener('mouseout', () => {
        anchor_tag.classList.remove('activee')
    })


})

/************** contact form submission *********************/

const contact_form = document.querySelector("#contactForm");
let contact_popup_container = document.querySelector("#form-submitted-successfully");
let contact_popup_overlay = document.querySelector("#overlay");
let contact_popup_container_cancel_icon = document.querySelector("#form-submitted-successfully i");
let reset_contact_form = document.querySelector("#contactForm")

contact_form.addEventListener("submit", (sub_event) => {
    sub_event.preventDefault();
    console.log("success")

    setTimeout(() => {
        contact_popup_container.style.display = "block";
        contact_popup_overlay.style.display = "block";
        contact_popup_container.style.opacity = "1";
        contact_popup_overlay.style.opacity = "1";
        document.getElementById("contactForm").reset();

    }, 500);



})

contact_popup_container_cancel_icon.addEventListener("click", () => {
    console.log(reset_contact_form);
    setTimeout(() => {
        contact_popup_container.style.display = "none";
        contact_popup_overlay.style.display = "none";
        contact_popup_container.style.opacity = "0";
        contact_popup_overlay.style.opacity = "0";
    }, 200)


})

function clear_contact_form() {
    document.getElementById("login-form").reset();
    document.getElementById("signup-form").reset();
    document.getElementById("#contactForm").reset();
    console.log('clearall')

}

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


