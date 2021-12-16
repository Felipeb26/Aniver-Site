var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('imgPrev');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

function validation(){
    var validaEmail = document.getElementById("validaEmail");
    var email = document.getElementById("Email").value;
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
        texto.style.color = "#bb0606"
    }
    if (email == ""){
        validaEmail.classList.remove("valid")
        validaEmail.classList.remove("invalid")
        texto.innerHTML = ""
        texto.style.color = "#00ff00"
    }
}

function mascaraCpf(){
  const cpf = document.querySelector("#cpf");
  
  if(cpf.value.length == 3 || cpf.value.length == 7){
    cpf.value += "."
  }else if(cpf.value.length == 11){
    cpf.value += "-"
  }
}