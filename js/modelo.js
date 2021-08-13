}).done((respuesta) => {
    let {canciones} = respuesta
    let rpta = respuesta

    console.log(canciones)
    console.log(respuesta)
    console.log(rpta)


    let lasCanciones = {
        items: canciones,
        otro: 0,
        showTop3: function() {
            alert('st3');
            const top = ["Uno", "Dos", "Tres"]
            const top3 = this.items
            let html = 'en canciones showtop3 '
            let key
            //let items = ''

            for (key in top3) {
                if (Object.prototype.hasOwnProperty.call(top3, key)) {
                    html += `
                    ${top3[key].nombre}
                    audioTop${top[key]}
                    ${top3[key].ruta}
                    `
                }
            }
            html += "showtop3"
            return html
        }
    }
    console.log(lasCanciones);
    const generaTop3 = (top3) => {
        const top = ["Uno", "Dos", "Tres"]
        let html =
            '<div class="divTable"><div class="divTableHeading"><div class="divTableRow"><div class="divTableHead d-none d-md-table-cell">Nombre</div><div class="divTableHead ">Canción</div></div></div><div class="divTableBody">',
            key

        for (key in top3) {
            if (Object.prototype.hasOwnProperty.call(top3, key)) {
                html += `
                <div class="divTableRow">
                <div class="divTableCell text-primary h5 align-middle d-none d-md-table-cell"><strong>${top3[key].nombre}</strong></div>
                <div class="divTableCell text-left">
                <div class="d-flex justify-content-start align-items-center w-100">
                <audio id="audioTop${top[key]}" controls preload="metadata" class="mw-100">
                <source src="./canciones/${top3[key].ruta}" type="audio/mpeg" />
                <p>Su navegador no soporta el elemento audio, por favor descargue la canción <a href="./canciones/${top3[key].ruta}">${top3[key].nombre}</a> para poder escucharla.</p>
                </audio>
                </div>
                </div>
                </div>`
            }
        }
        html += "</div></div>"
        return html
    }
    //const totalCanciones = canciones.length;
    // Ordenamos las canciones en forma descendente
    canciones.sort((a, b) => b.reproducciones - a.reproducciones)
    // y luego solo cargamos las 3 primeras
    const top3 = canciones.slice(0, 3)
    lasCanciones.generaTop3 = generaTop3
    o.elemId("topTres").innerHTML = lasCanciones.generaTop3(top3)
    // let o = new oye()
    // Agregamos al DOM en el div con id=topTres
    //elemId("topTres").innerHTML = htmlTop3(top3)
    // elemId("topTres").innerHTML = generaTop3(top3)
    //o.elemId('topTres').innerHTML = o.htmlTop3(top3)