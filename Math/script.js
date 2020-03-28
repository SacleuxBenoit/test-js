// Test d'utilisation avec Math() pour mes cheat sheets

// -------------------------- Math.floor et Math.random -------------------------- 

function entierAleatoire(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const entier = entierAleatoire(1,10);
console.log(entier) // Affiche un nombre aléatoire entre 1 et 10

// -------------------------- Math.min() --------------------------

console.log(Math.min(-3, 2, 9)) // Affiche -3 dans la console 

const array = [-4, 5, -3, 15]
console.log(Math.min(...array)); // Affiche -4 dans la console 

// -------------------------- Math.max() --------------------------

console.log(Math.max(4,919,3)) // Affiche 919 dans la console 

const arr = [-4, 5, -3, 15]
console.log(Math.max(...arr)); // Affiche 15 dans la console 

// -------------------------- Math.ceil() --------------------------

console.log(Math.ceil(7.015))

// -------------------------- Math.floor() --------------------------

console.log(Math.floor(7.915))

// -------------------------- Math.pow() --------------------------
console.log(Math.pow(4, 4)) // Affiche 256 dans la console = 4*4*4*4

// -------------------------- Math.round() --------------------------

console.log(Math.round(3.33)) // Affiche 3
console.log(Math.round(3.5)) // Affiche 4
console.log(Math.round(3.85)) // Affiche 4
console.log(Math.round(3.85*100)/100) // Affiche 3.85

// Si le paramètre n'est pas un nombre return NaN
