/**
 * Crea un párrafo en HTML y ponle la clase "uno". Usando CSS, coloca un fondo, un borde, una anchura
 * y un color/tam de letra para esa clse. Crea la clase "dos" similar a la clase "uno" pero con valores
 * diferentes.
 * a) Cuando se haga click sobre el párrafo, cambia de la clase "uno" a la clase "dos".
 * b) Cada vez que haga click en el párrafo, cambia de clase alternativamente.
 */

function cambiarClase() {
    //let dedo = document.getElementsByClassName("uno");
    //dedo[0].className = "dos";
    //console.log(dedo);

    // Código bueno. Se añade una ID y un SWTICH dependiendo de la clase.
    let dedo = document.getElementById("clases");
    switch (dedo.className) {
        case "uno":
            dedo.className = "dos";
            break;
        case "dos":
            dedo.className = "uno";
            break;
        default:
            console.log("Error en el SWITCH");
            break;
    }
}