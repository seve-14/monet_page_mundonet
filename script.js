document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const showLoginBtn = document.getElementById('show-login');
    const registerSection = document.getElementById('register-section');
    const loginSection = document.getElementById('login-section');
    const mainInterface = document.getElementById('main-interface');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        registerForm.innerHTML = '<p>Registrando...</p>';

        setTimeout(() => {
            alert('Usuario registrado exitosamente.');
            registerSection.style.display = 'none';
            loginSection.style.display = 'block';
        }, 2000);
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            alert('Inicio de sesión exitoso.');
            loginSection.style.display = 'none';
            mainInterface.style.display = 'block';
        } else {
            alert('Correo electrónico o contraseña incorrectos.');
        }
    });

    showLoginBtn.addEventListener('click', function() {
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    const streamButtons = document.querySelectorAll('.stream-button');
    streamButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            const whatsappNumber = '+573227669390';
            const message = `Ya pagué mi cuenta de ${service}.`;
            window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        });
    });
});
