/**
 * Crea un formulario con varios elementos checkbox y una lista desplegable vacía.
 * Implementa el código necesario para que, cada vez que se marque un checkbox, se cree una entrada nueva
 * en la lista desplegable con el país correspondiente. Si se desmarca un checkbox, debe eliminarse
 * el país correspondiente de la lista.
 */

window.onload = function(){
    alert("Script cargado!");

    // Guardo el formulario
    let formu = document.forms[0];
    let listaPokemon = document.querySelectorAll("input[type='checkbox']");
    let pokedex = formu.pokedex;
    
    // Asigno un método a cada checkbox
    for (let i = 0; i < listaPokemon.length; i++) {
        listaPokemon[i].onclick = function(){
            if(listaPokemon[i].checked){
                // Creamos el nodo
                let nuevo = document.createElement("option");
                // Atributos
                nuevo.setAttribute("value",listaPokemon[i].id);
                // Creamos el nodo texto
                let texto = document.createTextNode(listaPokemon[i].id);
                // Vamos añadiento al DOM
                nuevo.appendChild(texto);
                pokedex.appendChild(nuevo);
            } else{
                pokedex.removeChild(pokedex.querySelector("option[value='"+listaPokemon[i].id+"']"))
            }
        }
        
    }
    

}