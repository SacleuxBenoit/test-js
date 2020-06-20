// While

let i = 10;

while(i > 0){
    alert(i--)
} // Fait un décompte et affiche 10,9,8,7,6,5,4,3,2,1

while(i > 0) alert(i--)

// do while

do{
    alert(i--)
}while(i > 0)

// Comparaison entre while ... et do wile
let Country = "USA";

do{
    alert("Bienvenue en Amérique")
}while(Country === "France") // Affiche quand même "Bienvenue en Amérique" car la boucle est exécuté 1 fois avant d'évaluer while

while(Country === "USA"){
    alert("Bienvenue en Amérique") // N'affiche pas "Bienvenue en Amérique "
}

// La boucle For

let arr = [2, 4, 6]

for(let n = 0; n < arr.length; n++){
    alert(n) // Affiche 0, 1, 2
}

// Enlever une partie de la boucle for

let arr = [2, 4, 6];
let n = 0;

for(; n < arr.length; n++){
    alert(n) // fait la même chose qu'au dessus
}
let arr = [2, 4, 6];
let i = 0;

for(; i < arr.length;){
    alert(i++) // Affiche 0,1,2
}

// for... in

let array = ["this", "is", "a", "test"]

for(let arrays in array){
    alert(arrays) // Affiche 0,1,2,3
}

// for... of

let array = ["this", "is", "a", "test"]
for(let arrays of array){
    alert(arrays) // Affiche "this", "is", "a", "test"
}