import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};
    onInputChange = (event) =>{
        this.setState({term: event.target.value});
    };
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.callMeWhenSubmitted(this.state.term);
        //TODO: call this callback from parent

    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label>Video Search</label>
                        <input type ="text" 
                        value= {this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;


// AIzaSyDLFESflngH2epod3QPLfrDDQki-96PIsQ
