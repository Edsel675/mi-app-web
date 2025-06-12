document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    document.getElementById('message').textContent = `¡Gracias por registrarte, ${name}!`;
});