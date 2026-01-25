let contador = 1;

// ============================
// OPCIONES DEL INVENTARIO
// ============================
function crearOpcionesInventario() {
  let opciones = `<option value="">Seleccione ingrediente</option>`;

  inventario.forEach((item, index) => {
    opciones += `
      <option value="${index}">
        ${item.nombre} (${item.unidad})
      </option>
    `;
  });

  return opciones;
}

// ============================
// REFERENCIAS
// ============================
const tablaFactura = document.getElementById("tablaFacturadeCompra");
const btnAgregarFila = document.getElementById("agregarFila");

const subtotalGeneral = document.getElementById("subtotalGeneral");
const ivaGeneral = document.getElementById("ivaGeneral");
const totalGeneral = document.getElementById("totalGeneral");

// ============================
// AGREGAR FILA
// ============================
function agregarFila() {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${contador++}</td>

    <td>
      <select class="form-select ingrediente">
        ${crearOpcionesInventario()}
      </select>
    </td>

    <td>
      <input type="number" class="form-control cantidadCompra" min="1">
    </td>

    <td>
      <input type="number" class="form-control valorUnitario">
    </td>

    <td>
      <input class="form-control iva" readonly>
    </td>

    <td>
      <input class="form-control total" readonly>
    </td>

    <td>
      <input class="form-control promedio" readonly>
    </td>
  `;

  tablaFactura.appendChild(fila);
}

// ============================
// EVENTO INPUT TABLA
// ============================
tablaFactura.addEventListener("input", (e) => {
  const fila = e.target.closest("tr");
  if (!fila) return;

  const select = fila.querySelector(".ingrediente");
  if (select.value === "") return;

  const cantidad = Number(fila.querySelector(".cantidadCompra").value || 0);
  const valor = Number(fila.querySelector(".valorUnitario").value || 0);

  const subtotal = cantidad * valor;
  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  fila.querySelector(".iva").value = subtotal ? `$${iva.toLocaleString()}` : "";
  fila.querySelector(".total").value = subtotal ? `$${total.toLocaleString()}` : "";

  calcularTotalesGenerales();
});

// es el momento en el que se actualiza el promedio

tablaFactura.addEventListener("change", (e) => {
  const fila = e.target.closest("tr");
  if (!fila) return;

  const select = fila.querySelector(".ingrediente");
  if (select.value === "") return;

  const ingrediente = inventario[select.value];

  const cantidad = Number(fila.querySelector(".cantidadCompra").value || 0);
  const valor = Number(fila.querySelector(".valorUnitario").value || 0);

  if (cantidad <= 0 || valor <= 0) return;

  actualizarInventario(ingrediente, cantidad, valor);

  fila.querySelector(".promedio").value =
    `$${ingrediente.costoPromedio.toFixed(2)}`;
});




// ============================
// ACTUALIZAR COSTO PROMEDIO
// ============================
function actualizarInventario(ingrediente, cantidadNueva, costoUnitario) {
  const stockAnterior = ingrediente.cantidad;
  const costoAnterior = ingrediente.costoPromedio;

  const costoTotalAnterior = stockAnterior * costoAnterior;
  const costoCompra = cantidadNueva * costoUnitario;

  const nuevoStock = stockAnterior + cantidadNueva;

  ingrediente.costoPromedio =
    (costoTotalAnterior + costoCompra) / nuevoStock;

  ingrediente.cantidad = nuevoStock;
}


// ============================
// TOTALES GENERALES
// ============================
function calcularTotalesGenerales() {
  let subtotal = 0;
  let iva = 0;
  let total = 0;

  document.querySelectorAll("#tablaFacturadeCompra tr").forEach(fila => {
    const cantidad = Number(fila.querySelector(".cantidadCompra")?.value || 0);
    const valor = Number(fila.querySelector(".valorUnitario")?.value || 0);

    const sub = cantidad * valor;
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
