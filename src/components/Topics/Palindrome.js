import React, {Component} from 'react'

export default class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    palindromeCheck(prop){
        let forwards = prop;
        let backwards = prop;
        backwards = backwards.split('')
        backwards = backwards.reverse()
        backwards = backwards.join('')

        if(forwards === backwards){
            this.setState({palindrome: 'true'})
        }else{
            this.setState({palindrome: 'false'})
        }
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={()=>this.palindromeCheck(this.state.userInput)}>Confirm</button>
                <span className="resultsBox">{JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}