/**
 * Crea una página web con un formulario que contenta dos campos: "Nombre" y "Clave"
 * A continuación, escribe un código JS que almacene los datos del formulario en el almaceniamiento
 * local del navegador cada vez que se envía el formulario.
 * Crea otra página que, al cargarse, muestre en su cuerpo los datos del almacenamiento local.
 * Añade en esa página el botón BORRAR que borre los datos almacenados en el local storage.
 */
window.onload = function(){
    let formu = document.forms[0];
    let nameField = formu.elements[0];
    let passField = formu.elements[1];
    console.log(nameField);
    console.log(passField);

    let saveButton = document.getElementById("save");
    console.log(saveButton);
    
    saveButton.addEventListener("click",function(event){
        event.preventDefault();
        localStorage.setItem("name",nameField.value);
        localStorage.setItem("pass",passField.value);
        location.href = "resultado.html";
    })

}