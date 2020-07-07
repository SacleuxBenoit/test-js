// Map
let map = new Map();
let secondMap = new Map();
let thirdMap = new Map();
let fourthMap = new Map()

// map.set

console.log(map.set("nom", "Gérard")); // clé : "nom", valeur : "Gérard"
console.log(secondMap.set(1, "yes")); // clé : 1, valeur : "yes"
console.log(thirdMap.set("age", 22)); // clé : "age", valeur : 22
console.log(thirdMap.set("year", 1998)); // clé : "year" valeur : 1998

// map.get

console.log(map.get("nom")); // Gérard
console.log(secondMap.get(1)); // yes

// map.has

console.log(map.has("nom")); // true
console.log(map.has("prénom"));// false
console.log(secondMap.has(1)); // true

// map.delete

console.log(map.delete("nom")); // true
console.log(secondMap.delete(1)); // true
console.log(map.delete("Prénom")); // false

// map.clear()

console.log(map.clear()); // undefined
console.log(secondMap.clear()); // undefined

// map.size

console.log(map.size) // 0
console.log(thirdMap.size) // 2

// chaining

console.log(fourthMap.set("nom", "Gérard").set("age", "22").set("year", "1998")) // {"nom" => "Gérard", "age" => "22", "year" => "1998"}

// SET 

let firstSet = new Set()
let secondSet = new Set()
let thirdSet = new Set()

// set.add

console.log(firstSet.add("test")) // {"test"}
console.log(firstSet.add("anotherTest")) // {"test", "anotherTest"}
console.log(secondSet.add("second")) // {"second"}
console.log(secondSet.add("test")) // {"second", "test"}

// set.delete

console.log(firstSet.delete("test")) // true 
console.log(firstSet.delete("none")) // false

// set.has

console.log(firstSet.has("anotherTest")) // true
console.log(firstSet.has("test")) // false avec set.delete

// set.clear

console.log(firstSet.clear()) // Undefined


// set.size

console.log(firstSet.size) // 0 car on a utilisé .clear() au dessus
console.log(secondSet.size) // 2

// Chaining

console.log(thirdSet.add("this").add("is a test").add("with chaining")) // {"this", "is a test", "with chaining"}