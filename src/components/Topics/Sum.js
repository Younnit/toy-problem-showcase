import React, {Component} from 'react'

export default class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    change1(val){
        this.setState({number1: val})
    }

    change2(val2){
        this.setState({number2: val2})
    }

    addSum(a, b){
        let orange = Number(a) + Number(b)
        this.setState({sum: orange})
    }
    
    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e)=> {this.change1(e.target.value)}}/>
                <input className="inputLine" onChange={(p) => {this.change2(p.target.value)}}/>
                <button className="confirmationButton" onClick={() => this.addSum(this.state.number1, this.state.number2)}>Confirm</button>
                <span className="resultsBox">{JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}