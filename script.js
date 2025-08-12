const button = document.getElementById('colorBtn');
const colorDisplay = document.getElementById('colorCode');
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
button.addEventListener('click', function() {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;
});

