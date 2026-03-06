// ========== ANIMATE ASCII LETTERS ==========
// Split ASCII text into individual letters for floating animation
function animateAsciiLetters() {
    const asciiContainer = document.querySelector('.animated-ascii');
    if (!asciiContainer) return;
    
    const text = asciiContainer.textContent;
    let html = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
            html += ' ';
        } else if (char === '\n') {
            html += '\n';
        } else {
            html += `<span style="--char-index: ${i}">${char}</span>`;
        }
    }
    
    asciiContainer.innerHTML = html;
}

// Call the function when page loads
window.addEventListener('load', function() {
    animateAsciiLetters();
    
    // ... existing loading code ...
});