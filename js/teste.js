var burguer = document.querySelector("#burguer");

var id = document.querySelector("#paraId");
var nome = document.querySelector("#paraNome");
var email = document.querySelector("#paraEmail");
var data = document.querySelector("#paraData");
var envio = document.querySelector("#envio");


burguer.addEventListener('change', () => {
    if (burguer.checked) {
        id.style.display = 'block';
        nome.style.display = 'block';
        email.style.display = 'block';
        data.style.display = 'block';
        envio.style.display = 'block';
    } else {
        id.style.display = 'none';
        nome.style.display = 'none';
        email.style.display = 'none';
        data.style.display = 'none';
        envio.style.display = 'none';
        envio.style.display = 'none';
    }
})

id.addEventListener('change', () => {
    if (id.checked) {
        document.querySelector("#itemId").style.display = 'block';
    } else {
        document.querySelector("#itemId").style.display = 'none';
    }
})

nome.addEventListener('change', () => {
    if (nome.checked) {
        document.querySelector("#itemNome").style.display = 'none';
    } else {
        document.querySelector("#itemNome").style.display = 'block';
    }
})

email.addEventListener('change', () => {
    if (email.checked) {
        document.querySelector("#itemEmail").style.display = 'block';
    } else {
        document.querySelector("#itemEmail").style.display = 'none';
    }
})

data.addEventListener('change', () => {
    if (data.checked) {
        document.querySelector("#itemData").style.display = 'block';
    } else {
        document.querySelector("#itemData").style.display = 'none';
    }
})