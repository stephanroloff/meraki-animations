import {animationsData} from '../inputs'

export default function asignAnimationsProperties(arrayCode, element) {
    console.log(animationsData);
    console.log(arrayCode);

    let animationName;
    let trigger = arrayCode[1];
    let timingFunction = arrayCode[2];
    let fillMode = arrayCode[3];
    let numberInSecondsDelay = arrayCode[4] / 1000;
    let numberInSecondsDuration = arrayCode[5] / 1000;

    animationsData.forEach(element =>{
        if(element.class === arrayCode[0]){
            animationName = element.animation
        }
    })

    console.log(animationName);
    console.log(trigger);
    console.log(timingFunction);
    console.log(fillMode);
    console.log(numberInSecondsDelay);
    console.log(numberInSecondsDuration);
    
    console.log(element);

    element.style.animationName = `${animationName}`
    element.style.animationTimingFunction = `${timingFunction}`
    element.style.animationFillMode = `${fillMode}`;
    element.style.animationDelay = `${numberInSecondsDelay}s`
    element.style.animationDuration = `${numberInSecondsDuration}s`
}