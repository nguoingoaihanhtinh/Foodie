let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');






document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

let profile = document.querySelector('header .profile');

document.querySelector('#user-btn').onclick = () =>{
  profile.classList.toggle('active');
  navbar.classList.remove('active');
}






var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      loop:true,
    },
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      // 450:{
      //   slidesPerView:2,
      // },
      1024:{
        slidesPerView:3,
      },

    },
    
  });

