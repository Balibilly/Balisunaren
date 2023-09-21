const toolbox = document.getElementById('toolbox');
const fontSizeInput = document.getElementById('fontSize');
const lineHeightInput = document.getElementById('lineHeight');
const letterSpacingInput = document.getElementById('letterSpacing');
const textColorInput = document.getElementById('textColor');
const alignLeftButton = document.getElementById('alignLeft');
const alignCenterButton = document.getElementById('alignCenter');
const alignRightButton = document.getElementById('alignRight');
const alignJustifyButton = document.getElementById('alignJustify');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const variableValueInput = document.getElementById('variableValue');
const otValueInput = document.getElementById('otValue');
const fontUploadInput = document.getElementById('fontUpload');
const editableTextElements = document.querySelectorAll('.clickable-text');

let activeOpentypeFeatures = [];

document.querySelectorAll('.clickable-text').forEach(element => {
    element.addEventListener('mousedown', (event) => {
        event.stopPropagation();
        toolbox.style.display = 'block';
        toolbox.style.top = (element.offsetTop + 100) + 'px';
        toolbox.style.left = (element.offsetLeft + element.clientHeight + 100) + 'px';
        fontSizeInput.value = parseInt(window.getComputedStyle(element).fontSize) || '';
        lineHeightInput.value = parseInt(window.getComputedStyle(element).lineHeight) || '';
        letterSpacingInput.value = parseInt(window.getComputedStyle(element).letterSpacing) || '';
        textColorInput.value = rgbToHex(window.getComputedStyle(element).color);
        alignLeftButton.classList.toggle('active', element.style.textAlign === 'left');
        alignCenterButton.classList.toggle('active', element.style.textAlign === 'center');
        alignRightButton.classList.toggle('active', element.style.textAlign === 'right');
        alignJustifyButton.classList.toggle('active', element.style.textAlign === 'justify');
        italicButton.classList.toggle('active', element.style.fontStyle === 'italic');
        underlineButton.classList.toggle('active', element.style.textDecoration === 'underline');

        fontSizeInput.oninput = () => {
            element.style.fontSize = fontSizeInput.value + 'px';
        };

        lineHeightInput.oninput = () => {
            element.style.lineHeight = lineHeightInput.value;
        };

        letterSpacingInput.oninput = () => {
            element.style.letterSpacing = letterSpacingInput.value + 'px';
        };

        textColorInput.oninput = () => {
            element.style.color = textColorInput.value;
        };

        alignLeftButton.onclick = () => {
            element.style.textAlign = 'left';
        };

        alignCenterButton.onclick = () => {
            element.style.textAlign = 'center';
        };

        alignRightButton.onclick = () => {
            element.style.textAlign = 'right';
        };

        alignJustifyButton.onclick = () => {
            element.style.textAlign = 'justify';
        };

        italicButton.onclick = () => {
            element.style.fontStyle = element.style.fontStyle === 'italic' ? 'normal' : 'italic';
            italicButton.classList.toggle('active', element.style.fontStyle === 'italic');
        };

        underlineButton.onclick = () => {
            element.style.textDecoration = element.style.textDecoration === 'underline' ? 'none' : 'underline';
            underlineButton.classList.toggle('active', element.style.textDecoration === 'underline');
        };

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
                        <label for="openType">OpenType</label>
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
            element.style.fontVariationSettings = variableSettings;
        }

        function toggleOpentypeSetting(value) {
            if (activeOpentypeFeatures.includes(value)) {
                activeOpentypeFeatures = activeOpentypeFeatures.filter(feature => feature !== value);
            } else {
                activeOpentypeFeatures.push(value);
            }
            element.style.fontFeatureSettings = activeOpentypeFeatures.map(feature => `"${feature}" 1`).join(', ');
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
    });
});

document.addEventListener('mousedown', (event) => {
    if (!event.target.classList.contains('clickable-text') && !event.target.matches('#toolbox *')) {
        toolbox.style.display = 'none';
    }
});

function rgbToHex(rgb) {
    const parts = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete parts[0];
    for (let i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16).padStart(2, '0');
    }
    return '#' + parts.join('');
}




fontUploadInput.addEventListener('change', function () {
    const selectedFontFile = fontUploadInput.files[0];
    const fontUrl = URL.createObjectURL(selectedFontFile);
    const customFont = new FontFace('custom-font', `url(${fontUrl})`);

    customFont.load().then((font) => {
        document.fonts.add(font);
        document.querySelectorAll('.clickable-text').forEach(element => {
            element.style.fontFamily = 'custom-font, sans-serif';
        });
    });
});