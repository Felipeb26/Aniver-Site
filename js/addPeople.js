var urlEnvio = 'http://localhost:8080/pessoa/inclui';

var nome = '';
var cpf = '';
var nascimento = '';
var email = '';

function getFormCadastro() {
    nome = document.querySelector("#nome");
    cpf = document.querySelector("#cpf");
    nascimento = document.querySelector("#nascimento");
    email = document.querySelector("#Email");
  console.log(nome.value,cpf.value,
    nascimento.value,email.value);
}

function cadastrar(){
    fetch(urlEnvio, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome.value,
            cpf: cpf.value,
            email: email.value,
            nascimento: nascimento.value
        })
    })
    .then(res => res.json())
    .then(data => {
        const dataArr = [];
        dataArr.push(data);
    })
    .catch(err =>{
        alert(err);
        console.log("erro")
    })
}