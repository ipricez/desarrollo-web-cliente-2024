window.onload = function(){
    // Corrijo el funcionamiento de los botones
    let botones = document.querySelectorAll("input[type='button']");
    let insertarBoton = botones[0];
    let cancelarBoton = botones[1];
    insertarBoton.addEventListener("click",function(){
        // No hace falta validar
        let titulo = document.getElementsByName("titulo")[0].value;        
        let isbn = document.getElementsByName("isbn")[0].value;
        let paginas = document.getElementsByName("numpaginas")[0].value;
        let genero = document.getElementsByName("genero")[0].value;
        let anio = document.querySelector("input[name='anio']").value;
        let cover = document.querySelector("input[name='cover']").value;
        let autor = document.querySelector("input[name='autor']").value;
        let sinopsis = document.getElementsByName("resumen")[0].value;

        // Creo un objeto libro
        let libro = {
            title: titulo,
            pages: paginas,
            genre: genero,
            cover: cover,
            synopsis: sinopsis,
            year: anio,
            isbn: isbn,
            author: {
                name: autor,
                otherBooks: []
            }
        }

        // Guardo el libro para enviarlo
        localStorage.setItem("nuevoLibro",JSON.stringify(libro));
        console.log(localStorage.getItem("nuevoLibro"));
        console.log(Object.keys(libro).length);
        
        // Necesito tocar el formulario desde JS
        let formulario = document.getElementById("formu");
        formulario.setAttribute("method","POST");
        formulario.setAttribute("action","inicio.html");
        window.location.href = "inicio.html";
        // No se por qué no funciona el submit
        // formulario.submit();

    });
    cancelarBoton.addEventListener("click",function(){
        // Volver a inicio
        window.location.href = "inicio.html";
    })
}