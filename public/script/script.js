const formUsuario = document.querySelector("#form-usuario");

function enrollCourse(courseName) {
  alert("Você se inscreveu no curso: " + courseName);
  // Aqui você pode adicionar código para enviar a inscrição ao servidor
}

if (formUsuario) {
  formUsuario.addEventListener("submit", onValidarFormUsuario);
}

function onValidarFormUsuario(event) {
  try {
    let valid = true;
    const name = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const login = document.querySelector("#login");
    const senha = document.querySelector("#senha");

    const spanMsgEmail = document.querySelector("#msg-email");
    const spanMsgLogin = document.querySelector("#msg-login");

    //remove invalidações se tiver
    spanMsgEmail.innerHTML = "";
    spanMsgLogin.innerHTML = "";

    name.classList.remove("form-control-invalido");
    email.classList.remove("form-control-invalido");
    login.classList.remove("form-control-invalido");
    senha.classList.remove("form-control-invalido");

    // Nome
    if (name.value.trim() === "") {
      valid = false;
      name.classList.add("form-control-invalido");
    }

    // Email
    const emailPattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    if (email.value.trim() === "") {
      valid = false;
      email.classList.add("form-control-invalido");
    } else if (!emailPattern.test(email.value.trim())) {
      valid = false;
      email.classList.add("form-control-invalido");
      spanMsgEmail.innerHTML = "O e-mail digitado não é valido.";
    }

    // Login
    const loginPattern = /^[a-zA-Z0-9_.]+$/; // Alfanumérico e underline permitido
    if (login.value.trim() === "") {
      valid = false;
      login.classList.add("form-control-invalido");
    } else if (!loginPattern.test(login.value.trim())) {
      valid = false;
      email.classList.add("form-control-invalido");
      spanMsgLogin.innerHTML =
        "O login não pode conter espaços ou caracteres especiais.";
    }

    // Nome
    if (senha.value.trim() === "") {
      valid = false;
      senha.classList.add("form-control-invalido");
    }

    if (!valid) {
      event.preventDefault();
    }
  } catch (error) {
    console.log("erro ao executar a validação do formulario: " + error);
  }
}
