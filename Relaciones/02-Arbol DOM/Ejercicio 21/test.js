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

    let enlaces = document.getElementsByClassName("enlace");
    
    
}

function crearDiv(){

    let nuevo = document.createElement("div");
    nuevo.setAttribute("class","divnuevo");
    let texto = document.createTextNode("Esto es un enlace");
    nuevo.appendChild(texto);
    let papi = document.querySelector("body");
    papi.appendChild(nuevo);
}

function romperDiv(){
    
}