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

    // Checks if there is a selected block.
    if (selectedBlock) {
        // Gets the classes from the 'myDropdownAnimationValue' attribute or uses an empty array if no classes are present.
        let blockClasses = [];
        if(selectedBlock.attributes.myDropdownAnimationValue){
            blockClasses.push(selectedBlock.attributes.myDropdownAnimationValue);
        }

        if(selectedBlock.attributes.myAnimationDelayValue){
            // blockClasses.push('myAnimationDelayValue');
        }

        console.log("blockClasses", blockClasses);
        console.log("blockClasses", ...blockClasses);
        console.log("blockClasses", typeof(blockClasses));

        // Updates the block's classes in the database using the dispatch function.
        wp.data.dispatch('core/block-editor').updateBlockAttributes(selectedBlock.clientId, { className: `${blockClasses}` });
    }
}
