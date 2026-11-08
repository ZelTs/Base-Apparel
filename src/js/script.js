
const emailInput = document.getElementById("correo");
const errorMessage = document.getElementById("error-message");
const formulario = document.getElementById("formulario");
const btn = document.getElementById("btn");
const errorImg = document.getElementById("error__img");
const check = document.getElementById("check");

const formContent = document.getElementById("form-content");
const successContent = document.getElementById("success-content");
const backBtn = document.getElementById("back-btn");

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
}

function showError(message) {
    btn.classList.remove("btn__valid");

    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");

    errorImg.classList.add("show");
    check.classList.remove("show");

    errorMessage.textContent = message;
}

function showValid() {
    btn.classList.add("btn__valid");

    errorMessage.textContent = "";

    errorImg.classList.remove("show");

    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");

    check.classList.add("show");
}

function mostrarExito() {
    formContent.classList.add("hide");

    setTimeout(() => {
        formContent.hidden = true;
        successContent.hidden = false;
    }, 350);
}

function volverAlFormulario() {
    successContent.hidden = true;

    formContent.hidden = false;
    formContent.classList.remove("hide");

    formulario.reset();

    emailInput.classList.remove("valid", "invalid");

    btn.classList.remove("btn__valid");

    errorImg.classList.remove("show");
    check.classList.remove("show");

    errorMessage.textContent = "";
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        showError("Ingrese su correo electrónico");
    } else if (!validarEmail(email)) {
        showError("Correo electrónico inválido");
    } else {
        showValid();
        mostrarExito();
    }
});

emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();

    if (email === "") {
        errorMessage.textContent = "";

        emailInput.classList.remove("valid", "invalid");

        errorImg.classList.remove("show");
        check.classList.remove("show");

        btn.classList.remove("btn__valid");

    } else if (!validarEmail(email)) {
        showError("Correo electrónico inválido");

    } else {
        showValid();
    }
});

backBtn.addEventListener("click", volverAlFormulario);
