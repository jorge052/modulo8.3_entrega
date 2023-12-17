document.addEventListener("DOMContentLoaded", function () {
  // Obtiene elementos HTML
  const cartaElement1 = document.getElementById("carta1");
  const imagenCartaElement1 = document.getElementById("imagenCarta1");
  const cartaElement2 = document.getElementById("carta2");
  const imagenCartaElement2 = document.getElementById("imagenCarta2");

  if (
    cartaElement1 instanceof HTMLDivElement &&
    imagenCartaElement1 instanceof HTMLImageElement &&
    cartaElement2 instanceof HTMLDivElement &&
    imagenCartaElement2 instanceof HTMLImageElement
  ) {
    // Variables para rastrear el estado de las cartas (anverso o reverso)
    let cartaVolteada1 = false;
    let cartaVolteada2 = false;

    // Funcion para manejar el evento de clic en una carta
    const manejarClic = (
      _cartaElement: HTMLDivElement,
      imagenCartaElement: HTMLImageElement,
      cartaVolteada: boolean
    ) => {
      if (cartaVolteada) {
        // Si la carta esta volteada, muestra el anverso
        imagenCartaElement.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
      } else {
        // Si la carta esta en el anverso, muestra el reverso
        imagenCartaElement.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png";
      }

      // Cambia el estado de la carta
      return !cartaVolteada;
    };

    // Agregar eventos de clic a las cartas
    cartaElement1.addEventListener("click", function () {
      cartaVolteada1 = manejarClic(
        cartaElement1,
        imagenCartaElement1,
        cartaVolteada1
      );
    });

    cartaElement2.addEventListener("click", function () {
      cartaVolteada2 = manejarClic(
        cartaElement2,
        imagenCartaElement2,
        cartaVolteada2
      );
    });
  }
});
