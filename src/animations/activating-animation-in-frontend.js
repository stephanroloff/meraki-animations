import addAnimationProperties  from "./helpers/addAnimationProperties";
import {animationsData} from './inputs'


animationsData.forEach((data)=>{
    //Add Animation name, delay and duration to html element 
    addAnimationProperties(data);
});



