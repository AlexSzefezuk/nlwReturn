window.addEventListener('scroll', onScroll)


onScroll()
function onScroll() {
  showNav()
  showBackToTopButton()
}

function showNav() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}


function showBackToTopButton() {
  if (scrollY > 70) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}


function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
  
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500
}).reveal(`
  #home,
  #home .wrapper .stats,
  #services, 
  #services header,
  #services .card,
  #about,
  #about header
  #about .content`)
