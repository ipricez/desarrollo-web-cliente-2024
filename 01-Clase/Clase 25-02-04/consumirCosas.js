document.querySelector().addEventListener("click",function(){
    let salida = document.querySelector("#salida");
    const url = "";

    fetch(url)
    .then(function(respuesta){
        //Capturo la respuesta
        console.log(respuesta);

        if(!respuesta.ok){
            throw new Error("Error del fetach: "+respuesta.status);
        }

        // Devuelvo el formato texto o json
        return respuesta.json();
        // return respuesta.text();
    })
    .then(function(datos){
        // Captura y gestiona los datoSs
        console.log(datos);
        // salida.textContent = datos;
    })
    .catch(function(error){
        alert("Problemas accediendo a la URL: "+error);
    })
})