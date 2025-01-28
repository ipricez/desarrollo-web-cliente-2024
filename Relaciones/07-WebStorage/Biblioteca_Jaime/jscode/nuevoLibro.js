window.onload = function(){
    // Corrijo el funcionamiento de los botones
    let botones = document.querySelectorAll("input[type='button']");
    let insertarBoton = botones[0];
    let cancelarBoton = botones[1];
    insertarBoton.addEventListener("click",function(){
        // código
        let titulo = document.getElementByName("name")
    });
    cancelarBoton.addEventListener("click",function(){
        // Volver a inicio
        window.location.href = "inicio.html";
    })
}