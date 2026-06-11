// script.js - Agrinho 2026

const titulo = document.getElementById("nome");

titulo.textContent = "Luiz Otavio Berlesi Dalsegio";

const cores = [
    "#2E7D32", // verde
    "#43A047",
    "#FDD835", // amarelo
    "#FB8C00", // laranja
    "#1E88E5", // azul
    "#8E24AA"  // roxo
];

let indice = 0;

function trocarCor() {
    titulo.style.color = cores[indice];
    titulo.style.textShadow = `0 0 20px ${cores[indice]}`;

    indice++;
    if (indice >= cores.length) {
        indice = 0;
    }
}

setInterval(trocarCor, 500);

// Criar emojis de natureza caindo
function criarFolha() {
    const folha = document.createElement("div");

    folha.innerHTML = ["🌱", "🌿", "🌻", "🌾"][Math.floor(Math.random() * 4)];

    folha.style.position = "fixed";
    folha.style.left = Math.random() * window.innerWidth + "px";
    folha.style.top = "-30px";
    folha.style.fontSize = "30px";
    folha.style.pointerEvents = "none";

    document.body.appendChild(folha);

    let posicao = -30;

    const queda = setInterval(() => {
        posicao += 5;
        folha.style.top = posicao + "px";

        if (posicao > window.innerHeight) {
            clearInterval(queda);
            folha.remove();
        }
    }, 50);
}

setInterval(criarFolha, 800);
<h1>Agrinho 2026</h1>
<h2 id="nome"></h2>

<script src="script.js"></script>
