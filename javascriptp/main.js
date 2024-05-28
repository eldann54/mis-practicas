//alerta
//alert("Dame dinero amigo");

// Boton login

const galeriaSalaDeJuegos = [
  {
    imagen: `Assassin's_Creed.jpg`,
    titulo: 'Assassin Creed',
    url: './RESEÑA DE ASASSIS CREED.html',
  },
  {
    imagen: `battlefield.jpg`,
    titulo: 'BattleField',
    url: './RESEÑA DE ASASSIS CREED.html',
  },
];

(function () {
  const container = document.getElementById('containerSalaJuegos'); // Obtiene el contenedor donde se insertará el contenido
  let contenido = ``; // Inicializa una cadena vacía para el contenido HTML

  galeriaSalaDeJuegos.forEach((item) => {
    const data = btoa(JSON.stringify(item)); // Codifica el objeto item a Base64
    console.log(data); // Imprime el string codificado en la consola
    contenido += `
      <div class="contenedor">
          <img src="../IMAGENES/${item.imagen}" alt="" />
          <div class="descripcion-juego">
          <h3 onclick="getItem('${data}')">${item.titulo}</h3>
          </div>
      </div>
      `;
  });
  container.innerHTML = contenido; // Inserta el contenido HTML generado en el contenedor
})();

function getItem(item) {
  const objeto = JSON.parse(JSON.stringify(atob(item)));
  console.log(objeto);
}
