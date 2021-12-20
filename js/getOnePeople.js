const card = document.querySelector('.alteraDeleta');
let output = '';

const url = 'http://localhost:8080/pessoa/4';
let token = JSON.parse(localStorage.getItem('token'));

//Get lendo os posts
fetch(url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization":  `Bearer${token}`,
        }
    })
    .then(res => res.json())
    .then(function (data){
    card = `<div class="pessoas">
    <div class="imagem">
        <img src="./img/yamamoto.png" alt="">
    </div>
    <div class="dados">
        <h5 class="dado">id:</h5>
        <span class="respDado">${data.id}</span><br>
        <h5 class="dado">nome:</h5>
        <span class="respDado">${data.nome}</span><br>
        <h5>email:</h5>
        <span>${data.email}</span><br>
        <h5 class="dado">nasceu:</h5>
        <span class="respDado">${data.nascimento}</span>
    </div>
</div>`});
card.innerHTML = output;


function doDelete(){
  let deleta = confirm("Caso confirme não poderá ser desfeito!")

  if (deleta == true){
      alert("usuario deletado com sucesso")
      window.location.href = "index.html"
  }else{
      window.location.href = "index.html"
  }
}

function doAltera(){
    let deleta = confirm("Caso confirme não poderá ser desfeito!")
  
    if (deleta == true){
        alert("usuario alterado com sucesso")
        window.location.href = "index.html"
    }else{
        window.location.href = "index.html"
    }
  }