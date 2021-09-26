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
                <article>
                    <div class="artista">
                        <div class="imagen">
                            <img class="foto" src="../img/${artista.imagen}" alt="shakira" />
                        </div>
                        <div class="descripcion">
                            <p>
                                ${artista.artista}
                            </p>
                            <p>
                                . Precio: ${artista.precio}
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

