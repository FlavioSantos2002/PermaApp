 function toggleMenu() {
        var menu = document.querySelectorAll('.bot');
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = (menu[i].style.display === 'none' || menu[i].style.display === '') ? 'block' : 'none';
        }
}