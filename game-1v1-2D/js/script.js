let showLifeP1 = document.getElementById("showLifeP1");
let showLifeP2 = document.getElementById("showLifeP2");
let result = document.getElementById("result");


let lifeP1 = 100;
let lifeP2 = 100;

function redirection(){
    document.location.href="Game/game.html";
}

showLifeP1.textContent = lifeP1 + "%";
showLifeP2.textContent = lifeP2 + "%";

function resetP1(){
    disabledQuickAttackP1.disabled = false;
    disabledSlowAttackP1.disabled = false;
    disabledHealP1.disabled = false;
    lifeP2 = 100
    showLifeP2.textContent = 100 + " %"
}

function resetP2(){
    disabledQuickAttackP2.disabled = false;
    disabledSlowAttackP2.disabled = false;
    disabledHealP2.disabled = false;
    lifeP1 = 100
    showLifeP1.textContent = 100 + " %"
}

function reset(){
    resetP1();
    resetP2();
}