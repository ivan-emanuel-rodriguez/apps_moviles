window.onload = () => {
    CargarArtistas();
}

function CargarArtistas() {
    $.ajax({
        type: 'GET',
        url: 'https://my-json-server.typicode.com/ivan-emanuel-rodriguez/apps_moviles/db',
        dataType: 'json'
    }).done((data) => {
        console.log(data.lista)
        var i = 0;
        var main = $('#dinamica');
        console.log(data)
        data.lista.forEach(artista => {
            console.log(artista);
            if(artista.categoria == "latino"){
                var card = `
                <article id="${i}">
                    <div class="artista">
                        <div class="imagen">
                            <img class="foto" src="${artista.imagen}" alt="artista latino" />
                        </div>
                        <div class="descripcion">
                            <p>
                                ${artista.artista}
                            </p>
                        </div>
                    </div>
                </article>
                `
                main.append(card);
                i++;
            }
        })
    });
}