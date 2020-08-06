let disabledQuickAttackP2 = document.getElementById("disabledQuickAttackP2");
let disabledSlowAttackP2 = document.getElementById("disabledSlowAttackP2");
let disabledHealP2 = document.getElementById("disabledHealP2");

function reduceLifeP2(min, max){
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLife = lifeP1 -= random;
    showLifeP1.textContent = currentLife + " %";

    if(currentLife <= 0){
        result.textContent = "Le joueur 2 à gagné.";
        disabledQuickAttackP2.disabled = true;
        disabledSlowAttackP2.disabled = true;
        disabledHealP2.disabled = true;
    }
}

function quickAttackP2(){
    reduceLifeP2(6, 12);
}

function slowAttackP2(){
    reduceLifeP2(1, 20);
}

function healP2(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLife = lifeP2 += random;
    showLifeP2.textContent = currentLife + " %";
    console.log(currentLife);
}