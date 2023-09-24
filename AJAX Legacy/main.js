document.getElementById("buttonNuevo").addEventListener("click", loadUsers);

function loadUsers() {
    fetch("https://api.github.com/users")
        .then(function (response) {
            if (response) {
                return response.json();
            }
        })
        .then(function (users) {
            var output = "";

            for (const user of users) {
                output += `
                <div>
                    <img src="${user.avatar_url}" width="70" height="70">
                    <ul>
                        <li> ID: ${user.id}</li>
                        <li> Login: ${user.login}</li>
                    </ul>
                </div>`;
            }
            document.getElementById("usersMios").innerHTML = output;
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}


/*------------ Forma más moderna--------------

fetch("https://api.github.com/users")
    .then((datos) => datos.json())
    .then((respuesta) => setUsers(respuesta));

---------------------------------------------*/