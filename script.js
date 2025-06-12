document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        document.getElementById('message').textContent = 'Por favor completa todos los campos.';
        return;
    }

    fetch('https://mi-app-backend-1.onrender.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la respuesta del servidor: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del backend:', data);
        document.getElementById('message').textContent = `¡Gracias por registrarte, ${name}!`;
        // Limpia los campos después de registro exitoso
        document.getElementById('registrationForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Ocurrió un error al registrar.';
    });
});