// This is a JavaScript file

$('#cadastro').click(function(){
    var parametros = {
      'titulo': $('#titulo').val(),
      'autor': $('#autor').val(),
      'ano': $('#ano').val(),
      'isbm': $('#isbm').val()
    }
    alert(parametros)
  })