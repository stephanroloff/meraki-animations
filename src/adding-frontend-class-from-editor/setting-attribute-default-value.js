import { allowedBlockNames, allInputsEditor} from "./inputs";

const setDefaultValue = (settings, blockName) => {

    if (!(allowedBlockNames.length > 0 && (!allowedBlockNames.includes(blockName)))) {

        settings.attributes = {
            ...settings.attributes,
            //---------------------------
            //locomotiveScrollPluginIntegration
            //---------------------------
            myDropdownScrollTypeValue: {
                type: 'string',
                default: 'none',
            },
            myDropdownScrollSpeedValue: {
                type: 'string',
                default: 'none',
            },
            myDropdownScrollSlownessValue: {
                type: 'string',
                default: 'none',
            },
            //---------------------------
        };

        Object.keys(allInputsEditor).forEach((key) => {
            let varName = allInputsEditor[key].attrDefValue.variableName;
            let varValues = {
                type: allInputsEditor[key].attrDefValue.type,
                default: allInputsEditor[key].attrDefValue.default,
            }

            settings.attributes[varName] = varValues;
        });

        return settings;
        
    }
};

wp.hooks.addFilter('blocks.registerBlockType', 'my-plugin/meraki-animations', (settings, name) => {
    return setDefaultValue(settings, name);
});

