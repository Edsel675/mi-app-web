document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('https://mi-app-backend-zp4j.onrender.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del backend:', data);
        document.getElementById('message').textContent = `¡Gracias por registrarte, ${name}!`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Ocurrió un error al registrar.';
    });
});