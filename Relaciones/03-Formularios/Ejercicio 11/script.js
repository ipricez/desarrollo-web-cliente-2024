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

// Controlar FOCUS
let focus = false;

window.onload = function(){
    alert("Script cargado");
    
    let formu = document.forms[0];
    let btn_submit = formu.querySelector("input[type='submit']");
    btn_submit.onclick = function(){
        // Elimino la función del evento por defecto
        event.preventDefault();

        // Validación
        crearWarning();

        // Reset de Focus
        focus = false;

        // DNI
        let form_dni = document.getElementById("dni");
        if (form_dni.value == ""){
            warning("DNI: campo vacio.");
            setFocus(form_dni);
        } else{
            if (form_dni.value.length != 9){
                warning("DNI: debe ser longitud de 9");
                setFocus(form_dni);
            } else{
                var dni = true;
            }
        }
        // Nombre
        let form_nombre = document.getElementById("nombre");
        if (form_nombre.value == ""){
            warning("Nombre: campo vacío.");
            setFocus(form_nombre);
        } else{
            if(cadenaSplit(form_nombre.value) > 2){
                warning("Nombre: dos palabras solo.");
                setFocus(form_nombre);
            } else {
                var nombre = true;
            }
        }

        // Apellidos
        let form_apellidos = document.getElementById("apellidos");
        if (form_apellidos.value == ""){
            warning("Apellidos: campo vacío.");
            setFocus(form_apellidos);
        } else{
            if(cadenaSplit(form_apellidos.value) > 2){
                warning("Apellidos: dos palabras solo.");
                setFocus(form_apellidos);
            } else {
                var nombre = true;
            }
        }

        // Fecha Nacimiento
        let form_fecha = document.getElementById("fecha");
        if (form_fecha.value == ""){
            warning("Fecha Nacimiento: campo vacío.");
            setFocus(form_fecha);
        } else{
            // No hago una función como nombre y apellidos ya que solo la usaré una vez
            if (fechaSplit(form_fecha.value)){
                warning(fechaSplit(form_fecha.value));
                setFocus(form_fecha);
            } else{
                var fecha = true;
            }
        }

        // Web Personal
        let form_web = document.getElementById("web");
        if (form_web.value == ""){
            warning("Web: campo vacío.");
            setFocus(form_web);
        } else{
            if(form_web.value.substring(0,8) != "https://"){
                warning("Web: formato incorrecto (https://...");
            setFocus(form_fecha);
            } else{
                var web = true;
            }
        }

        // Contrasena
        let form_contrasena = document.getElementById("contrasena");
        if (form_contrasena.value == ""){
            warning("Contraseña: campo vacio.");
            setFocus(form_contrasena);
        } else{
            if (form_contrasena.value.length < 8 || form_contrasena.value.length > 12){
                warning("Contraseña: debe ser longitud entre 8 y 12.");
            setFocus(form_contrasena);
            } else{
                var contrasena = true;
            }
        }

        // Si todo OK
        if (dni && nombre && apellidos && fecha && web && contrasena){
            window.location.href = "./succes.html";
        }
    }
}

function warning(error){
    // Añado el error
    let error_div = document.createElement("div");
    let texto = document.createTextNode(error);
    error_div.appendChild(texto);
    document.getElementsByClassName("warning")[0].appendChild(error_div);
}
function crearWarning(){
    // En caso de que esté creato ya el div, se borra para reset
    if (document.getElementsByClassName("warning")[0] != null) {
        document.body.removeChild(document.getElementsByClassName("warning")[0]);
    }
    // Creo el div warning
    var warning = document.createElement("div");
    warning.classList = ("warning");
    document.querySelector("body").appendChild(warning);
}
function cadenaSplit(cadena){
    let cadenaSplit = cadena.split(" ");
    return cadenaSplit.length;
}
function fechaSplit(date){
    let dateSplit = date.split("/");
    if (dateSplit.length != 3){
        return "Fecha Nacimiento: formato incorrecto (dd/mm/aaaa).";
    } else{
        let dia = parseInt(dateSplit[0]);
        let mes = parseInt(dateSplit[1]);
        let ano = parseInt(dateSplit[2]);
        console.log(dia,mes,ano);
        
        if (isNaN(dia) || isNaN(mes) || isNaN(ano)){
            return "Fecha Nacimiento: no has añadido números.";
        } else{
            // Más validaciones (dias entre 1 y 31, meses entre 1 y 12...)
        }
    }
}
function setFocus(x){    
    if (!focus){
        x.focus();
        focus = true;
    }
}