window.onload = function(){
    // Variables usadas
    let contadorColor = 0;

    alert("Cargado correctamente :)");
    // Creo el div en el documento
    let fondo = document.createElement("div");
    // El main lo adopta
    let papi = document.querySelector("main");
    papi.appendChild(fondo);

    fondo.onmousedown = function(){
        // Color del fondo
        let fondos = ["red","green","blue","yellow","orange","pink","lightblue","lightgreen"];
        if (contadorColor >= fondos.length) contadorColor = 0;
        fondo.style.backgroundColor = fondos[contadorColor];
        contadorColor++;

        // Figura
        let figura = document.createElement("div");
        let ccolores = ["#00FF48","#D4478E","#FFD100","#0070FF","#7AAA83","#385B66","#ED91BF","#95AD95"];
        figura.style.backgroundColor = ccolores[contadorColor];
        // Probabilidad de círculo del 0 al 10
        let ruletaRusa = Math.floor(Math.random() * 11);
        if (ruletaRusa >= 5) figura.style.borderRadius = 50+"%";
        fondo.appendChild(figura);
        // Clase de la figura
        figura.setAttribute("class","figuras");
        moverFigura();

        // Mejora de la música
        let notaMusical = document.createElement("audio");
        papi.appendChild(notaMusical);
        let notaRandom = Math.floor(Math.random() * 10) + 1;
        notaMusical.src = "./music/"+notaRandom+".mp3";
        notaMusical.setAttribute("autoplay","autoplay");
    }
    
    window.onmousemove = function(){
        moverFigura();
    }
    fondo.onmouseup = function(){
        fondo.removeChild(document.getElementsByClassName("figuras")[0]);
        // Mejora de la música
        document.getElementsByTagName("main")[0].removeChild(document.getElementsByTagName("audio")[0]);
    }
}

function moverFigura(){
    if(document.getElementsByClassName("figuras")[0]){
        let figura = document.getElementsByClassName("figuras")[0];
        figura.style.left = event.clientX-(figura.clientWidth/2)+"px";
        figura.style.top = event.clientY-(figura.clientHeight/2)+"px";
    }
}