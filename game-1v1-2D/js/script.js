let showLifeP1 = document.getElementById("showLifeP1");
let showLifeP2 = document.getElementById("showLifeP2");

let showManaP1 = document.getElementById("showManaP1");
let showManaP2 = document.getElementById("showManaP2");

let firstTitle = document.getElementById('firstTitle');
let result = document.getElementById("result");


let lifeP1 = 100;
let lifeP2 = 100;

function redirection(){
    document.location.href="Game/game.php";
}

function displayText(){
    firstTitle.textContent = "Le joueur 1 commence."

    showLifeP1.textContent = lifeP1 + " %";
    showLifeP2.textContent = lifeP2 + " %";
    
    showManaP1.textContent = 100 + " %";
    showManaP2.textContent = 100 + " %";
}

displayText();

function resetP1(){
    disabledQuickAttackP1.disabled = false;
    disabledSlowAttackP1.disabled = false;
    disabledHealP1.disabled = true;
    lifeP2 = 100;
    manaP2 = 100;
    showManaP2.textContent = manaP2 + " %";
    showLifeP2.textContent = lifeP2 + " %";
    showLifeP2.style.background = "greenyellow";
    buttonExecution.disabled = true
}

function resetP2(){
    disabledQuickAttackP2.disabled = false;
    disabledSlowAttackP2.disabled = false;
    disabledHealP2.disabled = true;
    lifeP1 = 100;
    manaP1 = 100;
    showManaP1.textContent = manaP1 + " %";
    showLifeP1.textContent = lifeP1 + " %";
    showLifeP1.style.background = "greenyellow"
}

function reset(){
    resetP1();
    resetP2();
    result.textContent = " "
}