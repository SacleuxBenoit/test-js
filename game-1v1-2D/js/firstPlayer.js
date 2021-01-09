let disabledQuickAttackP1 = document.getElementById("disabledQuickAttackP1");
let disabledSlowAttackP1 = document.getElementById("disabledSlowAttackP1");
let buttonExecution = document.getElementById("buttonExecution");
let disabledHealP1 = document.getElementById("disabledHealP1");

let mana = 100;

function reduceLifeP1(min, max){
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLifeP2 = lifeP2 -= random;

    mana -= 10;
    showManaP1.textContent = mana + " %";
    showLifeP2.textContent = currentLifeP2 + " %";

    if(currentLifeP2 <= 75 && currentLifeP2 >= 26){
        showLifeP2.style.background = "orange"
        console.log(currentLifeP2)
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
    verifyMana()
}

function verifyMana(){
    if(mana <= 0){
        disabledQuickAttackP1.disabled = true;
        disabledSlowAttackP1.disabled = true;
        disabledHealP1.disabled = true;
        buttonExecution.disabled = true;
    }
}

function quickAttackP1(){
    reduceLifeP1(6, 12);
}

function slowAttackP1(){
    reduceLifeP1(1, 20);
}

function exec(){
    reduceLifeP1(25,25)
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