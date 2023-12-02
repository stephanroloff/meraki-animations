import { animationsData } from '../inputs';
import triggerClick from "./triggerClick";
import triggerHandleIntersection from "./triggerHandleIntersection";
import triggerMouseEnter from "./triggerMouseEnter";
import triggerDOMContentLoaded from "./triggerDOMContentLoaded";


export default function asignAnimationsProperties(arrayCode, element) {
    let animationName = arrayCode[0];
    let trigger = arrayCode[1];
    let timingFunction = arrayCode[2];
    let fillMode = arrayCode[3];
    let numberInSecondsDelay = arrayCode[4] / 1000;
    let numberInSecondsDuration = arrayCode[5] / 1000;

    animationsData.forEach(element => {
        if(element.class === animationName){
            animationName = element.animation;
        }
    });

    console.log(trigger);

    switch (trigger) {
        case 'none':
            triggerDOMContentLoaded(element, animationName, timingFunction, fillMode, numberInSecondsDelay, numberInSecondsDuration);
            break;

        case 'IntersectionObserver':
            triggerHandleIntersection(element, animationName, timingFunction, fillMode, numberInSecondsDelay, numberInSecondsDuration);
            break;

        case 'click':
            triggerClick(element, animationName, timingFunction, fillMode, numberInSecondsDelay, numberInSecondsDuration);
            break;
            
        case 'mouseenter':
            console.log('mouseenter HOLAAA');
            triggerMouseEnter(element, animationName, timingFunction, fillMode, numberInSecondsDelay, numberInSecondsDuration);
            break;
    
        default:
            break;
    }
}