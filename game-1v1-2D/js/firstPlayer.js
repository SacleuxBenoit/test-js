let disabledQuickAttackP1 = document.getElementById("disabledQuickAttackP1");
let disabledSlowAttackP1 = document.getElementById("disabledSlowAttackP1");
let disabledHealP1 = document.getElementById("disabledHealP1");

function reduceLifeP1(min, max){
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLife = lifeP2 -= random;
    showLifeP2.textContent = currentLife + " %";

    if(currentLife <= 0){
        result.textContent = "Le joueur 1 à gagné.";
        disabledQuickAttackP1.disabled = true;
        disabledSlowAttackP1.disabled = true;
        disabledHealP1.disabled = true;
        showLifeP2.textContent = " 0 %"
    }
}

function quickAttackP1(){
    reduceLifeP1(6, 12);
}

function slowAttackP1(){
    reduceLifeP1(1, 20);
}

function healP1(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLife = lifeP1 += random;
    showLifeP1.textContent = currentLife + " %";
    console.log(currentLife);
}