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
  