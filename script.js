

const usuarioPadrao = {
  nome: "miriam",
  senha: "1234"
};

function fazerLogin(event) {
  if (event && typeof event.preventDefault === "function") event.preventDefault();

  const usuarioInput = document.getElementById("usuario");
  const senhaInput = document.getElementById("senha");

  if (!usuarioInput || !senhaInput) {
    console.warn("Elementos de login não encontrados na página.");
    return;
  }

  const usuario = usuarioInput.value;
  const senha = senhaInput.value;

  if (usuario === usuarioPadrao.nome && senha === usuarioPadrao.senha) {
    alert("Login realizado com sucesso!");
    window.location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos. Tente novamente.");
  }
}
function mostrarPaginaAtiva() {
  const titulo = document.title || "";
  console.log("Página atual:", titulo);
}

window.addEventListener("load", mostrarPaginaAtiva);

document.addEventListener("keydown", function(event) {
  // don't trigger navigation when user is typing in a form control or using modifier keys
  const activeTag = document.activeElement && document.activeElement.tagName;
  if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT" || event.ctrlKey || event.metaKey) {
    return;
  }

  switch (event.key) {
    case "1":
      window.location.href = "home.html";
      break;
    case "2":
      window.location.href = "atendimento.html";
      break;
    case "3":
      window.location.href = "recepcao.html";
      break;
    case "4":
      window.location.href = "coordenacao.html";
      break;
    case "5":
      window.location.href = "professores.html";
      break;
    case "6":
      window.location.href = "instituicao.html";
      break;
    case "7":
      window.location.href = "psicologo.html";
      break;
    case "0":
      window.location.href = "index.html";
      break;
    default:
      break;
  }
});
function mensagemBoasVindas() {
  const data = new Date();
  const hora = data.getHours();
  let saudacao = "Olá";

  if (hora < 12) saudacao = "Bom dia";
  else if (hora < 18) saudacao = "Boa tarde";
  else saudacao = "Boa noite";

  const elemento = document.querySelector(".conteudo h1");
  if (elemento) elemento.innerText = `${saudacao}, bem-vindo(a) ao painel da psicóloga!`;
}
window.addEventListener("load", mensagemBoasVindas);