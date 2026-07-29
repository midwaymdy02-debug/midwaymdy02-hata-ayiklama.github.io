// Hacker yazı animasyonu
const text = "MIDWAY // CYBER SYSTEM";
const title = document.querySelector(".hacker-text");

let index = 0;

function yazdir() {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(yazdir, 100);
    }
}

window.onload = () => {
    yazdir();
};


// Terminal mesajları
const messages = [
    "Connecting to secure server...",
    "Bypassing firewall...",
    "Encrypting data...",
    "Access granted.",
    "Welcome Midway."
];

const terminal = document.querySelector(".terminal");

let msgIndex = 0;

function terminalYaz() {
    if (!terminal) return;

    if (msgIndex < messages.length) {
        terminal.innerHTML += 
        `<p>> ${messages[msgIndex]}</p>`;

        msgIndex++;
        setTimeout(terminalYaz, 1200);
    }
}

terminalYaz();


// Dijital glitch efekti
setInterval(() => {
    const body = document.body;

    body.classList.add("glitch");

    setTimeout(() => {
        body.classList.remove("glitch");
    }, 150);

}, 4000);


// Mouse takip efekti
document.addEventListener("mousemove", (e) => {
    const glow = document.querySelector(".cursor-glow");

    if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    }
});
// MATRIX EFFECT

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&";
const chars = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text = chars[Math.floor(Math.random() * chars.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01MIDWAYHACKER";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for(let i = 0; i < columns; i++){
    drops[i] = 1;
}

function draw(){
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){
        const text = letters[Math.floor(Math.random()*letters.length)];

        ctx.fillText(text, i*fontSize, drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 35);
