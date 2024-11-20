/**
 * Realiza un programa que, haciendo uso de dos campos de texto y un botón, realice la
 * conversión de dolares y euros (1$ = 0.83€).
 * Completa el ejercicio añadiendo dos campos y un botón nuevos para implementar la
 * conversion contraria (de euros a dolares).
 * 
 * b) Mejora el ejercicio anterior usando solo dos campos y un botón para realizar ambas
 * conversiones. Para saber qué conversión debemos realizar en cada momento, esta se debe
 * seleccionar de una lista desplegable.
 */

// Variables globales
let dolares = 1;
let euros = 0.83;

window.onload = function(){
    alert("Script cargado");

    // Apartado A
    let formu = document.forms[0];
    // Conversión de dólares a euros
    let dolares1 = formu.elements[0];
    let euros1 = formu.elements[1];
    euros1.readOnly = true;
    let conversor1 = formu.elements[2];
    conversor1.onclick = function(){
        euros1.value = dolares1.value*euros;
    }
    // Conversión de euros a dolares
    let euros2 = formu.elements[3];
    let dolares2 = formu.elements[4];
    dolares2.readOnly = true;
    let conversor2 = formu.elements[5];
    conversor2.onclick = function(){
        dolares2.value = euros1.value/euros;
    }

    //Apartado B
    let formu2 = document.forms[1];

    let moneda = formu2.elements[0];
    let valorAnnadido = formu2.elements[1];
    let valorResultado = formu2.elements[2];
    valorResultado.readOnly = true;
    let conversor3 = formu2.elements[3];
    conversor3.onclick = function(){
        if (moneda.value=="dolar") valorResultado.value = valorAnnadido.value*euros;
        else valorResultado.value = valorAnnadido.value/euros;
    }
    moneda.onchange = function(){
        valorResultado.value = "";
    }

}

