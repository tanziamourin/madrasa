const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const history = document.querySelector('.history');
const contact = document.querySelector('#contact-section');
const hr = document.querySelector('hr');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    navbar.classList.toggle('dark-theme');
    navbar.classList.toggle('light-theme');
    history.classList.toggle('dark-theme');
    history.classList.toggle('light-theme');
    contact.classList.toggle('dark-theme');
    contact.classList.toggle('light-theme');
    hr.classList.toggle('dark-theme');
    hr.classList.toggle('light-theme');
    themeToggle.classList.toggle('dark');
    themeToggle.classList.toggle('light');
    
    // Change the icon based on the current theme
    if (body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '🌙';
    } else {
        themeToggle.innerHTML = '🌞';
    }
});


 // Redirect to another page when the Learn More button is clicked
 $('#learnMoreBtn').click(function() {
    window.location.href = 'other-results.html';
});