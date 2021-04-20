function navSlide () {
  let burger = document.querySelector('.burger');
  let nav = document.querySelector('.nav-links');
  let navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', function () {
  //toggle nav
    nav.classList.toggle('nav-active');

  //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

  //burger animation
    burger.classList.toggle('toggle');

  });

  // navLinks.addEventListener('click', function () {
  //   nav.classList.add()
  // });

}

navSlide();

