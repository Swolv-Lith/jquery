<<<<<<< Updated upstream
$('#button-phrase').click(randomPhrase)
$('#button-search').click(searchPhrase)
=======
$('#phrase').click(randomPhrase)
$('#search').click(searchPhrase)
>>>>>>> Stashed changes

/* ~ Função do botão Phrase para trazer uma frase aleatória ao jogo! ~ */
function randomPhrase() {
    $('#spinner').toggle()

    $.get('http://localhost:3000/frases', shuffleRandomPhrase)
    .fail(() => {
        $('#error').toggle()
        setTimeout(() => {
            $('#error').toggle()
        }, 2000)
    })
    .always(() => {
        $('#spinner').toggle()
    })
}

/* ~ Função do atrelada ao botão Phrase pela função randomPhrase,
 que busca aleatoriamente uma frase no servidor! ~ */
function shuffleRandomPhrase(data) {
    let phrase = $('.phrase')
    let randomNum = Math.floor(Math.random() * data.length)
    phrase.text(data[randomNum].texto)
    phraseSizeUpdate()
<<<<<<< Updated upstream
    initTimeUpdate(data[randomNum].tempo)
}

/* ~ Função do botão Search para buscar uma frase específica! ~ */
function searchPhrase() {
    $('#spinner').toggle()
    let idPhrase = $('#phrase-id').val()
    let data = { id: idPhrase }
=======
    initTimeUpdate(data[randomNum].tempo);
}

function searchPhrase() {
    $('#spinner').toggle()
    var idPhrase = $('#id-phrase').val()
    var data = {id: idPhrase}
>>>>>>> Stashed changes
    $.get('http://localhost:3000/frases', data, shufflePhrase)
    .fail(() => {
        $('#error').toggle()
        setTimeout(() => {
            $('#error').toggle()
        }, 2000)
    })
    .always(() => {
        $('#spinner').toggle()
    })
}
<<<<<<< Updated upstream
/* ~ Função que mostra qual frase a função searchPhrase buscou no servidor! ~ */
function shufflePhrase(data) {
    let phrase = $('.phrase')
    phrase.text(data.texto)
    phraseSizeUpdate()
    initTimeUpdate(data.tempo)
=======

function shufflePhrase(data) {
    console.log(data)
>>>>>>> Stashed changes
}