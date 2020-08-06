function quickAttackP2(){
    reduceLife(6, 12);
}

function slowAttackP2(){
    reduceLife(1, 20);
}

function healP2(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLife = lifeP1 += random;
    showLifeP1.textContent = currentLife + " %";
    console.log(currentLife);
}