/* ==========================
   Yazı Yazma Animasyonu
========================== */

const texts = [
    "Welcome To My World",
    "Python Developer",
    "Minecraft Developer",
    "Web Developer",
    "Midway"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function animateText(){

    const current = texts[textIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(animateText,1500);

            return;
        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            textIndex++;

            if(textIndex >= texts.length){

                textIndex = 0;

            }

        }

    }

    setTimeout(animateText,deleting ? 40 : 90);

}

animateText();



/* ==========================
   Kan Damlaları
========================== */

function createBlood(){

    const drop = document.createElement("div");

    drop.style.position="fixed";

    drop.style.left=Math.random()*window.innerWidth+"px";

    drop.style.top="-30px";

    drop.style.width=(4+Math.random()*8)+"px";

    drop.style.height=(20+Math.random()*80)+"px";

    drop.style.background="red";

    drop.style.borderRadius="50px";

    drop.style.boxShadow="0 0 15px red";

    drop.style.opacity=.8;

    drop.style.pointerEvents="none";

    drop.style.zIndex="9999";

    document.body.appendChild(drop);

    let y=-50;

    const speed=2+Math.random()*4;

    function fall(){

        y+=speed;

        drop.style.top=y+"px";

        if(y<window.innerHeight+100){

            requestAnimationFrame(fall);

        }else{

            drop.remove();

        }

    }

    fall();

}

setInterval(createBlood,250);



/* ==========================
   Fareyi Takip Eden Işık
========================== */

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="250px";

glow.style.height="250px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background="radial-gradient(circle, rgba(255,0,0,.25), transparent 70%)";

glow.style.transform="translate(-50%,-50%)";

glow.style.zIndex="9998";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});
