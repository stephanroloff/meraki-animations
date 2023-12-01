//Para permitir todos los bloques dejar el array vacío ([]).
//Para permitir determinados bloques agregar el nombre en el array.
// Referencias de nombres de bloques 'core/image', 'core/paragraph', 'core/heading', 'core/html', 'core/cover', 'core/group', 'core/list', 'core/video', 'core/audio', 'core/file', 'core/list'

export let allowedBlockNames = [];


//All Inputs

export let allInputsEditor = [
    {   
        componentType: 'SelectControl',
        label: "Animations name",
        attrDefValue:{
            variableName: 'myDropdownAnimationValue',
            type: 'string',
            default: 'none',
        },
        options:[
            { label: 'None', value: '0' },
            { label: 'Fade In', value: '1' },
            { label: 'Fade In Left', value: '2' },
            { label: 'Fade In Right', value: '3' },
            { label: 'Fade In Top', value: '4' },
            { label: 'Fade In Bottom', value: '5' },
        ],
    },
    {   
        componentType: 'SelectControl',
        label: "Timing Function",
        attrDefValue:{
            variableName: 'myDropdownTimingFunctionValue',
            type: 'string',
            default: 'none',
        },
        options:[
            { label: 'None', value: '0' },
            { label: 'ease', value: '1' },
            { label: 'linear', value: '2' },
            { label: 'ease-in', value: '3' },
            { label: 'ease-out', value: '4' },
            { label: 'ease-in-out', value: '5' },
        ],
    },
    {   
        componentType: 'SelectControl',
        label: "Fill Mode",
        attrDefValue:{
            variableName: 'myDropdownFillModeValue',
            type: 'string',
            default: 'none',
        },
        options:[
            { label: 'None', value: '0' },
            { label: 'forwards', value: '1' },
            { label: 'backwards', value: '2' },
            { label: 'both', value: '3' },
        ],
    },
    {   
        componentType: 'SelectControl',
        label: "Trigger",
        attrDefValue:{
            variableName: 'myDropdownTriggerValue',
            type: 'string',
            default: 'none',
        },
        options:[
            { label: 'None', value: '0' },
            { label: 'IntersectionObserver', value: '1' },
            { label: 'Click', value: '2' },
            { label: 'Hover', value: '3' },
        ],
    },
    {   
        componentType: 'NumberControl',
        label: "Delay (miliseconds)",
        attrDefValue:{
            variableName: 'myAnimationDelayValue',
            type: 'string',
            default: '0',
        },
        max: 10000, 
        min:  0,
        step: 1
    },
    {   
        componentType: 'NumberControl',
        label: "Duration (miliseconds)",
        attrDefValue:{
            variableName: 'myAnimationDurationValue',
            type: 'string',
            default: '0',
        },
        max: 10000, 
        min:  0,
        step: 1
    },

];

