// Test sur la partie Special-characters pour mes cheat sheets

// Echapper le single quote

// Erreur

let orcs = 'Je suis un orc Mag'har';
console.log(orcs) // SyntaxError: Unexpected identifier 'har'. Expected ';' after variable declaration.

// Sans d'erreur

let orc = 'Je suis un orc Mag\'har'
console.log(orc) // Je suis un orc Mag'har

// Echapper le double quote

// Erreur

let herboriste = "Je ramasse de la zin"anthide";
console.log(herboriste) // SyntaxError: Unexpected identifier 'anthide'. Expected ';' after variable declaration.

// Sans d'erreur

let herbo = "Je ramasse de la zin\"anthide"
console.log(herbo) // Je ramasse de la zin"anthide