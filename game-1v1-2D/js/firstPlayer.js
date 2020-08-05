let showLifeP1 = document.getElementById("showLifeP1");
let showLifeP2 = document.getElementById("showLifeP2");

let lifeP1 = 100;
let lifeP2 = 100;

function redirection(){
    document.location.href="Game/game.html";
}

function quickAttackP1(){
    reduceLife(6, 12);
}

function slowAttackP1(){
    reduceLife(1, 20);
}

function healP1(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLife = lifeP1 += random;
    showLifeP1.textContent = currentLife + " %";
    console.log(currentLife);
}


function reduceLife(min, max){
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLife = lifeP1 -= random;
    showLifeP1.textContent = currentLife + " %";
    console.log(currentLife);

}

showLifeP1.textContent = lifeP1 + "%";
showLifeP2.textContent = lifeP2 + "%";
