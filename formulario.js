document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario
        
        // Validar los campos del formulario
        if (validateForm()) {
            // Enviar formulario (aquí puedes hacer una petición AJAX o lo que necesites)
            alert('Formulario enviado exitosamente');
            form.reset(); // Limpiar los campos del formulario
        }
    });

    function validateForm() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return false;
        }

        return true;
    }
});
