/**
 * Crea un formulario con varios checkbox (pej, aficiones), un textarea y un boton.
 * Implementa un programa que, tras pulsar el boton se muestre dentro del textarea todas
 * las opciones marcadas.
 * 
 * b) Mejora el apartado anterior quitando el botón. Ahora cada vez que se marque un
 * checkbox, se añadirá al contenido del textarea. Si se desmarca, hay que quitarlo.
 */

window.onload = function(){

    alert("Script cargado");

    // Guardo el formulario
    let formu = document.forms[0];
    let listaPeliculas = [];
    
    for (let i = 0; i < formu.length; i++) {
        if (formu[i].type == "checkbox") {
            console.log("Checkbox encontrado");
            listaPeliculas.push(formu[i]);
        }
    }
    
    // Guardo el textarea
    let textArea = document.getElementsByName("lista")[0];
    // Guardo el boton
    let boton = formu.elements[formu.length-1];

    // APARTADO A
    // boton.onclick = function(){
    //     console.log("Entra en la función");
        
    //     let textito = "";
    //     for (let i = 0; i < listaPeliculas.length; i++) {
    //         console.log("Entra for");
    //         if (listaPeliculas[i].checked){
    //             console.log("Entra en checked");
    //             textito += listaPeliculas[i].value+"\n";
    //         }
    //     }
    //     textArea.value = textito;
    // }

    // APARTADO B
    for (let i = 0; i < listaPeliculas.length; i++) {
        listaPeliculas[i].onclick = function(){
            if(listaPeliculas[i].checked){
                textArea.value += listaPeliculas[i].value;
            } else textArea.value = "";
        }
    }

    }