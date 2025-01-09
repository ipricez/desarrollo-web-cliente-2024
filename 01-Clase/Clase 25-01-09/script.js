window.onload = function(){
    let passwordField = document.getElementById("password");
    let eye_img = document.getElementById("eye");

    eye_img.onmousedown = function(){
        passwordField.setAttribute("type","text");
    }
    eye_img.onmouseup = function(){
        passwordField.setAttribute("type","password");
    }
}