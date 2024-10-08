/*
    Pido tam de matriz al usuario (N)
    Creo una matriz NxN con numeros aleatorios entre N y N*2
    a) Obtener el número mayor de la matriz y mostrarlo.    
    b) Mostraz la matriz por consola en filas y columnas:
            - Elementos separados por espacios
            - Todos los elementos deben ocupar lo mismo.
    c) Sumar todos los elementos de la matriz y mostrarlo por pantalla.
    d) Aplicar Fiz-Buzz en los elementos de la matriz y devolver otra matriz con los cambios
        Si num es múltimo de 3 --> Fizz
        Si num es múltiplo de 5 --> Buzz
        Si es multiplo de 3 y 5 --> Fizz-Buzz
*/
function tamañoMatriz(){
    do {
        var tam = Number(prompt("Dame el tamaño de la matriz NxN"));
    }while (tam<=0 || isNaN(tam));
    return tam;
}

function crearMatriz(){
    let tam = tamañoMatriz();
    console.log(tam);
    
    // Creo la matriz
    let matriz = [[]];
    for (let i = 0; i < tam-1; i++) {
        var fila = [];
        matriz.push(fila);
    }
    // Relleno matriz
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            //mayor-menor+1)+menor
            let mayor = tam*2;
            let menor = tam;            
            matriz[i][j] =Math.trunc((Math.random() * (mayor - menor +1) + menor));
        };
    }
    console.log(matriz);
    return matriz;
}

// Apartado a)
function numMayor() {
    let matriz = crearMatriz();
    let numMayor = 0; //-Infinity
    let aux = false;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(aux = false) {
                aux = true;
                numMayor = matriz[i][j];
            }
            if(matriz[i][j]>numMayor) numMayor = matriz[i][j];            
        }
    }
    console.log(numMayor);
    return matriz;
}

// Apartado b)
function mostrarMatriz(){
    let matriz = numMayor();
    let cadena = "";
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j]<10) {
                cadena += "0"+matriz[i][j];
            }
            else cadena += matriz[i][j];
            cadena += " ";
        }
        cadena += "\n";
    }
    console.log(cadena);
    return matriz;

    
}

// Apartado c)
function sumaTotal(){
    let matriz = mostrarMatriz();
    let sumaTotal = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            sumaTotal += matriz[i][j];
        }
    }
    console.log("La suma total es: "+sumaTotal);
    return matriz;
}

// Apartado d)
function fizzbuzz(){
    let matriz = sumaTotal();
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if ((matriz[i][j]%3 == 0)&&(matriz[i][j]%5 == 0)) matriz[i][j] = "Fizz-Buzz";
            else if (matriz[i][j]%3 == 0) matriz[i][j] = "Fizz";
            else if (matriz[i][j]%5 == 0) matriz[i][j] = "Buzz";
            else matriz[i][j] = matriz[i][j];
        }
    }
    console.log(matriz);
    /**
     * for (fila of matriz){
     *  for (numero of fila){
     * 
     *  }
     * 
     * }
     */
    
}