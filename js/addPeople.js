var urlEnvio = 'http://localhost:8080/pessoa/inclui';
let token = localStorage.getItem('token');

var nome = document.querySelector("#nome");
var cpf = document.querySelector("#cpf");
var nascimento = document.querySelector("#nascimento");
var email = document.querySelector("#Email");
var foto = document.querySelector('#minImage');

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
      var btn = document.querySelector("#envio");
      btn.click();}
  });

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

document.querySelector("#nome").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
      return false;
  };

  document.querySelector("#Email").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("0123456789@qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
      return false;
  };
 document.querySelector("#cpf").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0)
      return false;
  };
