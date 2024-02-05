export function classHandler(selectedBlock, animationClass) {
    
    let editorClass = selectedBlock.attributes.className;
    let animationNameClass = selectedBlock.attributes.myDropdownAnimationValue;

    let newEditorClassArray = [];
    let replaced1 = false;
    let replaced2 = false;

    const bothClasses = `animation-meraki-${animationNameClass} ${animationClass}`;
    
    if(editorClass){
        let editorClassArray = editorClass.split(" ");

        newEditorClassArray = editorClassArray.map(element => {
            if (element.includes("animation-X-")) {
                replaced1 = true;
                return animationClass;
            }
            if (element.includes("animation-meraki-")) {
                replaced2 = true;
                return `animation-meraki-${animationNameClass}`;
            }
            return element;
        });

        if(!replaced1){
            newEditorClassArray.push(animationClass);
        }
        if(!replaced2){
            newEditorClassArray.push(`animation-meraki-${animationNameClass}`);
        }
        let newString = newEditorClassArray.join(" ");

        return newString;
    }else{
        return bothClasses;
    }
}