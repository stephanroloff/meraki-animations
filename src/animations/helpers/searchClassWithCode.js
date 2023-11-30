export default function searchClassWithCode(element, data) {
    const classList = element.classList;
    
            // Verifica cada clase en busca de aquellas que comienzan con "animation-delay-"
            classList.forEach((className) => {

                if (className.startsWith('animation-delay-')) {

                    // Extraer el número después de 'animation-delay-'
                    const number = parseInt(className.replace('animation-delay-', ''), 10);


                    //decodificar el codigo (usar un return)
                    //Agregar los Values de las properties correspondientes
                    
    
                    // Ahora 'numero' contiene el valor numérico después de 'animation-delay-'
                    let numberInSeconds = number / 1000;
    
                    element.style.animationName = `${data.animation}`
                    element.style.animationDelay = `${numberInSeconds}s`
                    element.style.animationDuration = `${numberInSeconds}s`
                    element.style.animationTimingFunction = `ease-out`
                    element.style.animationFillMode = 'forwards';
                }
    });
}
