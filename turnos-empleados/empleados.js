let empleados = [
    {
        nombre: "Sergio Giraldo",
        cc: "20532338",
        cargo: "Mesero",
        correo: "sergiog@gmail.com",
        telefono: "3003245689",
        direccion: "Calle 10"
    },
    {
        nombre: "Maria López",
        cc: "1071643564",
        cargo: "Mesero",
        correo: "marialopez@gmail.com",
        telefono: "3104502365",
        direccion: "Carrera 20"
    },
    {
        nombre: "Andrea López",
        cc: "10234567",
        cargo: "Cajera",
        correo: "andrealopez@gmail.com",
        telefono: "3014567890",
        direccion: "Carrera 15"
    },
    {
        nombre: "Juan Camilo Pérez",
        cc: "98765432",
        cargo: "Cocinero",
        correo: "juancperez@gmail.com",
        telefono: "3102345678",
        direccion: "Avenida 30"
    },
    {
        nombre: "Maria Fernanda Ruiz",
        cc: "45678901",
        cargo: "Administradora",
        correo: "mariafr@gmail.com",
        telefono: "3123456789",
        direccion: "Calle 45"
    },
    {
        nombre: "Carlos Andrés Gómez",
        cc: "33445566",
        cargo: "Bartender",
        correo: "carlosgomez@gmail.com",
        telefono: "3156789012",
        direccion: "Carrera 8"
    },
    {
        nombre: "Laura Sofía Martínez",
        cc: "77889900",
        cargo: "Auxiliar de cocina",
        correo: "lauramartinez@gmail.com",
        telefono: "3201234567",
        direccion: "Diagonal 22"
    }

];

function mostrarEmpleados(lista) {
    let contenido = "";

    lista.forEach(emp => {
        contenido += `
            <div class="col-md-4">
                <div class="card-empleado d-flex">
                    <div class="foto me-3"></div>
                    <div>
                        <p><b>Nombre:</b> ${emp.nombre}</p>
                        <p><b>CC:</b> ${emp.cc}</p>
                        <p><b>Cargo:</b> ${emp.cargo}</p>
                        <p><b>Correo:</b> ${emp.correo}</p>
                        <p><b>Teléfono:</b> ${emp.telefono}</p>
                        <p><b>Dirección:</b> ${emp.direccion}</p>
                        
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("listaEmpleados").innerHTML = contenido;
};

function agregarEmpleado() {

    let nombre = document.getElementById("nombre").value;
    let cc = document.getElementById("cc").value;
    let cargo = document.getElementById("cargo").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;

    if (nombre === "" || cc === "") {
        alert("Por favor complete al menos Nombre y CC");
        return;
    };

    let tarjeta = `
        <div class="col-md-4">
            <div class="card-empleado d-flex">
                <div class="foto me-3"></div>
                <div>
                    <p><b>Nombre:</b> ${nombre}</p>
                    <p><b>CC:</b> ${cc}</p>
                    <p><b>Cargo:</b> ${cargo}</p>
                    <p><b>Correo:</b> ${correo}</p>
                    <p><b>Teléfono:</b> ${telefono}</p>
                    <p><b>Dirección:</b> ${direccion}</p>
                </div>
            </div>
        </div>
    `;

    empleados.push({
        nombre,
        cc,
        cargo,
        correo,
        telefono,
        direccion
    });

    mostrarEmpleados(empleados);


    document.getElementById("nombre").value = "";
    document.getElementById("cc").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
};

mostrarEmpleados(empleados);

function filtrarEmpleados() {
    let nombre = document.getElementById("filtroNombre").value.toLowerCase();
    let cargo = document.getElementById("filtroCargo").value.toLowerCase();

    let filtrados = empleados.filter(emp =>
        emp.nombre.toLowerCase().includes(nombre) &&
        emp.cargo.toLowerCase().includes(cargo)
    );

    mostrarEmpleados(filtrados);
};


