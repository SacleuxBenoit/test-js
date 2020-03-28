// Test d'utilisation avec Math() pour mes cheat sheets

// Math.floor et Math.random : 

function entierAleatoire(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const entier = entierAleatoire(1,10);
console.log(entier) // Affiche un nombre aléatoire entre 1 et 10
// Math.min()
console.log(Math.min(-3, 2, 9)) // Affiche -3 dans la console 

// Math.max()
console.log(Math.max(4,919,3)) // Affiche 919 dans la console 