document.addEventListener('scroll', () => {
  const navbar = document.querySelector('.nav');
  if(navbar != null){
    if (window.scrollY > 0) {
      navbar.classList.add('is-active');
    } else {
      navbar.classList.remove('is-active');
    }
  }

});