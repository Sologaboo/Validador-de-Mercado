
// script.js - Lógica del Validador de Apuesta de Gabriel Molina

 // Base de datos de la WikiApuesta
 
        const wikiData =
         [
                { 
                title: "Apuesta teaser",
                info:"<p>Una apuesta “teaser” es un tipo de apuesta combinada.  El apostador puede cambiar el margen de puntos de un evento, lo que hace que la apuesta sea más fácil de ganar. A cambio, el apostador obtiene un menor rendimiento de las apuestas en caso de ganar. Si una selección pierde, el “teaser” se considera perdido. Si se anula una selección y se gana el resto, el “teaser” se considera anulado.</p>",
                status: "",
                type:""
                },             



        ];

function searchWiki() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = '';

    // Validación de campo vacío (Tu código original)
    if (input.trim() === "") {
        resultsDiv.innerHTML = '<div class="no-results">Por favor, escribe un mercado o estrategia para buscar.</div>';
        return;
    }

    // 1. Filtramos la base de datos según lo que escribió el usuario
    let filteredResults = wikiData.filter(item => 
        item.title.toLowerCase().includes(input) || 
        item.info.toLowerCase().includes(input)
    );

    // 2. Aplicamos el ORDEN ALFABÉTICO (A-Z) a los resultados encontrados
    filteredResults.sort((a, b) => a.title.localeCompare(b.title));

    // 3. Verificamos si hubo coincidencias y las mostramos
    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            // Creamos el contenedor del ítem
            const div = document.createElement('div');
            div.className = 'wiki-item';
            
            // Insertamos el contenido (usamos innerHTML para que reconozca los <p> y <strong>)
            div.innerHTML = `
                <span class="status ${item.type || 'safe'}">${item.status}</span>
                <a href="#" class="wiki-title">${item.title}</a>
                <div class="wiki-content">${item.info}</div>
            `;
            
            resultsDiv.appendChild(div);
        });
    } else {
        // Mensaje si no hay coincidencias
        resultsDiv.innerHTML = '<div class="no-results">No se encontraron datos para "' + input + '".</div>';
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
