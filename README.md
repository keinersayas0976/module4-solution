
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto del Módulo 4</title>
    <style>
        /* Estilos generales */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }

        /* Encabezado */
        header {
            background-color: #333;
            color: #fff;
            padding: 1rem;
            text-align: center;
        }

        header h1 {
            margin-bottom: 1rem;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 1rem;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: #f0db4f;
        }

        /* Secciones principales */
        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        section {
            margin-bottom: 3rem;
            padding: 2rem;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        section h2 {
            margin-bottom: 1rem;
            color: #333;
            border-bottom: 2px solid #f0db4f;
            padding-bottom: 0.5rem;
        }

        /* Servicios */
        .servicios-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .servicio {
            padding: 1.5rem;
            background-color: #f9f9f9;
            border-radius: 5px;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }

        .servicio:hover {
            transform: translateY(-5px);
        }

        .servicio h3 {
            color: #444;
            margin-bottom: 1rem;
        }

        /* Formulario de contacto */
        .form-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }

        input, textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }

        button {
            background-color: #333;
            color: #fff;
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #555;
        }

        /* Pie de página */
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1.5rem;
            margin-top: 2rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
            }
            
            nav ul li {
                margin: 0.5rem 0;
            }
            
            .servicios-container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Mi Proyecto del Módulo 4</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#acerca">Acerca de</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="inicio">
            <h2>Bienvenido a mi proyecto</h2>
            <p>Este es un proyecto creado para la tarea del Módulo 4.</p>
        </section>

        <section id="acerca">
            <h2>Acerca de</h2>
            <p>Esta sección contiene información sobre el proyecto y sus objetivos.</p>
        </section>

        <section id="servicios">
            <h2>Servicios</h2>
            <div class="servicios-container">
                <div class="servicio">
                    <h3>Servicio 1</h3>
                    <p>Descripción del primer servicio ofrecido.</p>
                </div>
                <div class="servicio">
                    <h3>Servicio 2</h3>
                    <p>Descripción del segundo servicio ofrecido.</p>
                </div>
                <div class="servicio">
                    <h3>Servicio 3</h3>
                    <p>Descripción del tercer servicio ofrecido.</p>
                </div>
            </div>
        </section>

        <section id="contacto">
            <h2>Contacto</h2>
            <form id="formulario-contacto">
                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Mi Proyecto del Módulo 4. Todos los derechos reservados.</p>
    </footer>

    <script>
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
    </script>
</body>
</html>
