// Test sur les arrays pour mes cheat sheets

// --------------- 1ere syntaxe pour un tableau --------------- 

const firstArray = ["elem1", "elem2", "elem3"]
console.log(firstArray) // Affiche ["elem1", "elem2", "elem3"]

// --------------- 2iem syntaxe pour un tableau --------------- 

const secondArray = new Array("elem1", "elem2", "elem3")
console.log(secondArray) // Affiche ["elem1", "elem2", "elem3"]

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

const findIndexFalse = [7687, 0876, 23, 021]
console.log(findIndexFalse.indexOf(25)) // Affiche -1

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

// --------------- Transformer un tableau en chaîne de caractères --------------- 

const ArrayJoin = ["Apple", "Bananas", "Orange"]
console.log(ArrayJoin.join(", ")) // Affiche "Apple, Bananas, Orange"

// --------------- Copier un tableau--------------- 

const copyArray = ["Name", "Surname", "Username"]
console.log(copyArray.slice()) // Affiche ["Name", "Surname", "Username"]

const secondCopy = ["Name", "Surname", "Username"]
console.log(secondCopy.slice(1,3))

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

// --------------- Merge 2 tableaux --------------- 

const arrayConcat = ["This", "is a test"]
const anotherArrayConcat = ["for", "concat"]
console.log(arrayConcat.concat(anotherArrayConcat)) // Affiche ["this", "is a test", "for", "concat"]

// --------------- Filtrer des éléments dans un tableau --------------- 

const age = [15, 22, 11, 95]
function checkAdult(age){
    return age >= 18
}
console.log(age.filter(checkAdult)) // Affiche [22, 95]

// --------------- Vérifier si une valeur est présente dans le tableau --------------- 

const numVerif = [22, 11, 18, 16, 14, 12]
console.log(numVerif.includes(22)) // Affiche true
console.log(numVerif.includes(2)) // Affiche false 

const stringVerif = ["Lamb", "Goose", "Deer"]
console.log(stringVerif.includes("Lamb")) // Affiche true
console.log(stringVerif.includes("Lambe")) // Affiche false

// --------------- Array.reduce --------------- 

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((a, b) => a + b);

console.log(sum);

// --------------- Boucler dans un tableau --------------- 

// ------------ Boucler avec for ------------

const firstLoop = ["elem1","elem2", "elem3"]
for(let i =0; i <firstLoop.length;i++){
    console.log(firstLoop[i]) // Affiche "elem1", "elem2", "elem3"
}

// ------------ Boucler avec for... of ------------

const secondLoop = ["elem1","elem2", "elem3"]
for(let elem of secondLoop){
    console.log(elem) // Affiche "elem1", "elem2", "elem3"
}

// ------------ Boucler avec for... in ------------

const thirdLoop = ["elem1","elem2", "elem3"]
for(let third in thirdLoop){
    console.log(thirdLoop[third]) // Affiche "elem1", "elem2", "elem3"
}