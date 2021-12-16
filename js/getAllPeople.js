const cards = document.querySelector('.Aniversariantes');
let output = '';

const url = "http://localhost:8080/pessoa/";
//Get lendo os posts
fetch(url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        }
    })
    .then(res => res.json())
    .then(data => criaCard(data))

 const criaCard = (itens) =>{
    itens.forEach (item =>{
     output +=
    `<div class="pessoas">
        <div class="imagem">
            <img src="./img/yamamoto.png" alt="">
        </div>
        <div class="dados">
            <h5 class="dado">id:</h5>
            <span class="respDado">${item.id}</span><br>
            <h5 class="dado">nome:</h5>
            <span class="respDado">${item.nome}</span><br>
            <h5>email:</h5>
            <span>${item.email}</span><br>
            <h5 class="dado">nasceu:</h5>
            <span class="respDado">${item.nascimento}</span>
        </div>
    </div>`;
            cards.innerHTML = output;
            
    })
    };

// const url1 = "http://localhost:8080/pessoa/inclui";

// const addPessoa = document.querySelector('#meuForm');
// var button = document.querySelector("#envio");

// //inputs do formulario
// var nomeForm = '';
// var cpfForm = '';
// var dataForm = '';
// var emailForm = '';
// var imageForm = '';

// nomeForm = document.querySelector("#nomeCompleto");
// cpfForm = document.querySelector("#cpfCompleto");
// dataForm = document.querySelector("#dataNascimento");
// emailForm = document.querySelector("#email");

// addPessoa.addEventListener('submit', (e) =>{
//   e.preventDefault();
//   fetch(url1,{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//     "nome": nomeForm.value,
//     "cpf": cpfForm.value,
//     "email": emailForm.value,
//     "nascimento": dataForm.value,
//     "base64": imageForm.value
//     })
//   })
//   .then(res => res.json())
//   .then(data => {
//       const dataArr =[];
//       dataArr.push(data);
//       teste4(dataArr);
//   })
// })