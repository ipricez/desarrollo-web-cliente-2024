/**
 * Crea un apágina web con un formulario que pida el Nombre, los Apellidos, la Edad
 * y el Email al usuario.
 * Cada vez que envía el formulario, esos datos deben almacenarse en un objeto JSON y almacenar-
 * los en el almacenamiento local del navegador.
 * Crea otra página con dos botones:
 *  1. Recuperar: recupera el objeto almacenado y muestra cada VALOR de las propiedades del
 *  objeto en diferentes etiquetas section. Nota: si se pulsa varias veces, irá creando
 *  nuevos Section.
 *  2. Borrar: borra el contenido de la localStorage.
 */
window.onload = function(){
    let formu = document.forms[0];

    let nameForm = formu.elements[0];
    let surnameForm = formu.elements[1];
    let ageForm = formu.elements[2]
    let emailForm = formu.elements[3];

    let submitForm = formu.elements[4];

    submitForm.addEventListener("click",function(event){
        event.preventDefault();

        const usuario = {
            nombre: nameForm,
            apellido: surnameForm,
            edad: ageForm,
            correo: emailForm
        };
        localStorage.setItem("nuevoUsuario",JSON.stringify(usuario));
        console.log(localStorage.getItem("usuario"));

    });
}