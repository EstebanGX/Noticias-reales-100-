document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener todos los elementos que queremos animar (los divs de noticias)
    const observerElements = document.querySelectorAll('.noticia-card');

    // 2. Opciones del Intersection Observer
    // rootMargin: '0px 0px -50px 0px' significa que el elemento
    // solo se considerará visible cuando su borde inferior esté 50px dentro de la pantalla.
    const observerOptions = {
        root: null, // El viewport es el elemento raíz
        rootMargin: '0px', 
        threshold: 0.1 // El elemento es visible cuando al menos el 10% está en pantalla
    };

    // 3. Crear el Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // entry.isIntersecting es true cuando el elemento entra en el viewport
            if (entry.isIntersecting) {
                // Agregar la clase 'visible' para activar la animación CSS
                entry.target.classList.add('visible');
                
                // Opcional: Dejar de observar el elemento una vez que ha aparecido
                observer.unobserve(entry.target);
            }
            // Si quieres que la animación se repita al salir y volver a entrar:
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, observerOptions);

    // 4. Empezar a observar cada tarjeta de noticia
    observerElements.forEach(element => {
        observer.observe(element);
    });
});