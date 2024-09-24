// Definición de la función
function recibeArray(arrayA, arrayB) {
    let res = [];

    // Filtramos los elementos que solo están en el arrayA
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayB.indexOf(arrayA[i]) === -1) { // Si no está en arrayB
            res.push(arrayA[i]);
        }
    }

    // Filtramos los elementos que solo están en el arrayB
    for (let i = 0; i < arrayB.length; i++) {
        if (arrayA.indexOf(arrayB[i]) === -1) { // Si no está en arrayA
            res.push(arrayB[i]);
        }
    }

    return res;
}