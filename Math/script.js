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
console.log(Math.pow(4, 4)) // Affiche 256 = 4*4*4*4
console.log(Math.pow(4, 6/3)) // Affiche 16

// -------------------------- Math.round() --------------------------

console.log(Math.round(3.33)) // Affiche 3
console.log(Math.round(3.5)) // Affiche 4
console.log(Math.round(3.85)) // Affiche 4
console.log(Math.round(3.85*100)/100) // Affiche 3.85

// Si le paramètre n'est pas un nombre return NaN

// -------------------------- Math.sign() --------------------------

console.log(Math.sign(2)) // Affiche 1
console.log(Math.sign(-2)) // Affiche -1
console.log(Math.sign(0)) // Affiche 0
console.log(Math.sign(-0))  // Affiche -0
console.log(Math.sign("test")) // Affiche NaN

// -------------------------- Math.PI() --------------------------

console.log(Math.PI) // Affiche 3.141592653589793

// Cette fonction utilise Math.PI pour calculer la circonférence d'un cercle avec un rayon donné
function circonference(radius){
return  Math.PI * (radius + radius);
}
console.log(circonference(2)); // Affiche 12.566370614359172

// -------------------------- Math.LN2 --------------------------

console.log(Math.LN2); // Affiche 0.6931471805599453

// -------------------------- Math.LN10 --------------------------

console.log(Math.LN10); // Affiche 2.302585092994046

// -------------------------- Math.Log2() --------------------------

console.log(Math.log2(3)) // Affiche 1.584962500721156
console.log(Math.log2(0)) // Affiche -infinity
console.log(Math.log2(-3)) // Affiche NaN

// -------------------------- Math.Log10() --------------------------

console.log(Math.log10(3)) // Affiche 0.47712125471966244
console.log(Math.log10(0)) // Affiche -infinity
console.log(Math.log10(-3)) // Affiche NaN

// -------------------------- Math.E --------------------------

console.log(Math.E) // Affiche 2.718281828459045

// -------------------------- Math.SQRT1_2 --------------------------

console.log(Math.SQRT1_2) // Affiche 0.7071067811865476

// -------------------------- Math.SQRT2 --------------------------

console.log(Math.SQRT2) // Affiche 1.4142135623730951

// -------------------------- Math.sqrt() --------------------------

console.log(Math.sqrt(6)) // Affiche 2.449489742783178
console.log(Math.sqrt(-0))
console.log(Math.sqrt(-6)) // Affiche NaN

// -------------------------- Math.abs() --------------------------

console.log(Math.abs(11)) // Affiche 11
console.log(Math.abs(-11)) // Affiche 11

// -------------------------- Math.sin() --------------------------

console.log(Math.sin(8)) // Affiche 0.9893582466233818
console.log(Math.sin(-8)) // Affiche -0.9893582466233818
console.log(Math.sin(0)) // Affiche 0

// -------------------------- Math.sinh() --------------------------

console.log(Math.sinh(8)) // Affiche 1490.4788257895502
console.log(Math.sinh(-8)) // Affiche -1490.4788257895502
console.log(Math.sinh(0)) // Affiche 0

// -------------------------- Math.cos() --------------------------

console.log(Math.cos(4)) // Affiche -0.6536436208636119
console.log(Math.cos(-4)) // Affiche -0.6536436208636119
console.log(Math.cos(0)) // Affiche 1

// -------------------------- Math.cosh() --------------------------

console.log(Math.cosh(4)) // Affiche 27.308232836016487
console.log(Math.cosh(-4)) // Affiche 27.308232836016487
console.log(Math.cosh(0)) // Affiche 1

// -------------------------- Math.acos() --------------------------

console.log(Math.acos(1)) // Affiche 0
console.log(Math.acos(-1)) // Affiche 3.141592653589793
console.log(Math.acos(0)) // Affiche 1.5707963267948966
console.log(Math.acos(-2)) // Affiche NaN

// -------------------------- Math.acosh() --------------------------

console.log(Math.acosh(6)) // Affiche 2.477888730288475
console.log(Math.acosh(0)) // Affiche NaN
// Return NaN si le nombre est plus petit que 1

// -------------------------- Math.asin() --------------------------

console.log(Math.asin(1)) // Affiche 1.5707963267948966
console.log(Math.asin(-1)) // Affiche -1.5707963267948966
console.log(Math.asin(0)) // Affiche 0

// -------------------------- Math.asinh() --------------------------

