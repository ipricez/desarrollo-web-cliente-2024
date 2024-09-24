// Definición de la función
function countBy(X, Y) {
    let array = [];
    if (X < 0 || Y < 0) return array;
    else {
        for (let i = 1; i <= Y; i++) {
            let aux = 100 * i;
            array.push(aux);
        }
        return array
    }

    
}