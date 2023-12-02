export default function triggerDOMContentLoaded(element, animationName, timingFunction, fillMode, numberInSecondsDelay, numberInSecondsDuration){
    document.addEventListener('DOMContentLoaded', (e) => {
        element.style.animationName = `${animationName}`
        element.style.animationTimingFunction = `${timingFunction}`
        element.style.animationFillMode = `${fillMode}`;
        element.style.animationDelay = `${numberInSecondsDelay}s`
        element.style.animationDuration = `${numberInSecondsDuration}s`
    });
}