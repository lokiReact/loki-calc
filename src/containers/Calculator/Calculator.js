import React, { Component } from 'react';
import classes from './Calculator.module.css';
import Aux from '../../hoc/Aux/Aux';
import Display from '../../components/Display/Display';
import Button from '../../components/Button/Button';
import axios from 'axios';

class Calculator extends Component {
    state={
        input: "",
        previousNumber: "",
        operator: "",
        history: [],
        lastClickIsOperator: false
    }


    clearInputHandler = value => {
        this.setState({
            input: '',
            history: [],
            operator: '',
            previousNumber: '',
            lastClickIsOperator: false
        });
    }

    inputHandler = value => {
        this.setState({
            ...this.state,
            input: this.state.input + value,
            lastClickIsOperator: false
        });
    }    

    changeStateHandler = value => {
        if (this.state.input){
            this.setState({
                ...this.state,
                input: (-1 * parseFloat(this.state.input)).toString(),
                history: this.state.history.concat(this.state.input).concat(value),
                lastClickIsOperator: false
            })
        }
    }

    calculatePercentageHandler = value => {
        if (this.state.input){
            this.setState({
                ...this.state,
                input: (parseFloat(this.state.input)/100).toFixed(6).toString(),
                history: this.state.history.concat(this.state.input).concat(value),
                lastClickIsOperator: false
            })
        }
    } 

    zeroHandler = value => {
        if (this.state.input){
            this.setState({
                ...this.state,
                input: this.state.input + value,
                lastClickIsOperator: false
            })
        }
    }

    decimalHandler = value => {
        if(this.state.input.indexOf(".") === -1){
            this.setState({
                ...this.state,
                input: this.state.input + value,
                lastClickIsOperator: false
            })
        }
    }

    operatorHandler = value => {
        if(this.state.input){
            if (this.state.previousNumber){
                this.setState({
                    ...this.state,
                    operator: value,
                    input: '',
                    previousNumber: this.evaluate(),
                    lastClickIsOperator: true,
                    history: this.state.history.concat(this.state.input).concat(value),
                })

            }else{
                this.setState({
                    ...this.state,
                    operator: value,
                    input: '',
                    previousNumber: this.state.input,
                    lastClickIsOperator: true,
                    history: this.state.history.concat(this.state.input).concat(value),
                })                

            }
        }
    }

    eaualToHandler = value => {
        if(this.state.input && this.state.previousNumber && this.state.operator){
            const result = this.evaluate();
            const data = {
                history: this.state.history.concat(this.state.input).concat("=").join(" "),
                result: result,
                curTime: new Date()
            }
            axios.post("https://loki-calc.firebaseio.com/results.json", data).then(response => {
                this.setState({
                    ...this.state,
                    input: result,
                    operator: '',
                    previousNumber: '',
                    lastClickIsOperator: false,
                    history: []
                })
            })
        }
    }    

    evaluate(){
        switch(this.state.operator){
            case "+":
                return (parseFloat(this.state.input) + parseFloat(this.state.previousNumber)).toFixed(4).toString();
            case "−":
                return (parseFloat(this.state.previousNumber) - parseFloat(this.state.input)).toFixed(4).toString();    
            case "×": 
                return (parseFloat(this.state.input) * parseFloat(this.state.previousNumber)).toFixed(4).toString();
            case "÷":
                if(this.state.input === "0"){
                    alert("Divide by 0 error");
                      return "0";
                } else {
                    return (parseFloat(this.state.previousNumber)/parseFloat(this.state.input)).toFixed(4).toString();
                }
            default: 
                return 0;
        }
    }


    render() {
        return (
            <Aux>
                <Display>{this.state.input || this.state.previousNumber || "0"}</Display>
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
                            <Button clicked={this.clearInputHandler} color='light'>C</Button>
                            <Button clicked={this.changeStateHandler} disabled={this.state.lastClickIsOperator} color='light'>+/-</Button>
                            <Button clicked={this.calculatePercentageHandler} disabled={this.state.lastClickIsOperator} color='light'>%</Button>
                            <Button clicked={this.operatorHandler} disabled={this.state.lastClickIsOperator} color='yellow'>&#247;</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button clicked={this.inputHandler}>7</Button>
                            <Button clicked={this.inputHandler}>8</Button>
                            <Button clicked={this.inputHandler}>9</Button>
                            <Button clicked={this.operatorHandler} disabled={this.state.lastClickIsOperator} color='yellow'>&#215;</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button clicked={this.inputHandler}>4</Button>
                            <Button clicked={this.inputHandler}>5</Button>
                            <Button clicked={this.inputHandler}>6</Button>
                            <Button clicked={this.operatorHandler} disabled={this.state.lastClickIsOperator} color='yellow'>&#8722;</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button clicked={this.inputHandler}>1</Button>
                            <Button clicked={this.inputHandler}>2</Button>
                            <Button clicked={this.inputHandler}>3</Button>
                            <Button clicked={this.operatorHandler} disabled={this.state.lastClickIsOperator} color='yellow'>+</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button clicked={this.zeroHandler} size='big'>0</Button>
                            <Button clicked={this.decimalHandler}>.</Button>
                            <Button clicked={this.eaualToHandler} color='yellow' disabled={this.state.lastClickIsOperator}>=</Button>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Calculator;