document.querySelector('h1').innerHTML = 'Good bye'
document.querySelector('h1').classList.toggle('bit-text')
setTimeout(() => {
    document.querySelector('h1').classList.toggle('bit-text')
}, 5000);
