// Initialize AOS for Scroll Animation
AOS.init();

// Toggle Navbar for Smaller Screens
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('opacity-0', 'translate-y-[-20%]');

    setTimeout(() => {
      mobileMenu.classList.remove('opacity-0', 'translate-y-[-20%]');
      mobileMenu.classList.add('opacity-100', 'translate-y-0');
    }, 10);
  } else {
    mobileMenu.classList.remove('opacity-100', 'translate-y-0');
    mobileMenu.classList.add('opacity-0', 'translate-y-[-20%]');

    mobileMenu.addEventListener(
      'transitionend',
      () => {
        if (mobileMenu.classList.contains('opacity-0')) {
          mobileMenu.classList.add('hidden');
        }
      },
      { once: true }
    );
  }
});

// Swiper Testimonial Slider
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    480: { slidesPerView: 1 },
    640: { slidesPerView: 3 },
  },
});

// Nasheed Modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('musicModal');
  const backgroundMusic = document.getElementById('backgroundMusic');
  const agreeButton = document.getElementById('agreeMusic');
  const declineButton = document.getElementById('declineMusic');

  // Show Modal
  function showMusicModal() {
    modal.classList.remove('hidden');
  }

  // Hide Modal
  function hideMusicModal() {
    modal.classList.add('hidden');
  }

  // Agree to Play Music
  agreeButton.addEventListener('click', () => {
    backgroundMusic.volume = 0.3;
    backgroundMusic.play();
    hideMusicModal();
  });

  // Decline Music
  declineButton.addEventListener('click', () => {
    backgroundMusic.pause();
    hideMusicModal();
  });

  // Show Modal on Page Load
  showMusicModal();

  // Pause Music if User Leaves the Tab
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      backgroundMusic.pause();
    } else if (!modal.classList.contains('hidden')) {
      showMusicModal();
    }
  });
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // Update Active Button State
    filterButtons.forEach((btn) => btn.classList.remove('bg-teal-400'));
    button.classList.add('bg-teal-400');

    // Filter Portfolio Items
    portfolioItems.forEach((item) => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Set Default Active Button to "All"
document.querySelector('.filter-btn[data-category="all"]').click();
