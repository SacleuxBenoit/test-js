let showLifeP1 = document.getElementById("showLifeP1");
let showLifeP2 = document.getElementById("showLifeP2");

let lifeP1 = 100;
let lifeP2 = 100;

function redirection(){
    document.location.href="Game/game.html";
}

showLifeP1.textContent = lifeP1 + "%";
showLifeP2.textContent = lifeP2 + "%";