/* 
    Crear un script que pida al usuario un numero entero positivo N mayor a 2.
    Hay que controlar que el numero introducido sea correcto. Si no es así se
    volverá a pedir.

    A continuación debe crearse una matriz NxN rellena con los resultados de la
    tabla de multiplicar de N (empezando en 1). Finalmente, muestra por consola
    la matriz "en forma de matriz".
*/

function pedirValor() {
    let n = 0;
    do {
        n = parseInt(prompt("Dame un valor entero positivo N mayor a 2"));
    } while (n<2 || isNaN(n));

    // Creo tantas matrices como sean necesarias
    let fila = [];
    var matriz = [];
    for (let i = 1; i <= n*n; i++) {
        fila.push(i*n);
        if (fila.length==n) {
            matriz.push(fila);
            fila = [];
        }
    }

    // Matriz enseñada de buena forma
    console.log (matriz);
    let matrizPocha ="";
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j]<10) matrizPocha += "0"+matriz[i][j];
            else matrizPocha += matriz[i][j];
            matrizPocha += " ";
        }
        matrizPocha += "\n";
        
    }
    console.log (matrizPocha);

    // Inversa
    for (let i = 0; i < matriz.length; i++) {
        let arr = [];
        matriz.forEach((ele) => {
            arr.push(ele[i]);
        })
        console.log(arr);
    }


}