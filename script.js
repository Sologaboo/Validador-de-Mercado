
// script.js - Lógica del Validador de Apuesta de Gabriel Molina

 // Base de datos de la WikiApuesta
 
        const wikiData =  [
    { 
        title: "1X2",
        info: "<p>Se debe predecir el resultado del partido. Hay 3 resultados posibles: 1(el equipo local gana), X (los equipos empatan), 2 (el equipo visitante gana).</p>",
        detail: "<p>Con el mercado 1X2, solo debe de predecir el resultado final del partido. Tienes tres opciones: selecciona 1 si gana el local, X si el encuentro termina en empate, o 2 si crees que el visitante se llevará la victoria.</p>",
        status: "<p>Fútbol</p>",
        type: "fut-bet-rule-house"
    },

    {
        title:"<p>Doble oportunidad</p>",
        info: "<p>Se debe predecir el resultado del partido. Hay 3 resultados posibles 1X (al final del partido el equipo local gana o empata), X2 (al final del partido el equipo visitante gana o empata), 12 (al final del partido gana equipo local o el equipo visitante).</p>",
        detail: "<p>Con el mercado de doble oportunidad tiene tres opciones para ganar: 1X (gana local o empate), X2 (gana visitante o empate) o 12 (gana cualquiera de los dos). ¡Elige la que mejor se adapte a tu estrategia!</p>",
        status: "<p>Fútbol</p>",
        type: "fut-bet-rule-house",
    },
 
    {
        title:"<p>Total <b>(Más /Menos)</b></p>",
        info: "<p>Se debe predecir si el número de goles marcados durante el partido estará por encima o por debajo de la línea estipulada.</p>",
        detail: "<p>En el mercado de Total (Más/Menos), solo tiene que predecir cuántos goles se marcarán en total. Nosotros fijamos una cifra (línea) y usted elige si el resultado final será Más (por encima) o Menos (por debajo) de ese número. ¡No importa quién gane, solo los goles!</p>",
        status: "<p>Fútbol</p>",
        type: "fut-bet-rule-house",
    },
		
    {
        title:"<p>¿Se clasifica?</p>",
        info: "<p>Se debe predecir si el equipo seleccionado se clasificará para la siguiente fase del torneo.</p>",
        detail: "<p>En la apuesta ¿Se clasifica?, no importa el marcador exacto, ni si el partido se define en tiempo extra o penales. Lo único que debe predecir es si el equipo que elijas logra avanzar a la siguiente ronda del torneo.</p>",
        status: "<p>Fútbol</p>",
        type: "fut-bet-rule-house",
    },
		
    {
        title:"<p>Ambos equipos anotan <b>(GG/NG)</b></p>",
        info: "<p>En este mercado hay dos posibles resultados: GG(ambos equipos marcan al menos un gol cada uno durante todo el partido), NG (uno o ambos no marcan ningún gol durante todo el partido).</p>",
        detail: "<p>En el mercado GG/NG no importa quién gane el partido, solo si hay goles de ambos bandos. GG significa que ambos marcan; NG significa que alguno se queda sin anotar. ¡Así de simple es ganar!</p>",
        status: "<p>Fútbol</p>",
        type: "fut-bet-rule-house",
    },
		
    {
        title:"<p>Apuesta sin empate <b>(DNB)</b></p>",
        info: "<p></p>",
        detail: "<p>Este mercado de apuestas consiste en lo siguiente, para definir una apuesta como ganadora, tiene que haber un equipo ganador. Lo que significa que, si el partido termina en empate, se reembolsará el dinero apostado. </p><p><b>Por ejemplo</b>,si un resultado final da como resultado un empate, la apuesta se liquidará como cancelada.</p>",
        status: "<p>Fútbol</p>",
        type: "fut-bet-rule-house",
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
