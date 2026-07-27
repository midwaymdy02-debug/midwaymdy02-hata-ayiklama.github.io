const texts = [
    "Python Developer",
    "Minecraft Developer",
    "Web Developer",
    "Midway"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

            setTimeout(type, 500);

        }, 1500);

    } else {

        setTimeout(type, 100);

    }

})();
