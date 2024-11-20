/**
 * Crear un formulario con dos campos de texto y un botón llamado COMPROBAR. El botón debe comprobar
 * si el contenido de uno de los campos es anagrama del otro. Mostrará el resultado haciendo uso
 * de la función alert. Si ambos campos están vacíos, no se considerará.
 */

window.onload = function(){
    alert("Script cargado");

    let formu = document.forms[0];
    console.log(formu);
    
    let campo1 = formu.elements[0];
    let campo2 = formu.elements[1];
    let comprobar = formu.elements[2];

    console.log(campo1);
    
    comprobar.onclick = function(){
        if(campo1.value=="" || campo2.value==""){
            alert("Error. Campo(s) vacío(s).")
        } else {
            // let reverseText = cadenaReves(campo1.value.toUpperCase());
            let reverseText = alRevesconArray(campo1.value.toUpperCase())
            if (reverseText==campo2.value.toUpperCase()){
                alert("¡¡SON ANAGRAMAS!!");
            } else alert("NO SON ANAGRAMAS");
        }
    }
}

function alRevesconArray(string){
    let aux = "";
    for (let i = string.length-1; i >= 0; i--) {
        aux += string[i];
    }
    return aux;
}
function cadenaReves(string){
    let splitString = string.split("");
    // console.log(splitString);
    let reverseArray = splitString.reverse();
    // console.log(reverseArray);
    let joinArray = reverseArray.join("");
    // console.log(joinArray);
    return joinArray;
}