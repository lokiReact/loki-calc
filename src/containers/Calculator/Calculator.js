import React, { Component } from 'react';
import classes from './Calculator.module.css';
import Aux from '../../hoc/Aux/Aux';
import Display from '../../components/Display/Display';
import Button from '../../components/Button/Button';

class Calculator extends Component {
    state={
        input: "",
        previousNumber: "",
        operator: "",
        history: "",
        lastClickIsOperator: false
    }

    clearInput = value => {
        this.setState({
            input: '',
            history: '',
            operator: '',
            previousNumber: '',
            lastClickIsOperator: false
        });
        console.log(this.state);
    }

    addInput = value => {
        this.setState({
            ...this.state,
            input: this.state.input + value,
            history: this.state.history + value,
            lastClickIsOperator: false
        });
        console.log(this.state);
    }    

    changeState = value => {
        if (this.state.input){
            this.setState({
                ...this.state,
                input: (-1 * parseFloat(this.state.input)).toString(),
                history: this.state.history + "*(-1)",
                lastClickIsOperator: false
            })
        }
        console.log(this.state);
    }

    calculatePercentage = value => {
        if (this.state.input){
            this.setState({
                ...this.state,
                input: (parseFloat(this.state.input)/100).toString(),
                history: this.state.history + "/100",
                lastClickIsOperator: false
            })
        }
        console.log(this.state);
    } 

    addZero = value => {
        if (this.state.input){
            this.setState({
                ...this.state,
                input: this.state.input + value,
                history: this.state.history + value,
                lastClickIsOperator: false
            })
        }
        console.log(this.state);
    }

    addDecimal = value => {
        if(this.state.input.indexOf(".") === -1){
            this.setState({
                ...this.state,
                input: this.state.input + value,
                history: this.state.history + value,
                lastClickIsOperator: false
            })
        }
        console.log(this.state);
    }

    addOperator = value => {
        // let historyValue = this.state.history + value;
        // if(this.state.input && this.state.lastClickIsOperator){
        //     historyValue = this.state.history.slice(0, -1) + value;  
        // }

        if(this.state.input){

            if (this.state.previousNumber){
                this.setState({
                    ...this.state,
                    operator: value,
                    input: '',
                    previousNumber: this.evaluate(),
                    lastClickIsOperator: true
                })

            }else{
                this.setState({
                    ...this.state,
                    operator: value,
                    input: '',
                    previousNumber: this.state.input,
                    lastClickIsOperator: true
                })                

            }
        }
    }

    evaluate(){
        console.log(this.state.operator);
        switch(this.state.operator){
            case "+":
                return (parseFloat(this.state.input) + parseFloat(this.state.previousNumber)).toString();
            case "−":
                return (parseFloat(this.state.previousNumber) - parseFloat(this.state.input)).toString();    
            case "×": 
                return (parseFloat(this.state.input) * parseFloat(this.state.previousNumber)).toString();
            case "÷":
                if(this.state.input === "0"){
                    alert("Divide by 0 error");
                      return "0";
                } else {
                    return (parseFloat(this.state.previousNumber).div(this.state.input)).toString();
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
                            <Button clicked={this.clearInput} color='light'>C</Button>
                            <Button clicked={this.changeState} color='light'>+/-</Button>
                            <Button clicked={this.calculatePercentage} color='light'>%</Button>
                            <Button clicked={this.addOperator} color='yellow'>&#247;</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button clicked={this.addInput}>7</Button>
                            <Button clicked={this.addInput}>8</Button>
                            <Button clicked={this.addInput}>9</Button>
                            <Button clicked={this.addOperator} color='yellow'>&#215;</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button clicked={this.addInput}>4</Button>
                            <Button clicked={this.addInput}>5</Button>
                            <Button clicked={this.addInput}>6</Button>
                            <Button clicked={this.addOperator} color='yellow'>&#8722;</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button clicked={this.addInput}>1</Button>
                            <Button clicked={this.addInput}>2</Button>
                            <Button clicked={this.addInput}>3</Button>
                            <Button clicked={this.addOperator} color='yellow'>+</Button>
                        </div>
                        <div className={classes.BtnRow}>
                            <Button clicked={this.addZero} size='big'>0</Button>
                            <Button clicked={this.addDecimal}>.</Button>
                            <Button  color='yellow'>=</Button>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Calculator;