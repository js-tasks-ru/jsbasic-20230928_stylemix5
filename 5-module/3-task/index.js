function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const slideWidth = carouselInner.offsetWidth;

  const prevButton = document.querySelector('.carousel__arrow_left');
  const nextButton = document.querySelector('.carousel__arrow_right');
  let currentSlide = 0;

  function toggleButtons() {
    prevButton.style.display = currentSlide === 0 ? 'none' : '';
    nextButton.style.display = currentSlide === 3 ? 'none' : '';
  }

  toggleButtons();

  nextButton.addEventListener('click', () => {
    if (currentSlide < 3) {
      currentSlide++;
      const translateX = -currentSlide * slideWidth;
      carouselInner.style.transform = `translateX(${translateX}px)`;
      toggleButtons();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      const translateX = -currentSlide * slideWidth;
      carouselInner.style.transform = `translateX(${translateX}px)`;
      toggleButtons();
    }
  });
}
