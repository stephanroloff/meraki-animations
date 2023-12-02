export default function triggerClick(element, animationName, timingFunction, fillMode, numberInSecondsDelay, numberInSecondsDuration){
    element.addEventListener('click', (e) => {
        element.style.animationName = `${animationName}`
        element.style.animationTimingFunction = `${timingFunction}`
        element.style.animationFillMode = `${fillMode}`;
        element.style.animationDelay = `${numberInSecondsDelay}s`
        element.style.animationDuration = `${numberInSecondsDuration}s`
    });
}