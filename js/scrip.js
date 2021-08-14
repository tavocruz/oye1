(function ($) {

    "use strict"

    const datos = $("body[data-datos]").data("datos"),
        bTop3 = datos.top3 === "s" ? 1 : 0,
        sPagina = datos.pagina,
        $back2Top = $("#back2Top"),
        $btnContacto = $("#btnContacto"),
        $destino = $("html, body"),
        $ventana = $(window),
        CERO = 0,
        LARGO = 8,
        bFormulario = sPagina === 'login' ? 1 : 0,
        tituloModalAlerta = (sPagina === 'login' ? 1 : 0) ? "Inicio de Sesión" : "Registro de Usuarios",
        bodyModalAlerta = bFormulario ? "Estimado usuario:<br><br>Sus credenciales de acceso son correctas." : "Estimado usuario:<br><br>Ha completado el registro de datos correctamente, por favor presione continuar para ingresar a nuestra web.",

        // funciones
        printEvent = (evt) => {
            console.log('print:', evt);
        },
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
        // verifica email
        emailValido = (email) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email)
        },
        // verifica campo requerido u obligatorio
        esRequerido = (valor) => valor.trim().length === CERO,
        // le da el foco a elementos input
        fokus = (campo) => campo.focus(),
        // agrega/quita borde rojo a un campo si es in/valido.
        toggleBorde = (element) => $(element).toggleClass("campo-error"),
        // agrega/quita atributo aria-invalid a un campo si es in/valido
        ariaInvalid = (campo, valor) => campo.setAttribute("aria-invalid", valor ? "true" : "false"),
        // muestra ventana
        abreModal = (idModal) => $(`#${idModal}`).modal(),
        // radio errado
        toggleRadio = (element) => $(element).toggleClass("radio-error"),
        // toggle de cualquier clase css para un elemento html
        toggleClase = (element, clase) => $(element).toggleClass(clase),
        // limpia el borde y el atributo aria invalid de los campos errados
        limpiaCampo = () => {
            document.querySelectorAll(".campo-error").forEach((element) => {
                toggleBorde(element)
                ariaInvalid(element, 0)
            })
        },
        // limpia mensaje de error del campo
        limpiaMensaje = () => {
            document.querySelectorAll(".error").forEach((element) => {
                element.innerHTML = ""
            })
        },
        // limpia los radios errados y quita aria invalid
        limpiaRadio = () => {
            document.querySelectorAll(".radio-error").forEach((element) => {
                toggleRadio(element)
                ariaInvalid(element, 0)
            })
        },
        // limpia errores
        limpiarErrores = () => {
            limpiaMensaje()
            limpiaCampo()
        },
        // muestra mensaje de error
        muestraError = (el, it, campo) => {
            const Errores = {
                "CI": "Contraseña inválida, mínimo 8 caracteres",
                "CN": "Confirmación inválida, mínimo 8 caracteres",
                "CO": "Campo obligatorio",
                "EI": "Email inválido",
                "EO": "Debe seleccionar un rango de edad",
                "GO": "Debe seleccionar un género",
                "NC": "Confirmación no coincide con la contraseña",
                "TO": "Debe aceptar los términos"
            }
            // muestra texto del mensaje y lo injecta al dom
            elemId(el).innerHTML = Errores[it]
            // y si no es tipo radio le agrega borde y atributo aria invalid, y lo enfoca
            if (campo) {
                toggleBorde(campo) // toggleClase(campo,"campo-error")
                ariaInvalid(campo, 1)
                fokus(campo)
            }
        },
        /* Valida formulario de Inicio de Sesión */
        validaLogin = (formulario) => {
            const correo = formulario.email,
                clave = formulario.contrasena
            limpiarErrores()
            // Valida correo
            if (!emailValido(correo.value)) {
                muestraError("errorEmail", "EI", correo)
                return !1
            }
            // Valida contraseña
            if (esRequerido(clave.value)) {
                muestraError("errorContrasena", "CO", clave)
                return !1
            }
            /* valida longitud de contraseña */
            if (clave.value.length < LARGO) {
                muestraError("errorContrasena", "CI", clave)
                return !1
            }
            // Datos correctos
            limpiarErrores()
            // setTimeout(alert("Datos enviados correctamente"),2000);
            return true
        },
        /* Valida formulario de registro de usuarios */
        validaRegistro = (formulario) => {
            const correo = formulario.email,
                clave1 = formulario.contrasena,
                clave2 = formulario.confirmacion,
                {genero} = formulario,
                {edad} = formulario,
                {terminos} = formulario
            limpiarErrores()
            limpiaRadio()
            // Valida email
            if (!emailValido(correo.value)) {
                muestraError("errorEmail", "EI", correo)
                return !1
            }
            // Valida contraseña requerida
            if (esRequerido(clave1.value)) {
                muestraError("errorContrasena", "CO", clave1)
                return !1
            }
            // Valida longitud de contraseña
            if (clave1.value.length < LARGO) {
                muestraError("errorContrasena", "CI", clave1)
                return !1
            }
            // Valida longitud de confirmacion
            if (clave2.value.length < LARGO) {
                muestraError("errorConfirmacion", "CN", clave2)
                return !1
            }
            // Valida confirmacion debe coincidir con contraseña
            if (clave1.value !== clave2.value) {
                muestraError("errorConfirmacion", "NC", clave2)
                return !1
            }
            // Valida genero musical
            if (genero.value === "") {
                muestraError("errorGenero", "GO", genero)
                return !1
            }
            // Valida edad
            if (edad.value === "") {
                muestraError("errorEdad", "EO")
                toggleRadio(".radio-edad")
                return !1
            }
            // Valida terminos
            if (!terminos.checked) {
                muestraError("errorTerminos", "TO", terminos)
                return !1
            }
            // Campos ok
            //alert("Datos enviados correctamente");
            return true
        },
        // Genera html del Top 3 de canciones - top3 : objeto con las 3 mejores canciones
        generaTop3 = (top3) => {
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
        },
        // Genera html de todas las canciones
        generaCanciones = (todas) => {
            let html = '<div class="grid-sizer col-lg-4 col-md-6 col-12"></div>',
                key
            for (key in todas) {
                if (Object.prototype.hasOwnProperty.call(todas, key)) {
                    html += `
                    <div class="grid-item col-lg-4 col-md-6 col-12 mb-4">
                        <div class="card h-100 card-sombra1">
                            <div class="card-header"><img class="img-fluid" src="./imgs/icon_${todas[key].icono}.svg" width="50" height="50" alt=""></div>
                            <div class="card-body">
                                <h5 class="card-title">${todas[key].nombre}</h5>
                                <div class="d-flex justify-content-center align-items-center">
                                    <audio controls preload="metadata" class="w-100">
                                        <source src="./canciones/${todas[key].ruta}" type="audio/mpeg" />
                                        <p>Download <a href="./canciones/${todas[key].ruta}">${todas[key].nombre}</a></p>
                                    </audio>
                                </div>
                            </div>
                        </div>
                    </div>`
                }
            }
            return html
        },
        // verifica que el formulario sea válidido
        okForm = (fn, formulario) => fn(formulario);

    /* Agregamos sección invisible para SEO con nuestro link en el tope del documento */
    addSeccionSeo()

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

    let frmLogin

    switch (sPagina) {
        case 'login':
            //const $formLogin = $("form#formLogin")
            frmLogin = document.querySelector("form")
            frmLogin.onsubmit = function (event) {
            //$formLogin.onsubmit = function (event) {
                if (!okForm(validaLogin, frmLogin)) {
                /* if (!okForm(validaLogin, $formLogin )) { */
                    event.preventDefault()
                } else {
                    event.preventDefault()
                    abreModal("modalAlerta")
                    $("#btnCierraModalAlerta").focus()
                }
            }

            break;

        case 'registro':
            const $formRegistro = $("form#formRegistro")
            $formRegistro.submit(function (e) {
                if (okForm(validaRegistro, this)) {
                    e.preventDefault()
                    abreModal("modalAlerta")
                }
                e.preventDefault()
            })

            break;

        default:
            // index y canciones
            // Cargamos los datos que estan en datos.json usando AJAX
            $.ajax({
                "url": "datos.json",
            }).done((respuesta) => {
                const { canciones } = respuesta
                const totalCanciones = canciones.length
                // console.log(canciones,totalCanciones);
                // Ordenamos las canciones en forma descendente
                canciones.sort((a, b) => b.reproducciones - a.reproducciones)

                // Evita que el filtrado se ejecute cada milisegundo - isotope
                const debounce = (fn, threshold) => {
                    var timeout,
                        umbral
                    umbral = threshold || 100
                    return function debounced() {
                        clearTimeout(timeout)
                        var args = arguments
                        var _this = this
                        function delayed() {
                            fn.apply(_this, args)
                        }
                        timeout = setTimeout(delayed, umbral)
                    }
                },
                    // Genera el html del Top 3 de las canciones
                    htmlTop3 = (tresCanciones) => generaTop3(tresCanciones),
                    // Generam el html de todas las canciones
                    htmlCanciones = (lasCanciones) => generaCanciones(lasCanciones)

                if (bTop3) {
                    const top3 = canciones.slice(0, 3)
                    const [Uno, Dos, Tres] = canciones
                    // Agregamos al DOM en el div con id=topTres
                    elemId("topTres").innerHTML = htmlTop3(top3)
                } else {
                    // Viene de canciones
                    // regex para el filtrado
                    var qsRegex /* , $grid, iso, $badgeNroCanciones; */

                    // Generamos e injectamos al DOM el html al div con id = canciones
                    elemId("canciones").innerHTML = htmlCanciones(canciones)

                    // Inicializamos la grilla Isotope con layout Masonry y con filtrado de canciones
                    let $grid = $(".grid").isotope({
                        itemSelector: ".grid-item",
                        percentPosition: true,
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: ".grid-sizer"
                        },
                        // fade in desde abajo
                        visibleStyle: {
                            opacity: 1,
                            transform: 'translateY(0)'
                        },
                        hiddenStyle: {
                            opacity: 0,
                            transform: 'translateY(100px)'
                        },
                        stagger: 30,
                        filter: function () {
                            return qsRegex ? $(this).find('.card-title').text().match(qsRegex) : true
                        }
                    })

                    // Data js de isotope
                    const iso = $grid.data("isotope"),
                        $badgeNroCanciones = $("#nCanciones"),
                        // Actualiza el contenido del badge de nro de canciones
                        actualizaNroBadge = () => {
                            $badgeNroCanciones.text(`${iso.filteredItems.length} de ${totalCanciones}`)
                        }

                    // Filtra canciones usando el valor del campo de búsqueda
                    var $quicksearch = $('.quicksearch').keyup(debounce(function () {
                        qsRegex = new RegExp($quicksearch.val(), 'gi')
                        $grid.isotope()
                        actualizaNroBadge()
                    }, 200))

                    // Actualizamos el badge del nro de canciones
                    actualizaNroBadge()
                }
            })

            break;
    }

    // genera modal alerta - reemplaza a alert() en forms

    var bsAlert = function (...args) {
        const [tituloModal, cuerpoModal, estiloBoton, textoBoton] = args

        const tm = tituloModal ? tituloModal : "Continuar",
            cm = cuerpoModal ? cuerpoModal : "Datos enviados correctamente.",
            eb = estiloBoton ? estiloBoton : "cierra-modal",
            tb = textoBoton ? textoBoton : " Continuar "

        const modal1 = `
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content modal-alerta-content">
                <div class="modal-header modal-alerta-header ">
                    <div class="modal-title h4" id="modalAlertaLabel">${tm}</div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body modal-alerta-body" id="mensaje">${cm}</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-${eb}" id="btnCierraModalAlerta" data-dismiss="modal">${tb}</button>
                </div>
            </div>
        </div>`
        return modal1
    };

    // oculta scroller
    $back2Top.css("display", "none")

    // Muestra/oculta scroller
    $ventana.scroll(() => {
        var height = $ventana.scrollTop()
        height > 100 ? $back2Top.fadeIn() : $back2Top.fadeOut()
    })
    // Anima scrollTop
    $back2Top.click((evt) => {
        evt.preventDefault()
        $destino.animate({ "scrollTop": 0 }, "slow")
    })
    // botón Contacto
    /* $btnContacto.click((evt) => {evt.preventDefault();abreModal("modalContacto")}) */
    $btnContacto.click(function(e) {
        e.preventDefault()
        $("#modalContacto").modal('toggle');
    });

    // formulario activo
    const formActivo = document.querySelector("form")

    // Ventana modal de Alerta -cuando un formulario es exitoso-
    const divModalAlerta = document.createElement("div")
    // Seteamos su Id y su contenido
    divModalAlerta.id = "modalAlerta"
    divModalAlerta.innerHTML = bsAlert(`${tituloModalAlerta}`, bodyModalAlerta) // , "primary")

    // agregamos atributos
    $(divModalAlerta).attr({
        "class": "modal fade",
        "aria-labelledby": "modalAlertaLabel",
        "aria-hidden": "true",
        "data-backdrop": "static",
        "tabindex": -1
    });

    // y lo injectamos al DOM antes del formulario
    $(divModalAlerta).insertAfter(formActivo)

    // modal de alerta
    const $modalAlerta = $("#modalAlerta"),

    // boton Cerrar modal alerta
    $btnCierraModalAlerta = $("#btnCierraModalAlerta")

    // manejadores de eventos
    $modalAlerta.on({
/*         'show.bs.modal': function (e) {
            console.log("entre a jq divMA s ");
            printEvent(e);
        },
 */        'shown.bs.modal': function (e) {
//            console.log("entre a jq divMA sn "); printEvent(e);
            $btnCierraModalAlerta.focus()
        },
        'hide.bs.modal': function (e) {
            //printEvent(e);
        }
    });

    $btnCierraModalAlerta.on({
        'click': function (e) {
            //printEvent(e);
            formActivo.submit()
        },
        'focus': function (e) {
            printEvent(e);
        }
    });

})(jQuery);
/*

        top3.showTop3 = function() {
            console.log('top3 proto show');
            return htmlTop3(top3)
        }



        canciones.showTop3 = function() {
            alert('dd ss');
            const top = ["Uno", "Dos", "Tres"]
            let html = 'showtop3 '
            let key
            let items = ''

            for (key in top3) {
                if (Object.prototype.hasOwnProperty.call(top3, key)) {
                    html += `${top3[key].nombre} audioTop${top[key]} ${top3[key].ruta}`
                }
            }
            html += "showtop3"
            return html
        }

    $.ajax({
        "url": "datos.json"
    }).done((respuesta) => {

        let {canciones} = respuesta
        canciones.showTop3 = () => {
            let top3 = canciones
            let html = ''
            console.log('entro a canciones proto');
            top3.sort((a, b) => b.reproducciones - a.reproducciones)
            top3.slice(0,3)
            html = htmlTop3(top3)
            return html
        }

        elemId('cancionesTop3').innerHTML = top3.showTop3()


let lasCanciones = {
    items: canciones,
    otro: 0,
    showTop3: function() {
        alert('st3');
        const top = ["Uno", "Dos", "Tres"]
        let html = 'en canciones showtop3 '
        let key
        let items = ''

        for (key in top3) {
            if (Object.prototype.hasOwnProperty.call(top3, key)) {
                html += `${top3[key].nombre} audioTop${top[key]} ${top3[key].ruta}`
            }
        }
        html += "showtop3"
        return html
    }
}

generaTop3 = (top3) => {
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

lascanciones.showT3 = generaTop3
*/