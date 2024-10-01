// script.js

// Datos de usuario
let userData = {};

// Paso 1: Registro de Usuario
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Guardar los datos del usuario
    userData.name = document.getElementById('name').value;
    userData.idNumber = document.getElementById('idNumber').value;
    userData.email = document.getElementById('email').value;
    userData.phone = document.getElementById('phone').value;
    userData.country = document.getElementById('country').value;
    userData.city = document.getElementById('city').value;
    userData.address = document.getElementById('address').value;
    userData.userType = document.getElementById('typeSelect').value;

    if (!userData.userType) {
        alert("Por favor selecciona si eres FreeTimer o FullTimer.");
        return;
    }

    // Ocultar formulario de registro y mostrar selección de tareas
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('taskSelectionForm').style.display = 'block';
});

// Paso 2: Selección de tareas y subir archivo (FreeTimer)
document.getElementById('goToTerms').addEventListener('click', function() {
    // Guardar las categorías seleccionadas
    const selectedCategories = Array.from(document.getElementById('taskCategory').selectedOptions).map(option => option.value);
    userData.tasks = selectedCategories;

    // Verificar si es FreeTimer para subir archivo
    if (userData.userType === 'freetimer') {
        const pilaFile = document.getElementById('pila').files[0];
        if (!pilaFile) {
            alert('Debes subir el comprobante de seguridad social (PILA) para continuar.');
            return;
        }
        userData.pila = pilaFile.name;
    }

    // Ocultar formulario de selección de tareas y mostrar términos y condiciones
    document.getElementById('taskSelectionForm').style.display = 'none';
    document.getElementById('termsForm').style.display = 'block';
});

// Paso 3: Aceptar Términos y Crear Cuenta
document.getElementById('submitTerms').addEventListener('click', function() {
    if (!document.getElementById('acceptTerms').checked) {
        alert('Debes aceptar los términos y condiciones para continuar.');
        return;
    }

    // Ocultar términos y mostrar confirmación
    document.getElementById('termsForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';

    // Mostrar información del usuario
    const userInfo = `
        Nombre: ${userData.name} <br>
        Cédula: ${userData.idNumber} <br>
        Correo: ${userData.email} <br>
        Celular: ${userData.phone} <br>
        País: ${userData.country} <br>
        Ciudad: ${userData.city} <br>
        Dirección: ${userData.address} <br>
        Tipo: ${userData.userType.charAt(0).toUpperCase() + userData.userType.slice(1)} <br>
        Tareas: ${userData.tasks.join(', ')} <br>
        ${userData.pila ? `Comprobante PILA: ${userData.pila}` : ''}
    `;
    document.getElementById('userInfo').innerHTML = userInfo;
});

// Botón para volver al inicio
document.getElementById('goBack').addEventListener('click', function() {
    window.location.reload();  // Reiniciar la página
});

