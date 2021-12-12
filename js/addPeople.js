const url = "http://localhost:8080/pessoa/inclui";

const addPessoa = document.querySelector('#meuForm');

//inputs do formulario
const nomeForm = document.getElementById('nomeCompleto').value;
const cpfForm = document.getElementById('cpfCompleto').value;
const dataForm = document.getElementById('dataNascimento').value;
const emailForm = document.getElementById('email').value;
const imageForm = document.getElementById('arquivo').value;

const data ={
    nome: nomeForm,
    cpf: cpfForm,
    nascimento: dataForm,
    email: emailForm,
    base64: imageForm
}


function makePost(){
    fetch(url,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}