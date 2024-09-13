const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const mensaje = document.querySelector('#mensaje').value;
    if (!nombre.match(/^[A-Za-z ]+$/)) {
        alert('El nombre debe contener solo letras y espacios');
    } else if (!apellido.match(/^[A-Za-z ]+$/)) {
        alert('El apellido debe contener solo letras y espacios');
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        alert('El correo electrónico no es válido');
    } else if (!telefono.match(/^[0-9]{9,12}$/)) {
        alert('El teléfono debe contener entre 9 y 12 dígitos');
    } else if (mensaje === '') {
        alert('Por favor, ingrese un mensaje');
    } else {
        // Se agregó form.submit() para que, después de validar los datos, el formulario pueda ser enviado correctamente al backend.
        // Antes, sin esta línea, la función e.preventDefault() detenía el envío del formulario incluso cuando los datos eran válidos,
        // lo que impedía que el backend recibiera la información. Ahora, si todas las validaciones pasan, el formulario se envía.
        form.submit();
    }
});