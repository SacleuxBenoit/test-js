// Test sur les arrays pour mes cheat sheets

// --------------- Voir la taille du tableau --------------- 

const number = [2, 2, 10, 287]

console.log(number.length) // Affiche 4

// --------------- Accéder à un element du tableau --------------- 

const elem = [3, 9, 7, 279]
console.log(elem[1]) // Affiche 9

// --------------- Accéder au dernier element du tableau --------------- 

const last = [3, 8, 238, 278]
console.log(last[last.length-1]) // Affiche 278

// --------------- Ajouter un element au début du tableau --------------- 

const addStart = [2, 923, 2093]
addStart.unshift(300)
console.log(addStart) // Affiche [300, 2, 923, 2093]

// --------------- Ajouter un element à la fin du tableau --------------- 

const addEnd = [2, 923, 2093]
addEnd.push("apple")
console.log(addEnd) // Affiche [2, 923, 2093, "apple"]

// --------------- Supprimer un element au début du tableau --------------- 

const deleteStart = ["delete", "not delete"]
deleteStart.shift()
console.log(deleteStart) // Affiche ["not delete"]

// --------------- Supprimer un element à la fin du tableau --------------- 

const deleteEnd = ["i am still here", "i am delete"]
deleteEnd.pop()
console.log(deleteEnd) // Affiche ["i am still here"]