import { allInputsEditor } from "../inputs";

export default function codeGenerator(selectedBlock) {

    if(!selectedBlock.attributes){
        return;
    }

    let codeGenerated = []

    allInputsEditor.forEach(input => {
        let defVarName = input.attrDefValue.variableName;
        let blockAttr = selectedBlock.attributes;

        let valueToPush = blockAttr[`${defVarName}`];
        codeGenerated.push(valueToPush);
    })
    

    const code = codeGenerated.join('X');
    const animationClass = `animation-X-${code}`

    return animationClass;
}

