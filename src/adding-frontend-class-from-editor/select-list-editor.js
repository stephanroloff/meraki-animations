//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { allowedBlockNames } from "./inputs";
import saveData from "./save-data";

const withMyPluginControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { attributes, setAttributes } = props;

        if (allowedBlockNames.length > 0 && (!allowedBlockNames.includes(props.name))) {
            return <BlockEdit { ...props } />;
        }
        
        // Definir el atributo myDropdownAnimationValue si no está definido
        if (typeof attributes.myDropdownAnimationValue === 'undefined') {
            setAttributes({ myDropdownAnimationValue: 'none' });
        }
        // Definir el atributo myDropdownAnimationValue si no está definido
        if (typeof attributes.myDropdownAnimationValue === 'undefined') {
            setAttributes({ myAnimationDelayValue: '0' });
        }

        saveData();

        return (
            <>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody
                        title={'Animations for Block'}
                        initialOpen={false}
                    >
                        <p>Animation to be applied to this block</p>
                        <SelectControl
                            label="Choose an option"
                            value={attributes.myDropdownAnimationValue}
                            options={[
                                { label: 'None', value: 'none' },
                                { label: 'Fade In', value: 'fade-in' },
                                { label: 'Fade In Left', value: 'fade-in-left' },
                                { label: 'Fade In Right', value: 'fade-in-right' },
                                { label: 'Fade In Top', value: 'fade-in-top' },
                                { label: 'Fade In Bottom', value: 'fade-in-bottom' },
                            ]}
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
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'withMyPluginControls' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'my-plugin/with-inspector-controls',
    withMyPluginControls
);
