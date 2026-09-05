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

        <h3>Subject</h3>
        <p>
            <a href="${subject.sourceUrl}" target="_blank">
                ${subject.title}
            </a>
        </p>

        <h3>Composition</h3>
        <p>
            <a href="${composition.sourceUrl}" target="_blank">
                ${composition.title}
            </a>
        </p>

        <h3>Color Palette</h3>
        <p>
            <a href="${palette.sourceUrl}" target="_blank">
                ${palette.title}
            </a>
        </p>
    `;
}
