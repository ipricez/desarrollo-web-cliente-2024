/**
 * Crea el efecto "ampliación" de algunas galerías de fotos que podemos encontrar por internet.
 * Coloca la imagen con la mitad de tamaño.
 * Al hacer click sobre la foto, sucede lo siguiente:
 * - Aparecerá una capa semitransparente de color gris que tapará TODA la parte visible de la página y que no se moverá de sitio al hacer scroll.
 * - Dentro de esa capa, aparecerá la imagen con su tamaño original centrada tanto horizontal como vertical y perfectamente visible.
 * Al hacer click, en cualquier punto de la capa, desaparecerá junto con la imagen de tamaño original.
 * Nota: Haz uso del objeto Screen y/o Window.
 * 
 * b) Mejora el ejercicio anterior de modo que funcione para cualquier imagen que haya en una página.
 */
window.onload = function(){
    alert("Hola!!");
    
    let imagen = document.getElementById("fotoReducida");
    imagen.onclick = function(){
        // Creamos la capa semitransparente
        let capa = document.createElement("div");
        capa.setAttribute("class","capa");

        // Creamos la imagen original
        let imagenAmpliada = document.createElement("img");
        imagenAmpliada.setAttribute("id","fotoAmpliada");
        imagenAmpliada.src = this.src;

        // Engancha el nodo texto al nuevo hijo (adopta padre un hijo)
        capa.appendChild(imagenAmpliada);
        // Asignar un padre al nuevo
        let papi = document.querySelector("body");
        papi.appendChild(capa);

        // Para salir del div creado
        capa.onclick = function(){
            let papi = document.querySelector("body");
            papi.removeChild(capa);
        }

    }

}
