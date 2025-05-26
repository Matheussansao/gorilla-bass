let vidaGorilla = 100;
let humanos = Array.from({ length: 100 }, (_, i) => ({ id: i, vivo: true }));
let ataques = 0;
let defendendo = false;
let intervaloAtaque;

const vidaSpan = document.getElementById("vidaGorilla");
const humanosSpan = document.getElementById("humanosRestantes");
const ataquesSpan = document.getElementById("ataques");
const humanosDiv = document.getElementById("humanos");
const logDiv = document.getElementById("log");

function atualizarInterface() {
  vidaSpan.textContent = vidaGorilla;
  humanosSpan.textContent = humanos.filter(h => h.vivo).length;
  ataquesSpan.textContent = ataques;
  humanosDiv.innerHTML = "";
  humanos.forEach(h => {
    const div = document.createElement("div");
    div.classList.add("humano");
    if (!h.vivo) div.classList.add("morto");
    humanosDiv.appendChild(div);
  });
}

function log(msg) {
  logDiv.innerHTML += `<p>${msg}</p>`;
  logDiv.scrollTop = logDiv.scrollHeight;
}

function iniciarJogo() {
  if (!intervaloAtaque) {
    intervaloAtaque = setInterval(ataqueAutomaticoHumano, 800);
    log("Jogo iniciado!");
  }
}

function atacar() {
  if (humanos.filter(h => h.vivo).length === 0 || vidaGorilla <= 0) return;

  const somAtaque = new Audio('../assets/audio/som-ataque.mp3'); 
  somAtaque.volume = 0.7;
  somAtaque.play();

  const vivos = humanos.filter(h => h.vivo);
  const quantidade = Math.min(vivos.length, Math.floor(Math.random() * 6) + 1);
  for (let i = 0; i < quantidade; i++) vivos[i].vivo = false;
  ataques++;
  log(`Gorilla atacou e derrotou ${quantidade} humano(s).`);
  atualizarInterface();
  salvar();
  verificarFimDeJogo();
}

function defender() {
  defendendo = true;
  log("Gorilla está se defendendo no próximo turno.");
  salvar();
}