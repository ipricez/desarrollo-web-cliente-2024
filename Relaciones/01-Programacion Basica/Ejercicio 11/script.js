/*
    Crear una función que traduzca una cadena de ADN y ARN.
    Por ejemplo:
        Si se introduce la cadena GCAT, a salida debe ser GCAU
        Si se introduce la cadena GCATCGTA, a salida debe ser GCAUCGUA
*/
function quimica(cadenaADN) {
    
    // Creo la cadena ARN
    let cadenaARN ='';

    return cadenaADN.replaceAll('T','U');

    // Recorro la cadena
    // for (let i = 0; i < cadenaADN.length; i++) {
    //     const element = cadenaADN[i];
    //     if (element=='T') cadenaARN +='U';
    //     else cadenaARN += element;
    // }
    //return cadenaARN;    
}


console.log(quimica("GCAT"));