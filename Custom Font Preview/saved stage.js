
document.addEventListener('DOMContentLoaded', function () {
    const variableValueInput = document.getElementById('variableValue');
    const otValueInput = document.getElementById('otValue');
    const variableLegend = document.querySelector('.variable');
    const openTypeLegend = document.querySelector('.openType');
    const fontUploadInput = document.getElementById('fontUpload');
    const artboard = document.querySelector('.artboard');
    const darkModeButton = document.getElementById('darkModeButton');
    const main = document.querySelector('main');
    const sizeInput = document.getElementById('size');
    const lineHeightInput = document.getElementById('lineHeight');
    const spacingInput = document.getElementById('spacing');
    const textAlignButtons = document.querySelectorAll('.align');
    const textColorInput = document.getElementById('textColor');
    const typeSentence = document.querySelector('.typeSentence');
    const baseTextSizeInput = document.getElementById('baseText');
    const fontScaleSelect = document.querySelector('.fontScale');
    const artboarding = document.querySelector('.two.artboard');
    const baseCountInput = document.getElementById('baseCount');
    const artboardColorInput = document.getElementById('artboardColor'); 
    const sectionBoard = document.querySelectorAll('section.artboard');
    sectionBoard.forEach(section => {
        section.style.backgroundColor = artboardColorInput.value;
    });

    //diferent
    const responsiveButtons = document.querySelectorAll('.responsive button');
    const zoomObject = document.querySelector('.container.leftside');
    const zoomRange = document.getElementById('zoom');
    //different stop

    sizeInput.addEventListener('input', applyTypographyStyles);
    lineHeightInput.addEventListener('input', applyTypographyStyles);
    spacingInput.addEventListener('input', applyTypographyStyles);
    textAlignButtons.forEach(button => {
        button.addEventListener('click', applyTypographyStyles);
    });
    textColorInput.addEventListener('input', applyTypographyStyles);
    textColorInput.addEventListener('input', function () {
        sectionBoard.forEach(section => {
            const contentElements = section.querySelectorAll('.clickable-text');
            contentElements.forEach(element => {
                element.style.color = textColorInput.value;
            });
        });
    });
    artboardColorInput.addEventListener('input', function () {
        sectionBoard.forEach(section => {
            section.style.backgroundColor = artboardColorInput.value;
        });
    });
    function applyTypographyStyles() {
        const fontSize = `${sizeInput.value}px`;
        const lineHeight = lineHeightInput.value;
        const letterSpacing = `${spacingInput.value}px`;
        const textAlign = document.querySelector('.align.active')?.getAttribute('name') || 'left';
        const textColor = textColorInput.value;
        typeSentence.style.fontSize = fontSize;
        typeSentence.style.lineHeight = lineHeight;
        typeSentence.style.letterSpacing = letterSpacing;
        typeSentence.style.textAlign = textAlign;
        typeSentence.style.color = textColor;
        artboarding.style.color = textColor;

    }

    textAlignButtons.forEach(button => {
        button.addEventListener('click', function () {
            textAlignButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyTypographyStyles();
        });
    });


    //diferent
    darkModeButton.addEventListener('click', function () {
        main.classList.toggle('dark-mode');
    });
    //diferent

    fontUploadInput.addEventListener('change', function () {
        const selectedFontFile = fontUploadInput.files[0];
        const fontUrl = URL.createObjectURL(selectedFontFile);
        artboard.style.fontFamily = `custom-font, sans-serif`; // Use a fallback font
        artboarding.style.fontFamily = `custom-font, sans-serif`; // Use a fallback font

        const customFont = new FontFace('custom-font', `url(${fontUrl})`);
        customFont.load().then((font) => {
            document.fonts.add(font);
            artboard.style.fontFamily = 'custom-font, sans-serif';
            artboarding.style.fontFamily = 'custom-font, sans-serif';
        });
    });
    let activeOpentypeFeatures = [];
    variableValueInput.addEventListener('input', function () {
        const variableValues = variableValueInput.value.split(', ');
        variableLegend.innerHTML = `
            <label for="variable">Variable</label>
            ${variableValues.map(value => `<input type="range" class="variable" name="${value}" id="${value}" min="100" max="700">`).join('')}
        `;

        variableValues.forEach(value => {
            const inputRange = document.getElementById(value);
            if (inputRange) {
                inputRange.addEventListener('input', function () {
                    applyVariableSettings(variableValues);
                });
            }
        });
    });

    otValueInput.addEventListener('input', function () {
        const otValues = otValueInput.value.split(', ');
        openTypeLegend.innerHTML = `
            <label for="openType">Opentype</label>
            ${otValues.map(value => `<button class="openType" name="${value}">${value}</button>`).join('')}
        `;

        otValues.forEach(value => {
            const opentypeButton = document.querySelector(`.openType[name="${value}"]`);
            opentypeButton.addEventListener('click', function () {
                toggleOpentypeSetting(value);
            });
        });
    });

    function applyVariableSettings(variableValues) {
        const variableSettings = variableValues.map(value => `"${value}" ${document.getElementById(value).value}`).join(', ');
        typeSentence.style.fontVariationSettings = variableSettings;
    }

    function toggleOpentypeSetting(value) {
        if (activeOpentypeFeatures.includes(value)) {
            activeOpentypeFeatures = activeOpentypeFeatures.filter(feature => feature !== value);
        } else {
            activeOpentypeFeatures.push(value);
        }
        typeSentence.style.fontFeatureSettings = activeOpentypeFeatures.map(feature => `"${feature}" 1`).join(', ');
        updateOpentypeButtons();
    }

    function updateOpentypeButtons() {
        const opentypeButtons = document.querySelectorAll('.openType');
        opentypeButtons.forEach(button => {
            if (activeOpentypeFeatures.includes(button.getAttribute('name'))) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    const storedTextContent = []; // Array to store text content

    function generateTypeWaterfall() {
        artboarding.innerHTML = '';

        const baseTextSize = parseFloat(baseTextSizeInput.value);
        const fontScaleRatio = parseFloat(fontScaleSelect.value);
        const baseCount = parseInt(baseCountInput.value);

        for (let i = 0; i < baseCount; i++) {
            const fontSize = baseTextSize * Math.pow(fontScaleRatio, i);
            const roundedFontSize = fontSize.toFixed(2);
            const pElement = document.createElement('div');
            const currentTextContent = storedTextContent[i] || 'ᬧᬲᬂᬧᬕᭂᬄ᭟ ᬰᬲ᭄ᬢ᭄ᬭ᭟ ᬯ᭄ᬬᬜ᭄ᬚᬦ᭟ ᬅᬦᬸᬦᬵᬰᬶᬓ᭟ ᬑᬱ᭄ᬝ᭄ᬬ᭟';
            pElement.classList.add('waterfall');
            pElement.style.fontSize = `${fontSize}em`;
            pElement.innerHTML = `<span>${roundedFontSize}em</span><p contenteditable="true">${currentTextContent}</p>`;
            artboarding.appendChild(pElement);

            const textContentElement = pElement.querySelector('p');
            storedTextContent[i] = storedTextContent[i] || textContentElement.textContent; // Store text content

            textContentElement.addEventListener('input', function () {
                const newTextContent = textContentElement.textContent;
                storedTextContent[i] = newTextContent; // Update stored text content
                document.querySelectorAll('.waterfall p').forEach(element => {
                    element.textContent = newTextContent;
                });
            });
        }
    }

    baseTextSizeInput.addEventListener('input', generateTypeWaterfall);
    fontScaleSelect.addEventListener('change', generateTypeWaterfall);
    baseCountInput.addEventListener('input', generateTypeWaterfall);

    // Initial generation
    generateTypeWaterfall();

    responsiveButtons.forEach(button => {
        button.addEventListener('click', function () {
            const newWidth = button.getAttribute('data-width') + 'px';
            const newHeight = button.getAttribute('data-height') + 'px';
            const newPadding = button.getAttribute('data-padding') + 'em';
            sectionBoard.forEach(sectionBoard => {
                sectionBoard.style.width = newWidth;
                sectionBoard.style.height = newHeight;
                sectionBoard.style.padding = newPadding;
            });
        });
    });
    
    zoomRange.addEventListener('input', function () {
        const scale = zoomRange.value;
        zoomObject.style.transform = `scale(${scale})`;
    });

    //End of everything//
});

