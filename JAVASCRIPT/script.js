const url = "https://included-polliwog-powerful.ngrok-free.app"

const loginUser = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var email = document.getElementById("email-login").value;
  var password = document.getElementById("password-login").value;

  const raw = JSON.stringify({
    email,
    password
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch(`${url}/login/`, requestOptions)
    .then((response) => {
      if (response.ok)
        response.json().then(() => {
          window.location = '../Telas/Poslogin.html#'
        })
      else response.json().then(errorResult => {
        console.log("asdasd", errorResult)
        alert(errorResult)
      });
    })
}