console.log(Math.asinh(1)) // Affiche 0.881373587019543
console.log(Math.asinh(-1)) // Affiche -0.881373587019543
console.log(Math.asinh(0)) // Affiche 0

// -------------------------- Math.tan() --------------------------
// note : la fonction ci-dessous calcul la tangente après avoir converti l'argument en radians
function getTanDeg(deg) {
  const rad = deg * Math.PI/180;
  return Math.tan(rad);
}
console.log(getTanDeg(45)) // Affiche 0.9999999999999999

// -------------------------- Math.tanh() --------------------------

console.log(Math.tanh(0)) // Affiche 0
console.log(Math.tanh(1)) // Affiche 0.7615941559557649
console.log(Math.tanh(Infinity)) // Affiche 1 

// -------------------------- Math.atan() --------------------------

console.log(Math.atan(2)) // Affiche 1.1071487177940906
console.log(Math.atan(-2)) // Affiche -1.1071487177940906
console.log(Math.atan(Infinity)) // Affiche 1.5707963267948966
console.log(Math.atan(-Infinity)) // Affiche -1.5707963267948966

// -------------------------- Math.atanh() --------------------------

// Pour les valeurs strictement inférieures à -1 ou strictement supérieures à 1, NaN sera renvoyé
console.log(Math.atanh(0)) // Affiche 0
console.log(Math.atanh(1)) // Affiche Infinity
console.log(Math.atanh(2)) // Affiche NaN
console.log(Math.atanh(-2)) // Affiche NaN

// -------------------------- Math.cbrt() --------------------------

console.log(Math.cbrt(1)) // Affiche 1
console.log(Math.cbrt(-1)) // Affiche -1
console.log(Math.cbrt(Infinity)) // Affiche Infinity
console.log(Math.cbrt(null)) // Affiche 0
console.log(Math.cbrt(2)) // Affiche 1.2599210498948732

// -------------------------- Math.clz32() --------------------------
// Note : clz32 = raccourcis pour CountLeadingZeroes32
console.log(Math.clz32(1)) // Affiche 31
console.log(Math.clz32(100)) // Affiche 25
console.log(Math.clz32(false)) // Affiche 32

// -------------------------- Math.exp() --------------------------

console.log(Math.exp(2)) // Affiche 7.38905609893065
console.log(Math.exp(-2)) // Affiche 0.1353352832366127
console.log(Math.exp(Infinity)) // Affiche Infinity

// -------------------------- Math.fround() --------------------------

console.log(Math.fround(2)) // Affiche 2
console.log(Math.fround(-2)) // Affiche -2
console.log(Math.fround(2,788)) // Affiche 2
console.log(Math.fround(false)) // Affiche 0

// -------------------------- Math.hypot() --------------------------

console.log(Math.hypot()) // Affiche 0
console.log(Math.hypot(5, 7)) // Affiche 8.602325267042627
console.log(Math.hypot(5, 7, "test")) // Affiche "NaN"
console.log(Math.hypot(-4)) // Affiche 4

// -------------------------- Math.imul() --------------------------

console.log(Math.imul(5, 7)) // Affiche 35
console.log(Math.imul(-5, 7)) // Affiche -35
console.log(Math.imul(0, 7)) // Affiche 0

// -------------------------- Math.log() --------------------------

console.log(Math.log(-2)) // Affiche NaN
console.log(Math.log(2)) // Affiche 0.6931471805599453
console.log(Math.log(0)) // Affiche -Infinity
console.log(Math.log(5)) // Affiche 1.6094379124341003

// -------------------------- Math.log1p() --------------------------

console.log(Math.log1p(2)) // Affiche 1.0986122886681098
console.log(Math.log1p(-1)) // Affiche -Infinity
console.log(Math.log1p(5)) // Affiche 1.791759469228055

// -------------------------- Math.log10() --------------------------

console.log(Math.log10(2)) // Affiche 0.3010299956639812
console.log(Math.log10(1)) // Affiche 0
console.log(Math.log10(-1)) // Affiche NaN

// -------------------------- Math.log2() --------------------------

console.log(Math.log2(2)) // Affiche 1
console.log(Math.log2(1)) // Affiche 0
console.log(Math.log2(2048)) // Affiche 11
console.log(Math.log2(-1)) // Affiche NaN

// -------------------------- Math.trunc() --------------------------

console.log(Math.trunc(3.1415)) // Affiche 3
console.log(Math.trunc(-3.1415)) // Affiche -3
console.log(Math.trunc(37.149715)) // Affiche 37
