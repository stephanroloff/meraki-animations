export default function triggerHandleIntersection(element, animationName, timingFunction, fillMode, numberInSecondsDelay, numberInSecondsDuration){

     // Función que se ejecutará cuando el elemento esté visible
     function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Puedes agregar aquí el código para el evento que deseas desencadenar
                element.style.animationName = `${animationName}`
                element.style.animationTimingFunction = `${timingFunction}`
                element.style.animationFillMode = `${fillMode}`;
                element.style.animationDelay = `${numberInSecondsDelay}s`
                element.style.animationDuration = `${numberInSecondsDuration}s`
            }
        });
    }

    // Configuración del Intersection Observer
    const options = {
        root: null, // null para usar el viewport como contenedor
        rootMargin: '0px', // margen adicional alrededor del área de intersección
        threshold: 0.10 // 1.0 para disparar cuando el elemento está completamente visible
    };

    // Crear el Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Iniciar la observación del elemento
    observer.observe(element);
}