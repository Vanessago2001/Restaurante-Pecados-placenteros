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
document.addEventListener("DOMContentLoaded", function () {
    const nombre = document.getElementById("nombreCliente");
    const correo = document.getElementById("correoCliente");
    const telefono = document.getElementById("telefonoCliente");
    const mesa = document.getElementById("mesaCliente");
    const btnEditar = document.getElementById("btnEditar");

    let editando = false;

    btnEditar.addEventListener("click", function () {
        editando = !editando;

        nombre.disabled = !editando;
        correo.disabled = !editando;
        telefono.disabled = !editando;
        mesa.disabled = !editando;

        if (editando) {
            btnEditar.textContent = "Guardar cambios";
            btnEditar.classList.remove("btn-outline-primary");
            btnEditar.classList.add("btn-success");
        } else {
            const cliente = {
                nombre: nombre.value,
                correo: correo.value,
                telefono: telefono.value,
                mesa: mesa.value
            };

            localStorage.setItem("clientePerfil", JSON.stringify(cliente));

            btnEditar.textContent = "Editar información";
            btnEditar.classList.remove("btn-success");
            btnEditar.classList.add("btn-outline-primary");

            alert("Información actualizada correctamente ✅");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const datosGuardados = JSON.parse(localStorage.getItem("clientePerfil"));

    if (datosGuardados) {
        document.getElementById("nombreCliente").value = datosGuardados.nombre;
        document.getElementById("correoCliente").value = datosGuardados.correo;
        document.getElementById("telefonoCliente").value = datosGuardados.telefono;
        document.getElementById("mesaCliente").value = datosGuardados.mesa;
    }
});