// Definición de la función
function filtroColores(arrayA,arrayB) {
    
    let coloresEncontrados = [];
    let noColores = [];

    // Recorrer el array 'usuario' y separar colores y no colores
    for (let i = 0; i < usuario.length; i++) {
        if (colores.includes(usuario[i])) {
            coloresEncontrados.push(usuario[i]); // Si es un color, lo añadimos a coloresEncontrados
        } else {
            noColores.push(usuario[i]); // Si no es un color, lo añadimos a noColores
        }
    }

    // Concatenar colores y no colores
    return coloresEncontrados.concat(noColores);


}