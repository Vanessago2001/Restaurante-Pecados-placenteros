let mesas = [
    { id: 1, estado: "disponible" },
    { id: 2, estado: "ocupada" },
    { id: 3, estado: "disponible" },
    { id: 4, estado: "disponible" },
    { id: 5, estado: "ocupada" },
    { id: 6, estado: "disponible" },
    { id: 7, estado: "disponible" },
    { id: 8, estado: "disponible" }
];

function mostrarMesas() {
    const contenedor = document.getElementById("mesas");
    contenedor.innerHTML = "";

    mesas.forEach(mesa => {
        contenedor.innerHTML += `
            <div class="col-3 mb-3 text-center">
                <div class="mesa ${mesa.estado}">
                    Mesa ${mesa.id}
                </div>
            </div>
        `;
    });
}

function confirmarReserva() {

    const mesaSeleccionada = parseInt(document.getElementById("mesaSelect").value);

    if (!mesaSeleccionada) {
        alert("Seleccione una mesa");
        return;
    }

    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const personas = document.getElementById("personas").value;
    const telefono = document.getElementById("telefono").value;

    if (!fecha || !hora || !personas || !telefono) {
        alert("Complete todos los campos");
        return;
    }

    document.getElementById("tablaReservas").innerHTML += `
        <tr>
            <td>Mesa ${mesaSeleccionada}</td>
            <td>${fecha}</td>
            <td>${hora}</td>
            <td>${personas}</td>
            <td>${telefono}</td>
        </tr>
    `;

    const mesa = mesas.find(m => m.id === mesaSeleccionada);
    mesa.estado = "ocupada";

    mostrarMesas();

    bootstrap.Modal
        .getInstance(document.getElementById("modalReserva"))
        .hide();
}

function cargarMesasDisponibles() {
    const select = document.getElementById("mesaSelect");
    select.innerHTML = '<option value="">Seleccione una mesa</option>';

    mesas.forEach(mesa => {
        if (mesa.estado === "disponible") {
            select.innerHTML += `
                <option value="${mesa.id}">
                    Mesa ${mesa.id}
                </option>
            `;
        }
    });
}

document.getElementById("modalReserva")
    .addEventListener("shown.bs.modal", cargarMesasDisponibles);

mostrarMesas();
