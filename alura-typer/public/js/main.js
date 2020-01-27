/*
 $ é o atalho para a função jQuery 
 que resgata o elemento html e transforma
 em objeto com muitas outras funcionalidades
*/
var initialTime = $('#time-digi').text()
var camp = $('.digi')

/*
    $(document).ready(function(){})
    Chama as funções assim que a página carregar
    o atalho desse recurso é usar somente o $
*/
$(document).ready(function() {
    phraseSizeUpdate()
    counterInit()
    chronoInit()
    $('#restart').click(restartGame())
})

function phraseSizeUpdate() {
    var phrase = $('.phrase').text()
    var numWords = phrase.split(' ').length
    var phraseSize = $('#phrase-size')
    phraseSize.text(numWords)
}

function counterInit() {
    camp.on('input', function() {
        var content = camp.val()
        var qttWords = content.split(/\S+/).length -1
        // expressão regular para deixar o jogo mais preciso na contagem
        $('#counter-w').text(qttWords)
        var qttChars = content.length
        $('#counter-c').text(qttChars)
    })
}

function chronoInit() {
    var timeLeft = $('#time-digi').text()
    camp.one('focus', function() {
        var chronoID = setInterval(() => {
            timeLeft--
            $('#time-digi').text(timeLeft)
            if (timeLeft < 1) {
                camp.attr('disabled',true)
                // attr pega ou muda o atributo
                clearInterval(chronoID)
                // limpa o set interval
            }
        }, 1000);
    })
}

// Restart Button
function restartGame() {
    // .click() é o atalho para .on('click')
    camp.attr('disabled',false)
    camp.val('')
    $('#counter-w').text('0')
    $('#counter-c').text('0')
    $('#time-digi').text(initialTime)
    chronoInit()
}