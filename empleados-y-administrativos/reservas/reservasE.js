const form = document.getElementById("formReserva");
const tabla = document.getElementById("tablaReservas");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cliente = document.getElementById("cliente").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const personas = document.getElementById("personas").value;

    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${cliente}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${personas}</td>
    `;

    tabla.appendChild(fila);

    // cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("modalReserva"));
    modal.hide();

    // reset
    form.reset();

    // alert
    alert("✅ Reserva confirmada");
});
