import { allowedBlockNames } from "./inputs";

const setDefaultValue = (settings, blockName) => {

    if (!(allowedBlockNames.length > 0 && (!allowedBlockNames.includes(blockName)))) {

        settings.attributes = {
            ...settings.attributes,
            myDropdownAnimationValue: {
                type: 'string',
                default: 'none',
            },
            myAnimationDelayValue: {
                type: 'string',
                default: '0',
            },
        };
        return settings;
        
    }
};

wp.hooks.addFilter('blocks.registerBlockType', 'mi-plugin/establecer-atributo-por-defecto-paragraph', (settings, name) => {
    return setDefaultValue(settings, name);
});

