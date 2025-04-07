// Inicializa o AOS (Animações ao rolar)
AOS.init();

// Esconde o pré-carregamento quando a página terminar de carregar
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Modo claro/escuro com localStorage
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

function aplicarTema() {
  const tema = localStorage.getItem("tema") || "claro";
  if (tema === "escuro") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}

aplicarTema();

// Alternar tema ao clicar no botão
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const temaAtual = body.classList.contains("dark") ? "escuro" : "claro";
  localStorage.setItem("tema", temaAtual);
});

// Formulário simples (salva no console e exibe mensagem visual)
const form = document.getElementById("form-agendamento");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const servico = document.getElementById("servico").value;

  console.log(`Agendamento: ${nome}, ${telefone}, Serviço: ${servico}`);

  // Cria/atualiza a área de resposta
  let resposta = document.getElementById("resposta-agendamento");
  if (!resposta) {
    resposta = document.createElement("div");
    resposta.id = "resposta-agendamento";
    resposta.style.marginTop = "15px";
    resposta.style.padding = "10px";
    resposta.style.borderRadius = "8px";
    resposta.style.backgroundColor = "#d1f7d6";
    resposta.style.color = "#2b7a2b";
    resposta.style.fontWeight = "bold";
    form.parentNode.appendChild(resposta);
  }

  resposta.innerText = "Agendamento enviado com sucesso! Entraremos em contato em breve.";
  form.reset();
});
