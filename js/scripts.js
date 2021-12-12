// var link = 'https://85dd-2804-431-c7c8-abce-2dcc-def0-d5c2-5076.ngrok.io'

// let url = link + '/login';
// let urlPessoa = link + '/pessoa';
// let url3 = link + '/nome/';
// let url4 = link + 'arquivo';


// const RecebeToken = () => {
//     fetch(url, {
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Accept': '*/*',
//                 'Content-Type': 'application/json',
//             },
//             body: `{
//                 "chave":"dGVzdGVAZ3J1cG9tdWx0aXBsaWNhLmNvbS5icjoxMjM0"
//             }`,
//         })
//         .then(response => {
//             if (response.ok) {
//                 return response.text();
//             } else {
//                 alert('Não foi possível conectar no servidor')
//             }
//         }).then(data => {
//             localStorage.setItem('token',
//                 JSON.stringify(data));
//         })
// };

// const Aniversariantes = () =>{
//     fetch(urlPessoa)
//     .then((response) =>{
//         localStorage.token();
//         if(!response.ok) throw new Error()
//         console.log(response.ok);
//         return response.json();
//     })
//     .then((data) =>{
//         console.log(data.nome);
//     })
//     .catch((error) =>{
//         console.error(error.message)
//     })
// }

// const RefreshToken = setInterval(RecebeToken, 15*60*1000, true);