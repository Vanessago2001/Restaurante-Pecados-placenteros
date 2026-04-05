document.addEventListener("DOMContentLoaded", function () {
    const pedidoCliente = document.getElementById("pedidoCliente");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        pedidoCliente.innerHTML = `
            <p class="text-muted">No hay pedidos en el carrito</p>
        `;
        return;
    }

    let html = `
        <ul class="list-group">
    `;

    carrito.forEach(item => {
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>${item.nombre}</strong><br>
                    <small>Cantidad: ${item.cantidad}</small>
                </div>
                <span>$ ${(item.precio * item.cantidad).toLocaleString()}</span>
            </li>
        `;
    });

    html += `</ul>`;

    pedidoCliente.innerHTML = html;
});