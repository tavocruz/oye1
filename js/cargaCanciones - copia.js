$(document).ready(function () {
    //Carga los datos que estan en datos.json usando AJAX
    $.ajax({
      url: "datos.json"
    }).done(function(respuesta) {
      canciones = respuesta.canciones;
      // orden descendente por nro de reproducciones
      canciones.sort(function(a, b){return b.reproducciones - a.reproducciones});
      var x = 1;
      var i, html = ""
      var top = canciones.length;
      // genera html de canciones
      ({ i, x, html } = muestraCanciones(i, x, html, top));
      //Modifica el DOM agregando el html generado dentro del cuerpo de la tabla con id=canciones
      document.getElementById("canciones").innerHTML = html
    });
  });

function muestraCanciones(i, x, html, top) {
  for (i = 0, x = 1; i < top; i++) {
    html += `
        <tr>
          <td>${x+i}</td>
          <td>${canciones[i].nombre}</td>
          <td>
            <audio id="audioTop${top[i]}" controls>
              <source src="./canciones/${canciones[i].ruta}" type="audio/mpeg" />
              <source src="./canciones/${canciones[i].ruta}.ogg" type="audio/ogg" />
            </audio>
          </td>
        </tr> `;
  }
  return { i, x, html };
}
