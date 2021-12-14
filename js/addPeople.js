const btn = document.querySelector("#envio");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const nomeForm = document.getElementById('#nomeCompleto');
  const cpfForm = document.getElementById('#cpfCompleto');
  const dataForm = document.getElementById('#dataNascimento');
  const emailForm = document.getElementById('#email');

  const value = name.value;

  console.log(value)
})