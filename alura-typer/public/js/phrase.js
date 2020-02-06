$('#phrase').click(randomPhrase)

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

function shuffleRandomPhrase(data) {
    let phrase = $('.phrase')
    let randomNum = Math.floor(Math.random() * data.length)
    phrase.text(data[randomNum].texto)
    phraseSizeUpdate()
    initTimeUpdate(data[randomNum].tempo);
}