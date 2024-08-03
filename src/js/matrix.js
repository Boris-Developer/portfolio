const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth * 0.986;
canvas.height = window.innerHeight;

// Characters to display
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charArray = characters.split('');

// Set the font style and size
const fontSize = 16;
ctx.font = `${fontSize}px monospace`;

// Calculate columns and rows
const columns = canvas.width / fontSize;
const rows = canvas.height / fontSize;

// Array to store the Y position of each column
const drops = [];

// Initialize drops position
for (let i = 0; i < columns; i++) {
drops[i] = 1;
}

function draw() {
    // Set background color
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text color
    ctx.fillStyle = '#003840';

    // Loop through each column
    for (let i = 0; i < drops.length; i++) {
        // Randomly reset drops to create the scrolling effect
        if (Math.random() > 0.95) {
        drops[i] = 0;
        }

        // Draw characters
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Increment the Y position for the next frame
        drops[i]++;
    }
}

function update() {
    draw();
    requestAnimationFrame(update);
}

// Start the animation
setInterval(draw, 60);

// Resize canvas when the window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});




