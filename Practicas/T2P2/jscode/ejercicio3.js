window.onload = function(){
    // alert("Script funçando");

    // Obtengo los datos de los diferentes profesores
    let urlObtener = "http://www.jaimeweb.es/medac/getProfesores.php";
    // Div donde deben salir todos los datos
    const salidaDiv = document.getElementById("salida");

    // Botón 'Obtener Datos'
    let obtenerDatos = document.querySelectorAll("input[type='button']")[0];
    obtenerDatos.addEventListener("click", function() {
        fetch(urlObtener)
            .then(function(respuesta){
                if (!respuesta.ok){
                    throw new Error("Error del fetch: " + error);
                };
                return respuesta.json();
            })
            .then(function(datos){
                // Apartado A
                console.log(datos);

                // Apartado B
                console.log(salidaDiv.hasChildNodes());
                    
                while(salidaDiv.hasChildNodes()){
                    salidaDiv.removeChild(salidaDiv.firstChild);
                }

                for (const element of datos) {
                    let nombreDiv = document.createElement("div");
                    let nombreDatos = document.createTextNode(element.nombre);
                    nombreDiv.appendChild(nombreDatos);

                    let dniDiv = document.createElement("div");
                    let dniDatos = document.createTextNode(element.dni);
                    dniDiv.appendChild(dniDatos);
                        
                    let ficha = document.createElement("div");
                    ficha.classList = "ficha";
                    ficha.appendChild(nombreDiv);
                    ficha.appendChild(dniDiv);
                    salidaDiv.appendChild(ficha)
                }
            })
            .catch(function (error) {
                alert("Hubo un problema al cargar los datos: " + error);
            });
    });

    // Botón 'Enviar Datos'
    let enviarDatos = document.querySelector("input[type='submit']");
    
    enviarDatos.addEventListener("click", function(){
        event.preventDefault();
        let formu = document.forms[1];
        let fd = new FormData(formu);
        console.log(fd);
        
        // Declaro la cabecera
        const cabecera = {
            method: "POST",
            body: fd
        };
        // Al ser un POST, en el fetch debo añadir otro parámetro
        let urlMeter = "http://www.jaimeweb.es/medac/setProfesores.php";
        fetch(urlMeter,cabecera)
            .then(function(respuesta){
                if (!respuesta.ok){
                    throw new Error("Error del fetch: " + error);
                };
                return respuesta.json();
            })
            .then(function(datos){
                let confirmacion = document.createElement("div");
                confirmacion.textContent = datos;
                salidaDiv.appendChild(confirmacion);
                
            })
            .catch(function(error){
                alert("Problemas accediendo a la URL: " + error);
            })
    });
    

}