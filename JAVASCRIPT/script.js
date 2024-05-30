document.getElementById("appointment-form").addEventListener("submit", function(event) {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var servico = document.getElementById("servico").value;
  var data = document.getElementById("data").value;
  var hora = document.getElementById("hora").value;
  var errorMessage = "";

  if (nome === "" || email === "" || telefone === "" || servico === "" || data === "" || hora === "") {
      errorMessage = "Todos os campos são obrigatórios.";
  }

  if (errorMessage !== "") {
      document.getElementById("error-message").innerText = errorMessage;
      event.preventDefault();
  }
});
