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
//teste
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, verificar se o nome de usuário e senha estão corretos
    // Esta é apenas uma implementação básica de demonstração
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
  