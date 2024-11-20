/**
 * Crea un formulario con dos campos de texto. El segundo campo de texto debe estar colocado en modo
 * de solo lectura. Desarrolla un programa que, conforme se vaya escribiendo en el primer campo, se va a ir
 * copiando ese contenido en el segundo campo. Buscar evento adecuado
 */

window.onload = function(){

    alert("Script cargado");

    // Guardo el formulario
    let formu = document.forms[0];
    // Guardo el primer y el segundo texto
    let campo1 = formu.elements[0];
    let campo2 = formu.elements[1];

    // Deshabilito el campo de texto 2
    campo2.readOnly = true;
    // Consigo que el texto2 vaya obteniendo lo del texto1
    campo1.onkeyup = function(){
        campo2.value = campo1.value;
    }
    campo1.onkeydown = function(){
        campo2.value = campo1.value;
    }
}