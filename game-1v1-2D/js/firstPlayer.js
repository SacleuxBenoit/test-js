function reduceLifeP1(min, max){
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLife = lifeP1 -= random;
    showLifeP1.textContent = currentLife + " %";
    console.log(currentLife);

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

