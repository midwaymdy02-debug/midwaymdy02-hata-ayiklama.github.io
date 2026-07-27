const text = "Python Developer • Minecraft Developer";

let i = 0;

function type(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(type,80);

    }

}

type();
