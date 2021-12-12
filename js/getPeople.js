const cards = document.querySelector('.Aniversariantes');
let output = '';

const url = 'http://localhost:8080/pessoa/';
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
    .then(data => teste4(data))

const teste4 = (itens) =>{
    itens.forEach (item =>{
     output +=
    `<div class="pessoas">
        <div class="imagem">
            <img src="./img/yamamoto.png" alt="">
        </div>
        <div class="dados">
            <h4>id:</h4>
            <span>${item.id}</span><br>
            <h4>nome:</h4>
            <span>${item.nome}</span><br>
            <h4>email:</h4>
            <span>${item.email}</span>
            <h4>nasceu:</h4>
            <span>${item.nascimento}</span>
        </div>
    </div>`;
            cards.innerHTML = output;
    })
    };