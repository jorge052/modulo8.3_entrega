document.addEventListener("DOMContentLoaded", function () {
  // Obtiene elementos HTML
  const cartaElement = document.getElementById("carta");
  const imagenCartaElement = document.getElementById("imagenCarta");

  // Variable para rastrear el estado de la carta (anverso o reverso)

  if (
    cartaElement instanceof HTMLDivElement &&
    imagenCartaElement instanceof HTMLImageElement
  ) {
    // Variable para rastrear el estado de la carta (anverso o reverso)
    let cartaVolteada = false;

    // Agregar un evento de clic a la carta
    cartaElement.addEventListener("click", function () {
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
      cartaVolteada = !cartaVolteada;
    });
  }
});
