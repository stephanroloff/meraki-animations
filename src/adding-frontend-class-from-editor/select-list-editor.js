//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
import { allowedBlockNames } from "./inputs";
import saveData from "./save-data";
import PanelBodyIntern from './components/PanelBodyInternElements';

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

                        <PanelBodyIntern properties = {props}/>
                    
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
