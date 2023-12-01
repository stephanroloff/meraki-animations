export default function decode(element) {
    let arrayCode = [];
    const classList = element.classList;

    for (const className of classList) {
        // Verifica cada clase en busca de aquellas que comienzan con "animation-delay-"
        if (className.startsWith('animation-X-')) {
            const code = className.replace('animation-X-', '');
            arrayCode = code.split('XX');
        }
    }
    return arrayCode;
}
