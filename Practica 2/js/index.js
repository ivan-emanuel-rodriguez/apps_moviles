//FUNCIONA CON PRECIOS DISTINTOS PERO SE REPITE MUCHAS VECES LA MISMA LOGICA DE CODIGO

$(document).on('click', '#art1', function () {
    var carrito = $('#preciocarrito').text();
      if (this.value != "seleccionado") {
        $('img', this).css('opacity', .75);
        $('.artista',this).css('background-color', "rgb(80, 80, 80)");
        $('.artista',this).css('color', "white");
        this.value = "seleccionado";
        //Cargar carrito
        var precio1 = $('#precio1').text();
        var carrito = parseFloat(carrito) + parseFloat(precio1);
        $('#preciocarrito').text(carrito);
      }
      else {
        $('.artista .imagen img', this).css('opacity', 1);
        $('.artista',this).css('background-color', "");
        $('.artista',this).css('color', "black");
        this.value = ""    
        //Descargar carrito
        var precio1 = $('#precio1').text();
        var carrito = parseFloat(carrito) - parseFloat(precio1);
        $('#preciocarrito').text(carrito);
      }
});

$(document).on('click', '#art2', function () {
  var carrito = $('#preciocarrito').text();
  if (this.value != "seleccionado") {
    $('img', this).css('opacity', .75);
    $('.artista',this).css('background-color', "rgb(80, 80, 80)");
    $('.artista',this).css('color', "white");
    this.value = "seleccionado";
    //Cargar carrito
    var precio2 = $('#precio2').text();
    var carrito = parseFloat(carrito) + parseFloat(precio2);
    $('#preciocarrito').text(carrito);
  }
  else {
    $('.artista .imagen img', this).css('opacity', 1);
    $('.artista',this).css('background-color', "");
    $('.artista',this).css('color', "black");
    this.value = ""
    var precio2 = $('#precio2').text();
    var carrito = parseFloat(carrito) - parseFloat(precio2);
    $('#preciocarrito').text(carrito);    
  }
});

$(document).on('click', '#art3', function () {
  var carrito = $('#preciocarrito').text();
  if (this.value != "seleccionado") {
    $('img', this).css('opacity', .75);
    $('.artista',this).css('background-color', "rgb(80, 80, 80)");
    $('.artista',this).css('color', "white");
    this.value = "seleccionado";
    //Cargar carrito
    var precio3 = $('#precio3').text();
    var carrito = parseFloat(carrito) + parseFloat(precio3);
    $('#preciocarrito').text(carrito);
  }
  else {
    $('.artista .imagen img', this).css('opacity', 1);
    $('.artista',this).css('background-color', "");
    $('.artista',this).css('color', "black");
    this.value = ""
    var precio3 = $('#precio3').text();
    var carrito = parseFloat(carrito) - parseFloat(precio3);
    $('#preciocarrito').text(carrito);    
  }
});

$(document).on('click', '#logo', function () {
    window.location.href='/html/index.html'
});

