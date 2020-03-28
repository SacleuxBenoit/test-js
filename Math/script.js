// Test d'utilisation avec Math() pour mes cheat sheets

// Math.floor et Math.random : 

function entierAleatoire(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const entier = entierAleatoire(1,10);
console.log(entier)

// Math.min()
console.log(Math.min(-3, 2, 9))