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
        <td>
            <button class="btn btn-sm btn-warning btn-editar">Editar</button>
            <button class="btn btn-sm btn-dark btn-eliminar">Eliminar</button>
        </td>
    `;

    tabla.appendChild(fila);

    // cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("modalReserva"));
    modal.hide();

    // reset
    form.reset();

    // alert
    alert(" Reserva confirmada");

    tabla.addEventListener("click", function (e) {

    // ELIMINAR
    if (e.target.classList.contains("btn-eliminar")) {
        const fila = e.target.closest("tr");
        fila.remove();
    }

    // EDITAR
    if (e.target.classList.contains("btn-editar")) {
        const fila = e.target.closest("tr");

        const celdas = fila.querySelectorAll("td");

        // pasar datos al formulario
        document.getElementById("cliente").value = celdas[0].textContent;
        document.getElementById("fecha").value = celdas[1].textContent;
        document.getElementById("hora").value = celdas[2].textContent;
        document.getElementById("personas").value = celdas[3].textContent;

        // eliminar fila actual (para reemplazarla)
        fila.remove();

        // abrir modal otra vez
        const modal = new bootstrap.Modal(document.getElementById("modalReserva"));
        modal.show();
    }

});
});
