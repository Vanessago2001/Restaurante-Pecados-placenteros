const contenedor = document.getElementById("contenedorHamburguesas");

menu.hamburguesas.forEach(h => {
  const card = document.createElement("div");
  card.className = "col-6 col-md-4";

  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${h.imagen}" class="card-img-top" style="height:200px; object-fit:cover">
      <div class="card-body text-center">
        <h5 class="fw-bold">${h.nombre}</h5>
        <p class="small">${h.tipo}</p>
        <p class="fw-bold text-success">$${h.precio.toLocaleString()}</p>
      </div>
    </div>
  `;

  contenedor.appendChild(card);
});
