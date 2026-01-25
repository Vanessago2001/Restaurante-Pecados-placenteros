let terceros = [
    { nombre: 'Mario Alberto Casas', nit: 10584632 },
    { nombre: 'Cristhian Andres Mendoza', nit: 32005868 }
];

const selectNombre = document.getElementById("nombretercero");
const selectNit = document.getElementById("nittercero");

/* Cargar lista */
function cargarTerceros() {
    selectNombre.innerHTML = `<option value="">Seleccione un tercero</option>`;
    selectNit.innerHTML = `<option value="">Seleccione NIT</option>`;

    terceros.forEach((t, index) => {
        selectNombre.innerHTML += `<option value="${index}">${t.nombre}</option>`;
        selectNit.innerHTML += `<option value="${index}">${t.nit}</option>`;
    });

    /* opción especial */
    selectNombre.innerHTML += `<option value="nuevo"> + Agregar nuevo tercero</option>`;
    selectNit.innerHTML += `<option value="nuevo"> + Agregar nuevo tercero</option>`;

}

/* Sincronizar */
selectNombre.addEventListener("change", () => {
    if (selectNombre.value === "nuevo") {
        new bootstrap.Modal(document.getElementById("modalTercero")).show();
        selectNombre.value = "";
        return;
    }
    selectNit.value = selectNombre.value;
});

selectNit.addEventListener("change", () => {
    selectNombre.value = selectNit.value;
});

selectNit.addEventListener("change", () => {
    if (selectNit.value === "nuevo") {
        new bootstrap.Modal(document.getElementById("modalTercero")).show();
        selectNit.value = "";
        return;
    }
    selectNombre.value = selectNit.value;
});

selectNit.addEventListener("change", () => {
    selectNit.value = selectNombre.value;
});

/* Agregar tercero solo si NO existe */
function agregarTercero() {
    const nombre = document.getElementById("nuevoNombre").value.trim();
    const nit = document.getElementById("nuevoNit").value.trim();

    const existe = terceros.some(
        t => t.nombre.toLowerCase() === nombre.toLowerCase() || t.nit == nit
    );

    if (existe) {
        alert("El tercero ya existe");
        return;
    }

    terceros.push({ nombre, nit });
    cargarTerceros();

    document.getElementById("nuevoNombre").value = "";
    document.getElementById("nuevoNit").value = "";

    bootstrap.Modal.getInstance(
        document.getElementById("modalTercero")
    ).hide();
}


cargarTerceros();

