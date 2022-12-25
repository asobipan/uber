window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_bar'),
    menuItem = document.querySelectorAll('.list_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_bar_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_bar_active');
        })
    })
})