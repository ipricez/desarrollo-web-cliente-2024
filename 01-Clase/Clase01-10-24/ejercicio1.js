/*
    a) Mostrar por consola todos los sueldos uno debajo 
        del otro
    b) Aplicar el 15% de retención a cada sueldo y devolver
        otro array (netos) con los nuevos valores
    c) Crear el array 'fiscalAalto' y guardar en él todos
        los sueldos mayores a 1935
*/
let brutos = [1000,1300,1500,1700,
    2000,2200,2800,3000];

// a)
function mostrarConsola() {
    for (let i = 0; i < brutos.length; i++) {
        console.log (brutos[i]);
    }
}
/*
    brutos.foreach(function (ele){
        console.log (ele);
    });
*/

// b)
var netos = [];
function retencion15() {
    for (let i = 0; i < brutos.length; i++) {
        netos.push (brutos[i]-brutos[i]*0.15);
    }
    console.log(netos);
    return netos;
}

// c)
var fiscalAlto = [];
function fiscal() {
    for (let i = 0; i < netos.length; i++) {
        if (netos[i] > 1935) fiscalAlto.push(netos[i]);
    }
    return fiscalAlto;
}
/* 
    APUNTES
    let fiscalAlto.filter(function(ele){
        return ele>1935;
    })

        filter(ele => 1935);

    foreach, map, filter;

    ---------------------------------------

    **** Ejercicio en una sola linea ****
    let fiscalAlto = brutos.map(ele => ele-(ele*IRPF)/100).filter
    (ele => ele>1935);
*/
/*
    .map() FUNCIONES DE CALLBACK
    foreach,map,filter
    ------------------------------------------------
    0 y 3 
    .map (function(ele,pos/i tambien valdría){
    })

    brutos.map(function(ele,pos,array){})

    ------------------------------------------------
    for ( ___ of _____) {

    }

    for (adri of brutos){

    }
*/
mostrarConsola();
retencion15();
fiscal();