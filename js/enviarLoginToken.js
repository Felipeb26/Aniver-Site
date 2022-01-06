var link = 'http://localhost:8080/login';
var btn = document.querySelector('#envio');

btn.addEventListener('click' ,function(){
    fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": document.querySelector('#email').value,
                "senha": document.querySelector('#senha').value
        })
    })
        .then(response => {
            if(response.ok) {
                return response.text();
            }else{
                swal.fire({
                    title: "erro",
                    icon: "eror",
                    text: "é necessario se logar"
                })
            }
        }).then(data => {
            if(data == 'Bad credentials'){
                swal.fire({
                    icon: "error",
                    title: "Login Incorreto",
                    text: "tente novamente"
                })
            }else{
                localStorage.setItem('token',(data));
            }
        })
    });

// const recarregaToken =  setInterval(reloadToken ,15 * 60 * 100, true)


//  Dados padrão para se logar
// var raw = JSON.stringify({
//     "email": "felipeb2silva@gmail.com",
//     "senha": "felipe2001"
// });


//seta tema escuro
const html = document.querySelector('html')
const darkMode = document.querySelector('.alteraCor')

document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('dark-mode')
    const html = document.querySelector('html')
    const inputDarkMode = document.getElementById('switch')

    if(darkModeStorage){
        html.setAttribute("dark", "true")
    }
    inputDarkMode.addEventListener('change', () => {
        if(inputDarkMode.checked){
            html.setAttribute("dark", "true")
            localStorage.setItem('dark-mode', true)
        }else{
            html.removeAttribute("dark")
            localStorage.removeItem('dark-mode')
        }
   })
})