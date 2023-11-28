//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
import { allowedBlockNames } from "./inputs";
import saveData from "./save-data";

const withMyPluginControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { attributes, setAttributes } = props;

        if (allowedBlockNames.length > 0 && (!allowedBlockNames.includes(props.name))) {
            return <BlockEdit { ...props } />;
        }

        saveData();
        
        // Definir el atributo myDropdownAnimationValue si no está definido
        if (typeof attributes.myDropdownAnimationValue === 'undefined') {
            setAttributes({ myDropdownAnimationValue: 'none' });
        }

        return (
            <>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody
                        title={'Animations for Block'}
                        initialOpen={false}
                    >
                        <p>Enter a description:</p>
                        <SelectControl
                            label="Elige una opción"
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
