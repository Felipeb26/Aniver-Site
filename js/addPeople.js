var urlEnvio = 'http://localhost:8080/pessoa/inclui';
let token = JSON.parse(localStorage.getItem('token'));

function cadastrar() {
    var nome = document.querySelector("#nome");
    var cpf = document.querySelector("#cpf");
    var nascimento = document.querySelector("#nascimento");
    var email = document.querySelector("#Email");
    var foto = document.querySelector('#imgPrev');

    fetch(urlEnvio, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "nome": nome.value,
                "cpf": cpf.value,
                "email": email.value,
                "nascimento": nascimento.value,
                "base64": foto.value
            })
        })
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => console.log('error', error))
}

function login(){
    let loga = confirm("Informe o id ou o email completo!")

    if(loga == true){
        window.location.href = "login.html"
    }else{
        window.location.href = "cadastro.html"
    }
}