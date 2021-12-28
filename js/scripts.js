var link = 'http://localhost:8080/login'

var raw = JSON.stringify({
    "email": "felipeb2silva@gmail.com",
    "senha": "50982861826"
});

const RecebeToken = () => {
    fetch(link, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: raw
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                alert('Não foi possível conectar no servidor')
            }
        }).then(data => {
            localStorage.setItem('token',
                (data));
        })
};

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
const RefreshToken = setInterval(RecebeToken, 15 * 60 * 100, true);

//Cria o Dark-Mode
const html = document.querySelector('html')
const darkMode = document.querySelector('#switch')

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