/**
 * Crear un DIV con el número 0 en su interior. Bajo el DIV, coloca dos botones:
 * uno para sumar y otro para restar.
 * - Si se pulsa el botón para sumar, se incrementa en uno el número que hay en
 * el div en ese momento.
 * - Si se pulsa el boton de restar, se decrementa en uno el número que hay en
 * el div en ese momento.
 */
function sumar() {
    let id = document.getElementById("botones");
    id.innerHTML = parseInt(id.innerHTML) + 1;
}

function restar() {
    let id = document.getElementById("botones");
    id.innerHTML = parseInt(id.innerHTML) - 1;
}