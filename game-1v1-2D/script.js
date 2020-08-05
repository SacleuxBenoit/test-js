let showLifeP1 = document.getElementById("showLifeP1")
let showLifeP2 = document.getElementById("showLifeP2")

let lifeP1 = 100;
let lifeP2 = 100;

function redirection(){
    document.location.href="Game/game.html"
}

function quickAttack(){
    let min = 6;
    let max = 12;
    let random = Math.floor((Math.random() * (max - min) + min))
    let currentLife = lifeP1 -= random
    showLifeP1.textContent = currentLife + " %"

}

function slowAttack(){
    let min = 1;
    let max = 20;
    let random = (Math.floor((Math.random() * (max - min) + min)))


}

function heal(){
    let min = 8;
    let max = 11;
    console.log(Math.floor((Math.random() * (max - min) + min)))
}


showLifeP1.textContent = lifeP1 + "%";
showLifeP2.textContent = lifeP2 + "%";