function inser(num){
    document.form.texte.value += num
}

function equal(){
    document.form.texte.value = eval(document.form.texte.value)
}

function clearForm(){
    document.form.texte.value = ""
}