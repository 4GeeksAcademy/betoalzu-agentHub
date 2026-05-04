// app.js - Funcionalidades comunes

// Toggle de modo oscuro/claro
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
        });
    }

    // Cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('dropdown-btn')) {
            document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
        } else {
            // Toggle del dropdown
            const dropdown = e.target.nextElementSibling;
            document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
            dropdown.classList.add('show');
        }
    });

    // Cerrar modales al hacer clic en el backdrop
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });
});