import decode  from "./helpers/decode";
import asignAnimationsProperties  from "./helpers/asign-animations-properties";

const animatedElements = document.querySelectorAll('[class*="animation-X-"]');

if(animatedElements){

    animatedElements.forEach(element => {
        let arrayCode = decode(element);
        asignAnimationsProperties(arrayCode, element);
    });
    
}



