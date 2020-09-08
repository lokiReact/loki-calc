import React, {Component} from 'react';

import classes from './Calculator.module.css';

class Calculator extends Component{
    render(){
        return(
            <div className={classes.Calculator}>
                <div>Display</div>
                <div>Button Panel</div>
            </div>
        );
    }
}

export default Calculator;