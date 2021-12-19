var link = 'http://localhost:8080/login'

var raw = JSON.stringify({
    "email": "felipeb2silva@gmail.com",
    "senha": "felipe2001"
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
                JSON.stringify(data));
        })
};

const Aniversariantes = () =>{
    fetch(link)
    .then((response) =>{
        localStorage.token();
        if(!response.ok) throw new Error()
        console.log(response.ok);
        return response.json();
    })
    .then((data) =>{
        console.log(data.nome);
    })
    .catch((error) =>{
        console.error(error.message)
    })
}
const RefreshToken = setInterval(RecebeToken, 15*60*1000, true);