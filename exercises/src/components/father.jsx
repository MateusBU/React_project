import React from 'react';
import Children from './children';

export default props =>
    <div>
        <h1>{props.name} {props.lastname}</h1>
        <h2>Children</h2>
        <ul>
            <Children name="Pedro" lastname={props.lastname} />
            <Children {...props} /> {/*every properties goes to children */}
            <Children {...props} name="Carla" /> {/*name Carla overwrites name from Father */}
        </ul>
    </div>