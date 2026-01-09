let empleados = [
    { nombre: "Sergio Giraldo", cc: "20532338", cargo: "Mesero", turno: null },
    { nombre: "Maria López", cc: "1071643564", cargo: "Mesero", turno: null },
    { nombre: "Andrea López", cc: "10234567", cargo: "Cajera", turno: null },
    { nombre: "Juan Camilo Pérez", cc: "98765432", cargo: "Cocinero", turno: null },
    { nombre: "Maria Fernanda Ruiz", cc: "45678901", cargo: "Administradora", turno: null }
];

let turnosTemporales = [];

const lista = document.getElementById("listaEmpleados");
const modal = new bootstrap.Modal(document.getElementById("modalTurno"));

function mostrarEmpleados(listaMostrar) {
    let contenido = "";

    listaMostrar.forEach(emp => {
        contenido += `
            <div class="card-empleados mb-3">
                <div class="d-flex align-items-center">
                    <div class="foto me-3"></div>

                    <div class="flex-grow-1">
                        <small><b>Nombre:</b> ${emp.nombre}</small><br>
                        <small><b>Cargo:</b> ${emp.cargo}</small><br>
                        <small><b>CC:</b> ${emp.cc}</small>
                    </div>

                    <button class="btn-agregar"
                        onclick="abrirModal('${emp.nombre}')">
                        + AGREGAR
                    </button>
                </div>

                ${
                    emp.turno
                        ? `<div class="mt-2 ps-2 fw-bold">
                            Turno: ${emp.turno.fecha} - ${emp.turno.hora}
                           </div>`
                        : ""
                }
            </div>
        `;
    });

    lista.innerHTML = contenido;
}

function abrirModal(nombre) {
    document.getElementById("empleadoSeleccionado").value = nombre;
    document.getElementById("fechaTurno").value = "";
    document.getElementById("horaTurno").value = "";
    modal.show();
}

function confirmarTurno() {
    const nombre = document.getElementById("empleadoSeleccionado").value;
    const fecha = document.getElementById("fechaTurno").value;
    const hora = document.getElementById("horaTurno").value;

    if (!fecha || !hora) {
        alert("Completa fecha y hora");
        return;
    }
    const emp = empleados.find(e => e.nombre === nombre);
    if (emp) {
        emp.turno = { fecha, hora };
    }

    mostrarEmpleados(empleados);
}


function guardarCambios() {
    turnosTemporales.forEach(t => {
        const emp = empleados.find(e => e.nombre === t.nombre);
        if (emp) {
            emp.turno = {
                fecha: t.fecha,
                hora: t.hora
            };
        }
    });

    turnosTemporales = [];
    mostrarEmpleados(empleados);
}

function filtrarTurnos() {
    let nombre = document.getElementById("filtroNombre").value.toLowerCase();
    let cargo = document.getElementById("filtroCargo").value.toLowerCase();

    let filtrados = empleados.filter(emp =>
        emp.nombre.toLowerCase().includes(nombre) &&
        emp.cargo.toLowerCase().includes(cargo)
    );

    mostrarEmpleados(filtrados);
}

mostrarEmpleados(empleados);
