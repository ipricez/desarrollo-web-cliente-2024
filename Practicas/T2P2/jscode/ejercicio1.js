window.onload = function(){
    // alert("Script cargado.");
    // Apartado A
    const botonA  = document.querySelectorAll("input[type='button']")[0];

    botonA.addEventListener("click",function(){
        const url = "https://randomuser.me/api";
        fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("Error al cargar usuarios: " + respuesta.status);
            }
            return respuesta.json();
        })
        .then(function (datos) {
            // Muestro un usuario SIMPLE
            console.log(datos);
        })
        .catch(function (error) {
            alert("Hubo un problema al cargar los usuarios: " + error);
        });
    })
    
    // Apartado B
    const botonB  = document.querySelectorAll("input[type='button']")[1];
    botonB.addEventListener("click",function(){
        const url = "https://randomuser.me/api";
        fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("Error al cargar usuarios: " + respuesta.status);
            }
            return respuesta.json();
        })
        .then(function (datos) {
            // Necesito recoger las propiedades: first, last, age, medium
            for (const element of datos.results) {
                let usuarioFirst = element.name.first;
                let usuarioLast = element.name.last;
                let usuarioAge = element.dob.age;
                let usuarioSRC = element.picture.medium;

                // Cada usuario debe ir dentro de un article de la clase usuario
                let article = document.createElement("article");
                article.classList = "usuario"

                // Cada article estará estructurado: nom ape:edad años y debajo fot
                article.textContent = 
                    usuarioFirst+" "+usuarioLast+": "+usuarioAge+" años";

                // Creo la foto y añado al src el link de la API
                let usuarioFoto = document.createElement("img");
                usuarioFoto.src = usuarioSRC;
                article.appendChild(usuarioFoto);
                
                // Todos los usuarios van dentro de un div
                const divWeb = document.getElementsByTagName("div")[0];
                divWeb.appendChild(article);
            }
        })
        .catch(function (error) {
            alert("Hubo un problema al cargar los usuarios: " + error);
        });
    })
    

}