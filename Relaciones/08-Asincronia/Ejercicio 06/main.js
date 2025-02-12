/**
 * API de Dragon Ball
 * Al iniciar, la página debe cargar los pesonajes que devuelve el endPoint
 */
window.onload = function(){
    const section = document.querySelector("#personajes");
    const url = "https://dragonball-api.com/api/characters";

    fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("Error al cargar los personajes: " + respuesta.status);
            }
            return respuesta.json();
        })
        .then(function (datos) {
            // Verifica los datos en la consola
            console.log(datos);
            // Muestra los personajes
            mostrarPersonajes(datos.items); 
        })
        .catch(function (error) {
            alert("Hubo un problema al cargar los personajes: " + error);
        });

    function mostrarPersonajes(personajes) {
        personajes.forEach(function (personaje) {
            const article = document.createElement("article");

            // Nombre del personaje
            const nombre = document.createElement("h3");
            nombre.textContent = personaje.name;
            article.appendChild(nombre);

            // Imagen del personaje
            const imagen = document.createElement("img");
            imagen.src = personaje.image;
            article.appendChild(imagen);

            // Raza del personaje
            const raza = document.createElement("p");
            raza.innerHTML = `Raza: ${personaje.race}`;
            article.appendChild(raza);

            // Máximo Ki del personaje
            const maxKi = document.createElement("p");
            maxKi.innerHTML = `Máximo Ki: ${personaje.maxKi}`;
            article.appendChild(maxKi);
            
            article.addEventListener("click",function(){
                // Mandamos la información a personaje.
                localStorage.setItem("personajeID",personaje.id);
                window.location.href = "personaje.html";
            })
            // Agregar el artículo al section
            section.appendChild(article);
        });
    }
};