import React, {Component} from 'react';
import classes from './Calculator.module.css';
import Display from '../../components/Display/Display';

class Calculator extends Component{
    render(){
        return(
            <div className={classes.Calculator}>
                <Display>0</Display>
                <div className={classes.ButtonPanel}>
                    <div className={classes.ScientificPanel}>Scientific</div>
                    <div className={classes.DigitalPanel}>Digital</div>
                </div>
            </div>
        );
    }
}

export default Calculator;