const url = "https://included-polliwog-powerful.ngrok-free.app"

const registerUser = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var email = document.getElementById("email-register").value;
    var username = document.getElementById("user-register").value;
    var password = document.getElementById("password-register").value;

    const raw = JSON.stringify({
        email,
        username,
        password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    fetch(`${url}/register/`, requestOptions)
        .then((response) => {
            if (response.ok)
                return response.json().then(() => {
                    window.location = '../Telas/index.html#login'
                    alert("Usuário criado com sucesso!")
                })
            else response.json().then(errorResult => {
                return alert(errorResult)
            });
        })
}