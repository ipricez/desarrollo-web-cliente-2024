/**
 * 1. Función que recibe una matriz Y. Devuelve true si hay algún elemento
 *      repetido. False si todos son diferentes.
 * 
 * 2. Anagrama. Función que reciba dos cadenas y devuelva true si son anagramas
 *      o false si no lo son.
 */

function eleRepetido(paco){
    /*let num = [];
    paco.forEach(element => {
        element.forEach(elemento => {
            if (num.includes(elemento)) {
                return true
            }
            num.push(elemento);
        });     
    }); */
    let acumulados = [];
    for (fila of paco) {
        for (num of fila){
            if (acumulados.includes(num)) {
                return true;
            }
            acumulados.push(num);
        }
    }
}

eleRepetido([[1,2,3],[4,5,3],[7,8,9]]);
// PREGUNTAR CHATGPT 
function anagrama(string1,string2) {
    let aux = [...string1];
    let siAnagrama = true;
    aux.forEach(element => {
        if (!string2.includes(element)) {
            siAnagrama = false;
        };
    }); 
    console.log(siAnagrama);
    
    return siAnagrama;
    /**
     * let c1 = cad1.split("");
     * let c2 = [...cad2];
     * 
     * c1 = c1.join(c1.sort());
     * c2 = c2.join(c2.sort());
     * if (c1===c2){ return true}
     * return false;
     */
}
anagrama("hola","holas");

