/**
 * Crea un formulario con los siguientes campos:
 *      DNI: 8 números y una letra
 *      Nombre: uno o dos nombres
 *      Apellidos: uno o dos apellidos
 *      Fecha de nacimiento: formato dd/mm/yyyy
 *      Web personal:formato https://www.algo.tresletras
 *      Contraseña: entre 8 y 12 caracteres
 *      Un botón para resetear el formulario
 *      Un botón para enviar el formulario
 * 
 * Haciendo uso de JS pero sin usar expresiones regulares, cuando se pulse el botón correspondiente, valida
 * el formulario siguiendo las normas que se detallan a continuación y envía el resultado a otra página que
 * muestre un mensaje de que todo ha salido bien.
 * 
 * El formulario estará correcto sí y solo si:
 *      Ningún capo se queda vacío
 *      El DNI tiene una longitud de 9
 *      La fecha de nacimiento tiene el formato correcto
 *      Hay una o dos palabras en los campos nombre y apellidos
 *      El campo de la web debe empezar por https://
 *      La longitud de la contraseña es correcta
 * 
 * Si algún campo se rellena de forma errónea, debe indicarse ese error usando un alert y devolviendo el foco
 * al momento erróneo (o al primer elemento erróneo).
 * 
 * Como se ha comentado antes, debes preparar una sencilla página html con un mensaje de que todo ha ido bien
 * y enlazarla la fomulario de tal modo que aparezca cuando todos los campos sean correctos.
 */

window.onload = function(){
    alert("Script cargado");
    
    let formu = document.forms[0];
    let btn_submit = formu.querySelector("input[type='submit']");
    btn_submit.onclick = function(){
        // Elimino la función del evento por defecto
        event.preventDefault();
        // Validación
        // DNI
        let form__dni = document.getElementById("dni");
        if (form__dni.value == ""){
            warning();
        } else{
            if (form__dni.value.lenght != 9){
                alert("Cadena debe ser 9");
            }
        }
        

    }
}

function warning(){
    if (document.getElementsByClassName("warning")[0] == null) {
        alert("dfsd");
        let warning = document.createElement("div");
        warning.classList = ("warning");
        document.querySelector("body").appendChild(warning);
    }
    

}

