window.onload = function(){
    alert("Script cargado.");

    /* 1. Funcionalidades
        Lo que el usuario ponga en el campo email, debe copiarse automaticamente
        en el campo Copia Email. Se puede usar una de estas dos formas.

        Cuando un usuario marque alguna afición, esta debe colocarse en el textarea
        que hay justo debajo (el campo afiText). Si el usuario la desmarca, debe desaparecer. Si hay varias aficiones marcadas, deben aparecer una debajo de otra.
    */

    let emailField = document.getElementsByName("email")[0];
    let remailField = document.getElementsByName("remail")[0];
    // Conforme el usuario vaya escribiendo, el contenido se copia.
    emailField.onkeyup = function(){
        remailField.value = emailField.value;
    };
    emailField.onkeydown = function(){
        remailField.value = emailField.value;
    };
    
    let aficionesCB = document.querySelectorAll("input[type='checkbox']");
    let afiTextArea = document.getElementById("afiText");
    // Si el usuario selecciona o deselecciona la casilla, altera el TextArea
    // Coloco .lenght-1 para no recoger las condiciones de uso
    for (let i = 0; i < aficionesCB.length-1; i++) {
        aficionesCB[i].onclick = function(){
            if(aficionesCB[i].checked){
                afiTextArea.value += aficionesCB[i].value+"\n";
            } else afiTextArea.value = afiTextArea.value.replace(aficionesCB[i].value+"\n","");
        }
    }

    /* 2. Reglas de validación
        Estará correctamente validado SI Y SOLO SI:
        - Todos los campos de texto son obligatiroios, esto es, no pueden quedar vacíos
        (nombre, clave, repiteclave, respuesta, edad y captcha).
        - La longitud mínima de la clave debe ser de 8 caracteres.
        - El campo clave debe coincidir con el campo donde se repite la clave.
        - Si el usuario falla en la condición anterior, se debe borrar el contenido de ambos campos.
        - El contenido campo donde va la clave no puede coincidir con el contenido del campo usado para el nombre.
        - El campo donde se indican la pregunta debe tener seleccionada alguna opción de su lista que no sea la primera.
        - La longitud mínima del campo donde va la respuesta debe ser 6 caracteres.
        - Al menos un botón radio debe estar marcado.
        - EL campo edad solo puede contener números y estar en un rango válido que va desde 3 hasta 99 años.
        - El valor del campo de la palabra de seguridad debe coincidir con el código QGPHJD.
        - Se deben aceptar las condiciones de uso
    */
    
    let formu = document.forms[0];
    let btn_submit = formu.querySelector("input[type='submit']");
    // Empiezo validación
    btn_submit.onclick = function(){
        // Elimino la función por defecto de submit
        event.preventDefault();
        // Validación
        crearWarning();
        // Reset de Focus
        focus = false;

        // Nombre
        let form_nombre = document.getElementsByName("nombre")[0];
        if (form_nombre.value == ""){
            warning("Nombre vacío.");
            setFocus(form_nombre);
            cuadroError(form_nombre);
        } else{
            var nombreOK = true;
        }

        // Clave
        let form_clave = document.getElementsByName("clave")[0];
        if (form_clave.value == ""){
            warning("Clave vacía.");
            setFocus(form_clave);
        } else{
            if (form_clave.value.length<8){
                warning("Clave debe tener 8 caracteres.");
                setFocus(form_clave);
            } else {
                if (form_clave.value == form_nombre.value){
                    warning("No puede coincidir la clave con el nombre.");
                    setFocus(form_clave);
                } else{
                    var claveOK = true;
                }
            }
        }

        // Repite Clave
        let form_repiteClave = formu.elements[2];
        
        if (form_repiteClave.value == ""){
            warning("Debes repetir la clave.");
            setFocus(form_repiteClave);
        } else{
            if (form_repiteClave.value != form_clave.value){
                form_clave.value = "";
                form_repiteClave.value = "";
                warning("Las claves no son iguales.");
                setFocus(form_repiteClave);
            } else{
                var repetirclaveOK = true;
            }
        }

        // Pregunta
        let form_preguntas = formu.elements[3];
        if (form_preguntas.selectedIndex == 0){
            warning("Debes seleccionar una pregunta.");
            setFocus(form_preguntas);

        } else{
            var preguntaOK = true;
        }

        // Respuesta
        let form_respuesta = document.getElementsByName("respuesta")[0];
        if (form_respuesta.value == ""){
            warning("Respuesta vacía.");
            setFocus(form_respuesta);
            console.log("respuestsa");
            
        } else{
            if (form_respuesta.value.length <6){
                warning("Respuesta debe tener una longitud de 6 caracteres.");
                setFocus(form_respuesta);
            } else{
                var respuestaOK = true;
            }
        }

        // Sexo
        let form_sexo = formu.querySelectorAll("input[type='radio']");
        // Innecesario pero no se cómo hacerlo mejor ahora mismo.
        let booleanAux = false;
        for (let i = 0; i < form_sexo.length; i++) {
            if (form_sexo[i].checked) {
                booleanAux = true;
                var sexoOK = true;
            }
            if (i == (form_sexo.length - 1)){
                if (!booleanAux){
                    warning("No has seleccionado sexo.");
                }
            }
        }

        // Edad
        let form_edad = document.getElementsByName("edad")[0];
        if (form_edad.value == ""){
            warning("Edad vacía.");
            setFocus(form_edad);
        } else{
            if (isNaN(form_edad.value)){
                warning("La edad debe ser números.");
                setFocus(form_edad);
            } else{
                if (form_edad.value < 3 || form_edad.value > 99){
                    warning("La edad debe ser entre 3 y 99.");
                    setFocus(form_edad);
                } else{
                    var edadOK = true;
                }
            }
        }

        // Captcha
        let form_captcha = formu.elements[(formu.elements.length-5)]
        if (form_captcha.value == ""){
            warning("Captcha vacío.");
            setFocus(form_captcha);
        } else{
            let codigoCaptcha = "QGPHJD";
            if (form_captcha.value != codigoCaptcha){
                warning("Captcha erróneo (todo en mayúsculas).");
                setFocus(form_captcha);
            } else{
                var captchaOK = true;
            }
        }
        
        // Condiciones de Uso
        let form_condicionesUso = formu.elements[formu.elements.length-3];
        console.log(form_condicionesUso);
        if (!form_condicionesUso.checked){
            warning("Debes aceptar las condiciones de uso.");
            setFocus(form_condicionesUso);
        } else{
            var condicionesOK = true;
        }
        
        // Métodos creados por mi para hacer que aparezcan los errores.
        function warning(error){
            // Añado el error
            let error_div = document.createElement("div");
            let texto = document.createTextNode(error);
            error_div.appendChild(texto);
            document.getElementsByClassName("warning")[0].appendChild(error_div);
        }
        function crearWarning(){
            // En caso de que esté creato ya el div, se borra para reset
            if (document.getElementsByClassName("warning")[0] != null) {
                document.body.removeChild(document.getElementsByClassName("warning")[0]);
            }
            // Creo el div warning
            var warning = document.createElement("div");
            warning.classList = ("warning");
            warning.id = ("errores");
            document.querySelector("body").appendChild(warning);
            // Añado CSS pero NO FUNCIONA
            warning.style.display = 'grid';
            warning.setAttribute("margin","auto");
            warning.setAttribute("grid-template-colum","1fr");
        }

        /* 4. Control de errores

        */
       // NO FUNCIONA
        function cuadroError(x){
            x.style.border = '2px';
            x.style.borderColor = 'red';
        }

        function setFocus(x){    
            if (!focus){
                x.focus();
                focus = true;
            }
        }

        /* 5. Envío
            Cuando todas las reglas sean válidas, el formulario se moverá a la página
            resultado.html
        */
       if(
        nombreOK && claveOK && repetirclaveOK && preguntaOK
        && respuestaOK && sexoOK && edadOK && captchaOK && condicionesOK
       ){
        window.location.href = "resultado.html";
       }

        
    }
    
}