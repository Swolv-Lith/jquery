$('#score').click(showScore)

function showScore() {
    $('.score').stop().slideToggle(600)
}

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

$(".remove-button").click(removeLine)

function removeLine(event) {
    event.preventDefault()
    let line = $(this).parent().parent()
    line.fadeOut(1000)
    setTimeout(function() {
        line.remove()
    }, 1000)
}

function scrollScore() {
   let scorePosition =  $('.score').offset().top

   $('html, body').animate({scrollTop: scorePosition}, 1000)
}