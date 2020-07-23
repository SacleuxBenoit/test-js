// getElementById

let liste = document.getElementById("liste")
let firstParagraphe = document.getElementById("firstParagraphe")

// createElement

let newButton = document.createElement("button")
let newP = document.createElement("p");

// createTextNode

let prep = document.createTextNode('Utilisation de prepend')
let app = document.createTextNode('Utilisation de append')
let appChild = document.createTextNode('Utilisation de appendChild')
newP.textContent = "New paragraph"

// Test

liste.prepend(prep)
liste.append(app)
liste.appendChild(prep)

firstParagraphe.append(newP)
firstParagraphe.prepend(newButton)