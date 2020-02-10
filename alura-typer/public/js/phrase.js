$('#button-phrase').click(randomPhrase)
$('#button-search').click(searchPhrase)

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
    initTimeUpdate(data[randomNum].tempo)
}

/* ~ Função do botão Search para buscar uma frase específica! ~ */
function searchPhrase() {
    $('#spinner').toggle()
    let idPhrase = $('#phrase-id').val()
    let data = { id: idPhrase }
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
/* ~ Função que mostra qual frase a função searchPhrase buscou no servidor! ~ */
function shufflePhrase(data) {
    let phrase = $('.phrase')
    phrase.text(data.texto)
    phraseSizeUpdate()
    initTimeUpdate(data.tempo)
}