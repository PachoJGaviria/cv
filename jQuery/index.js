
$('button').css('background-color', 'green')
$('h1').addClass('bit-title margin-50')
$('h1').text('Hi')
$('button').html('<em>Ohhh</em>')
$('a').attr('href', 'https://www.bing.com/')

$('h1').on('mouseover', (event) => {
    console.log(event)
})

$(document).on('keypress', (event) => {
    console.log(event)
    $('h1').text(event.key)
})

$('button').on('click', (event) => {
    //$('h1').css('color', 'purple').toggle()
    //$('h1').css('color', 'black').fadeToggle()
    $('h1').css('color', 'red').slideToggle()

})
