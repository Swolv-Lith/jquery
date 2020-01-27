/*
 $ é o atalho para a função jQuery 
 que resgata o elemento html e transforma
 em objeto com muitas outras funcionalidades
*/
var phrase = $('.phrase').text()
var numWords = phrase.split(' ').length
var phraseSize = $('#phrase-size')
phraseSize.text(numWords)

