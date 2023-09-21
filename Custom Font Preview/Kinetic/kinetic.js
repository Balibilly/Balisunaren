document.addEventListener('DOMContentLoaded', function () {
    const kineticButton = document.getElementById('kineticButton');
    const typeSentence = document.querySelector('h1.typeSentence');

    kineticButton.addEventListener('click', applyKineticAnimation);

    /* kinetic.js */
    function applyKineticAnimation() {
    // Remove previous animations
    typeSentence.style.animation = '';

    const animations = [
        'interpolateWght 3s ease infinite'
        // Add more animations here
    ];

    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    typeSentence.style.animation = randomAnimation;
}

});
