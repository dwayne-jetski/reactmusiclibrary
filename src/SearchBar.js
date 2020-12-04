import React from 'react';

class CreateSearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInput: '',

        }
    }

    logKeyUp(){
        console.log('#searchbar'.valueOf())
    }

    updateSearch(event){
        this.setState({userInput: event.target.value.substr(0, 20)});
    }

    
    render(){
        return(
            <div>
                <input type="text" placeholder="Search..." /* value={this.state.userInput} */ onKeyUp={this.updateSearch.bind(this)}></input>
            </div>
        )}
}


export default CreateSearchBar;