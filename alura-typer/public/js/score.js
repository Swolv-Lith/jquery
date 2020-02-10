$('#button-score').click(showScore)
$('#button-sync').click(syncScore)
$(".remove-button").click(removeLine)

/* ~ Função que mostra ou esconde o placar! ~ */
function showScore() {
    $('.score').stop().slideToggle(600)
}

/* ~ Função que scrolla a página até o placar! ~ */
function scrollScore() {
    let scorePosition =  $('.score').offset().top
 
    $('html, body').animate({scrollTop: scorePosition}, 1000)
 }

/* ~ Função que insere o novo dado no placar! ~ */
function insertScore() {
    let tbody = $('.score').find('tbody')
    // .find() procura o que for passado como parametro dentro da arvore
    let user = 'Tina'
    let numWords = $('#counter-w').text()

    let line = newTr(user, numWords)
    line.find('.remove-button').click(removeLine)
    tbody.prepend(line)
    $('.score').slideDown(500)
    scrollScore()
}

/* ~ Função que constrói a nova TR para o dade recebido do jogo! ~ */
function newTr(user, words) {
    let line = $('<tr>')
    let colUser = $('<td>').text(user)
    let colWords = $('<td>').text(words)
    let colRemove = $('<td>')

    let link = $('<a>').addClass('remove-button').attr('href', '#')
    let icon = $('<i>').addClass('small').addClass('material-icons').text('delete_forever')

    link.append(icon)
    colRemove.append(link)

    line.append(colUser)
    line.append(colWords)
    line.append(colRemove)
    
    return line
}

/* ~ Função que remove TRs do placar! ~ */
function removeLine(event) {
    event.preventDefault()
    let line = $(this).parent().parent()
    line.fadeOut(1000)
    setTimeout(() => {
        line.remove()
    }, 1000)
}

/* ~ Função que sincroniza os dados do placar com o servidor! ~ */
function syncScore() {
    let score = []
    let lines = $("tbody>tr")

    lines.each(() => {
        // nth-child() seletor avançado de CSS
        let user = $(this).find("td:nth-child(1)").text()
        let words = $(this).find("td:nth-child(2)").text()

        let placar = {
            usuario: user,
            pontos: words
        }

        score.push(placar)
    
    })
    console.log(score)
}

/* 
    ~ msg de erro para o push 

        var dados = {
        placar: placar
        };
        $("#spinner").css('display', 'inline-block');

        $.post("http://localhost:3000/placar", dados, function () {
        $("#spinner").hide();
        alert("Dados Salvos!");
        }).fail(function () {
        $("#spinner").hide();
        $("#erroAjax").show();
        setTimeout(function () {
            $("#erroAjax").hide();
        }, 5000);
        });
        }
         */