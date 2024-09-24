// Definición de la función
function sumaParcial(array) {
    let res = [];
    let sum = 0;

    // Recorro el array
    for (let i=0; i<array.length; i++) {
        sum += array[i];
        res[i] = sum;
    }
    return res;
}
