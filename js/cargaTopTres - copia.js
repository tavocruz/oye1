$(document).ready(function () {
    //Carga los datos que estan en datos.json usando AJAX
    $.ajax({
      url: "datos.json"
    }).done(function(respuesta) {
      canciones = respuesta.canciones;
      canciones.sort(function(a, b){return b.reproducciones - a.reproducciones});
      var x = 1;
      var i, html = ""
      var top = ["Uno", "Dos", "Tres"];
      for (i in canciones) {
       html += `
       <tr>
         <td>${x++}</td>
         <td>${canciones[i].nombre}</td>
         <td>
           <audio id="audioTop${top[i]}" controls>
             <source src="./canciones/${canciones[i].ruta}" type="audio/mpeg" />
             <source src="./canciones/ocho.ogg" type="audio/ogg" />
           </audio>
         </td>
       </tr> `
       if (x === 4) {break} 
       // esto hace que solo se muestren las tres primeras sin esta se muestra todo no es eficiente si hay miles de items
       // pero sirve para mostrar todas las canciones en la pagina de canciones
      }

      ({ i, x, html } = muestraTopTres(i, x, html, top));
    //Modifica el DOM agregando el html generado dentro del cuerpo de la tabla con id=topTres
    document.getElementById("topTres").innerHTML = html
    });
  });

function muestraTopTres(i, x, html, top) {
  for (i = 0, x = 0; i < 3; i++) {
    html += `
        <tr>
          <td>${x++}</td>
          <td>${canciones[i].nombre}</td>
          <td>
            <audio id="audioTop${top[i]}" controls>
              <source src="./canciones/${canciones[i].ruta}" type="audio/mpeg" />
              <source src="./canciones/ocho.ogg" type="audio/ogg" />
            </audio>
          </td>
        </tr> `;
  }
  return { i, x, html };
}
