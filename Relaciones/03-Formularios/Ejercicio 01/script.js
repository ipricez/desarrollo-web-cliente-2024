/**
 * Crear un formulario con dos campos de texto y un botón llamado copiar. El segundo campo
 * de texto debe estar colocado en modo de solo lectura.
 * Desarrolla un programa que, cuando se pulse el botón copiar, copie todo el contenido
 * del primer campo de texto en el segundo.
 */
window.onload = function(){
    alert("Script cargado.")

    // Guardo el formulario
    let formu = document.forms[0];
    // Guardo el primer y el segundo texto
    let campo1 = formu.elements[0];
    let campo2 = formu.elements[2];
    // Guardo el boton
    let boton = formu.elements[1];

    // Deshabilito el campo de texto 2
    campo2.disabled = true;
    // campo2.readOnly = true;

    // Cuando presionen el boton
    boton.onclick = function(){
        campo2.value = campo1.value;
        campo1.value = "";
    }   
}