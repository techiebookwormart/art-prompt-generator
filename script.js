function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generatePrompt() {
    const subject = getRandomItem(subjects);
    const composition = getRandomItem(compositions);
    const palette = getRandomItem(palettes);

    const output = document.getElementById("prompt-output");

    output.innerHTML = `
    <h2>Your Art Prompt</h2>

    <div class="prompt-card">
        <h3>Subject</h3>

        <div class="image-placeholder">
            Reference Image
        </div>

        <p class="prompt-result">${subject.title}</p>

        <a class="source-link"
           href="${subject.sourceUrl}"
           target="_blank">
            ${subject.sourceLabel}
        </a>
    </div>

    <div class="prompt-card">
        <h3>Composition</h3>

        <div class="image-placeholder">
            Reference Image
        </div>

        <p class="prompt-result">${composition.title}</p>

        <a class="source-link"
           href="${composition.sourceUrl}"
           target="_blank">
            ${composition.sourceLabel}
        </a>
    </div>

    <div class="prompt-card">
        <h3>Color Palette</h3>

        <div class="image-placeholder">
            Reference Image
        </div>

        <p class="prompt-result">${palette.title}</p>

        <a class="source-link"
           href="${palette.sourceUrl}"
           target="_blank">
            ${palette.sourceLabel}
        </a>
    </div>
`;
}
