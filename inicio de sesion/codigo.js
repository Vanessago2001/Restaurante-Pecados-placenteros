// Selecciona el formulario completo
const form = document.getElementById('inicioSesion');

// Selecciona el campo de email
const emailInput = document.getElementById('email');

// Selecciona el campo de contraseña
const contraseñaInput = document.getElementById('contraseña');


//  2.2 Funciones de Manejo de Errores
function showError(el, msg) {
    // Construye la ID del span de error usando la ID del elemento (el.id)
    document.getElementById('err-' + el.id).textContent = msg;
};

// Función para limpiar o borrar el mensaje de error
function clearError(el) {
    // Establece el contenido del texto del span de error a vacío
    document.getElementById('err-' + el.id).textContent = '';
};


// 4: JavaScript - Validación al Enviar (submit event)
//  Este bloque maneja la acción final de envío.

form.addEventListener('submit', (e) => {
    // 1. Prevenir el envío por defecto (que recarga la página)
    e.preventDefault();

    // 2. Disparar validaciones manuales
    // Esto fuerza la ejecución de las funciones de escucha del evento 'input' definidas arriba.
    emailInput.dispatchEvent(new Event('input'));
    contraseñaInput.dispatchEvent(new Event('input'));

    // 3. Verificar si existen errores activos
    const hasErrors =
        // Convierte la lista de elementos de error en un Array
        Array.from(document.querySelectorAll('.error'))
            // Comprueba si AL MENOS UNO tiene contenido de texto (es decir, un error activo)
            .some(span => span.textContent);

    // 4. Procesamiento final
    if (!hasErrors) {
        const email = emailInput.value.trim();
        const contraseña = contraseñaInput.value.trim();

        // ROLES
        if (email === 'empleado@gmail.com' && contraseña === '1234') {
            window.location.href = '../PaginaPrincipal/indexEmpleado.html';
        }
        else if (email === 'administrador@gmail.com' && contraseña === '1234') {
            window.location.href = '../PaginaPrincipal/indexAdministrador.html';
        }
        else if (email === 'cliente@gmail.com' && contraseña === '1234') {
            window.location.href = '../PaginaPrincipal/indexCliente.html';
        }
        else {
            alert('Usuario no existe');
        }
    }
});