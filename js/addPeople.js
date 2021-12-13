var nomeForm = '';
var cpfForm = '';
var dataForm = '';
var emailForm = '';
var imageForm = '';

nomeForm = document.querySelector("#nomeCompleto");
cpfForm = document.querySelector("#cpfCompleto");
dataForm = document.querySelector("#dataNascimento");
emailForm = document.querySelector("#email");



var raw = JSON.stringify({
  "nome": nomeForm.value,
  "cpf": cpfForm.value,
  "email": emailForm.value,
  "nascimento": dataForm.value,
  "base64": imageForm.value
});

var requestOptions = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: raw,
  redirect: 'follow'
};


function send(){
fetch("http://localhost:8080/pessoa/inclui", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}