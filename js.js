// Inicializa o AOS (Animações ao rolar)
AOS.init();

// Esconde o pré-carregamento quando a página terminar de carregar
function esconderPreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
}

window.addEventListener("load", esconderPreloader);

// Modo claro/escuro com localStorage
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// Aplica o tema atual armazenado no localStorage
function aplicarTema() {
  const tema = localStorage.getItem("tema") || "claro";
  body.classList.toggle("dark", tema === "escuro");
}

aplicarTema();

// Alternar tema ao clicar no botão
function alternarTema() {
  body.classList.toggle("dark");
  const temaAtual = body.classList.contains("dark") ? "escuro" : "claro";
  localStorage.setItem("tema", temaAtual);
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", alternarTema);
}

// Função para exibir a mensagem de agendamento
function exibirRespostaAgendamento(form) {
  let resposta = document.getElementById("resposta-agendamento");

  // Se a resposta já existir, remove a antiga
  if (resposta) {
    resposta.remove();
  }

  // Cria a nova mensagem
  resposta = document.createElement("div");
  resposta.id = "resposta-agendamento";
  resposta.style.marginTop = "15px";
  resposta.style.padding = "10px";
  resposta.style.borderRadius = "8px";
  resposta.style.backgroundColor = "#d1f7d6";
  resposta.style.color = "#2b7a2b";
  resposta.style.fontWeight = "bold";
  form.parentNode.appendChild(resposta);

  resposta.innerText = "Agendamento enviado com sucesso! Entraremos em contato em breve.";

  // Remove a mensagem após 10 segundos
  setTimeout(() => {
    resposta.style.display = "none";
  }, 6000);
}

// Formulário simples (salva no console e exibe mensagem visual)
const form = document.getElementById("form-agendamento");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;

    console.log(`Agendamento: ${nome}, ${telefone}, Serviço: ${servico}`);
    
    exibirRespostaAgendamento(form);
    form.reset();
  });
}

