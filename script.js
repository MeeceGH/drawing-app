const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const decreaseEl = document.getElementById('decrease');
const increaseEl = document.getElementById('increase');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let isPressed = false;
let size = 20;
let color = 'black';
let x;
let y;

decreaseEl.addEventListener('click', () => {
    if (size <= 5) {
        size = 5;
    } else {
        size -= 5;
    };
    
    updateSizeText();
})

increaseEl.addEventListener('click', () => {
    if (size >= 50) {
        size = 50;
    } else {
        size += 5;
    };
    
    updateSizeText();
})

colorEl.addEventListener('focusout', () => {
    color = colorEl.value;
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, 700, 400);
})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', () => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    };
})

function updateSizeText() {
    sizeEl.textContent = size;
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

