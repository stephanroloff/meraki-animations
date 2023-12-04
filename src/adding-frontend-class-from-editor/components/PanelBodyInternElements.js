const { SelectControl, CheckboxControl } = wp.components;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { allInputsEditor } from "../inputs";

function PanelBodyIntern(props) {
    let { attributes, setAttributes } = props.properties

    return (
        <>
        <CheckboxControl
            // heading="User"
            label="Multiple Animations"
            // help="Is the user a author or not?"
            checked={ false }
        />
            {allInputsEditor.map((element, index) => {
                //For SelectControl Component
                if(element.componentType === 'SelectControl'){
                    let variableName = [element.attrDefValue.variableName];

                    return(
                        <SelectControl
                        label={element.label}
                        value={attributes[variableName]}
                        options={element.options}
                        onChange={(value) => setAttributes({ [variableName]: value })}
                        />
                    )
                }

                if(element.componentType === 'NumberControl'){
                    let variableName = [element.attrDefValue.variableName];

                    return(
                        <NumberControl
                        label={element.label}
                        value={attributes[variableName]}
                        onChange={(value) => setAttributes({ [variableName]: value })}
                        step={ element.step }
                        max={ element.max }
                        min={ element.min }
                        required
                        />
                    )
                }

            })}
        </>
    );
}

export default PanelBodyIntern;