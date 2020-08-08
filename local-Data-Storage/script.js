// Ajouter un élément
sessionStorage.setItem("couleur", "bleu");
let color = sessionStorage.getItem("couleur")
console.log(color) // bleu


sessionStorage.setItem("color", "rouge", "vert", "bleu");
let mutipleColor = sessionStorage.getItem("color");
console.log(mutipleColor) // rouge


// Supprimer un élément

let removeColor = sessionStorage.removeItem("color")
console.log(removeColor) // undefined


sessionStorage.clear(); // Supprime toutes les valeurs de session