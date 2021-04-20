import React, {Component} from 'react'

export default class FilterString extends Component{
    constructor(){
        super()
        this.state = {
            unfilteredArray: ["Eve", "Alice", "Bob", "Ivan", "Gerth"],
            userInput: '',
            filteredArray: []
        }
        

    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filteredArray(prop){
        let names = this.state.unfilteredArray
        let filteredNames = []
        for(let i = 0; i < names.length; i++){
            if(names[i].includes(prop)){
                filteredNames.push(names[i])
            }
        }
        this.setState({filteredArray: filteredNames})
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filteredArray(this.state.userInput)}></button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}