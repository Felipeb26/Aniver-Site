const url = 'http://localhost:8080/pessoa/';
let token = localStorage.getItem('token');
// const teste = document.querySelector('.teste');

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

envio.addEventListener('click', (e) => {
    e.preventDefault();

    var raw = JSON.stringify({
        "nome": nomeInput.value,
        "data": dataInput.value,
        "id": idInput.value,
        "email": emailInput.value,
    })
    
    if(idInput.value == "" && nomeInput.value == "" && dataInput.value == "" && emailInput.value == "" ){
        swal.fire({
            title: 'ERRO',
            text: "Necessario inserir algum dado para pesquisar!",
            icon: 'error',
            showCancelButton: true,})
    }else if(!idInput.value == "" || null){
        var urlId = url+idInput.value
        console.log(urlId)
        fetch(urlId, {
            mode: "cors",
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
          .then(response => {
            if(response.status == 200){
              response.json()
              .then(data => cardId(data))
              .catch(erro => console.log(erro))
            }else{
              swal.fire({
                icon: "error",
                title: "ERRO",
                text: "Usuario não existe ou não encontrado",
                confirmButtonText: "ok"
              })}
          })
    }
    else if(!nomeInput.value == "" || null){
        console.log("foi "+nomeInput.value)
    }
    else if(!dataInput.value == "" || null){
        console.log("foi")
    }
    else if(!emailInput.value == "" || null){
        console.log("foi")
    }
    console.log(raw)
})

function cardId(item){
document.querySelector('.teste').innerHTML =
`<div class="card pessoaPesquisa">
<div class="imagem">
  <img src="${item.base64}" alt="imagem de ${item.nome}"  onError="this.onerror=null;this.src='/img/user.png';">
</div>
<div class="dadosPesquisa">
  <h4 class="dado">ID:</h4>
  <span class="respDado">${item.id}</span><br>
  <h4 class="dado">NOME:</h4>
  <span class="respDado">${item.nome}</span><br>
  <h4 class="dado">EMAIL:</h4>
  <span class="respDado">${item.email}</span><br>
  <h4 class="dado">CPF:</h4>
  <span class="respDado">${item.cpf}</span><br>
  <h4 class="dado">NASCIMENTO:</h4>
  <span class="respDado">${item.nascimento}</span><br>
</div>
</div>`}