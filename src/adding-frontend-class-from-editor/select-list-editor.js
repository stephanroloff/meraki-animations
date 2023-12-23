//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
import { allowedBlockNames } from "./inputs";
import PanelBodyIntern from './components/PanelBodyInternElements';

const withMyPluginControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { attributes, setAttributes } = props;

        if (allowedBlockNames.length > 0 && (!allowedBlockNames.includes(props.name))) {
            return <BlockEdit { ...props } />;
        }

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
    'my-plugin-meraki-animations/with-inspector-controls',
    withMyPluginControls
);
