// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('El documento se ha cargado correctamente');
    
    // Animación simple para los elementos del menú
    const menuItems = document.querySelectorAll('nav ul li a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Obtener el destino del enlace
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Desplazamiento suave hacia la sección
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
    
    // Manejar el envío del formulario
    const formularioContacto = document.getElementById('formulario-contacto');
    
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validación básica
            if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }
            
            // Aquí normalmente enviarías los datos a un servidor
            // Para este ejemplo, solo mostraremos una confirmación
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.`);
            
            // Limpiar el formulario
            this.reset();
        });
    }
    
    // Añadir efecto de resaltado al hacer scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navigationLinks = document.querySelectorAll('nav ul li a');
        
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navigationLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});