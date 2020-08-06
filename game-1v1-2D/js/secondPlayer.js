function reduceLifeP2(min, max){
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLife = lifeP2 -= random;
    showLifeP2.textContent = currentLife + " %";
    console.log(currentLife);

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