var urlEnvio = 'http://localhost:8080/pessoa/inclui';
let token = localStorage.getItem('token');

var nome = document.querySelector("#nome");
var cpf = document.querySelector("#cpf");
var nascimento = document.querySelector("#nascimento");
var email = document.querySelector("#Email");
var foto = document.querySelector('#minImage');

function cadastrar() {
    swal.fire({
        title: 'Escolha a foto',
        text: "Gostaria de continuar com a escolhida ou a do sistema",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'CONTINUAR!',
        cancelButtonText: 'SISTEMA',
    }).then((result) => {
        if (result.isConfirmed) {
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
                    if (response.status == 201) {
                        swal.fire({
                            title: "Muito Bem!",
                            text: "Usuario cadastrado com sucesso!",
                            icon: "success",
                            button: "ok",
                            closeOnClickOutside: false,
                        }).then((result => {
                            if (result.isConfirmed) {
                                window.location.href = 'index.html'
                            }
                        }));
                    }
                })
                .catch(erro => console.log(erro))
        } else if (result.dismiss) {
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
                    if (response.status == 201) {
                        swal.fire({
                            title: "Muito Bem!",
                            text: "Usuario cadastrado com sucesso!",
                            icon: "success",
                            button: "ok",
                            closeOnClickOutside: false,
                        }).then((result => {
                            if (result.isConfirmed) {
                                window.location.href = 'index.html'
                            }
                        }));
                    }
                })
                .catch(erro => console.log(erro))
        }
    })
}

document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
      const btn = document.querySelector("#envio");
      btn.click();
    }
  })