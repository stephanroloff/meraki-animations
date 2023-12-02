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
            { label: 'Fade In', value: 'fade-in' },
            { label: 'Fade In Left', value: 'fade-in-left' },
            { label: 'Fade In Right', value: 'fade-in-right' },
            { label: 'Fade In Top', value: 'fade-in-top' },
            { label: 'Fade In Bottom', value: 'fade-in-bottom' },
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
            { label: 'None', value: 'none' },
            { label: 'Intersection Observer', value: 'IntersectionObserver' },
            { label: 'Click', value: 'click' },
            { label: 'Mouse Enter', value: 'mouseenter' },
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
            { label: 'None', value: 'none' },
            { label: 'Ease', value: 'ease' },
            { label: 'Linear', value: 'linear' },
            { label: 'Ease-in', value: 'ease-in' },
            { label: 'Ease-out', value: 'ease-out' },
            { label: 'Ease-in-out', value: 'ease-in-out' },
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
            { label: 'None', value: 'none' },
            { label: 'Forwards', value: 'forwards' },
            { label: 'Backwards', value: 'backwards' },
            { label: 'Both', value: 'both' },
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

