let table = document.getElementById("Table")
let output="";


for(let i = 1; i < 10;i++){
    output+="<tr>"
    for(j = 1; j < 10; j++){
        output +="<td>" + i * j + "</td>"
        }

        output+="</tr>"
        
}

table.innerHTML = output