const scrollableContent = document.querySelector('.cardsConteudo');
const scrollLeftButton = document.querySelector('.left');
const scrollRightButton = document.querySelector('.right');

const SCROLL_SPEED = 100; // Adjust for desired scrolling speed (pixels per animation frame)
const ANIMATION_DURATION = 1000; // Adjust for desired animation duration (milliseconds)

function smoothScroll(direction) {
  let startPosition = scrollableContent.scrollLeft;
  let endPosition = direction === 'left' ? startPosition - 1000 : startPosition + 1000;
  let startTime = null;

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = elapsed / ANIMATION_DURATION;

    // Use a cubic ease-in-out easing function for smooth scrolling
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    const scrollOffset = easeInOutCubic(progress) * (endPosition - startPosition);
    scrollableContent.scrollLeft = startPosition + scrollOffset;

    if (elapsed < ANIMATION_DURATION) {
      window.requestAnimationFrame(animate);
    }
  };

  window.requestAnimationFrame(animate);
}

scrollLeftButton.addEventListener('click', () => smoothScroll('left'));
scrollRightButton.addEventListener('click', () => smoothScroll('right'));


// Suavidade do Scroll feito por I.A. (Gemini)