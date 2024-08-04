document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    document.getElementById('register-form').innerHTML = '<p>Registrando...</p>';

    setTimeout(() => {
        alert('Usuario registrado exitosamente.');
        document.getElementById('register-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    }, 2000); // 2 segundos de espera
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        alert('Inicio de sesión exitoso.');
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('main-interface').style.display = 'block';
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});

const streamButtons = document.querySelectorAll('.stream-button');
streamButtons.forEach(button => {
    button.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        const whatsappNumber = '+573148618307';
        const message = `Ya pagué mi cuenta de ${service}.`;
        window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    });
});
