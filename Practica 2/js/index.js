window.onload = () => {
  sessionStorage.setItem("valor_carrito", 0);
}
/*
$(document).on('click', 'article', function () {
    var carrito = $('#preciocarrito').text();
      if (this.value != "seleccionado") {
        $('img', this).css('opacity', .75);
        $('.artista',this).css('background-color', "rgb(80, 80, 80)");
        $('.artista',this).css('color', "white");
        this.value = "seleccionado";
        //Cargar carrito
        var art = $('img', this).attr("alt");
        if (art == "duki"){
          var precio= $('#precio1').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "daddy"){
          var precio= $('#precio2').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "badbunny"){
          var precio= $('#precio3').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "shakira"){
          var precio= $('#precio4').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "luisfonsi"){
          var precio= $('#precio5').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "thalia"){
          var precio= $('#precio6').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "sodaestereo"){
          var precio= $('#precio7').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "lospiojos"){
          var precio= $('#precio8').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "indiosolari"){
          var precio= $('#precio9').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "tiesto"){
          var precio= $('#precio10').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else{
          var precio= $('#precio11').text();
          var carrito = parseFloat(carrito) + parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
      }
      else {
        $('.artista .imagen img', this).css('opacity', 1);
        $('.artista',this).css('background-color', "");
        $('.artista',this).css('color', "black");
        this.value = ""    
        //Descargar carrito
        var art = $('img', this).attr("alt");
        if (art == "duki"){
          var precio= $('#precio1').text();
          var carrito = parseFloat(carrito) - parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
        else if(art == "daddy"){
          var precio= $('#precio2').text();
          var carrito = parseFloat(carrito) - parseFloat(precio);
          $('#preciocarrito').text(carrito);
        }
          else if(art == "badbunny"){
            var precio= $('#precio3').text();
            var carrito = parseFloat(carrito) - parseFloat(precio);
            $('#preciocarrito').text(carrito);
          }
          else if(art == "shakira"){
            var precio= $('#precio4').text();
            var carrito = parseFloat(carrito) - parseFloat(precio);
            $('#preciocarrito').text(carrito);
          }
          else if(art == "luisfonsi"){
            var precio= $('#precio5').text();
            var carrito = parseFloat(carrito) - parseFloat(precio);
            $('#preciocarrito').text(carrito);
          }
          else if(art == "thalia"){
            var precio= $('#precio6').text();
            var carrito = parseFloat(carrito) - parseFloat(precio);
            $('#preciocarrito').text(carrito);
          }
          else if(art == "sodaestereo"){
            var precio= $('#precio7').text();
            var carrito = parseFloat(carrito) - parseFloat(precio);
            $('#preciocarrito').text(carrito);
          }
          else if(art == "lospiojos"){
            var precio= $('#precio8').text();
            var carrito = parseFloat(carrito) - parseFloat(precio);
            $('#preciocarrito').text(carrito);
          }
          else if(art == "indiosolari"){
            var precio= $('#precio9').text();
            var carrito = parseFloat(carrito) - parseFloat(precio);
            $('#preciocarrito').text(carrito);
          }
          else if(art == "tiesto"){
            var precio= $('#precio10').text();
            var carrito = parseFloat(carrito) - parseFloat(precio);
            $('#preciocarrito').text(carrito);
          }
          else{
            var precio= $('#precio11').text();
            var carrito = parseFloat(carrito) - parseFloat(precio);
            $('#preciocarrito').text(carrito);
          }
      }
});
*/
$(document).on('click', 'article', function () {
  var nuevo_valor;
  var precio = document.getElementById("artista" + this.id).getAttribute("value");
  console.log(precio);

  if (this.value == "seleccionado") {
    $('.artista .imagen img', this).css('opacity', 1);
    $('.artista', this).css('background-color', "");
    $('.artista', this).css('color', "black");
    this.value = ""

    nuevo_valor = parseInt(sessionStorage.getItem("valor_carrito")) - parseInt(precio);
    sessionStorage.setItem("valor_carrito", nuevo_valor);
  } else {
    $('img', this).css('opacity', .75);
    $('.artista', this).css('background-color', "rgb(80, 80, 80)");
    $('.artista', this).css('color', "white");
    this.value = "seleccionado";

    if (sessionStorage.getItem("valor_carrito")) {
      nuevo_valor = parseInt(sessionStorage.getItem("valor_carrito")) + parseInt(precio);
      sessionStorage.setItem("valor_carrito", nuevo_valor);
    } else {
      sessionStorage.setItem("valor_carrito", parseInt(precio));
    }
  }
  $('.precio').empty();
    var contenido = $('.precio');
    var text = `<p>${nuevo_valor}$</p>`;
    contenido.append(text);
});

$(document).on('click', '#logo', function () {
  window.location.href = '/html/index.html'
});