const cards = document.querySelector('.Aniversariantes');
const carrosel = document.querySelector('.imageCarrosel');

let output = '';
let telaCarrosel = '';

const url = "http://localhost:8080/pessoa/";
let token = localStorage.getItem('token');

fetch(url, {
        mode: "cors",
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => criaCard(data))
    .catch(erro => console.log(erro))

const criaCard = (itens) => {
    itens.forEach(item =>{
        output +=
        `<div class="pessoas">
        <div class="imagem">
            <img loading="lazy" src="${item.base64}" alt="foto de ${item.nome}" onError="this.onerror=null;this.src='/img/user.png';">
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
    })
    cards.innerHTML = output;
}

//adiciona imagens ao carrosel
fetch(url, {
    mode: "cors",
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
})
.then(res => res.json())
.then(data => addCarrosel(data))
.catch(erro => console.log(erro))

const addCarrosel = (fotos) =>{
    fotos.forEach(foto  =>{
        telaCarrosel +=
    `<div class="images">
        <img src="${foto.base64}" onError="this.onerror=null;this.src='/img/user.png';">
    </div>`; 
    })
    carrosel.innerHTML = telaCarrosel;
}

