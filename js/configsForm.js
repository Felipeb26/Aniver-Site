const loadFile = () => {
    const file = document.querySelector('#arquivo').files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(event){
        var foto = document.querySelector('#imgPrev');
        foto.src = event.target.result;

        foto.onload = function(e){
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 400;
          const scaleSize = MAX_WIDTH / e.target.width;
          canvas.width = MAX_WIDTH;
          canvas.height = e.target.height * scaleSize;
  
          const ctx = canvas.getContext("2d");
          ctx.drawImage(e.target, 0,0,canvas.width, canvas.height);
          const srcEncoded = ctx.canvas.toDataURL(e.target,"image/jpeg")
          document.querySelector("#minImage").src = srcEncoded;
        }
    }
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