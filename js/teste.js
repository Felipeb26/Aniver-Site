var nome = document.querySelector("#nome");
var cpf = document.querySelector("#cpf");
var nascimento = document.querySelector("#nascimento");
var email = document.querySelector("#Email");
var foto = document.querySelector('#imgPrev');
var arquivo = document.querySelector('#arquivo');

arquivo.addEventListener('click', e=>{
    
    var raw = JSON.stringify({
        nome: nome.ariaValueMax,
        cpf: cpf.value,
        nascimento: nascimento.value,
        email: email.value,
        foto: foto.src
    })
    console.log(raw)
})