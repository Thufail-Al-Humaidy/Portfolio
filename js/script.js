
        // On Scroll Animation AOS
        AOS.init();

        // Toggle Navbar for Smaller Screen
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    // Toggle menu visibility with smooth animation
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
        // Swiper Testimonial slider
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // Breakpoints for smaller device
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 3,
                }
            }
        });
        
        
        
  