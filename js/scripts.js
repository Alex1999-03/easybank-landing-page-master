const hamburger = document.getElementById('hamburger-button')
const navigation = document.getElementById('navigation')

hamburger.addEventListener('click', (e) => {
  const open = hamburger.dataset.open == 'false' ? false : true
  const img = hamburger.firstElementChild

  if (!open) {
    img.src = '../images/icon-close.svg'
    hamburger.dataset.open = true
    navigation.classList.add('header__nav--open')
  } else {
    img.src = '../images/icon-hamburger.svg'
    hamburger.dataset.open = false
    navigation.classList.remove('header__nav--open')
  }
})
