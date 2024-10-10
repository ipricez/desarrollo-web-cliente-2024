// Ejercicio 1
function ejercicio1(){
    // Creamos variable para poder modificar la equivalencia al dollar.
    let dollar = 1.0965;
    // Bucle para recibir la cantidad del usuario.
    do {
        var num = Number(prompt("Dame cantidad en €."));
    }while (num<=0 || isNaN(num)); // Controlo que el número sea positivo.
    // Calculo en una variable para que sea más visible.
    let res = num * dollar;
    alert(num+" euros equivalen a "+res+" dollares americanos.");
}

// Ejercicio 2
function ejercicio2(){
    // Variables donde almacenar los datos.
    let suspensos = 0;
    let aprobados = 0;
    let notables = 0;
    let sobresalientes = 0;
    // Bucle que pida 10 calificaciones.
    for (let i = 0; i < 10; i++) {
        do {
            var num = parseInt(prompt("Calificación: "));
        }while (num<0 || num>10 || isNaN(num));
        // Condiciones y recuento.
        if (num<5) suspensos++;
        else if (num<7) aprobados++;
        else if (num<9) notables++;
        else sobresalientes++;
    }
    // Alert comentando los resultados.
    alert("Hay "+suspensos+" suspensos.");
    alert("Hay "+aprobados+" aprobados.");
    alert("Hay "+notables+" notables.");
    alert("Hay "+sobresalientes+" sobresalientes.");
}

// Ejercicio 3
function ejercicio3(){
    // ### APARTADO A ###
    // Pedimos números positivos hasta que el usuario ingrese un número negativo.
    let cajon = [];
    do {
        var num = Number(prompt("Ingrese números positivos. Negativo para acabar."));
        // Seguramente hay una manera más eficiente debido a que estoy VOLVIENDO a comprobar dentro
        // de una condición (desastre), pero ahora mismo lo he intentado con DoWhile y While
        // y no veo nada claro.
        if (num>0) {
            cajon.push(num);
        }
    } while (num>0);
    
    // ### APARTADO B ###
    let apartadoB = "";
    for (const element of cajon) {
        apartadoB += element+" ";
    }
    // Muestro por consola
    console.log(apartadoB);
    
    // ## APARTADO C ###
    let apartadoC = 0;
    for (const element of cajon) {
        apartadoC += element;
    }
    // Muestro por consola.
    console.log(apartadoC);

    // ### APARTADO D ###
    do {
        var numero = parseInt(prompt("Ingrese número ENTERO positivo: "));
    }while (num>0);

    // ### APARTADO E ###
    let primeraAparicion = 0;
    let encontrado = false;
    let ultimaAparicion = 0;
    // Recorremos el array para encontrar si coincide.
    for (let i = 0; i < cajon.length; i++) {
        if ((cajon[i] == numero) && !encontrado) {
            primeraAparicion = i;
            ultimaAparicion = i
            encontrado = true;
        }
        else ultimaAparicion = i;
    }
    // Nos ayudamos con el boolean.
    if (!encontrado) console.log("No se ha encontrado ningún número que coincida.");
    else console.log("Primera posición: "+primeraAparicion+"\nÚltima aparición: "+ultimaAparicion);
}

// Ejercicio 4
function ejercicio4(){
    // Defino la matriz 3x3
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz.push([]);
    }
    // ### APARTADO A ###
    // Valores randoms entre 2 y 20.
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {          
            matriz[i][j] =Math.trunc((Math.random() * (20 - 2 +1) + 2));
        };
    }

    // ### APARTADO B ###
    // Creo la variable para almacenar como CADENA la array para poder mostrarla como
    // se pide en el enunciado.
    let aux1 = "";
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            const element = matriz[i][j];
            if (element <10) aux1 += "0"+element;
            else aux1 += element;
            aux1 += " ";
        }
        aux1 += "\n";
    }
    console.log(aux1);

    // ### APARTADO C ###
    // Recorro la matriz recogiendo la suma total.
    let sumaTotal = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            sumaTotal += matriz[i][j];
        }
    }
    console.log(sumaTotal);
    
    // ### APARTADO D ###
    let copia = [];
    var aux2 = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            let element =  (matriz[i][j]);
            if (element>10) element = 9;
            aux2.push(element);            
        }
        copia.push(aux2)
        aux2 = [];        
    }
    // Muestro por consola como en el apartado B
    let aux3 = "";
    for (let i = 0; i < copia.length; i++) {
        for (let j = 0; j < copia.length; j++) {
            const element = copia[i][j];
            if (element <10) aux3 += "0"+element;
            else aux3 += element;
            aux3 += " ";
        }
        aux3 += "\n";
    }
    console.log(aux3);

    // ### Apartado E ###
    do {
        var valor = prompt("Give me a valor entre 1 y 3.");
    } while (valor<0 || valor>3);
    for (let j = 0; j < matriz.length; j++) {
        // Coloco valor-1 debido a que la posición en el Array empieza en 0.
        let element = copia[valor-1][j];
        matriz[valor-1][j] = element;
    }
    console.log(matriz);    
}
