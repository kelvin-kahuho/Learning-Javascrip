const scrollButton = document.getElementById('scrollButton');

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});

const buyButton = document.getElementsById('buy');

buyButton.addEventListener('click', () => {
    alert('Are you sure?');
});