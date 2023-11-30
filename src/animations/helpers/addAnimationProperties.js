import searchClassWithCode  from "./searchClassWithCode";

export default function addAnimationProperties(data) {
    const allSelectedElements = document.querySelectorAll(`.${data.class}`);

    //If nothing is found stops the process
    if(allSelectedElements.length == 0){
        return;
    }
    
    allSelectedElements.forEach((element)=>{
        //Search for class with animation code 
        searchClassWithCode(element, data);
    })
}