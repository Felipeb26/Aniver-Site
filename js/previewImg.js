var loadFile = function(event) {
    var output = document.getElementById('imgPrev');
    output.src = URL.createObjectURL(event.target.files[0]);
}

function validation(){
    var validaEmail = document.getElementById("validaEmail");
    var email = document.getElementById("email").value;
    var texto = document.getElementById("texto");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        validaEmail.classList.add("valid")
        validaEmail.classList.remove("invalid")
        texto.innerHTML = "email valido"
        texto.style.color = "#00ff00"
    }
    else{
        validaEmail.classList.remove("valid")
        validaEmail.classList.add("invalid")
        texto.innerHTML = "email invalido"
        texto.style.color = "#ff0000"
    }
    if (email == ""){
        validaEmail.classList.remove("valid")
        validaEmail.classList.remove("invalid")
        texto.innerHTML = ""
        texto.style.color = "#00ff00"
    }
}