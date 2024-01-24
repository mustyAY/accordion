
//The new Swiper function is from a carousel library, 
//the documentation can be found at https://swiperjs.com/swiper-api.
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 10,
  slidesPerView: 1,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Responsiveness
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
    }
  }
});

// Accordion

const accordionTab = document.querySelectorAll(".accordion__tab");

accordionTab.forEach((tab) => {
  tab.addEventListener("click", (e) => {

    const target = e.target.closest(".card");
    const cardIsActive = e.target.closest(".active");

    if(cardIsActive){
      target.classList.remove("active");
    }else{
      target.classList.add("active");
    };

  });

});