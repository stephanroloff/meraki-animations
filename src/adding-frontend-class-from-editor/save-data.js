import codeGenerator from './helpers/code-generator'
import { classHandler } from "./helpers/classHandler";
/**
 * Saves data related to the selected block.
 *
 * This function is triggered when clicking on a block. It retrieves the value of the
 * 'myDropdownAnimationValue' attribute from the selected block and then updates the block's
 * classes in the database using the dispatch function.
 *
 * @function
 * @name saveData
 * @memberof module:select-list-editor
 * @throws {Error} Throws an error if unable to access the selected block.
 * @returns {void}
 */
export default function saveData() {
    // Selects the currently selected block in the block editor.
    let selectedBlock = wp.data.select('core/block-editor').getSelectedBlock();

    //Define a global variable to avoid incompatibility Problems
    // let pluginName = 'meraki-animations';
    // if(!window.customPluginsActive){
    //     window.customPluginsActive = [];
    // }else{
    //     if(!window.customPluginsActive.includes(pluginName)){
    //         window.customPluginsActive.push(pluginName);
    //     }
    // }

    // Checks if there is a selected block.
    if (selectedBlock) {
        let animationClass = codeGenerator(selectedBlock);
        let blockClasses = classHandler(selectedBlock, animationClass)
        
        // Updates the block's classes in the database using the dispatch function.
        // Si hay mas de un plugin activo, solo uno debe asumir la responsabilidad de guardar los datos en la base de datos.
        // Por eso se guardan todos los plugins activos en un objeto global y solo el primero(window.customPluginsActive[0]) guardará los datos
        // if(window.customPluginsActive[0] == pluginName){
            wp.data.dispatch('core/block-editor').updateBlockAttributes(selectedBlock.clientId, { 
                className: blockClasses
            });
        // }
    }
}
