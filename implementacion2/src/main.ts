// main.ts
import { renderizarTablero } from "./ui";

import { iniciarPartida } from "./motor";

const iniciarBtn = document.getElementById("iniciarBtn") as HTMLButtonElement;

// Event listener para el botón de iniciar partida
iniciarBtn.addEventListener("click", () => {
  iniciarPartida();
  renderizarTablero();
});
