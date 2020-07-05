// fonction sans arguments

function conversion(){
    let message= prompt("Entrez la valeur en miles");
    let resultat = message * 1.60934;
    alert(message + " miles est égal à " + resultat + " Km")
}

conversion()

// fonction avec argument

function convertisseur(change){
    let miles = prompt("Entrez votre valeur en miles");
    let result = miles * change;
    alert(miles + " miles est égal à " + result + " Km")
}

convertisseur(1.60934)

// fonciton avec plusieurs arguments 

function convertisseur(miles, change){
    let result = miles * change;
    alert(miles + " miles est égal à " + result + " Km")
}

convertisseur(2,.60934)


// Exemple d'utilisation avec !NOT

let a = 2

if(a != 2){
    console.log("La valeur est différent de 2")
}{
    console.log("La valeur est égal à 2")
}

// Exemple d'utilisation avec un double NOT 

alert(!!"un stirng non vide")
alert(!!"")

// Test avec "symbol"

let Symb1 = Symbol(1);
let Symb2 = Symbol("Copy");
let Symb3 = Symbol("Copy");

alert(Symbol("Copy") === Symbol("Copy")) // false

alert(Symb2.toString()) // Symbol(Copy)

alert(typeof Symb1) // symbol