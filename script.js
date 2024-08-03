document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Usuario registrado exitosamente.');
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
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

const buttons = document.querySelectorAll('.stream-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const service = button.getAttribute('data-service');
        let whatsappNumber;
        if (service === 'Soporte Técnico') {
            whatsappNumber = '+573148618307';
        } else {
            whatsappNumber = Math.random() > 0.5 ? '+573148618307' : '+573227669390';
        }
        const message = `Te veo en ${service}`;
        window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`);
    });
});
