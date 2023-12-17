interface InfoCarta {
  idFoto: number;
  imagen: string;
}

// Array de cartas con información
const cartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  // Agregar mas cartas aqui
];

document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el elemento contenedor donde se agregarán las cartas
  const contenedorCartas = document.getElementById("contenedor-cartas");

  if (contenedorCartas instanceof HTMLDivElement) {
    // Itera sobre el array de cartas y crea un div para cada una
    cartas.forEach((carta) => {
      const divCarta = document.createElement("div");
      divCarta.classList.add("carta");

      // Establece un atributo de datos para el indice de la carta
      divCarta.dataset.indiceId = carta.idFoto.toString();

      // Agrega un escuchador de clic a la carta
      divCarta.addEventListener("click", function () {
        // Obtiene el indice de la carta haciendo referencia al atributo de datos
        const indiceId = divCarta.dataset.indiceId;
        if (indiceId !== undefined) {
          const id = parseInt(indiceId);

          // Aqui puedes usar el indice para acceder a la informacion de la carta
          const cartaSeleccionada = cartas.find((carta) => carta.idFoto === id);

          if (cartaSeleccionada) {
            console.log(
              `Carta seleccionada - ID: ${cartaSeleccionada.idFoto}, Imagen: ${cartaSeleccionada.imagen}`
            );
            // Cambia la imagen dentro del div segun  la carta seleccionada
            divCarta.innerHTML = `<img src="${cartaSeleccionada.imagen}" alt="Carta" />`;
          }
        }
      });

      contenedorCartas.appendChild(divCarta);
    });
  }
});
