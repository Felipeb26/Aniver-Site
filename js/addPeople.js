var urlEnvio = 'http://localhost:8080/pessoa/inclui';
let token = localStorage.getItem('token');

var nome = document.querySelector("#nome");
var cpf = document.querySelector("#cpf");
var nascimento = document.querySelector("#nascimento");
var email = document.querySelector("#Email");
var foto = document.querySelector('#imgPrev');

function cadastrar() {
    const addImg = confirm("deseja adicionar a imagem escolhida ou deixar a padrão")
    if(addImg == true){
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
        .then(response => {
            if(response.status == 201){
                swal({
                    title: "Muito Bem!",
                    text: "Usuario cadastrado com sucesso!",
                    icon: "success",
                    button: "ok",
                    closeOnClickOutside : false ,
                    timer: 8000,
                  });
                window.location.href='index.html'
            }})
        }else{
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
                    "nascimento": nascimento.value
                })
                
            })
            .then(response => {
                if(response.status == 201){
                    swal({
                        title: "Muito Bem!",
                        text: "Usuario cadastrado com sucesso!",
                        icon: "success",
                        button: "ok",
                        closeOnClickOutside : false ,
                        timer: 8000,
                      });
                    window.location.href='index.html'
                }})
        }
}

