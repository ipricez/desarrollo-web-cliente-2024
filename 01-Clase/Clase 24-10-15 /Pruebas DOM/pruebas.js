function manu(){
    let parras = document.getElementsByTagName("table");
    let dedo = parras[0];

    dedo.setAttribute('width',2000);
    dedo.setAttribute("class","goku");
    dedo.setAttribute("name","carlos");
    let valor = parseInt(dedo.getAttribute("width"));
    valor -= 300;
    dedo.setAttribute('width',valor);
    console.log(valor);
    
    //console.log(dedo.width);
    //dedo.width = "15px";
    //dedo.id="tablita";
    //dedo.className="pepe";
}

function xanxe() {
    let bombi = document.getElementById("bombom");

    // innerHTML
    // innetText
    // textContent
}
window.onload = function() {
    
     

    //let body = document.getElementsByTagName("body")[0];
    //body.bgColor="#FFF";
    //document.bgColor="#FFF";    // document equivale al body
}

function cambia() {
    // Llegar al elemento
    let dedo = document.getElementsByTagName("input")[0];
    // Hacer el cambio
    dedo.type="password";

}
/**
 * ACCESO A ATRIBUTOS
 * 
 * 1) Notación PUNTO
 */