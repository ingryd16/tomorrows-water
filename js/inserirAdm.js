function showSuccessMessage() {
    const messageElement = document.createElement("div");
    messageElement.textContent = "Administrador criado";
    messageElement.classList.add("success-message");

    const bottomContainer = document.getElementById("bottom-container");
    bottomContainer.appendChild(messageElement);

    setTimeout(() => {
        bottomContainer.removeChild(messageElement);
    }, 3000); // Remove a mensagem após 3 segundos
}

async function createAdm(administrador) {
    console.log(administrador)
    const url = 'http://localhost:8080/v1/tomorrows-water/administrador';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(administrador)   
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Dados enviados com sucesso para o servidor.');
            showSuccessMessage(); // Exibe a mensagem de sucesso
        } else {
            console.log('Ocorreu um erro ao enviar os dados para o servidor.');
        }
    } catch (error) {
        console.error('Ocorreu um erro na requisição:', error);
    }
}

const form = document.querySelector(".forms-adm");
const nome = document.getElementById("input-nome-adm");
const email = document.getElementById("input-email-adm");
const senha = document.getElementById("input-senha-adm");
const button = document.getElementById('submit-button-adm');

button.addEventListener("click", (e) => {
    e.preventDefault();
    // checkInputs();

    const administrador = {
        "id": "",   
        "nome": nome.value,
        "email": email.value,
        "senha": senha.value,
    };

    createAdm(administrador);
    console.log(administrador);
});