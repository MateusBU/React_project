/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

function childrenWithProps(props)
{
    return React.Children.map(props.children, child => {
                return React.cloneElement(child, {
                    ...props, ...child.props
                })
            })
}

export default props =>
    <div>
        <h1>{props.name} {props.lastname}</h1>
        <h2>Children</h2>
        <ul>
            {/*props.children*/} {/*if it was inside a class, it should be used this. */}
            {
                childrenWithProps(props)
            }
        </ul>
    </div>