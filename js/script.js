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