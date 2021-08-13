/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

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
    bodyModalAlerta = bFormulario ? "Estimado usuario:<br><br>sus credenciales de acceso son correctas." : "Estimado usuario:<br><br>Ha completado el registro de datos correctamente, por favor presione continuar para ingresar a nuestra web.";

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
  }
  // muestra ventana
        // abreModal = (idModal) => $(`#${idModal}`).modal({show: true, focus: true} {backdrop: "static"}),
        abreModal = (idModal) => $(`#${idModal}`).modal();

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

    // Le agregamos varios atributos y < span class="iconos" >+ (< / span>    ver la grilla del modal col o col-4 o col-auto
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
    $btnContacto.click(function(e){
        e.preventDefault()
        $("#modalContacto").modal('toggle');
    });
})( window );

/*
// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

*/
