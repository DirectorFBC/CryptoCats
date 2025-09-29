    document.addEventListener('DOMContentLoaded', function() {
      const slides = document.querySelectorAll('.carousel-slide');
      const slidesContainer = document.querySelector('.carousel-slides');
      const indicators = document.querySelectorAll('.indicator');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      let currentSlide = 0;
      
      // Function to update carousel position
      function updateCarousel() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active indicator
        indicators.forEach(indicator => {
          indicator.classList.remove('active');
        });
        indicators[currentSlide].classList.add('active');
      }
      
      // Next slide function
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
      }
      
      // Previous slide function
      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
      }
      
      // Event listeners for navigation buttons
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
      
      // Event listeners for indicators
      indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
          currentSlide = parseInt(this.getAttribute('data-index'));
          updateCarousel();
        });
      });
      
      // Auto-advance slides every 10 seconds
      setInterval(nextSlide, 100000);
      
      // Keyboard navigation
      document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
          prevSlide();
        } else if (e.key === 'ArrowRight') {
          nextSlide();
        }
      });
    });