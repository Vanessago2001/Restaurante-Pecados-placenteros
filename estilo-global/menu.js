document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.getElementById("btnMenu");
  const sidebar = document.getElementById("sidebar");

  if (btnMenu && sidebar) {
    btnMenu.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});

let inventario = [
  // Panes y masas
  { nombre: "Pan artesanal", cantidad: 40, unidad: "unid", costoPromedio: 0 },
  { nombre: "Pan tostado", cantidad: 40, unidad: "unid", costoPromedio: 0 },
  { nombre: "Pan suave", cantidad: 60, unidad: "unid", costoPromedio: 0 },
  { nombre: "Masa de pizza", cantidad: 30, unidad: "unid" , costoPromedio: 0},

  // Carnes y proteínas
  { nombre: "Carne de res", cantidad: 8000, unidad: "g", costoPromedio: 0 },
  { nombre: "Carne premium", cantidad: 5000, unidad: "g" , costoPromedio: 0},
  { nombre: "Carne desmechada", cantidad: 4000, unidad: "g" , costoPromedio: 0},
  { nombre: "Carnes mixtas", cantidad: 6000, unidad: "g" , costoPromedio: 0},
  { nombre: "Pollo", cantidad: 5000, unidad: "g" },
  { nombre: "Salchicha", cantidad: 100, unidad: "unid" , costoPromedio: 0},
  { nombre: "Salchichas mixtas", cantidad: 120, unidad: "unid", costoPromedio: 0 },
  { nombre: "Chorizo", cantidad: 60, unidad: "unid", costoPromedio: 0 },
  { nombre: "Jamón", cantidad: 3000, unidad: "g" , costoPromedio: 0},
  { nombre: "Tocineta", cantidad: 3000, unidad: "g" , costoPromedio: 0},
  { nombre: "Camarón apanado", cantidad: 50, unidad: "unid" , costoPromedio: 0},

  // Quesos y lácteos
  { nombre: "Queso", cantidad: 5000, unidad: "g" , costoPromedio: 0},
  { nombre: "Queso fundido", cantidad: 4000, unidad: "g", costoPromedio: 0 },
  { nombre: "Queso derretido", cantidad: 3000, unidad: "g", costoPromedio: 0 },
  { nombre: "Queso rallado", cantidad: 3000, unidad: "g", costoPromedio: 0 },
  { nombre: "Queso artesanal", cantidad: 2000, unidad: "g", costoPromedio: 0 },
  { nombre: "Queso mozzarella", cantidad: 4000, unidad: "g", costoPromedio: 0 },
  { nombre: "Queso doble", cantidad: 2500, unidad: "g", costoPromedio: 0 },
  { nombre: "Crema", cantidad: 2000, unidad: "ml", costoPromedio: 0 },

  // Vegetales y frutas
  { nombre: "Lechuga", cantidad: 2000, unidad: "g" , costoPromedio: 0},
  { nombre: "Tomate", cantidad: 2500, unidad: "g", costoPromedio: 0 },
  { nombre: "Cebolla", cantidad: 2000, unidad: "g" , costoPromedio: 0},
  { nombre: "Cebolla morada", cantidad: 1500, unidad: "g" , costoPromedio: 0},
  { nombre: "Cebolla caramelizada", cantidad: 1500, unidad: "g" , costoPromedio: 0},
  { nombre: "Cebolla crispy", cantidad: 1200, unidad: "g", costoPromedio: 0 },
  { nombre: "Maíz tierno", cantidad: 3000, unidad: "g", costoPromedio: 0 },
  { nombre: "Pepino", cantidad: 1200, unidad: "g" , costoPromedio: 0},
  { nombre: "Limón", cantidad: 100, unidad: "unid" , costoPromedio: 0},
  { nombre: "Fresa", cantidad: 2000, unidad: "g", costoPromedio: 0 },
  { nombre: "Mango", cantidad: 2500, unidad: "g" , costoPromedio: 0},
  { nombre: "Mango biche", cantidad: 2000, unidad: "g", costoPromedio: 0 },
  { nombre: "Maracuyá", cantidad: 2000, unidad: "g", costoPromedio: 0 },
  { nombre: "Piña", cantidad: 2500, unidad: "g" , costoPromedio: 0},
  { nombre: "Naranja", cantidad: 2000, unidad: "g" , costoPromedio: 0},
  { nombre: "Arándanos", cantidad: 1500, unidad: "g", costoPromedio: 0 },
  { nombre: "Manzana", cantidad: 2000, unidad: "g" , costoPromedio: 0},

  // Papas y acompañantes
  { nombre: "Papas fritas", cantidad: 8000, unidad: "g", costoPromedio: 0 },
  { nombre: "Papas a la francesa", cantidad: 8000, unidad: "g" , costoPromedio: 0},
  { nombre: "Papas en cuadritos", cantidad: 6000, unidad: "g", costoPromedio: 0 },
  { nombre: "Papitas", cantidad: 4000, unidad: "g" , costoPromedio: 0},
  { nombre: "Papas fosforito", cantidad: 3000, unidad: "g" , costoPromedio: 0},
  { nombre: "Yuca frita", cantidad: 5000, unidad: "g", costoPromedio: 0 },
  { nombre: "Patacón", cantidad: 60, unidad: "unid", costoPromedio: 0 },
  { nombre: "Tostones", cantidad: 80, unidad: "unid" , costoPromedio: 0},
  { nombre: "Arepa", cantidad: 60, unidad: "unid", costoPromedio: 0 },
  { nombre: "Nachos", cantidad: 3000, unidad: "g", costoPromedio: 0 },
  { nombre: "Plátano", cantidad: 3000, unidad: "g", costoPromedio: 0 },
  { nombre: "Plátano maduro", cantidad: 3000, unidad: "g", costoPromedio: 0 },

  // Salsas y condimentos
  { nombre: "Salsa de la casa", cantidad: 3000, unidad: "ml", costoPromedio: 0 },
  { nombre: "Salsa especial", cantidad: 3000, unidad: "ml" , costoPromedio: 0},
  { nombre: "Salsa secreta", cantidad: 2000, unidad: "ml" , costoPromedio: 0},
  { nombre: "Salsa BBQ ahumada", cantidad: 2000, unidad: "ml", costoPromedio: 0 },
  { nombre: "Salsa ranch", cantidad: 2000, unidad: "ml", costoPromedio: 0 },
  { nombre: "Salsa inglesa", cantidad: 1500, unidad: "ml" , costoPromedio: 0},
  { nombre: "Salsa negra", cantidad: 1500, unidad: "ml" , costoPromedio: 0},
  { nombre: "Mostaza dulce", cantidad: 1500, unidad: "ml" , costoPromedio: 0},
  { nombre: "Mayonesa", cantidad: 3000, unidad: "ml" , costoPromedio: 0},
  { nombre: "Salsa rosada", cantidad: 3000, unidad: "ml" , costoPromedio: 0},
  { nombre: "Salsa tártara", cantidad: 2500, unidad: "ml", costoPromedio: 0 },
  { nombre: "Salsa de ajo", cantidad: 2000, unidad: "ml", costoPromedio: 0 },
  { nombre: "Salsa picante", cantidad: 1500, unidad: "ml" , costoPromedio: 0},
  { nombre: "Picante", cantidad: 1000, unidad: "ml" , costoPromedio: 0},
  { nombre: "Sal", cantidad: 5000, unidad: "g" , costoPromedio: 0},
  { nombre: "Pimienta", cantidad: 2000, unidad: "g", costoPromedio: 0 },
  { nombre: "Chamoy", cantidad: 1500, unidad: "ml" , costoPromedio: 0},
  { nombre: "Tajín", cantidad: 1500, unidad: "g" , costoPromedio: 0},

  // Bebidas
  { nombre: "Ron blanco", cantidad: 3000, unidad: "ml", costoPromedio: 0 },
  { nombre: "Vodka", cantidad: 3000, unidad: "ml" , costoPromedio: 0},
  { nombre: "Tequila", cantidad: 3000, unidad: "ml" , costoPromedio: 0},
  { nombre: "Cerveza", cantidad: 200, unidad: "unid" , costoPromedio: 0},
  { nombre: "Agua con gas", cantidad: 100, unidad: "unid", costoPromedio: 0 },

  // Otros
  { nombre: "Maíz dulce", cantidad: 2500, unidad: "g" , costoPromedio: 0},
  { nombre: "Hierbas", cantidad: 1000, unidad: "g" , costoPromedio: 0},
  { nombre: "Especias", cantidad: 1000, unidad: "g" , costoPromedio: 0},
  { nombre: "Base crocante", cantidad: 50, unidad: "unid", costoPromedio: 0 }
];
