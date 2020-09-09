import React from 'react';
import classes from './Record.module.css';

const record = (props) => {
    return (
        <div className={classes.Record}>
            <p className={classes.Expression}>{props.expression}</p>
            <p className={classes.Output}>{props.output}</p>
        </div>
    );
}


export default record;