window.onload = function(){
    alert("Cargado correctamente!!");
    // Boton añadir añade fotos
    let botonAniadir = document.getElementsByTagName("input")[0];
    // Boton limpiar borra TODAS las fotos
    let botonLimpiar = document.getElementsByTagName("input")[1];
    // Localizo el contenedor
    let galeria = document.getElementById("contenedor");

    // Apartado A
    botonAniadir.onclick = function(){
        botonLimpiar.disabled = false;
        let whatPhoto = prompt("¿Qué foto quieres añadir?");
        // Creamos el nodo y lo vamos añadiendo
        let nuevo = document.createElement("img");
        // Añadimos la foto
        if(whatPhoto == ""){
            whatPhoto = "terra.jpg";
        }
        nuevo.src = "./img/"+whatPhoto;
        // Añadimos la clase "foto"
        nuevo.setAttribute("class","foto");galeria;
        galeria.appendChild(nuevo);
    }
    // Apartado B
    botonLimpiar.onclick = function(){
        // Deshabilitado este boton de nuevo
        this.disabled = true;
        // Mientras que haya un array de fotos, va eliminando
        // la primera foto
        while (document.getElementsByClassName("foto")){
            galeria.removeChild(document.getElementsByClassName
                ("foto")[0]);
        }
    }

}