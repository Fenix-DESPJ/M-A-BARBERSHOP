// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Función para abrir/cerrar el menú
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    };

    // Evento de clic en la hamburguesa
    menuToggle.addEventListener('click', toggleMenu);

    // Opcional: Cerrar el menú si se hace clic en un enlace (útil para Single Page Apps)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});

