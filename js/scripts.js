var link = 'https://3224-189-8-4-21.ngrok.io'

let url = link + '/login';
let url2 = link + '/pessoa';
let url3 = link + '/nome/';
let url4 = link + 'arquivo';


const RecebeToken = () => {
    fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            },
            body: `{
                "chave":"dGVzdGVAZ3J1cG9tdWx0aXBsaWNhLmNvbS5icjoxMjM0"
            }`,
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


const RefreshToken = setInterval(RecebeToken, 15*60*1000, true);