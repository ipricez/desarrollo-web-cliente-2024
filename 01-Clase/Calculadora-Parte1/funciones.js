/*
    FUNCION recogerNumero
        La funcion recibirá como parámetro una cadena, la cual será un mensaje para el usuario.
        Debe devolver el numero que introduce el usuario.
        Si el usuario no mete un numero correcto, vuelve a pedir el numero
        Usa PROMPT para pedir el numero.
*/
function recogerNumero(texto){
    do {
        var n = Number(prompt(texto)); //parseInt
    } while (isNaN(n));
    return n;
}

/*
    Crea funciones para sumar, restar, multiplicar y dividir.
        Todas van a recibir dos parámetros.
        Todas van a devolver el resultado de aplicar la operación correspondiente aplicada a los parámetros.
*/
function sumar(a,b){
    return (a+b);
}
function restar(a,b){
    return (a-b);
}
function multiplicar(a,b){
    return (a*b);
}
function dividir(a,b){
    return (a/b);
}

/*
    Crear la función recogeOperacion.
        Esta funcion debe pedir al usuaio si quiere sumar, restar, multiplicar o dividir.
        Tú decides qué parámetros recibe y qué valores devuelve
*/
function recogeOperacion(){
    let operandos = ['sumar','restar','multiplicar','dividir'];
    do{
        var res = prompt("Sumar, restar, multiplicar o dividir.").toLowerCase;
    } while (!operandos.includes(res));
    return res;
}
/*
    Crea la función principal:
        Esta función no recibe ni devuelve nada.
        Esta función debe pedirle dos números al usuario, a continuación pedirle la operación a realizar y, finalmente,
        mostrar en un Alert el resultado de la operación.
*/
function principal(){
    let a = recogerNumero("Dame un valor");
    let b = recogerNumero("Dame un valor");
    let ope = recogeOperacion();

    let res;
    switch (ope) {
        case "sumar":
            res = sumar(a,b);
            break;
        case "restar":
            res = restar(a,b);
            break;
        case "multiplicar":
            res = multiplicar(a,b);
            break;
        case "dividir":
            res = dividir(a,b);
            break;
        default:
            alert("ERROR");
            break;
        
    }
    alert("El resultado es: "+res)

}