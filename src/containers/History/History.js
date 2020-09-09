import React, {Component} from 'react';
import classes from './History.module.css';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';
import Record from '../../components/Record/Record';

class History extends Component{

    state = {
        results: []
    }    

    componentDidMount() {
        axios.get("https://loki-calc.firebaseio.com/results.json").then(
            response => {
                const resultData = []
                const checkDate = new Date();
                checkDate.setTime(checkDate.getTime() -  (2 * 24 * 60 * 60 * 1000));
                for (let key in response.data){
                    console.log(response.data[key].curTime);
                    if (Date.parse(response.data[key].curTime) > checkDate){
                        resultData.push({...response.data[key], id: key});
                    }
                }
                this.setState({
                    ...this.state,
                    results: resultData
                })
            }
        )
    }

    render(){
        const history = this.state.results.map(res => {
            return (<Record key={res.id} expression={res.history} output={res.result} />)
        })        
        return(
            <Aux>
                <h1 className={classes.Header}>
                    History Last 2 Days 
                </h1>
                <div className={classes.ResultWrapper}>
                    {history}
                </div>
            </Aux>

        )
    }
}

export default History;