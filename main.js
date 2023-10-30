$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
})

const form = document.getElementById('form-contatos')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputTarefa = document.getElementById('tarefa');
})
