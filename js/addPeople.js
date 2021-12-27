var urlEnvio = 'http://localhost:8080/pessoa/inclui';
let token = localStorage.getItem('token');

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
                "base64": foto.src
            })
        })
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => console.log('error', error))
}