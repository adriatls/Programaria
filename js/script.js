document
  .getElementById("botaoEnviar")
  .addEventListener("click", validaFormulario);

function validaFormulario() {
  if (
    document.getElementById("usersName").value !== "" &&
    document.getElementById("usersEmail").value !== "" &&
    document.getElementById("usersPhone").value !== ""
  ) {
    alert("Prontinho!! Você receberá as novidades por email.");
  } else {
    alert(
      "Por favor, é necessário preencher todos os campos para receber as novidades."
    );
  }
}
