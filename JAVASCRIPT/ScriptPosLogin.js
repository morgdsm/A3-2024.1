document.getElementById('abrir_barra').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

var elementos = document.querySelectorAll('.itemdescri');

elementos[2].addEventListener('click', function () {
    mostrarTela('horários');
});

elementos[3].addEventListener('click', function () {
    mostrarTela('configuracoes');
});

elementos[4].addEventListener('click', function () {
    mostrarTela('equipe');
});

elementos[5].addEventListener('click', function () {
    var telas = document.querySelectorAll('.screen');
    telas.forEach(function (tela) {
        tela.classList.remove('active');
    });
});

var elementos2 = document.querySelectorAll('.side-item');

elementos2[0].addEventListener('click', function () {
    mostrarTela('horários');
});

elementos2[1].addEventListener('click', function () {
    mostrarTela('configuracoes');
});

elementos2[2].addEventListener('click', function () {
    mostrarTela('equipe');
});

document.getElementById('logout').addEventListener('click', function () {
    var telas = document.querySelectorAll('.screen');
    telas.forEach(function (tela) {
        tela.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    mostrarTela('horários');
});

function mostrarTela(screenId) {
    var telas = document.querySelectorAll('.screen');
    telas.forEach(function (tela) {
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
    Pierre: ['09:00', '10:00', '11:00'],
    Jamal: ['10:00', '11:00', '12:00'],
    Dieguinho: ['08:00', '11:00', '12:00']
};

function preencherHorarios() {
    var barbeiroSelecionado = document.getElementById('barbeiro').value;
    var horarios = horariosDisponiveis[barbeiroSelecionado];
    var selectHorario = document.getElementById('horario');
    selectHorario.innerHTML = '';
    horarios.forEach(function (horario) {
        var option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        selectHorario.appendChild(option);
    });
}

document.getElementById('barbeiro').addEventListener('change', preencherHorarios);

preencherHorarios();
function preencherDiasSemana() {
    var diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    var agora = new Date();
    var diaAtual = agora.getDay();
    var selectDia = document.getElementById('dia-semana');
    selectDia.innerHTML = '';
    var diasFuturos = diasSemana.filter(function (_dia, index) {
        return index >= diaAtual;
    });

    diasFuturos.forEach(function (dia) {
        var option = document.createElement('option');
        option.value = dia;
        option.textContent = dia;
        selectDia.appendChild(option);
    });
}

document.getElementById('dia-semana').addEventListener('change', preencherHorarios);
preencherDiasSemana();


const url = "https://included-polliwog-powerful.ngrok-free.app"

const getSchedules = async () => {
    const myHeaders = new Headers();
    myHeaders.append('ngrok-skip-browser-warning', 'true');

    const requestOptions = {
        headers: myHeaders,
        method: "GET",
    };

    fetch(`${url}/schedule/`, requestOptions)
        .then((response) => {
            if (response.ok)
                return response.json().then((data) => {
                    var tableDate = document.getElementById('schedules-date');
                    var tableBarber = document.getElementById('schedules-barber');
                    var tableType = document.getElementById('schedules-type');
                    tableBarber.innerHTML = "<h3>Barbeiro</h3>";
                    tableType.innerHTML = "<h3>Serviço</h3>";
                    tableDate.innerHTML = "<h3>Data</h3>";

                    data.data.forEach(function (item) {
                        var linDate = document.createElement('tr');
                        var linBaber = document.createElement('tr');
                        var linType = document.createElement('tr');
                        linDate.innerHTML = `<td>${item.day_of_week} às ${item.hour}</td>`;
                        linBaber.innerHTML = `<td>${item.barber_name}</td>`;
                        linType.innerHTML = `<td>${item.type}</td>`;
                        tableDate.appendChild(linDate)
                        tableBarber.appendChild(linBaber)
                        tableType.appendChild(linType)
                    });
                })
            else response.json().then(errorResult => {
                return alert(errorResult)
            });
        })

}

getSchedules()

const schedule = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const day_of_week = document.getElementById('dia-semana').value;
    const barber_name = document.getElementById('barbeiro').value;
    const hour = document.getElementById('horario').value;
    const type = document.querySelector('input[name="servico"]:checked').value;

    const raw = JSON.stringify({
        day_of_week,
        barber_name,
        hour,
        type
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    fetch(`${url}/schedule/`, requestOptions)
        .then((response) => {
            if (response.ok) {

                console.log(response)
                return response.json().then(async () => {
                    alert("Agendado com sucesso!")
                    await getSchedules()
                })
            }
            else response.json().then(errorResult => {
                return alert(errorResult)
            });
        }).catch(() => {
            alert('Ocorreu um erro, tente novamente')
        })
}

const logout = () => {
    window.location = '../Telas/index.html#login'

}

