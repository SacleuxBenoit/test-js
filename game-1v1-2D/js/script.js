let showLifeP1 = document.getElementById("showLifeP1");
let showLifeP2 = document.getElementById("showLifeP2");

let showManaP1 = document.getElementById("showManaP1");
let showManaP2 = document.getElementById("showManaP2");

let result = document.getElementById("result");


let lifeP1 = 100;
let lifeP2 = 100;

let manaP1 = 100;
let manaP2 = 100;

function redirection(){
    document.location.href="Game/game.html";
}

showLifeP1.textContent = lifeP1 + " %";
showLifeP2.textContent = lifeP2 + " %";

showManaP1.textContent = manaP1 + " %";
showManaP2.textContent = manaP2 + " %";

function resetP1(){
    disabledQuickAttackP1.disabled = false;
    disabledSlowAttackP1.disabled = false;
    disabledHealP1.disabled = false;
    lifeP2 = 100;
    showLifeP2.textContent = 100 + " %";
    showLifeP2.style.background = "greenyellow";
    buttonExecution.disabled = true
}

function resetP2(){
    disabledQuickAttackP2.disabled = false;
    disabledSlowAttackP2.disabled = false;
    disabledHealP2.disabled = false;
    lifeP1 = 100;
    showLifeP1.textContent = 100 + " %";
    showLifeP1.style.background = "greenyellow"
}

function reset(){
    resetP1();
    resetP2();
    result.textContent = " "
}