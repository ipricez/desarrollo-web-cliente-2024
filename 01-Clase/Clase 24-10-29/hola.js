// DOMContentLoaded
window.onload = function() {
    alert("rr");
    let boton1 = document.getElementsByTagName("input")[0];
    let boton2 = document.querySelectorAll("input[type='button']")[1];
    let boton3 = document.getElementsByTagName("input")[2];

    boton1.onclick = function() {
        // 1- Creamos el nodo
        let nuevo = document.createElement("p");
        // 2- Atributos (opcional)
        nuevo.setAttribute("class","parra");
        // 3- Creamos nodo texto
        let texto = document.createTextNode("Soy el nuevo parrafo y me llamo Miguel");
        // 4- Engancha el nodo texto al nuevo nodo
        nuevo.appendChild(texto);       // adopta padre un hijo
        // 5- Asignar un padre al nuevo
        let papi = document.querySelector("section");

        let bro = document.querySelectorAll("div")[2];
        papi.insertBefore(nuevo,bro);
        //papi.appendChild(nuevo);


        this.disabled = true;
        boton2.disabled = false;
    }

    boton2.onclick = function(){
        let victima = document.getElementsByClassName("parra")[0];
        let papi = victima.parentNode;
        papi.removeChild(victima);

        this.disabled = true;
        boton1.disabled = false;
    }

    boton3.onclick = borrar;
    function borrar(){
        
        //let papi = document.querySelector("section"); // esto se usa xq sabemos los hijos
        //let victimas = papi.children;
        let victimas = document.querySelectorAll("section div");

        for (let i = 0; i < victimas.length; i++) {
            let papi = victimas[i].parentNode;
            papi.removeChild(victimas[i]);
            
        }
    }
}