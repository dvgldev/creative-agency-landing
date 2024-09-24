window.onscroll = function() {
    var scrollUpButton = document.querySelector('.scroll-up');
    if (window.pageYOffset > 200) {
        scrollUpButton.style.display = 'block';
    } else {
        scrollUpButton.style.display = 'none';
    }
};