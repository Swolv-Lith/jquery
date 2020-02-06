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
    initMarks()
    $('#restart').click(restartGame)
    $(".remove").click(removeLine)
})

function phraseSizeUpdate() {
    var phrase = $('.phrase').text()
    var numWords = phrase.split(' ').length
    var phraseSize = $('#phrase-size')
    phraseSize.text(numWords)
}

function initTimeUpdate(time) {
    initialTime = time;
    $("#time-digi").text(time);
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
        $("#restart").attr("disabled",true);
        var chronoID = setInterval(() => {
            timeLeft--
            $('#time-digi').text(timeLeft)
            if (timeLeft < 1) {
                clearInterval(chronoID)
                finishGame()
            }
        }, 1000);
    })
}

function finishGame() {
    camp.attr('disabled',true)
    // attr pega ou muda o atributo
    $("#restart").attr("disabled", false);
    camp.addClass('disable-digi')
    insertScore()
}
function initMarks() {
    var phrase = $('.phrase').text()
    camp.on('input',function() {
    var typed = camp.val()
    var comparable = phrase.substr(0,typed.length)
    // substr é uma substring que pega parte da string do ponto inicial (primeiro parametro) até onde for determinado pelo segundo parâmetro
    if (typed == comparable) {
        camp.addClass('green-border')
        camp.removeClass('red-border')
    } else {
        camp.addClass('red-border')
        camp.removeClass('green-border')
    }
    })
}

// Restart Button
function restartGame() {
    // // .click() é o atalho para .on('click')
    camp.attr('disabled',false)
    camp.val('')
    $('#counter-w').text('0')
    $('#counter-c').text('0')
    $('#time-digi').text(initialTime)
    chronoInit()
    camp.removeClass('disable-digi')
    camp.removeClass('red-border')
    camp.removeClass('green-border')
}

// Versão enxuta da initMarks

// function initMarks() {
//     var phrase = $('.phrase').text()
//     var typed = camp.val()
//     camp.on('input',function() {
//         if (phrase.startsWith(typed)) {
//             camp.addClass('green-border')
//             camp.removeClass('red-border')
//         } else {
//             camp.addClass('red-border')
//             camp.removeClass('green-border')
//         }
//     })
// }
