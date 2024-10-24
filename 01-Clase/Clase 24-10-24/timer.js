window.onload = function(){

    // Timer
    // setInterval
    document.getElementsByTagName("button")[0].onclick = function(){
        let frase = "";
        let contador = 0;

        let timer =  setInterval(function(){
            let dedo = document.querySelector("div");
            contador++;
            dedo.innerText = contador;
        },500);

        this.disabled = true;
    }
}


// SETTIMEOUT
// clearTimeout
