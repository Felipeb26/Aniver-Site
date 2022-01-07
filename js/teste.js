///hamburguer
var burguer = document.querySelector("#burguer");

//botoes para ativar os inputs
var id = document.querySelector("#paraId");
var nome = document.querySelector("#paraNome");
var email = document.querySelector("#validaEmail");
var data = document.querySelector("#paraData");
var envio = document.querySelector("#envio");

//inputs para enviar
var nomeInput = document.querySelector("#itemNome");
var dataInput = document.querySelector("#itemData");
var idInput = document.querySelector("#itemId");
var emailInput = document.querySelector("#Email");

burguer.addEventListener('change', () => {
        if (burguer.checked) {
            id.style.display = 'block';
            nome.style.display = 'block';
            email.style.display = 'block';
            data.style.display = 'block';
            envio.style.display = 'block';
        } else {
            id.style.display = 'none';
            nome.style.display = 'none';
            email.style.display = 'none';
            data.style.display = 'none';
            envio.style.display = 'none';
            envio.style.display = 'none';
        }
    })

id.addEventListener('click', () => {
    if (idInput.click = true) {
        idInput.style.display = "block";
        dataInput.style.display = 'none';
        nomeInput.style.display = 'none';
        emailInput.style.display = 'none';
        document.querySelector("#texto").style.display = 'none';

        dataInput.value ="";
        nomeInput.value ="";
        emailInput.value ="";
    } else {
        idInput.style.display = 'none';
    }
})

nome.addEventListener('click', () => {
    if (nomeInput.click = true) {
        idInput.style.display = "none";
        dataInput.style.display = 'none';
        nomeInput.style.display = 'block';
        emailInput.style.display = 'none';
        document.querySelector("#texto").style.display = 'none';

        dataInput.value ="";
        idInput.value ="";
        emailInput.value ="";
    } else {
        nomeInput.style.display = 'none';
    }
})

email.addEventListener('click', () => {
    if (emailInput.click = true) {
        idInput.style.display = "none";
        dataInput.style.display = 'none';
        nomeInput.style.display = 'none';
        emailInput.style.display = 'block';

        dataInput.value ="";
        nomeInput.value ="";
        idInput.value ="";
    } else {
        emailInput.style.display = 'none';
    }
})


data.addEventListener('click', () => {
    if (dataInput.click = true) {
        idInput.style.display = "none";
        dataInput.style.display = 'block';
        nomeInput.style.display = 'none';
        emailInput.style.display = 'none';
        document.querySelector("#texto").style.display = 'none';

        idInput.value ="";
        nomeInput.value ="";
        emailInput.value ="";
    } else {
        dataInput.style.display = 'none';
    }
})

document.addEventListener("keypress", function(e){
    if(e.key === "/"){
      const btn = document.querySelector("#burguer");
      btn.click();
    }
  })