// Definición de la función
function countBy(X, Y) {
    let array = [];
    if (X < 0 || Y < 0) return array;
    else {
        array[0] = 1;
        for (let i = 1; i < Y; i++) {
            let aux = X * i;
            array.push(aux);
        }
        return array
    }
}