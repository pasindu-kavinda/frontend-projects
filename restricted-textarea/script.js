const characterLimit = 250;

const restrictedTextarea = document.getElementById('restricted-textarea');
const charCount = document.getElementById('char-count');
const charCountWrapper = document.querySelector('.char-count-wrapper');
const maxCharCount = document.getElementById('max-char-count');

maxCharCount.textContent = characterLimit;

restrictedTextarea.addEventListener('input', function() {
    const text = restrictedTextarea.value;
    const textLength = text.length;

    if (textLength > characterLimit) {
        restrictedTextarea.value = text.substring(0, characterLimit);
    }

    charCount.textContent = Math.min(textLength, characterLimit);

    if (textLength >= characterLimit) {
        restrictedTextarea.style.border = '2px solid #ff0000';
        charCountWrapper.style.color = '#ff0000';
    } else {
        restrictedTextarea.style.border = '2px solid #ccc';
        charCountWrapper.style.color = '#555';
    }
});