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