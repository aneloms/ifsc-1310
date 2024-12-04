// Array of images to cycle through
const heroImages = [
    'url("assets/img/Dragon_2_hover_test.jpg")',  // Replace with the actual paths
    'url("assets/img/dragoncrew.8k.jpg")',
    'url("assets/img/spacex3.jpg")',
    'url("assets/img/spacex1.jpg")'
];

// Set initial image
let currentImageIndex = 0;
const heroSection = document.querySelector('.hero'); // Using the class selector for the hero section

// Change background every 5 seconds
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroSection.style.backgroundImage = heroImages[currentImageIndex];
}, 5000);

// JavaScript to toggle FAQ answers
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const parent = question.closest('.faq-item');
        const answer = parent.querySelector('.faq-answer');

        // Toggle active class to open/close answer
        parent.classList.toggle('active');

        // Smooth display transition for answers
        if (parent.classList.contains('active')) {
            answer.style.display = 'block';
            setTimeout(() => {
                answer.style.opacity = '1';
            }, 10);
        } else {
            answer.style.opacity = '0';
            setTimeout(() => {
                answer.style.display = 'none';
            }, 300);
        }
    });
});
