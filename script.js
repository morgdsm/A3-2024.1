function agendar() {
    var data = document.getElementById("datePicker").value;
    var hora = document.getElementById("timePicker").value;
  
    if (data && hora) {
      var mensagem = "Horário agendado para " + data + " às " + hora + ".";
      document.getElementById("mensagem").innerText = mensagem;
    } else {
      document.getElementById("mensagem").innerText = "Por favor, selecione uma data e hora.";
    }
  }

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
  
    if (username === "admin" && password === "123456") {
      document.getElementById("loginForm").classList.add("hidden");
      document.getElementById("agendaForm").classList.remove("hidden");
    } else {
      alert("Nome de usuário ou senha incorretos");
    }
  }
  
  function agendar() {
    var data = document.getElementById("datePicker").value;
    var hora = document.getElementById("timePicker").value;
  
    if (data && hora) {
      var mensagem = "Horário agendado para " + data + " às " + hora + ".";
      document.getElementById("mensagem").innerText = mensagem;
    } else {
      document.getElementById("mensagem").innerText = "Por favor, selecione uma data e hora.";
    }
  }

  function cadastrar() {
  var cadastroUsername = document.getElementById("cadastroUsername").value;
  var cadastroPassword = document.getElementById("cadastroPassword").value;
  var confirmarPassword = document.getElementById("confirmarPassword").value;

  if (cadastroUsername && cadastroPassword && confirmarPassword) {
    if (cadastroPassword === confirmarPassword) {
      // Se as senhas coincidem, você pode proceder com o cadastro
      alert("Cadastro realizado com sucesso!");
      // Aqui você pode adicionar lógica para salvar os detalhes do usuário, como em um banco de dados
    } else {
      alert("As senhas não coincidem. Por favor, tente novamente.");
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
