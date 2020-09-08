import React from 'react';
import classes from './Button.module.css';


const button = props => {
    let buttonClasses = [classes.Button]
    let containerClasses = [classes.Container]
    if (props.color === 'light'){
        buttonClasses.push(classes.Light);
    }else if (props.color === 'yellow'){
        buttonClasses.push(classes.Yellow);
    }

    if (props.size === 'big'){
        containerClasses.push(classes.Big);
        buttonClasses.push(classes.OvalButton);
    }
    return (
        <div className={containerClasses.join(' ')}>
            <button className={buttonClasses.join(' ')} disabled={props.disabled}>{props.children}</button>
        </div>
    );
}

export default button;