import React, { Component } from 'react';
import classes from './Calculator.module.css';
import Aux from '../../hoc/Aux/Aux';
import Display from '../../components/Display/Display';
import Button from '../../components/Button/Button';

class Calculator extends Component {
    render() {
        return (
            <Aux>
                <Display>0</Display>
                <div className={classes.ButtonPanel}>
                    <div className={classes.ScientificPanel}>
                        <div className={classes.BtnRow}>
                            <Button>(</Button>
                            <Button>)</Button>
                            <Button>mc</Button>
                            <Button>m+</Button>
                            <Button>m-</Button>
                            <Button>mr</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>2<sup>nd</sup></Button>
                            <Button>x<sup>2</sup></Button>
                            <Button>x<sup>3</sup></Button>
                            <Button>x<sup>y</sup></Button>
                            <Button>e<sup>x</sup></Button>
                            <Button>10<sup>x</sup></Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>1/x</Button>
                            <Button><sup>2</sup>&#8730;x</Button>
                            <Button><sup>3</sup>&#8730;x</Button>
                            <Button><sup>y</sup>&#8730;x</Button>
                            <Button>ln</Button>
                            <Button>log<sub>10</sub></Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>x!</Button>
                            <Button>sin</Button>
                            <Button>cos</Button>
                            <Button>tan</Button>
                            <Button>e</Button>
                            <Button>EE</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>Rad</Button>
                            <Button>sinh</Button>
                            <Button>cosh</Button>
                            <Button>tanh</Button>
                            <Button>&#960;</Button>
                            <Button>Rand</Button>
                        </div>
                    </div>
                    <div className={classes.DigitalPanel}>
                        <div className={classes.BtnRow}>
                            <Button>C</Button>
                            <Button>+/-</Button>
                            <Button>%</Button>
                            <Button>÷</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>7</Button>
                            <Button>8</Button>
                            <Button>9</Button>
                            <Button>x</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>4</Button>
                            <Button>5</Button>
                            <Button>6</Button>
                            <Button>-</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                            <Button>+</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>0</Button>
                            <Button>.</Button>
                            <Button>=</Button>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Calculator;