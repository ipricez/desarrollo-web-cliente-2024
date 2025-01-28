window.onload = function(){
    // Traemos del main.js los datos (cadena con formato json) y lo transformamos en objeto.
    let paco = JSON.parse(localStorage.getItem('libro'));
    // console.log(paco);
    
    // Creamos el título.
    let titulo = document.createElement("h2");
    titulo.innerHTML = paco.title;
    let webSection = document.getElementsByTagName("section")[0];
    webSection.appendChild(titulo);

    // Empezamos con la tabla.
    let tabla = document.createElement("table");
    // FORMA DE HACERLO CON BUCLE
    for (const dato in paco) {
        if(dato!="title" && dato!="cover"){
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.appendChild(document.createTextNode(dato));
            if(dato=="author"){
                console.log(dato.name); // undefined
                console.log(paco.author.name); // sale correctamente
                td2.appendChild(document.createTextNode(paco.author.name))
            } else td2.appendChild(document.createTextNode(paco[dato]));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabla.appendChild(tr);
        }
    }
    webSection.appendChild(tabla);

    // Añadimos la foto y le ponemos que sea clase "portada"
    let portada = document.createElement("img");
    portada.className = "portada";
    portada.src = paco.cover;
    webSection.appendChild(portada);

    // Hacemos útil el botón para volver a inicio.html
    let volver = document.getElementsByTagName("a")[0];
    volver.addEventListener("click",function(){
        window.location.href = "inicio.html";
    })
}