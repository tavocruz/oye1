(function ($) {

    "use strict"

    function OOOye(config){
        if (config !== undefined) {
            this.back2Top = $(config.back2Top)
            this.destino = $(config.destino)
            this.ventana = $(config.ventana)
        } else {
            this.back2Top = document.querySelector("#back2Top")
            this.destino = $("html, body")
            this.ventana = $(window)
        }

        this.elemId = (idElemento) => document.getElementById(idElemento)
        // agrega seccion SEO al inicio de todo documento
        this.addSeccionSeo = () => {
            if (!document.getElementById("top-1")) {
                const Seo = document.createElement("section")
                Seo.id = "top-1"
                Seo.className = "d-none"
                Seo.innerHTML = `<a href="./index.html">OYE, la mejor radio online</a>`
                document.body.insertBefore(Seo, document.body.childNodes[0])
            }
        }
        // muestra ventana
        this.abreModal = (idModal) => $(`#${idModal}`).modal()
        // Genera html del Top 3 de canciones - top3 : objeto con las 3 mejores canciones
        this.generaTop3 = (top3) => {
            const top = ["Uno", "Dos", "Tres"]
            let html = '<div class="divTable"><div class="divTableHeading"><div class="divTableRow"><div class="divTableHead d-none d-md-table-cell">Nombre</div><div class="divTableHead ">Canción</div></div></div><div class="divTableBody">', key

            for (key in top3) {
                if (Object.prototype.hasOwnProperty.call(top3, key)) {
                    console.log(key, top[key])
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
        this.htmlTop3 = (tresCanciones) => this.generaTop3(tresCanciones)
    }

    class Oye {
        constructor(config) {
            if (config !== undefined) {
                //this.config = config
                this.back2Top = $(config.back2Top)
                this.destino = $(config.destino)
                this.ventana = $(config.ventana)
            } else {
                this.back2Top = document.querySelector("#back2Top")
                this.destino = $("html, body")
                this.ventana = $(window)
            }
            //this.back2Top.css("display", "none")
        };
        elemId = (idElemento) => document.getElementById(idElemento)
        // agrega seccion SEO al inicio de todo documento
        addSeccionSeo = () => {
            if (!document.getElementById("top-1")) {
                const Seo = document.createElement("section")
                Seo.id = "top-1"
                Seo.className = "d-none"
                Seo.innerHTML = `<a href="./index.html">OYE, la mejor radio online</a>`
                document.body.insertBefore(Seo, document.body.childNodes[0])
            }
        }
        // muestra ventana
        abreModal = (idModal) => $(`#${idModal}`).modal()
        // Genera html del Top 3 de canciones - top3 : objeto con las 3 mejores canciones
        generaTop3 = (top3) => {
            const top = ["Uno", "Dos", "Tres"]
            let html = '<div class="divTable"><div class="divTableHeading"><div class="divTableRow"><div class="divTableHead d-none d-md-table-cell">Nombre</div><div class="divTableHead ">Canción</div></div></div><div class="divTableBody">', key

            for (key in top3) {
                if (Object.prototype.hasOwnProperty.call(top3, key)) {
                    console.log(key, top[key])
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
        htmlTop3 = (tresCanciones) => this.generaTop3(tresCanciones)
    };

    class OOye {
        constructor(config) {
            if (config !== undefined) {
                //this.config = config
                this.back2Top = $(config.back2Top)
                this.destino = $(config.destino)
                this.ventana = $(config.ventana)
            } else {
                this.back2Top = document.querySelector("#back2Top")
                this.destino = $("html, body")
                this.ventana = $(window)
            }
            //this.back2Top.css("display", "none")
        };
    }
    OOye.prototype.elemId = (idElemento) => document.getElementById(idElemento)
    OOye.prototype.addSeccionSeo = () => {
            if (!document.getElementById("top-1")) {
                const Seo = document.createElement("section")
                Seo.id = "top-1"
                Seo.className = "d-none"
                Seo.innerHTML = `<a href="./index.html">OYE, la mejor radio online</a>`
                document.body.insertBefore(Seo, document.body.childNodes[0])
            }
    }
        // muestra ventana
        OOye.prototype.abreModal = (idModal) => $(`#${idModal}`).modal()
        // Genera html del Top 3 de canciones - top3 : objeto con las 3 mejores canciones
        OOye.prototype.generaTop3 = (top3) => {
            const top = ["Uno", "Dos", "Tres"]
            let html = '<div class="divTable"><div class="divTableHeading"><div class="divTableRow"><div class="divTableHead d-none d-md-table-cell">Nombre</div><div class="divTableHead ">Canción</div></div></div><div class="divTableBody">', key

            for (key in top3) {
                if (Object.prototype.hasOwnProperty.call(top3, key)) {
                    console.log(key, top[key])
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
        //OOye.prototype.htmlTop3 = (tresCanciones) => this.generaTop3(tresCanciones)
/*
    const
        $back2Top = $("#back2Top"),
        $destino = $("html, body"),
        $ventana = $(window),
        elemId = (idElemento) => document.getElementById(idElemento),
        // agrega seccion SEO al inicio de todo documento
        addSeccionSeo = () => {
            if (!document.getElementById("top-1")) {
                const Seo = document.createElement("section")
                Seo.id = "top-1"
                Seo.className = "d-none"
                Seo.innerHTML = `<a href="./index.html">OYE, la mejor radio online</a>`
                document.body.insertBefore(Seo, document.body.childNodes[0])
            }
        },
        // muestra ventana
        abreModal = (idModal) => $(`#${idModal}`).modal(),
        // Genera html del Top 3 de canciones - top3 : objeto con las 3 mejores canciones
        generaTop3 = (top3) => {
            const top = ["Uno", "Dos", "Tres"]
            let html =
                '<div class="divTable"><div class="divTableHeading"><div class="divTableRow"><div class="divTableHead d-none d-md-table-cell">Nombre</div><div class="divTableHead ">Canción</div></div></div><div class="divTableBody">',
                key

            for (key in top3) {
                if (Object.prototype.hasOwnProperty.call(top3, key)) {
                    console.log(key, top[key]);
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
        },
        htmlTop3 = (tresCanciones) => generaTop3(tresCanciones) */

    const config = {
        back2Top: '#back2Top',
        destino: "html, body",
        ventana: window
    }
    let o = new Oye(config)
    let ooye = new OOye(config)

    // botón Contacto
    const botonContacto = o.elemId('btnContacto')
    botonContacto.addEventListener('click', (evt) => {
        evt.preventDefault()
        o.abreModal("modalContacto")
    })
    // oculta scroller
    // o.back2Top.css("display", "none")
    //$back2Top.css("display", "none")

    /* Agregamos sección invisible para SEO con nuestro link en el tope del documento */
    ooye.addSeccionSeo()

    // toggle Muestra/oculta scroller $ventana.on('scroll', () => {
    ooye.ventana.on('scroll', () => {
        /* var height = $ventana.scrollTop(); */
        var height = ooye.ventana.scrollTop();
        (
            height > 100
                ? ooye.back2Top.fadeIn()
                : ooye.back2Top.fadeOut()
                /* ? $back2Top.fadeIn()
                : $back2Top.fadeOut() */
        )
    })
    // Anima scrollTop
    /* $back2Top.on('click', (evt) => {
        evt.preventDefault()
        $destino.animate({ "scrollTop": 0 }, "slow")
    }) */

    ooye.back2Top.on('click', (evt) => {
        evt.preventDefault()
        ooye.destino.animate({ "scrollTop": 0 }, "slow")
    })

    // Ventana modal de contacto - referencia para preppend
    const divModalContacto = document.createElement("div"),
        [ref] = document.getElementsByTagName("script"),
        divCol = '<div class="col altura-linea-3x text-sm-center ',
        sOrden = "order-",
        svg = '"><svg height="32" width="32" class="svg-inline-modal" aria-hidden="true" focusable="false" role="img"'

    // Seteamos el id de la ventana modal y creamos su contenido html y
    divModalContacto.id = "modalContacto"
    divModalContacto.innerHTML =
        `<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content text-primary sombra-borde">
                <div class="modal-header ">
                    <div class="modal-title h4 font-weight-bold" id="modalContactoLabel">Contacto</div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body my-4 h5">

                    <div class="container-fluid py-1">
                        <div class="row row-cols-1 row-cols-sm-3 align-items-center justify-content-center">
                            ${divCol}${sOrden}1 ${sOrden}sm-1${svg} data-icon="correo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></div>
                            ${divCol}${sOrden}3 ${sOrden}sm-2${svg} data-icon="telefono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></div>
                            ${divCol}${sOrden}5 ${sOrden}sm-3${svg} data-icon="celular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg></div>
                            ${divCol}text-left ${sOrden}2 ${sOrden}sm-4"><a href="mailto:info@oye.com">info@oye.com</a></div>
                            ${divCol}text-left ${sOrden}4 ${sOrden}sm-5">+1 123 123123123</div>
                            ${divCol}text-left ${sOrden}6 ${sOrden}sm-6"><a href="tel:51 942552026">+51 942552026</a></div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-cierra-modal" id="btnModalContacto" data-dismiss="modal"> Continuar </button>
                </div>
            </div>
        </div>`

    // Le agregamos varios atributos y
    $(divModalContacto).attr({
        "class": "modal fade",
        "aria-labelledby": "modalContactoLabel",
        "aria-hidden": "true",
        "tabindex": -1
    })
    // Finalmente lo injectamos al DOM antes de los scripts js
    $(divModalContacto).insertBefore(ref)

    $(divModalContacto).on('shown.bs.modal', () => {
        $('#btnModalContacto').trigger('focus')
    })



    $.ajax({
        "url": "datos.json"
    }).done((respuesta) => {
        let {canciones} = respuesta/*
        console.log(canciones)
        console.log(respuesta) */

        let lasCanciones = {
            items: canciones,/*
            top3: (items) => {
                console.log('en top3 topItems')
                let topItems
                items.sort((a, b) => b.reproducciones - a.reproducciones)
                topItems = items.slice(0,3)
                console.log(topItems)
                return topItems
            }, */
            creaTop3: function() {
     /*            console.log(' en creaTop3 eltop3') */
                this.ordenaCanciones()
                let eltop3 = this.items.slice(0,3)
/*                 console.log(eltop3)
 */                return eltop3
            },
            ordenaCanciones: function() {
                this.items.sort((a, b) => b.reproducciones - a.reproducciones)
            },/*
            showTop3: function() {
                const top = ["Uno", "Dos", "Tres"]
                let eltop3 = this.items.sort((a, b) => b.reproducciones - a.reproducciones)
                eltop3 = eltop3.slice(0,3)
                console.log('en canciones showtop3 eltop3')
                console.log(eltop3);

                let html = 'en canciones showtop3 '
                let key
                //let items = ''

                for (key in eltop3) {
                    if (Object.prototype.hasOwnProperty.call(eltop3, key)) {
                        html += `${eltop3[key].nombre} audioTop${top[key]} ${eltop3[key].ruta} `
                    }
                }
                html += " fin showtop3 "
                return html
            },
            showT3: function() {
                const top = ["Uno", "Dos", "Tres"]
                let top3 = this.top3(this.items)

                console.log('en canciones showT3 top3')
                console.log(top3);

                let html = 'en canciones showT3 '
                let key

                for (key in top3) {
                    if (Object.prototype.hasOwnProperty.call(top3, key)) {
                        html += `${top3[key].nombre} audioTop${top[key]} ${top3[key].ruta} `
                    }
                }
                html += " fin showT3"
                return html
            }, */
            generaTop3: function() {
                const top = ["UUno", "DDos", "TTres"]
                let top3 = this.creaTop3()
                let html =
                    '<div class="divTable"><div class="divTableHeading"><div class="divTableRow"><div class="divTableHead d-none d-md-table-cell">Nombre</div><div class="divTableHead ">Canción</div></div></div><div class="divTableBody">',
                    key

                console.log(' en generaTop3 top3 ')
                console.log(top3)

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
        }
/*         console.log(lasCanciones);

        const generaTop3 = (top3) => {
            const top = ["Uno", "Dos", "Tres"]
            let html =
                '<div class="divTable"><div class="divTableHeading"><div class="divTableRow"><div class="divTableHead d-none d-md-table-cell">Nombre</div><div class="divTableHead ">Canción</div></div></div><div class="divTableBody">',
                key

            top.forEach( function(item) {


            })

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
        } */
        //const totalCanciones = canciones.length;
        // Ordenamos las canciones en forma descendente
        // canciones.sort((a, b) => b.reproducciones - a.reproducciones)
        // y luego solo cargamos las 3 primeras
        // const top3 = canciones.slice(0, 3)
        //lasCanciones.generaTop3 = generaTop3
        //o.elemId("topTres").innerHTML = lasCanciones.generaTop3(top3)
        // o.elemId("topTres").innerHTML = generaTop3(top3)
        o.elemId("topTres").innerHTML =  lasCanciones.generaTop3()
        o.elemId("cancionesTop3").innerHTML = lasCanciones.generaTop3()

  /*       let miTop3 = lasCanciones.creaTop3()
        console.log(miTop3);
        console.log(lasCanciones.showTop3());
        console.log(lasCanciones.showT3()); */


        // let o = new oye()
        // Agregamos al DOM en el div con id=topTres
        //elemId("topTres").innerHTML = htmlTop3(top3)
        // elemId("topTres").innerHTML = generaTop3(top3)
        //o.elemId('topTres').innerHTML = o.htmlTop3(top3)
    })

})(jQuery)
