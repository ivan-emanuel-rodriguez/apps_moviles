$(document).on('click', 'article', function () {

      if (this.value == "seleccionado") {
        $('.artista .imagen img', this).css('opacity', 1);
        $('.artista',this).css('background-color', "");
        $('.artista',this).css('color', "black");
        this.value = ""
      }
      else {
        $('img', this).css('opacity', .75);
        $('.artista',this).css('background-color', "rgb(80, 80, 80)");
        $('.artista',this).css('color', "white");
        this.value = "seleccionado";

      }
      
});
$(document).on('click', '#logo', function () {
    window.location.href='/html/index.html'
});