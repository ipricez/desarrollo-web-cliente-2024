// Definición de la función
function filtroColores(colores,usuario) {
    
    let colorOK = [];
    let colorNO = [];

    // Recorrer el array 'usuario' y separar colores y no colores
    for (let i = 0; i < usuario.length; i++) {
        if (colores.includes(usuario[i])) {
            colorOK.push(usuario[i]); // Si es un color, lo añadimos a coloresEncontrados
        } else {
            colorNO.push(usuario[i]); // Si no es un color, lo añadimos a noColores
        }
    }

    // Concatenar colores y no colores
    return colorOK.concat(colorNO);
}