document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('hamburger');
    var mobileNav = document.getElementById('navbarLinks');
    var navLinks = mobileNav.querySelectorAll('a'); 
  
    menuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('translate-x-0');
      mobileNav.classList.toggle('translate-x-full');
    });
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.toggle('translate-x-0', false);
        mobileNav.classList.toggle('translate-x-full', true);
      });
    });
  });
  
  
  
  
  
    document.addEventListener('DOMContentLoaded', function () {
      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('readmore-button') || e.target.closest('.readmore-button')) {
          var card = e.target.closest('.card');
          var text = card.querySelector('.more-text');
          text.classList.toggle('hidden');
        }
      });
    });
  
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel__slide');
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 5000); 
    showSlide(currentIndex);
  });