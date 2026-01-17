function crearCardProducto(producto) {
    return `
    <div class="col-12 col-lg-6">
        <div class="card border-0 shadow-sm rounded-4 p-3 h-100 producto-card"
            data-id="${producto.id}">

            <div class="row g-0 align-items-center">

                <!-- Imagen -->
                <div class="col-auto">
                    <img src="../${producto.imagen}"
                        class="img-fluid"
                        style="width:120px; object-fit:contain;"
                        alt="${producto.nombre}">
                </div>

                <div class="col ps-3">
                    <p class="fw-bold mb-1">$ ${producto.precio.toLocaleString()}</p>

                    <h6 class="fw-bold text-uppercase mb-1">
                        ${producto.nombre}
                    </h6>

                    ${producto.tipo ? `<small class="text-muted">${producto.tipo}</small>` : ""}

                    <p class="text-muted small mt-2 mb-3">
                        ${producto.descripcion}
                    </p>

                    <button class="btn btn-dark rounded-pill px-4"
                        data-id="${producto.id}">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    </div>`;
}


function renderCategoria(lista, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        contenedor.innerHTML += crearCardProducto(producto);
    });
}


document.addEventListener("DOMContentLoaded", () => {

    renderCategoria(menu.hamburguesas, "contenedor-hamburguesas");
    renderCategoria(menu.perros_calientes, "contenedor-perros");
    renderCategoria(menu.pizzas, "contenedor-pizzas");
    renderCategoria(menu.bebidas, "contenedor-bebidas");
    renderCategoria(menu.postres, "contenedor-postres");
    renderCategoria(menu.picadas, "contenedor-picadas");
    renderCategoria(menu.carnes, "contenedor-carnes");
    renderCategoria(menu.salchipapas, "contenedor-salchipapas");

});


function buscarProductoPorId(id) {
    const todasLasCategorias = Object.values(menu).flat();
    return todasLasCategorias.find(p => p.id == id);
}

function abrirModalProducto(producto) {

    // TITULO
    document.getElementById("modalProductoTitulo").textContent = producto.nombre;

    // IMAGEN
    document.getElementById("modalProductoImagen").src = "../" + producto.imagen;

    // PRECIO
    document.getElementById("modalProductoPrecio").textContent =
        "$ " + producto.precio.toLocaleString();

    // DESCRIPCION
    document.getElementById("modalProductoDescripcion").textContent =
        producto.descripcion;


    // OPCIONES
    const contenedorOpciones = document.getElementById("modalOpciones");
    contenedorOpciones.innerHTML = "";

    // CERVEZA
    if (producto.opciones) {
        contenedorOpciones.innerHTML += crearSeccionOpciones(
            "Elige una opción",
            producto.opciones,
            "radio"
        );
    }

    // TOPPINGS
    if (producto.toppings) {
        contenedorOpciones.innerHTML += crearSeccionOpciones(
            "Toppings",
            producto.toppings,
            "checkbox"
        );
    }

    // SALSAS
    if (producto.salsas) {
        contenedorOpciones.innerHTML += crearSeccionOpciones(
            "Salsas",
            producto.salsas,
            "checkbox"
        );
    }

    // ACOMPAÑANTES
    if (producto.acompanantes) {
        contenedorOpciones.innerHTML += crearSeccionOpciones(
            "Acompañantes",
            producto.acompanantes,
            "radio"
        );
    }

    // ABRIR MODAL BOOTSTRAP
    const modal = new bootstrap.Modal(
        document.getElementById("modalProducto")
    );

    modal.show();
}


document.addEventListener("click", function (e) {

    const card = e.target.closest(".producto-card");
    if (!card) return;

    // EVITA BOTON "Agregar" ABRA EL MODAL
    if (e.target.tagName === "BUTTON") return;

    const idProducto = card.dataset.id;

    const producto = buscarProductoPorId(idProducto);

    abrirModalProducto(producto);
});



function crearSeccionOpciones(titulo, opciones, tipo = "checkbox") {
    return `
        <div class="mb-4">
            <h6 class="fw-bold mb-3">${titulo}</h6>

            <div class="d-grid gap-2">
                ${opciones.map((opcion, index) => `
                    <label class="d-flex align-items-center justify-content-between border rounded-3 px-3 py-2">
                        <span>${opcion}</span>
                        <input 
                            class="form-check-input ms-3"
                            type="${tipo}"
                            name="${titulo}"
                            value="${opcion}">
                    </label>
                `).join("")}
            </div>
        </div>
    `;
};