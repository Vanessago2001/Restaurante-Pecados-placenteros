// ============================
// REFERENCIAS DOM
// ============================
const tablaFactura = document.getElementById("tablaFactura");
const btnAgregarFila = document.getElementById("agregarFila");

const subtotalGeneral = document.getElementById("subtotalGeneral");
const ivaGeneral = document.getElementById("ivaGeneral");
const totalGeneral = document.getElementById("totalGeneral");

let contador = 1;

// ============================
// CREAR OPCIONES DEL MENÚ
// ============================
function crearOpcionesMenu() {
    let opciones = `<option value="">Seleccione producto</option>`;

    for (let categoria in menu) {
        menu[categoria].forEach(producto => {
            opciones += `
                <option value="${producto.id}" data-precio="${producto.precio}">
                    ${producto.nombre} - $${producto.precio}
                </option>
            `;
        });
    }

    return opciones;
}

// ============================
// AGREGAR FILA A LA TABLA
// ============================
function agregarFila() {
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${contador++}</td>

        <td>
            <select class="form-select producto">
                ${crearOpcionesMenu()}
            </select>
        </td>

        <td>
            <input type="number" class="form-control cantidad" value="1" min="1">
        </td>

        <td>
            <input class="form-control valorUnitario" readonly>
        </td>

        <td>
            <input class="form-control iva" readonly>
        </td>

        <td>
            <input class="form-control total" readonly>
        </td>
    `;

    tablaFactura.appendChild(fila);
    calcularTotalesGenerales();
}

// ============================
// CALCULAR FILA + FOOTER
// ============================
tablaFactura.addEventListener("input", (e) => {
    const fila = e.target.closest("tr");
    if (!fila) return;

    const select = fila.querySelector(".producto");
    const cantidadInput = fila.querySelector(".cantidad");
    const valorUnitario = fila.querySelector(".valorUnitario");
    const ivaInput = fila.querySelector(".iva");
    const totalInput = fila.querySelector(".total");

    const precio = Number(select.selectedOptions[0]?.dataset.precio || 0);
    const cantidad = Number(cantidadInput.value || 0);

    const subtotal = precio * cantidad;
    const iva = subtotal * 0.19;
    const total = subtotal + iva;

    valorUnitario.value = precio ? `$${precio.toLocaleString()}` : "";
    ivaInput.value = subtotal ? `$${iva.toLocaleString()}` : "";
    totalInput.value = subtotal ? `$${total.toLocaleString()}` : "";

    calcularTotalesGenerales();
});

// ============================
// TOTALES GENERALES (FOOTER)
// ============================
function calcularTotalesGenerales() {
    let subtotal = 0;
    let iva = 0;
    let total = 0;

    document.querySelectorAll("#tablaFactura tr").forEach(fila => {
        const select = fila.querySelector(".producto");
        const cantidadInput = fila.querySelector(".cantidad");

        const precio = Number(select?.selectedOptions[0]?.dataset.precio || 0);
        const cantidad = Number(cantidadInput?.value || 0);

        const sub = precio * cantidad;
        const ivaFila = sub * 0.19;

        subtotal += sub;
        iva += ivaFila;
        total += sub + ivaFila;
    });

    subtotalGeneral.textContent = `$${subtotal.toLocaleString()}`;
    ivaGeneral.textContent = `$${iva.toLocaleString()}`;
    totalGeneral.textContent = `$${total.toLocaleString()}`;
}

// ============================
// EVENTOS
// ============================
btnAgregarFila.addEventListener("click", agregarFila);

// ============================
// INICIAL
// ============================
agregarFila();
