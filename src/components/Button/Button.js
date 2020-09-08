import React from 'react';
import classes from './Button.module.css';


const button = props => {
    return (
        <div className={classes.Container}>
            <button className={classes.Button}>{props.children}</button>
        </div>
    );
}

export default button;