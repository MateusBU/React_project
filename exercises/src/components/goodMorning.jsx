import React, {Fragment} from "react";

// export default props => [
//     <h1 key='h1'>Good Morning {props.name}. Age: {props.age}!!</h1>,
//     <h2 key='h2'>See you!!</h2>
// ]
//key = vanish with warning


//BETTER THAN ARRAY
// if there are more than 1 component, enclose with a "generic" element (div, ...)
export default props => 
    <Fragment>
        <h1>Good Morning {props.name}. Age: {props.age}!!</h1>
        <h2>See you!!</h2>
    </Fragment>