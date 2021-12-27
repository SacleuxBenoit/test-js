
function countChar(){
    let charUsername = document.getElementById('username').value;
    let displayNumberChar = document.getElementById('displayNumberChar');
    /* charUsername = charUsername.replace(/\s/g, ''); */
   let resultNumberChar = displayNumberChar.textContent = charUsername.length + " /10";

   if(charUsername.length <= 10){
       displayNumberChar.style.color = "green";
   }else{
       displayNumberChar.style.color = "red";
   }
}