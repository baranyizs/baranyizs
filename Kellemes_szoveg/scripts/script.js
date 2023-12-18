document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('.lazy-load');
  
    const lazyLoad = function() {
      lazyImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight && !img.src) {
          img.src = img.dataset.src;
          img.onload = function() {
            img.style.opacity = 1;
          };
        }
      });
    };
  
    const toggleImage = function(event) {
      const img = event.target;
      if (img.style.opacity === '1') {
        img.style.opacity = 0;
      } else {
        img.style.opacity = 1;
      }
    };
  
    window.addEventListener('scroll', lazyLoad);
    lazyLoad();
  
    lazyImages.forEach(img => {
      img.addEventListener('click', toggleImage);
    });
  });

  // Az összes kép azonosítása
const images = document.querySelectorAll('.image-gallery img');
