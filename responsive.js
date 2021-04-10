function classToggle() {
    const navs = document.querySelectorAll('.nav-bar')

    navs.forEach(nav => nav.classList.toggle('"nav-links'));
}

document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);