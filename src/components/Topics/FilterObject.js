import React, {Component, useReducer} from 'react'

export default class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            unfilteredArray: [{
                name: 'Gavin',
                age: 21,
                favoriteNumber: 12,
                relationshipStatus: 'Engaged'
            },
            {
                name: 'Naomi',
                age: 20,
                favoriteNumber: 3,
                relationshipStatus: 'Engaged'
            },
            {
                name: 'Guy',
                favoriteNumber: 20,
                relationshipStatus: 'Single'
            }],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filteredArray(prop){
        let people = this.state.unfilteredArray
        let filteredPeople = []

        for(let i = 0; i < people.length; i++){
            if(people[i].hasOwnProperty(prop)){
                filteredPeople.push(people[i])
            }
        }
        this.setState({filteredArray: filteredPeople})
    }


    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={(e)=> this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={()=> this.filteredArray(this.state.userInput)}>Confirm</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}