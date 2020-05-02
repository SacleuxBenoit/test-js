// Test sur la partie Special-characters pour mes cheat sheets

// Echapper le single quote

// Erreur

//let orcs = 'Je suis un orc Mag'har';
//console.log(orcs) // SyntaxError: Unexpected identifier 'har'. Expected ';' after variable declaration.

// Sans erreur

let orc = 'Je suis un orc Mag\'har'
console.log(orc) // Je suis un orc Mag'har

// Echapper le double quote

// Erreur

//let herboriste = "Je ramasse de la zin"anthide";
//console.log(herboriste) // SyntaxError: Unexpected identifier 'anthide'. Expected ';' after variable declaration.

// Sans erreur

let herbo = "Je ramasse de la zin\"anthide"
console.log(herbo) // Je ramasse de la zin"anthide

// Passer à la ligne dans un chaine de caractères

let newline = "ceci est une \n nouvelle ligne"
console.log(newline)

/* ceci est une
 nouvelle ligne */