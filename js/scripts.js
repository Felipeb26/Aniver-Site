const Aniversariantes = () => {
    fetch(link)
        .then((response) => {
            localStorage.token();
            if (!response.ok) throw new Error()
            console.log(response.ok);
            return response.json();
        })
        .then((data) => {
            console.log(data.nome);
        })
        .catch((error) => {
            console.error(error.message)
        })
}

//Cria o Dark-Mode
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

const saida = document.querySelector('#sairLogin')

saida.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.setItem("token", "null")
    window.location.href = 'index.html'
})

document.addEventListener('click' ,function verifyToken(){
    if(localStorage.token === "null" && "Bad Credentials"){
        swal.fire({
            title: "erro",
            icon: "error",
            text: "usuario não está logado, será necessario se logar",
        }).then(result =>{
            if(result.isConfirmed){
                window.location.href = 'token.html'
            }
        })
    }
})