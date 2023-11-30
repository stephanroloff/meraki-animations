const { SelectControl } = wp.components;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { animationNameArray } from "../inputs";

function PanelBodyIntern(props) {
    let { attributes, setAttributes } = props.properties

    return (
        <>
            <SelectControl
                label="Choose an option"
                value={attributes.myDropdownAnimationValue}
                options={animationNameArray}
                onChange={(value) => setAttributes({ myDropdownAnimationValue: value })}
            />
            <NumberControl
                label="Delay (miliseconds)"
                onChange={(value) => setAttributes({ myAnimationDelayValue: value })}
                // onChange={(value) => console.log(typeof(value))}
                step={1}
                value={attributes.myAnimationDelayValue}
                max={ 10000 }
                min={ 0 }
                required
            />
            
        </>
    );
}

export default PanelBodyIntern;