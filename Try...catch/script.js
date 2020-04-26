// Test sur Try...catch pour mes cheat sheets

// Exemple de try... catch qui fonctionne

try{
    console.log(Math.random(1,10))
}catch(err){
    console.log("Math.random is not working")
}

// Exemple de try... catch qui ne fonctionne pas 

try{
    console.log(Math.rand(1,10))
}catch(err){
    console.log("Math.random is not working")
}

// autre exemple de code qui ne fonctionne pas avec Try...catch

try {
    rand; // error, variable is not defined!
  } catch(err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // rand is not defined
    console.log(err.stack); // ReferenceError: rand is not defined at (...call stack)
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: rand is not defined
  }

// Try...catch...finally 

try{
    console.log(Math.rand(1,10))
}catch(err){
    console.log("Math.random is not working")
}finally{
console.log(Math.random(1,10))
}