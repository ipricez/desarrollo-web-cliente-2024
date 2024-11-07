window.onload = function(){
    alert("Cargado!!!");
    // Al pulsar el boton, se debe crear de forma dinamica una tabla
    document.getElementsByTagName("input")[0].onclick = function(){
        // Se pregunta al usuario las filas y columnas que
        // tendrá la tabla. Deben ser enteros positivos e inferiores
        // o iguales a 10.
        do {
            var numFilas = parseInt(prompt("Número de filas"));
        } while (numFilas<=0 || numFilas>10 || isNaN(numFilas));
        do {
            var numColumnas = parseInt(prompt("Número de filas"));
        } while (numColumnas<=0 || numColumnas>10 || isNaN(numColumnas));
        
        // Creación de la tabla
        let table = document.createElement("table");
        table.className = "tabla";        
        let tbody = document.createElement("tbody");
        table.appendChild(tbody);
        for (let i = 0; i < numFilas; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < numColumnas; j++) {                
                let td = document.createElement("td");
                td.innerHTML = i+1;
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        // Añadimos la tabla al div del html
        document.getElementsByClassName("solucion")[0].appendChild(table);
    }
}