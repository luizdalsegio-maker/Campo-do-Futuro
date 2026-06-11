/* CSS para Agrinho 2026 */
body {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    background: linear-gradient(to bottom, #a8e6cf, #dcedc1); /* Verde claro e suave */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    animation: fadeIn 2s ease-in-out;
}

h1 {
    font-size: 3rem;
    color: #2e7d32; /* Verde mais escuro */
    text-shadow: 2px 2px 5px #a5d6a7;
    margin-bottom: 20px;
}

h2 {
    font-size: 2rem;
    color: #ff6f00; /* Laranja vibrante */
    text-shadow: 1px 1px 3px #ffd54f;
}

p {
    font-size: 1.2rem;
    color: #4e342e; /* Marrom escuro */
    margin-top: 10px;
}

/* Animação simples */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Adicionando uma borda divertida */
.container::before {
    content: "🌱🌻🌾";
    display: block;
    font-size: 2rem;
    margin-bottom: 15px;
}
