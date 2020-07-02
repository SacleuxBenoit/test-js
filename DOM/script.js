let loremId = document.getElementById("firstLoremId");
let testParent = document.getElementById("testParent");
let divs = document.getElementsByTagName('div')

testParent.style.color="blue"
loremId.style.color = "purple";

// alert(divs.length)

function changeColor(newColor){
    let elem = document.getElementById("divColored");
    elem.style.color = newColor
}