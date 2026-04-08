const SHEET_URL = "https://script.google.com/macros/s/AKfycbwCVejhP0AQjXigvkVtplNJJRImCAwrBpqUfekzEBam91oXJmeJy58nAkwm1s4zp5kN/exec";

function mostrarToast(msg) {
  document.getElementById("toast").innerText = msg;
}

function enviarCita() {

  var nombre = document.getElementById("f-nombre").value.trim();
  var telefono = document.getElementById("f-telefono").value.trim();
  var mascota = document.getElementById("f-mascota").value.trim();
  var especie = document.getElementById("f-especie").value.trim();
  var servicio = document.getElementById("f-servicio").value.trim();
  var mensaje = document.getElementById("f-mensaje").value.trim();

  if (!nombre || !telefono || !mascota) {
    mostrarToast("Completa los datos");
    return;
  }

  var mensaje = `Hola, soy ${nombre}. Quiero agendar una cita para ${mascota}.`;

  fetch(SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ nombre, telefono, mascota })
  });

  window.open("https://wa.me/573000000000?text=" + encodeURIComponent(mensaje), "_blank");

  mostrarToast("Redirigiendo a WhatsApp...");
}

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.href.includes(".html")) {
      document.body.style.opacity = 0.5;
    }
  });
});