window.onload = function(){
    alert("Archivo cargado!");

    // Apartado A
    // 1) Botón genera número aleatorio entre 1 y 50
    let botonGenera = document.getElementsByClassName("botones")[0];
    let botonCompara = document.getElementsByClassName("botones")[1];
    botonGenera.onclick = function(){
        // Limpia el contenido del div salida
        if (document.getElementById("salida").innerHTML){
            document.getElementById("salida").innerHTML = "";
        }
        // Empezamos ejercicio
        let ladoIzq = document.getElementById("ladoIzq");
        let ladoDer = document.getElementById("ladoDer");
        ladoIzq.innerHTML = Math.floor(Math.random() * 50) + 1;
        ladoDer.innerHTML = Math.floor(Math.random() * 50) + 1;
        
        // Intento de Apartado B
        //let timer =  setInterval(generarRandom,1000);

        // Se desactiva el boton de generar
        botonGenera.setAttribute("disabled",true);
        // Se activa el boton de comparar
        botonCompara.disabled = false;
    }
    /* Intento de Apartado B
    function generarRandom(){
        let ladoIzq = document.getElementById("ladoIzq");
        let ladoDer = document.getElementById("ladoDer");
        ladoIzq.innerHTML = Math.floor(Math.random() * 50) + 1;
        ladoDer.innerHTML = Math.floor(Math.random() * 50) + 1;
    }
    */
    // 3) Boton compara el mayor de los valores contenidos en los divs
    //superiores se mueve al div inferior.
    botonCompara.onclick = function(){
        // Intento de APARTADO B
        //clearInterval(generarRandom(),0);
        let divSalida = document.getElementById("salida");
        let numIzq = parseInt(ladoIzq.innerHTML);
        let numDer = parseInt(ladoDer.innerHTML);
        if (numIzq>numDer){
            divSalida.innerHTML = ladoIzq.innerHTML;
        } else {
            divSalida.innerHTML = ladoDer.innerHTML;
        }
        // 4) Botón compara se deshabilita y el boton genera
        // se habilita
        botonGenera.disabled = false
        botonCompara.setAttribute("disabled",true);
    }

}