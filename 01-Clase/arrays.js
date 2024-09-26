// ***********************
// - FUNCIONES DE ARRAYS -
// ***********************
// ********************************************
// cntrl+shift+p >quokka start on current file
// ********************************************
let lista = [1,2,3,4,5];
let otra = ['uno','dos,true'];

let res = lista.concat(6,7,8,9);
res = lista.concat(otra);

// Meter
res.push("flipao");
res.unshift("por delante");

// Sacar
let ultimo = res.pop();
ultimo = res.shift();
console.log(ultimo);

// Altera el array
res.reverse();

let salida = res.join("-");
console.log(salida);

console.log(res);
console.log(res.length);

// Despues de los apuntes
let edad = [1,5,8,7,9];
function mayorEdad(edad){
    return edad==8;
}
let ok = edad.some(mayorEdad);
console.log(ok);

edad.forEach((ele)=>{
    if (ele%2 == 0){

    }
})

let otro = edad.map((ele,pos)=>{
    if (ele%2 !== 0)
        return ele;
    else
        return pos;
});
console.log(otro);

// SPREAD OPERATOR [...
let lista1 = [1,2,3,4,5];
let otra1 = [...lista];

otra [0] = 67;

let ulti = "MARTILLO VA!!";
let luis = [...ulti];

console.log(luis);

let a,b,c;

let lista3 = [23,56,78,4,8,11,57];

// Intercambiar pos 1 con pos 4
[lista3[1],lista3[4]] = [lista3[4],lista3[1]];

console.log(lista3);
[a,b,c] = lista3;
console.log(a);
console.log(b);
console.log(c);

function paco(){
    return [4,9]
}
let posx, posy;
[posx,posy] = paco();
console.log(posx);
console.log(posy);