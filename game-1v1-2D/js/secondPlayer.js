let disabledQuickAttackP2 = document.getElementById("disabledQuickAttackP2");
let disabledSlowAttackP2 = document.getElementById("disabledSlowAttackP2");
let disabledHealP2 = document.getElementById("disabledHealP2");

let manaP2 = 100;

function reduceLifeP2(min, max, reduceMana){
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLifeP1 = lifeP1 -= random;

    manaP2 -= reduceMana;
    showManaP2.textContent = manaP2 + " %";
    showLifeP1.textContent = currentLifeP1 + " %";

        if(currentLifeP1 <= 75){
            showLifeP1.style.background = "orange"
        }
        if(currentLifeP1 <= 25){
            showLifeP1.style.background = "red"
        }
        if(currentLifeP1 <= 0){
            result.textContent = "Le joueur 2 a gagné.";
            disabledQuickAttackP2.disabled = true;
            disabledSlowAttackP2.disabled = true;
            disabledHealP2.disabled = true;
            disabledQuickAttackP1.disabled = true;
            disabledSlowAttackP1.disabled = true;
            disabledHealP1.disabled = true;
            showLifeP1.textContent = " 0 %"
    }
    verifyManaP2();
}

function verifyManaP2(){
    if(manaP2 <= 9){
        disabledSlowAttackP2.disabled = true;
    }
}

function quickAttackP2(){
    reduceLifeP2(6, 12, 0);
}

function slowAttackP2(){
    reduceLifeP2(1, 5, 10);
}

function healP2(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLifeP2 = lifeP2 += random;
    showLifeP2.textContent = currentLifeP2 + " %";
    console.log(currentLifeP2);

    if(currentLifeP2 >= 100){
        disabledHealP2.disabled = true
    }
}