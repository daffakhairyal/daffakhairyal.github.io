document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nameForm');
    const resultContainer = document.getElementById('resultContainer');
    const toggleButton = document.getElementById('toggleButton');
    const backgroundAudio = document.getElementById('backgroundAudio');
    const results = ['Mie Glosor', 'Beruang Kutub', 'Biji Kurma', 'Kurama', 'Kulit Pisang', 'Harimau Jawa','Kuntilanak', 'Tuyul', 'Panci Gosong'];
    let isPlaying = true;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const randomResult = results[Math.floor(Math.random() * results.length)];

        // Remove any existing children inside the result container
        while (resultContainer.firstChild) {
            resultContainer.removeChild(resultContainer.firstChild);
        }

        // Create a new <p> element with the text "Khodam anda adalah"
        const resultParagraph = document.createElement('p');
        resultParagraph.textContent = "Khodam anda adalah";
        resultParagraph.className = "text-2xl mb-2 shadow-neon-red";

        // Create a new <h1> element with the random result
        const resultHeading = document.createElement('h1');
        resultHeading.textContent = randomResult;
        resultHeading.className = "text-3xl text-red-600";

        // Append the new <p> and <h1> to the result container
        resultContainer.appendChild(resultParagraph);
        resultContainer.appendChild(resultHeading);
    });

    // Toggle button event listener
    toggleButton.addEventListener('click', () => {
        if (isPlaying) {
            backgroundAudio.pause();
            toggleButton.textContent = 'Play';
        } else {
            backgroundAudio.play();
            toggleButton.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });
});
