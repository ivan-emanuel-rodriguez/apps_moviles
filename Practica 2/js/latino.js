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
                            <img class="foto" src="../img/${artista.imagen}" alt="shakira" />
                        </div>
                        <div class="descripcion">
                            <p>
                                ${artista.artista}
                            </p>
                            <div class="valor" id="artista${i}" value="${artista.precio}">
                                <p>. Precio: ${artista.precio}</p>
                            </div>
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
/*
<article id="4">
                        <div class="artista">
                            <div class="imagen">
                                <img class="foto" src="../img/shakira.jpg" alt="shakira" />
                            </div>
                            <div class="descripcion">
                                <p>
                                    Shakira: Wakawaka.
                                    Precio $
                                    <div class="valor" id="artista4" value="1318">
                                        <p id="precio4">1318</p>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </article>
                    <article id="5">
                        <div class="artista">
                            <div class="imagen">
                                <img class="foto" src="../img/luisfonsi.jpg" alt="luisfonsi" />
                            </div>
                            <div class="descripcion">
                                <p>
                                    Luis Fonsi: No me doy por vencido.
                                    Precio $
                                    <div class="valor" id="artista5" value="2009">
                                        <p id="precio5">2009</p>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </article>
                    <article id="6">
                        <div class="artista">
                            <div class="imagen">
                                <img class="foto" src="../img/thalia.jpg" alt="thalia" />
                            </div>
                            <div class="descripcion">
                                <p>
                                    Thalia: Equivocada.
                                    Precio $
                                    <div class="valor" id="artista6" value="2144">
                                        <p id="precio6">2144</p>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </article>
                    */