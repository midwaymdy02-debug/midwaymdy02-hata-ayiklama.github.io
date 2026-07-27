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
