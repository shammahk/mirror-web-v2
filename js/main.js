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

const startApp = () => { 
  setTimeout(() => {
      changeVisibility();
  }, 4000);
}

window.addEventListener('load', () => {
  startApp();
})