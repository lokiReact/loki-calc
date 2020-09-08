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
                            <Button disabled>(</Button>
                            <Button disabled>)</Button>
                            <Button disabled>mc</Button>
                            <Button disabled>m+</Button>
                            <Button disabled>m-</Button>
                            <Button disabled>mr</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button disabled>2<sup>nd</sup></Button>
                            <Button disabled>x<sup>2</sup></Button>
                            <Button disabled>x<sup>3</sup></Button>
                            <Button disabled>x<sup>y</sup></Button>
                            <Button disabled>e<sup>x</sup></Button>
                            <Button disabled>10<sup>x</sup></Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button disabled>1/x</Button>
                            <Button disabled><sup>2</sup>&#8730;x</Button>
                            <Button disabled><sup>3</sup>&#8730;x</Button>
                            <Button disabled><sup>y</sup>&#8730;x</Button>
                            <Button disabled>ln</Button>
                            <Button disabled>log<sub>10</sub></Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button disabled>x!</Button>
                            <Button disabled>sin</Button>
                            <Button disabled>cos</Button>
                            <Button disabled>tan</Button>
                            <Button disabled>e</Button>
                            <Button disabled>EE</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button disabled>Rad</Button>
                            <Button disabled>sinh</Button>
                            <Button disabled>cosh</Button>
                            <Button disabled>tanh</Button>
                            <Button disabled>&#960;</Button>
                            <Button disabled>Rand</Button>
                        </div>
                    </div>
                    <div className={classes.DigitalPanel}>
                        <div className={classes.BtnRow}>
                            <Button color='light'>C</Button>
                            <Button color='light'>+/-</Button>
                            <Button color='light'>%</Button>
                            <Button color='yellow'>&#247;</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>7</Button>
                            <Button>8</Button>
                            <Button>9</Button>
                            <Button color='yellow'>&#215;</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>4</Button>
                            <Button>5</Button>
                            <Button>6</Button>
                            <Button color='yellow'>&#8722;</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                            <Button color='yellow'>+</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button size='big'>0</Button>
                            <Button>.</Button>
                            <Button color='yellow'>=</Button>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Calculator;