
// ======================================
// PERSONALIZA TU REGALO AQUÍ ❤️
// ======================================

const CONFIG = {
  nombre: "Mi amor",

  carta: `Feliz cumpleaños, mi Lola ❤️

Hoy quiero recordarte lo importante que eres para mí.
Gracias por cada sonrisa, cada abrazo y cada momento
que hemos compartido.

Me encanta tenerte en mi vida y quiero que este nuevo
año esté lleno de sueños cumplidos, aventuras y mucha
felicidad.

No sé qué nos traerá el futuro, pero sí sé que quiero
seguir creando recuerdos bonitos contigo.

Espero que hoy te sientas tan amada y especial como
realmente eres para mí.

Te amo con todo mi corazón. ❤️`,

  mensajeFinal: `Eres mi persona favorita y mi capítulo favorito.
¡Feliz cumpleaños, mi amor! ❤️`,

  corazones: true
};

// ======================================
// ELEMENTOS DE LA PÁGINA
// ======================================

const nombrePortada = document.getElementById("nombre-portada");
const botonRegalo = document.getElementById("abrir-regalo");
const contenido = document.getElementById("contenido");

const botonCarta = document.getElementById("abrir-carta");
const carta = document.getElementById("carta");
const textoCarta = document.getElementById("texto-carta");

const botonSorpresa = document.getElementById("sorpresa");
const mensajeFinal = document.getElementById("mensaje-final");
const confeti = document.getElementById("confeti");

const contenedorCorazones = document.getElementById("hearts");

// ======================================
// COLOCAR LOS MENSAJES PERSONALIZADOS
// ======================================

nombrePortada.textContent = CONFIG.nombre;
textoCarta.textContent = CONFIG.carta;

// ======================================
// ABRIR EL REGALO
// ======================================

botonRegalo.addEventListener("click", () => {
  contenido.classList.remove("hidden");

  contenido.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  botonRegalo.textContent = "💜 ¡Disfruta tu regalo!";
});

// ======================================
// ABRIR Y CERRAR LA CARTA
// ======================================

botonCarta.addEventListener("click", () => {
  const estaCerrada = carta.classList.contains("hidden");

  carta.classList.toggle("hidden");

  if (estaCerrada) {
    botonCarta.textContent = "Cerrar mi carta 💌";

    setTimeout(() => {
      carta.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  } else {
    botonCarta.textContent = "Abrir mi carta 💌";
  }
});

// ======================================
// SORPRESA FINAL
// ======================================

botonSorpresa.addEventListener("click", () => {
  mensajeFinal.classList.remove("hidden");

  // Mostrar el mensaje personalizado.
  const parrafo = mensajeFinal.querySelector("p");
  parrafo.textContent = CONFIG.mensajeFinal;

  // Celebración de corazones y estrellas.
  confeti.textContent = Array.from(
    { length: 18 },
    (_, i) => ["❤️", "💜", "✨", "💖", "🎉"][i % 5]
  ).join(" ");

  botonSorpresa.textContent = "¡Sorpresa desbloqueada! ❤️";
  botonSorpresa.disabled = true;

  mensajeFinal.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// ======================================
// CORAZONES FLOTANTES
// ======================================

function crearCorazon() {
  if (!CONFIG.corazones) return;

  const corazon = document.createElement("span");

  corazon.className = "heart";
  corazon.textContent = ["❤️", "💗", "💜", "💕"][
    Math.floor(Math.random() * 4)
  ];

  corazon.style.left = Math.random() * 100 + "%";
  corazon.style.fontSize = (14 + Math.random() * 18) + "px";
  corazon.style.animationDuration = (6 + Math.random() * 6) + "s";

  contenedorCorazones.appendChild(corazon);

  // Eliminar el corazón al terminar la animación.
  corazon.addEventListener("animationend", () => {
    corazon.remove();
  });
}

// Crear corazones periódicamente.
if (CONFIG.corazones) {
  setInterval(crearCorazon, 800);
}
