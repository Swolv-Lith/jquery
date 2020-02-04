function insertScore() {
    var tbody = $('.score').find('tbody')
    // .find() procura o que for passado como parametro dentro da arvore
    var user = 'Tina'
    var numWords = $('#counter-w').text()

    var line = newTr(user, numWords)
    line.find('.remove-button').click(removeLine)
    tbody.prepend(line)

}

function newTr(user, words) {
    var line = $('<tr>')
    var colUser = $('<td>').text(user)
    var colWords = $('<td>').text(words)
    var colRemove = $('<td>')

    var link = $('<a>').addClass('remove-button').attr('href', '#')
    var icon = $('<i>').addClass('small').addClass('material-icons').text('delete_forever')

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
    $(this).parent().parent().remove()
}