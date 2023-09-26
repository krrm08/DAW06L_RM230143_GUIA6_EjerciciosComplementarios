document.addEventListener("DOMContentLoaded", function () {
    var wordList = document.getElementById("wordList");
    var searchInput = document.getElementById("searchInput");
    var showDefinitionButton = document.getElementById("showDefinitionButton");
    var definitionText = document.getElementById("definition");

    var dictionary = {
        'Aerobic': 'El ejercicio cardiovascular, comúnmente conocido como ejercicio aeróbico, es un ejercicio físico que necesita implícitamente de la respiración aeróbica para poder realizarse.',
        'Ajedrez': 'El ajedrez es un juego de tablero entre dos contrincantes en el que cada uno dispone al inicio de dieciséis piezas móviles que se colocan sobre un tablero dividido en sesenta y cuatro casillas o escaques. En su versión de competición, está considerado como un deporte, aunque en la actualidad tiene claramente una dimensión social, educativa y terapéutica.',
        'Atletismo': 'El atletismo es un deporte que agrupa numerosas disciplinas. El término atletismo deriva de la palabra griega "athlon" que significa competencia o combate.',
        'Basketball':'Deporte de equipo en el que dos equipos compiten por encestar la pelota en el aro del equipo contrario, evitando que el otro equipo lo haga en el suyo.',
        'Voleyball':'Deporte de equipo en el que dos equipos se enfrentan en una cancha separada por una red, tratando de pasar la pelota por encima de la red y que esta toque el suelo en el campo contrario.',
        'Tenis de mesa':'Deporte de raqueta en el que dos jugadores o equipos golpean una pequeña pelota de un lado a otro de una mesa dividida por una red, usando raquetas especiales.',
        'Rugby':'Deporte de equipo similar al fútbol americano en el que dos equipos intentan anotar puntos llevando un balón ovalado al área de anotación del equipo contrario, avanzando a través de pases y carreras físicas.',
        'Tiro de bala':'Disciplina del atletismo en la que un atleta lanza una pesada bola de metal (bala) tan lejos como sea posible desde un círculo de lanzamiento.',
        'Natacion':' Deporte en el que los nadadores se desplazan a través del agua utilizando diferentes estilos de brazada, como el crol, espalda, braza y mariposa.',
        'Tiro de Disco':'Otra disciplina del atletismo en la que un atleta lanza un disco de metal plano y pesado tan lejos como pueda, usando una técnica específica.',
        'Karate':'Arte marcial en el que los practicantes utilizan golpes, patadas, y técnicas defensivas para derrotar o desarmar a su oponente.',
        'Futbol':'Deporte de equipo en el que dos equipos compiten por marcar goles al poner la pelota en la portería del equipo contrario, usando cualquier parte excepto las manos y brazos.',
    };

    for (var word in dictionary) {
        wordList.options[wordList.options.length] = new Option(word);
    }

    wordList.addEventListener("dblclick", function () {
        var selectedWord = wordList.value;
        var definition = dictionary[selectedWord];

        if (definition) {
            definitionText.textContent = definition;
        } else {
            definitionText.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    showDefinitionButton.addEventListener("click", function () {
        var selectedWord = wordList.value;
        var definition = dictionary[selectedWord];

        if (definition) {
            definitionText.textContent = definition;
        } else {
            definitionText.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    searchInput.addEventListener("keyup", function () {
        var searchText = searchInput.value.trim().toLowerCase();

        wordList.options.length = 0; 

        if (searchText === "") {
            for (var word in dictionary) {
                wordList.options[wordList.options.length] = new Option(word);
            }
        } else {
            for (var word in dictionary) {
                if (word.toLowerCase().includes(searchText)) {
                    wordList.options[wordList.options.length] = new Option(word);
                }
            }
        }
    });
});

