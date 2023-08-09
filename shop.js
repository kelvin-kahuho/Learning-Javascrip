const scrollButton = document.getElementById('scrollButton');

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});