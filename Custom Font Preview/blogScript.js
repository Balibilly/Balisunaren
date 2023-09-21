
//SELESAI 1 DISINI//
document.addEventListener('DOMContentLoaded', function () {
    const content01popup = document.querySelector('.content01popup');
    const buttons = document.querySelectorAll('.imagery');
    let currentIndex = -1; // Initialize the current button index to -1 (no button selected initially)

    
    // Function to create and display images or 3D models for a button with delayed animation
    function createImagesOrModelsForButton(button) {
        const dataImages = button.getAttribute('data-images');
        const dataModel = button.getAttribute('data-model'); // Assuming you have a data-model attribute
        const totalItems = 5; // Number of times to duplicate the images or models
        const delayIncrement = 1500; // Delay increment for each duplicate item

        if (dataImages) {
            const imageNames = dataImages.split(' ');
            for (let i = 0; i < totalItems; i++) {
                imageNames.forEach((imageName, index) => {
                    // Create and append images with staggered delays
                    setTimeout(() => {
                        const image = createFloatingImage(imageName, button);
                        content01popup.appendChild(image);
                    }, (i * imageNames.length * delayIncrement) + (index * delayIncrement * totalItems));
                });
            }
        }

        if (dataModel) {
            // Assuming you have a data-model attribute with the 3D model URL
            for (let i = 0; i < totalItems; i++) {
                setTimeout(() => {
                    const modelViewer = createFloatingModelViewer(dataModel, button);
                    content01popup.appendChild(modelViewer);
                }, i * delayIncrement);
            }
        }
    }

    // Function to create a floating image element
    function createFloatingImage(imageName, button) {
        const image = document.createElement('img');
        image.src = `${imageName}`;
        image.alt = 'Image'; // Set alt attribute as needed
        image.classList.add('floating-image');

        // Add click event listener to open the link when clicking the image
        if (button.hasAttribute('data-link')) {
            const link = createLinkElement(button.getAttribute('data-link'));
            link.appendChild(image);
            return link;
        }

        return image;
    }

    // Function to create a floating model-viewer element
    function createFloatingModelViewer(modelSrc, button) {
        const modelViewer = document.createElement('model-viewer');
        modelViewer.setAttribute('src', modelSrc);
        modelViewer.setAttribute('alt', '3D Model'); // Set alt attribute as needed
        modelViewer.classList.add('floating-model-viewer');
        modelViewer.setAttribute('auto-rotate', ''); // Enable auto-rotation
        modelViewer.setAttribute('camera-controls', ''); // Enable camera controls

        // Add click event listener to open the link when clicking the model
        if (button.hasAttribute('data-link')) {
            const link = createLinkElement(button.getAttribute('data-link'));
            link.appendChild(modelViewer);
            return link;
        }

        return modelViewer;
    }

    // Function to create a link element
    function createLinkElement(linkUrl) {
        const link = document.createElement('a');
        link.href = linkUrl;
        link.target = '_blank'; // Open link in a new tab
        link.classList.add('floating-image-link');
        return link;
    }

    // Function to toggle the display of .content01popup
    function toggleContentPopup(display) {
        content01popup.style.display = display ? 'block' : 'none';
    }

    // Function to handle button click events
    function handleButtonClick(button, index) {
        removeImages(); // Remove images or models from the previous button
        createImagesOrModelsForButton(button); // Create and display images or models for the clicked button

        // Toggle button styles
        if (currentIndex !== -1) {
            buttons[currentIndex].classList.remove('active');
        }
        currentIndex = index;
        buttons[currentIndex].classList.add('active');

        toggleContentPopup(true); // Show the popup when a button is clicked
    }

    // Function to remove existing images or models
    function removeImages() {
        const currentItems = content01popup.querySelectorAll('.floating-image, .floating-image-link, .floating-model-viewer');
        currentItems.forEach((item) => {
            if (item.parentNode) {
                item.parentNode.removeChild(item);
            }
        });
    }

    // Add click event listeners to each button
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            handleButtonClick(button, index);
        });
    });

    // Initially, set .content01popup to display: none
    toggleContentPopup(false);
});



document.addEventListener('DOMContentLoaded', function () {
    const toggleImages = document.getElementById('toggleImages');
    const images = document.querySelectorAll('.groupImage img');
    const imageWidth = 100; // Adjust this value based on your image dimensions

    toggleImages.addEventListener('mouseenter', () => {
        const usedPositions = new Set();
        
        images.forEach((image) => {
            let randomTop, randomLeft;
            do {
                // Calculate random top and left positions within the container
                randomTop = Math.random() * (toggleImages.clientHeight - imageWidth) + 'px';
                randomLeft = Math.random() * (toggleImages.clientWidth - imageWidth) + 'px';
            } while (usedPositions.has(`${randomTop}-${randomLeft}`)); // Ensure unique positions
            
            usedPositions.add(`${randomTop}-${randomLeft}`);

            // Set the top and left positions
            image.style.top = randomTop;
            image.style.left = randomLeft;

            // Display the image
            image.style.opacity = '1';
        });
    });

    toggleImages.addEventListener('mouseleave', () => {
        images.forEach((image) => {
            // Hide the image on mouse leave
            image.style.opacity = '0';
        });
    });
});

//EXPERIMENTAL//
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the relevant elements

    const darkmodeSpan = document.querySelector('.darkmode');
const rollingSpan = document.querySelector('.rolling');
const paragraphs = document.querySelectorAll('p');
const heroButtons = document.querySelectorAll('.imagery');

// 3. Toggle dark mode when the darkmode span is clicked
darkmodeSpan.addEventListener('click', () => {
    const blogMain = document.querySelector('main.blog');
    blogMain.classList.toggle('dark-mode');
    
    // Check if dark mode is enabled after toggling
    const isDarkMode = blogMain.classList.contains('dark-mode');

    // Change the text color of all <p> elements based on dark mode
    paragraphs.forEach((paragraph) => {
        if (isDarkMode) {
            // If dark mode is enabled, set the text color to white
            paragraph.style.color = '#05ff9f';
        } else {
            // If dark mode is disabled, remove the inline style to use the default text color
            paragraph.style.removeProperty('color');
        }
    });
    heroButtons.forEach((button) => {
        if (isDarkMode) {
            // If dark mode is enabled, set the button styles
            button.style.color = '#05ff9f';
            button.style.borderColor = '#05ff9f'; // Changed '#green' to 'green'
            button.style.background = 'transparent';
        } else {
            // If dark mode is disabled, reset the button styles to initial values
            button.style.color = button.dataset.initialColor || '';
            button.style.borderColor = button.dataset.initialBorderColor || '';
            button.style.background = button.dataset.initialBackground || '';
        }
    });
});
// 4. Implement a rolling text effect for the rolling span
const dynamicTexts = ['PRACTICE', 'PRIDE', 'LEGACY'];
let currentIndex = 0;

function updateRollingText() {
    rollingSpan.textContent = dynamicTexts[currentIndex];
    currentIndex = (currentIndex + 1) % dynamicTexts.length;
}

setInterval(updateRollingText, 2000); // Change text every 2 seconds
});
