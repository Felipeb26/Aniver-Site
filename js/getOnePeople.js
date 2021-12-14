// function getUser(){
// window.prompt("CONFIRME O CPF COMPLETO ABAIXO!")
// }

function respoALtera(){
    window.alert("alterado com sucesso")
}

function respoDelete(){
    window.alert("deletado com sucesso")
}


const cardDelete = document.querySelector('.cardPessoa');
let output = '';

const url = 'http://localhost:8080/pessoa/4';
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
    .then(data => criaCard(data));


// const criaCard = (itens) => {
//   itens[0].item(item => {
//         output +=
//             `<div class="pessoa">
//             <img src="./img/zaraki.jpg" alt="">
//         </div>
//         <div class="card-body">
//             <h4 class="dado">ID:</h4>
//             <span class="respDado">${item.id}</span><br>
//             <h4 class="dado">NOME:</h4>
//             <span class="respDado">${item.nome}</span><br>
//             <h4 class="dado">EMAIL:</h4>
//             <span class="respDado">${item.email}</span><br>
//             <h4 class="dado">CPF:</h4>
//             <span class="respDado">${item.cpf}</span><br>
//             <h4 class="dado">NASCIMENTO:</h4>
//             <span class="respDado">${item.nascimento}</span><br>
//         </div>`;
//         cardDelete.innerHTML = output;
//     })
// };

const criaCard = (itens) =>{
     output +=
    `<div class="pessoas">
        <div class="imagem">
            <img src="./img/yamamoto.png" alt="">
        </div>
        <div class="dados">
            <h5 class="dado">id:</h5>
            <span class="respDado">${itens.id}</span><br>
            <h5 class="dado">nome:</h5>
            <span class="respDado">${itens.nome}</span><br>
            <h5>email:</h5>
            <span>${itens.email}</span><br>
            <h5 class="dado">nasceu:</h5>
            <span class="respDado">${itens.nascimento}</span>
        </div>
    </div>`;
            cards.innerHTML = output;
    }