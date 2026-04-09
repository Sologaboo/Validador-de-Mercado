
// script.js - Lógica del Validador de Apuesta de Gabriel Molina

 // Base de datos de la WikiApuesta
 
const wikiData = [
    { 
    }
];

function searchWiki() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (input.trim() === "") {
        resultsDiv.innerHTML = '<div class="no-results">Por favor, escribe un mercado o estrategia para buscar.</div>';
        return;
    }

    let filteredResults = wikiData.filter(item => 
        item.title.toLowerCase().includes(input) || 
        item.info.toLowerCase().includes(input)
    );

    filteredResults.sort((a, b) => a.title.localeCompare(b.title));

    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const div = document.createElement('div');
            div.className = 'wiki-item';
            
            // Estructura con la nueva sección 'wiki-detail'
            div.innerHTML = `
                <span class="status ${item.type}">${item.status}</span>
                <a href="javascript:void(0)" class="wiki-title">${item.title}</a>
                <div class="wiki-content">${item.info}</div>
                <div class="wiki-detail">${item.detail || "No hay detalles adicionales."}</div>
            `;
            
            // EVENTO DE CLIC: Aquí ocurre la "Doble Vista"
            div.addEventListener('click', () => {
                div.classList.toggle('active');
            });
            
            resultsDiv.appendChild(div);
        });
    } else {
        resultsDiv.innerHTML = `<div class="no-results">No se encontraron datos para "${input}".</div>`;
    }
}

// Extra: Permitir que funcione al presionar la tecla Enter
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchWiki();
    }
});

            const filteredResults = wikiData.filter(item => 
                item.title.toLowerCase().includes(input) || 
                item.info.toLowerCase().includes(input)
            );

            if (filteredResults.length > 0) {
                filteredResults.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'wiki-item';
                    div.innerHTML = `
                        <span class="status ${item.type}">${item.status}</span><br>
                        <a href="#" class="wiki-title">${item.title}</a>
                        ${item.info}
                    `;
                    resultsDiv.appendChild(div);
                });
            } else {
                resultsDiv.innerHTML = '<div class="no-results">No se encontraron datos. Prueba con un mercado o estrategia valido.</div>';
            }

        // Lógica de Modo Oscuro
        function toggleTheme() {
            const body = document.body;
            const btn = document.getElementById('themeToggle');
            
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                btn.innerHTML = "☀️ Modo Claro";
            } else {
                localStorage.setItem('theme', 'light');
                btn.innerHTML = "🌙 Modo Oscuro";
            }
        }

        // Cargar preferencia al iniciar
        window.onload = () => {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
                document.getElementById('themeToggle').innerHTML = "☀️ Modo Claro";
            }
        };

        // Escuchar tecla Enter
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchWiki();
        });
