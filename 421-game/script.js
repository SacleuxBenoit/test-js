function firstButton(){
    console.log(Math.floor(Math.random() * (6 - 1 + 1)) + 1)
}

function secondButton(){
    console.log(Math.floor(Math.random() * (6 - 1 + 1)) + 1)
}

function thirdButton(){
    console.log(Math.floor(Math.random() * (6 - 1 + 1)) + 1)
}

function everyButton(){
    firstButton(); secondButton();thirdButton()
}