let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const totalCarritoEl = document.getElementById("totalCarrito");

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(producto, opcionesSeleccionadas) {

    const existente = carrito.find(item =>
        item.id === producto.id &&
        JSON.stringify(item.opciones) === JSON.stringify(opcionesSeleccionadas)
    );

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1,
            opciones: opcionesSeleccionadas
        });
    }

    guardarCarrito();

    console.log("Carrito actualizado:", carrito);
}


function carritoMostrar() {
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <p class="text-muted text-center">
                Tu carrito está vacío
            </p>
        `;
        totalCarritoEl.textContent = "$ 0";
        return;
    }

    carrito.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "card mb-3 shadow-sm rounded-4";

        card.innerHTML = `
            <div class="card-body">
                <div class="row align-items-center">

                    <!-- IMAGEN -->
                    <div class="col-3 col-md-2">
                        <img src="${item.imagen}" class="img-fluid rounded">
                    </div>

                    <!-- INFO -->
                    <div class="col-9 col-md-4">
                        <h6 class="fw-bold mb-1">${item.nombre}</h6>
                        ${mostrarOpciones(item.opciones)}
                    </div>

                    <!-- CANTIDAD -->
                    <div class="col-6 col-md-3 text-center">
                        <div class="btn-group">
                            <button class="btn btn-outline-secondary btn-restar">−</button>
                            <span class="btn btn-light disabled">${item.cantidad}</span>
                            <button class="btn btn-outline-secondary btn-sumar">+</button>
                        </div>
                    </div>

                    <!-- PRECIO -->
                    <div class="col-4 col-md-2 fw-bold text-end">
                        $ ${(item.precio * item.cantidad).toLocaleString()}
                    </div>

                    <!-- ELIMINAR -->
                    <div class="col-2 col-md-1 text-end">
                        <button class="btn btn-sm btn-outline-danger btn-eliminar">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>

                </div>
            </div>
        `;

        // EVENTOS
        card.querySelector(".btn-sumar")
            .addEventListener("click", () => cambiarCantidad(index, 1));

        card.querySelector(".btn-restar")
            .addEventListener("click", () => cambiarCantidad(index, -1));

        card.querySelector(".btn-eliminar")
            .addEventListener("click", () => eliminarProducto(index));

        listaCarrito.appendChild(card);
    });

    // SUMA TOTAL
    totalCarritoEl.textContent =
        "$ " + calcularTotal().toLocaleString();
}


function mostrarOpciones(opciones) {
    if (!opciones) return "";

    // MOSTRAR OPCIONES (ayuda)
    if (typeof opciones === "object") {
        return `
            <ul class="small text-muted mb-0">
                ${Object.entries(opciones).map(([key, values]) => `
                    <li>
                        <strong>${key}:</strong> ${values.join(", ")}
                    </li>
                `).join("")}
            </ul>
        `;
    }

    return "";
}

/* CANTIDAD */
function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    guardarCarrito();
    carritoMostrar();
}

/* ELIMINAR */
function eliminarProducto(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    carritoMostrar();
}

/* TOTAL */
function calcularTotal() {
    return carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );
}

/* GUARDAR */
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

/* INICIAR */
document.addEventListener("DOMContentLoaded", carritoMostrar);
