let disabledQuickAttackP1 = document.getElementById("disabledQuickAttackP1");
let disabledSlowAttackP1 = document.getElementById("disabledSlowAttackP1");
let buttonExecution = document.getElementById("buttonExecution");
let disabledHealP1 = document.getElementById("disabledHealP1");

let manaP1 = 100;

function reduceLifeP1(min, max, reduceMana){
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLifeP2 = lifeP2 -= random;
    manaP1 -= reduceMana;

    showManaP1.textContent = manaP1 + " %";
    showLifeP2.textContent = currentLifeP2 + " %";

    if(currentLifeP2 <= 75 && currentLifeP2 >= 26){
        showLifeP2.style.background = "orange"
        disabledHealP2.disabled = false;
    }
    if(currentLifeP2 <= 25 && currentLifeP2 >= 1){
        showLifeP2.style.background = "red"
        buttonExecution.disabled = false
    }
    if(currentLifeP2 <= 0){
        result.textContent = "Le joueur 1 a gagné.";
        disabledQuickAttackP1.disabled = true;
        disabledSlowAttackP1.disabled = true;
        disabledHealP1.disabled = true;
        disabledQuickAttackP2.disabled = true;
        disabledSlowAttackP2.disabled = true;
        disabledHealP2.disabled = true;
        buttonExecution.disabled = true;
        showLifeP2.textContent = " 0 %"
    }
    verifyManaP1();
    nextPlayerP1();
}

function verifyManaP1(){
    if(manaP1 <= 9){
        buttonExecution.disabled = true;
        disabledSlowAttackP1.disabled = true;
    }
}

function quickAttackP1(){
    reduceLifeP1(6, 12, 0);
}

function slowAttackP1(){
    reduceLifeP1(1, 20, 10);
}

function exec(){
    reduceLifeP1(25,25, 20)
}

function healP1(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLifeP1 = lifeP1 += random;
    showLifeP1.textContent = currentLifeP1 + " %";

    if(currentLifeP1 >= 100){
        disabledHealP1.disabled = true
    }
}

function nextPlayerP1(){
    firstTitle.textContent = "Au tour du joueur 2"
    disabledQuickAttackP1.disabled = true;
    disabledSlowAttackP1.disabled = true;
    disabledHealP1.disabled = true;
    buttonExecution.disabled = true;

    disabledQuickAttackP2.disabled = false;
    disabledSlowAttackP2.disabled = false;
    disabledHealP2.disabled = false;
}