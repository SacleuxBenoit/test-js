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

// --------------- Trouver l'index d'un element dans le tableau --------------- 

const findIndex = [7687, 0876, 23, 021]
console.log(findIndex.indexOf(23)) // Affiche 2

// --------------- Trouver l'index du dernier element recherché dans le tableau --------------- 
const findLastIndex = [1, 2, 12, 192, 11,234, 901, 11]
console.log(findLastIndex.lastIndexOf(11)) // Affiche 7

// --------------- Supprimer un ou plusieurs elements grâce à leurs index --------------- 

const deleteElem = ["Apple", "Orange", "Bananas", 123]
deleteElem.splice(2,2)
console.log(deleteElem) // Affiche ["Apple", "orange"]

// --------------- Exploser une chaîne de caractères en tableau --------------- 

const str = "Facebook/Twitter/Instagram/Linkedin"
const table = str.split("/")
console.log(table) // Affiche ["Facebook" "Twitter" "Instagram" "Linkedin"]

// --------------- à faire : join --------------- 



// --------------- Copier un tableau--------------- 

const copyArray = ["Name", "Surname", "Username"]
console.log(copyArray.slice()) // Affiche ["Name", "Surname", "Username"]

// --------------- Retourner un tableau--------------- 

const arrayReverse = [1,2,3,4,5]
console.log(arrayReverse.reverse()) // Affiche [5,4,3,2,1]

// --------------- Trier un tableau par ordre croissant --------------- 

const arraySort = ["Zorro", "Hercule", "Ulysse"]
console.log(arraySort.sort()) // Affiche ["Hercule", "Ulysse", "Zorro"]

const numberSort = [5, 2, 1, 9]
console.log(numberSort.sort()) // Affiche [1,2,5,9]

// --------------- Trier un tableau par ordre décroissant --------------- 

const reverseSort = ["Zorro", "Hercule", "Ulysse"]
console.log(reverseSort.reverse(reverseSort.sort())) // Affiche ["Zorro", "Ulysse", "Hercule"]

const reverseNumber = [5, 2, 1, 9]
console.log(reverseNumber.reverse(reverseNumber.sort())) // Affiche [9,5,2,1]