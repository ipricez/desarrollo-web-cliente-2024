/**
 * Crea un programa en Javascript que al colocar el ratón encima de cualquier enlace,
 * aparezca un div de 200x200 con maquetación en CSS (color de fondo, tamaño de letras, relleno,
 *  sombra paralela, bordes, redondeados...) en la esquina superior derecha de la pantalla
 * con el texto: Esto es un enlace.
 * 
 * b) Mejora el ejercicio anterior para que el mensaje sea: "La URL de este
 * enlace es: xxxxx (siendo xxxxx la  url del enlace").
 */

window.onload = function(){
    alert("Hola!!");    
}

function crearDiv(enlace){
    // ********************************************************
    // Obtenemos los enlaces para la mejora del apartado B.
    let url = enlace.getAttribute("href");
    let spam = "La URL de este enlace es: ";
    // ********************************************************

    // Creamos el nodo
    let nuevo = document.createElement("div");
    // Atributos (opcional)
    nuevo.setAttribute("class","divNuevo");
    // Creamos el nodo texto
    let texto = document.createTextNode(spam+url);
    // Engancha el nodo texto al nuevo hijo (adopta padre un hijo)
    nuevo.appendChild(texto);
    // Asignar un padre al nuevo
    let papi = document.querySelector("body");
    papi.appendChild(nuevo);
}

function romperDiv(){
    // Eliminamos el div cuando el ratón se retire del enlace
    let elemento = document.getElementsByClassName("divNuevo")[0];
    var padre = elemento.parentNode;
    padre.removeChild(elemento);
}