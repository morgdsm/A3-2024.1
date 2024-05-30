document.getElementById('abrir_barra').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

var elementos = document.querySelectorAll('.itemdescri');

elementos[2].addEventListener('click', function() {
    mostrarTela('horários');
});

elementos[3].addEventListener('click', function() {
    mostrarTela('breja');
});

elementos[4].addEventListener('click', function() {
    mostrarTela('configuracoes');
});

elementos[5].addEventListener('click', function() {
    mostrarTela('equipe');
});

elementos[6].addEventListener('click', function() {
    var telas = document.querySelectorAll('.screen');
    telas.forEach(function(tela) {
        tela.classList.remove('active');
    });
});

var elementos2 = document.querySelectorAll('.side-item');

elementos2[0].addEventListener('click', function() {
    mostrarTela('horários');
});

elementos2[1].addEventListener('click', function() {
    mostrarTela('breja');
});

elementos2[2].addEventListener('click', function() {
    mostrarTela('configuracoes');
});

elementos2[3].addEventListener('click', function() {
    mostrarTela('equipe');
});

document.getElementById('logout').addEventListener('click', function () {
    var telas = document.querySelectorAll('.screen');
    telas.forEach(function(tela) {
        tela.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    mostrarTela('horários');
});

function mostrarTela(screenId) {
    var telas = document.querySelectorAll('.screen');
    telas.forEach(function(tela) {
        tela.classList.remove('active');
    });

    var telaAtiva = document.getElementById(screenId);
    telaAtiva.classList.add('active');

    var ladoAtivo = document.querySelector('.side-item.active');
    if (ladoAtivo) {
        ladoAtivo.classList.remove('active');
    }

    var ladoNovo = document.querySelector('.side-item[data-screen="' + screenId + '"]');
    ladoNovo.classList.add('active');
}

var horariosDisponiveis = {
    barbeiro1: ['09:00', '10:00', '11:00'],
    barbeiro2: ['10:00', '11:00', '12:00'],
    barbeiro3: ['08:00', '11:00', '12:00']
};

function preencherHorarios() {
    var barbeiroSelecionado = document.getElementById('barbeiro').value;
    var horarios = horariosDisponiveis[barbeiroSelecionado];
    var selectHorario = document.getElementById('horario');
        selectHorario.innerHTML = '';
        horarios.forEach(function(horario) {
            var option = document.createElement('option');
            option.value = horario;
            option.textContent = horario;
        selectHorario.appendChild(option);
    });
}

document.getElementById('barbeiro').addEventListener('change', preencherHorarios);
    document.getElementById('agendar').addEventListener('click', function() {
    var barbeiroSelecionado = document.getElementById('barbeiro').value;
    var horarioSelecionado = document.getElementById('horario').value;
    var servicoSelecionado = document.querySelector('input[name="servico"]:checked').value;
    console.log('Barbeiro:', barbeiroSelecionado);
    console.log('Horário:', horarioSelecionado);
    console.log('Serviço:', servicoSelecionado);
  });
  
preencherHorarios();
    function preencherDiasSemana() {
        var diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        var agora = new Date();
        var diaAtual = agora.getDay(); 
        var selectDia = document.getElementById('dia-semana');
        selectDia.innerHTML = '';
        var diasFuturos = diasSemana.filter(function(dia, index) {
        return index >= diaAtual;
    });

    diasFuturos.forEach(function(dia) {
        var option = document.createElement('option');
        option.value = dia;
        option.textContent = dia;
        selectDia.appendChild(option);
    });
}

document.getElementById('dia-semana').addEventListener('change', preencherHorarios);
  preencherDiasSemana(); 
