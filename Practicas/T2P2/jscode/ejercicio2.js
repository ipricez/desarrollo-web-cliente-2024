window.onload = function(){
    // alert("Script furulando");
    // Recogemos el botón
    const obtenerResultados = document.querySelector("input[type='button']");
    // Si pulsamos el botón...
    obtenerResultados.addEventListener("click",function(){
        const url = "http://www.jaimeweb.es/medac/datos.json";
        fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("Error al cargar usuarios: " + respuesta.status);
            }
            return respuesta.json();
        })
        .then(function (datos) {
            // Apartado A. Muestro por consola lo que obtengo
            console.log(datos);

            // Apartado B. Muestro por consola cada objeto obtenido.
            for (const element of datos) {
                console.log(element);   
            }

            // Apartado C Muestro por consola todos los datos según la plantilla
            for (const element of datos) {
                // Para recorrer las claves de un objeto, uso for-in
                for (let clave in element) {
                    console.log(`${clave}: ${element[clave]}`);
                }
                console.log("===================================");
            }
        })
        .catch(function (error) {
            alert("Hubo un problema al cargar los usuarios: " + error);
        });
    })
    
}