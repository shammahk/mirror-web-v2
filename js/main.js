$(document).ready(function(){
  $('.slides-holder').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    variableWidth: true,
    infinite: true,
    speed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

// Intro 
const changeVisibility = () => {
  const intro = document.querySelector('#intro');
  const main = document.querySelector('#main-page');

  intro.classList.remove('show');
  intro.classList.add('hide');

  main.classList.remove('hide');
  main.classList.add('show');
  window.scrollTo(0,0)


  setTimeout(() => {
      intro.style.display = 'none';
  }, 1000);
}

// toggle NavBar 
const navBar = document.querySelector('.nav-bar2')

const activateNav = () => {
  navBar.classList.add('show')  ;
}

const closeBtn = () => {
  navBar.classList.remove('show');
}

const startApp = () => { 
  setTimeout(() => {
      changeVisibility();
  }, 4000);
}

window.addEventListener('load', () => {
  startApp();
})

// Activate Image Modal 
function imgModal(event) {
  let imageModal = document.querySelector("#imgmodal");
  let image = document.querySelector("#imgmodal img");

  image.src = event.target.src;
  imageModal.classList.add("active");

  // Prevent window scroll
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  }
  console.log(event.target, event.target.src);
  $('.slides-holder').slick({
    autoplay: false,
  });
}

function closeModal() {
  let imageModal = document.querySelector("#imgmodal");
  
  imageModal.classList.remove("active");

  window.onscroll = function () {
    
  }
  $('.slides-holder').slick({
    autoplay: true,
  });
}