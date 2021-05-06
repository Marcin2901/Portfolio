const headerNav = document.getElementById('headerNav')
const hamburger = document.getElementById('hamburger')
const links = document.querySelectorAll('.header-nav--links li')




const toggleNav = () => {
      headerNav.classList.toggle('clicked')
       links.forEach(link => {link.classList.toggle('fade')})
}

const inicialize = () => {
      hamburger.addEventListener('click', toggleNav)

}

document.addEventListener("DOMContentLoaded", inicialize())