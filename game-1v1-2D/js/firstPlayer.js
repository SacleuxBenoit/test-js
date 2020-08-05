let showLifeP1 = document.getElementById("showLifeP1")
let showLifeP2 = document.getElementById("showLifeP2")

let lifeP1 = 100;
let lifeP2 = 100;

function redirection(){
    document.location.href="Game/game.html"
}

function quickAttackP1(){
    let min = 6;
    let max = 12;
    let random = Math.floor((Math.random() * (max - min) + min))
    let currentLife = lifeP1 -= random
    showLifeP1.textContent = currentLife + " %"
    console.log(currentLife)

}

function slowAttackP1(){
    let min = 1;
    let max = 20;
    let random = Math.floor((Math.random() * (max - min) + min))
    let currentLife = lifeP1 -= random
    showLifeP1.textContent = currentLife + " %"
    console.log(currentLife)

}

function healP1(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min))
    let currentLife = lifeP1 += random
    showLifeP1.textContent = currentLife + " %"
    console.log(currentLife)
}

showLifeP1.textContent = lifeP1 + "%";
showLifeP2.textContent = lifeP2 + "%";
