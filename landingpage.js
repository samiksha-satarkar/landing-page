const button = document.querySelector('.header .button');
button.addEventListener('click', () => {
    alert('Thank you for choosing Guardian CyberTech!');
});
button.addEventListener('click', () => {
    src
});
// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (Basic Example)
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your submission!');
    }
    return home;
});