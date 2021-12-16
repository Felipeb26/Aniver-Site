const card = document.querySelector('.alteraDeleta');
let output = '';

const url = 'http://localhost:8080/pessoa/4';
//Get lendo os posts
fetch(url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-type": "application/json",
        }
    })
    .then(res => res.json())
    .then(data => criaCard(data));

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
            card.innerHTML = output;
    })
}