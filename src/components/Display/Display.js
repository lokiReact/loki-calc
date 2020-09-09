import React from 'react';
import classes from './Display.module.css';

const display = props => {
    let displayClasses = [classes.Display]
    if (props.size > 14){
        displayClasses.push(classes.Smallest);
    }else if (props.size > 8){
        displayClasses.push(classes.Small);
    }

    return(
        <div className={displayClasses.join(' ')}>
            {props.children}
        </div>
    )
}

export default display;