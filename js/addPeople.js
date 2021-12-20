var urlEnvio = 'http://localhost:8080/pessoa/inclui';
let token = JSON.parse(localStorage.getItem('token'));

var nome = "";
var cpf = "";
var nascimento = "";
var email = "";
var foto = "";

function cadastrar() {
    nome = document.querySelector("#nome");
    cpf = document.querySelector("#cpf");
    nascimento = document.querySelector("#nascimento");
    email = document.querySelector("#Email");
    foto = document.querySelector('#arquivo');

    fetch(urlEnvio, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "nome": nome.value,
                "cpf": cpf.value,
                "email": email.value,
                "nascimento": nascimento.value,
                "base64": foto.files[0]
            })
        })
        .then(response => response.text(), console.log(base64))
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
}


function login(){
    let loga = confirm("Informe o id ou o email completo!")

    if(loga == true){
        window.location.href = "login.html"
    }else{
        window.location.href = "cadastro.html"
    }
}