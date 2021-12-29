const body = document.querySelector('body')
let token = localStorage.getItem('token');
let output = '';

const url = 'http://localhost:8080/pessoa/';



body.onload = () => {
  const pegaId = prompt("qual o seu id?");
  const urlPessoa = url + pegaId;
  if (!pegaId == false) {
    fetch(urlPessoa, {
        mode: "cors",
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => cardID(data))
      .catch(erro => console.log(erro))
  } else {
    window.location.href = 'index.html'
  }
}
//funcao para criar card de pessoa 
function cardID(item) {
  if (item.base64 == null) {
    document.querySelector('.alteraDeleta').innerHTML =
      `<div class="card cardPessoa">
    <div class="pessoa">
      <img loading="lazy" src="./img/user.png" alt="">
    </div>
    <div class="card-body">
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
    <label class="form-control meuDelete" for="apaga">Deletar Usuario</label>
    <button type="submit" class="enviar" name="apaga" id="apaga" onclick="doDelete()"></button>
  </div>
  
  <div class="card cardAltera">
      <div class="meuForm">
        <div class="envio">
          <div class="dados">
            <label>Nome</label><br>
            <input minlength="1" maxlength="50" type="text" id="nome" placeholder="${item.nome}" autocomplete="off" required><br>
            <label>CPF</label><br>
            <input minlength="11" maxlength="14" type="text" id="cpf" autocomplete="off" placeholder="${item.cpf}" onkeydown="mascaraCpf()" required><br>
            <label>Data de Nascimento</label><br>
            <input type="date" id="nascimento" autocomplete="off"required>
            <div id="validaEmail" action="#">
              <label>Email</label><br>
              <input type="email" id="Email" class="Email" placeholder="${item.email}"autocomplete="off" onkeydown="validation()" required>
              <span id="texto"></span>
            </div>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <label class="form-control arqui" for="arquivo">ESCOLHER FOTO</label>
          <input type="file" accept="image/*" onchange="loadFile(event)" name="aquivo" id="arquivo" />
          <label class="form-control Enviar" for="envio">ALTERAR</label>
          <button type="submit" class="enviar" name="envio" id="envio" onclick="doAltera()"></button>
          <img class="prevImg" id="imgPrev" />
          </form>
        </div>
      </div>
    </div>`
  } else {
    document.querySelector('.alteraDeleta').innerHTML =
      `<div class="card cardPessoa">
    <div class="pessoa">
      <img loading="lazy" src="${item.base64}" alt="">
    </div>
    <div class="card-body">
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
    <label class="form-control meuDelete" for="apaga">Deletar Usuario</label>
    <button type="submit" class="enviar" name="apaga" id="apaga" onclick="doDelete()"></button>
  </div>
  <div class="card cardAltera">
      <div class="meuForm">
        <div class="envio">
          <div class="dados">
            <label>Nome</label><br>
            <input minlength="1" maxlength="50" type="text" id="nome" placeholder="${item.nome}" autocomplete="off"><br>
            <label>CPF</label><br>
            <input minlength="11" maxlength="14" type="text" id="cpf" autocomplete="off" placeholder="${item.cpf}" onkeydown="mascaraCpf()"><br>
            <label>Data de Nascimento</label><br>
            <input type="date" id="nascimento" placeholder="${item.nascimento}" autocomplete="off">
            <div id="validaEmail" action="#">
              <label>Email</label><br>
              <input type="email" id="Email" class="Email" placeholder="${item.email}" autocomplete="off"
                onkeydown="validation()">
              <span id="texto"></span>
            </div>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <label class="form-control arqui" for="arquivo">ESCOLHER FOTO</label>
          <input type="file" accept="image/*" onchange="loadFile(event)" name="aquivo" id="arquivo" />
          <label class="form-control Enviar" for="envio">ALTERAR</label>
          <button type="submit" class="enviar" name="envio" id="envio" onclick="doAltera()"></button>
          <img class="prevImg" id="imgPrev" />
          </form>
        </div>
      </div>
    </div>`
  }
}

const doDelete = () => {
  let id = prompt('confirma')
  if (!id == false) {
    swal.fire({
      title: 'Tem certeza?',
      text: "Caso continue não seá possivel reverter!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'CONFIRMAR!',
      cancelButtonText: 'CANCELAR',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url + id, {
            mode: 'cors',
            method: 'DELETE',
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .then(response => {
            if (response.status == 200) {
              swal.fire({
                title: "Muito Bem!",
                text: "Usuario deletado com sucesso!",
                icon: "success",
                timer: 5000,
              });
            }
          })
          .catch(erro => console.log(erro))
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swal.fire(
          'Cancelled',
          'Usuario não foi deletado',
          'error'
        )
      }
    })
  } else {
    swal.fire({
      title: 'Cancelado',
      icon: "error"
    })
  }
}

const doAltera = () => {
  var nome = document.querySelector("#nome");
  var cpf = document.querySelector("#cpf");
  var nascimento = document.querySelector("#nascimento");
  var email = document.querySelector("#Email");
  var foto = document.querySelector('#imgPrev');

  let getId = prompt("Informe seu cpf completo")
  let altera = confirm("Caso confirme não poderá ser desfeito!")
  if (altera == true) {
    fetch(url + getId, {
        mode: "cors",
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          "nome": nome.value,
          "cpf": cpf.value,
          "email": email.value,
          "nascimento": nascimento.value,
          "base64": foto.src
        })
      })
      .then(response =>console.log(response))
      .catch(erro => console.log(erro))
  } else {
    alert('deu erro')
  }

}