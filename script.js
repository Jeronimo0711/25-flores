
//ESTRELLAS//

const COLORS = ["#f5f7ff", "#c084fc", "#7aa2ff"]

const generateSpaceLayer = (size, selector, duration) => {

    const layer = [];
    const totalStars = 8;
    for(let i=0; i < totalStars; i++){
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y - 100}vh 0 ${color} `);
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
}

generateSpaceLayer("2px", ".space-1", "21.4s");
generateSpaceLayer("4px", ".space-2", "33.4s");
generateSpaceLayer("6px", ".space-3", "45.4s");

//ESTRELLAS//

//TODAS LAS FUNCIONES DEL BOTON//

let audioIniciado = false;
function handleOnClick(event) {
    event.stopPropagation();

    if (audioIniciado) return;
    audioIniciado = true;

    alert(' Mis 25 flores para ti :) \n Con MUCHO esfuerzo y amor de parte de Jero \n Te quiero mucho 💜'

    );
    const audio = document.getElementById("audio");
    audio.volume = 0.6;
    audio.play();
    const boton = document.getElementById("miboton");
    const texto = document.getElementById("mensaje");

    boton.style.display = "none";

    texto.classList.add("activo");
}

//TODAS LAS FUNCIONES DEL BOTON//
