// Selecciona el formulario completo
const form = document.getElementById('registro');

// Selecciona el campo de nombre
const nombresInput = document.getElementById('nombres');

// Selecciona el campo de apellidos
const apellidosInput = document.getElementById('apellidos');

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


// // 3.1 Validación del Nombre
// nombresInput.addEventListener('input', () => {
//     // Condición: Si el valor sin espacios iniciales/finales es menor a 2 caracteres
//     if (nombresInput.value.trim().length < 2) {
//         // Muestra el error, pasando la referencia del elemento y el mensaje
//         showError(nombresInput, 'Mínimo 2 caracteres');
//     } else {
//         // Limpia el mensaje de error
//         clearError(nombresInput);
//     }
// });

// // 3.2 Validación del Email
// emailInput.addEventListener('input', () => {
//     // Expresión Regular (RegEx) para validar el formato estándar del email
//     const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
//     // Si el test de la RegEx falla (resultado es false, se niega con !)
//     if (!valid) {
//         showError(emailInput, 'Email inválido');
//     } else {
//         clearError(emailInput);
//     }
// });


// 4: JavaScript - Validación al Enviar (submit event)
//  Este bloque maneja la acción final de envío.

form.addEventListener('submit', (e) => {
    // 1. Prevenir el envío por defecto (que recarga la página)
    e.preventDefault(); 

    // 2. Disparar validaciones manuales
    // Esto fuerza la ejecución de las funciones de escucha del evento 'input' definidas arriba.
    nombresInput.dispatchEvent(new Event('input'));
    apellidosInput.dispatchEvent(new Event('input'));
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
        // Abre modal si el formulario es válido
        const modal = new bootstrap.Modal(document.getElementById('modalExito'));
        modal.show();
    }
});