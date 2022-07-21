function onScroll() {
  //função scroll
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
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
  duration: 700
}).reveal(`#home, 
#home img, 
#home .stats, 
#tradicoes,
#tradicoes header,
#tradicoes .card,
#santos,
#santos header,
#santos .content,
#contact`)

function button() {
  alert('Enviado!')
}
