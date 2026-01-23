
let empleados = [
    { nombre: "Sergio Giraldo", cc: "20532338", cargo: "Mesero", estado: "Activo" },
    { nombre: "Maria López", cc: "1071643564", cargo: "Mesero", estado: "Vacaciones" },
    { nombre: "Andrea López", cc: "10234567", cargo: "Cajera", estado: "Activo" },
    { nombre: "Juan Camilo Pérez", cc: "98765432", cargo: "Cocinero", estado: "Retirado" },
    { nombre: "Maria Fernanda Ruiz", cc: "45678901", cargo: "Administradora", estado: "Activo" },
    { nombre: "Carlos Andrés Gómez", cc: "33445566", cargo: "Bartender", estado: "Vacaciones" },
    { nombre: "Laura Sofía Martínez", cc: "77889900", cargo: "Auxiliar de cocina", estado: "Activo" }
];

const lista = document.getElementById("listaEmpleados");

function filtrar(estado) {
    lista.innerHTML = "";

    const filtrados = empleados.filter(emp => emp.estado === estado);

    filtrados.forEach(emp => {
        const div = document.createElement("div");
        div.classList.add("empleado");

        div.innerHTML = `
    <div>
        <span class="nombre">${emp.nombre}</span><br>
            <small>${emp.cargo}</small>
    </div>
    <span>CC: ${emp.cc}</span>
    `;

        lista.appendChild(div);
    });
}

/* filtrar("Activo"); */

