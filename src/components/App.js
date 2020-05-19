import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

import youtube from './../apis/youtube';


const KEY = `AIzaSyDLFESflngH2epod3QPLfrDDQki-96PIsQ`;

class App extends React.Component{
    //start as an empty array not as a null variable or something. 
    state = {videos: []};

    onTermSubmit= async (term)=>{
        const response = await youtube.get("/search", {
          params: {
            part: "snippet",
            maxResults: 5,
            key: KEY,
            type: "video",
            q:term
          }
        });
        this.setState({videos: response.data.items});
    }
    render(){
        return (
          <div className="ui container">
            <SearchBar callMeWhenSubmitted={this.onTermSubmit}/>
            <VideoList videos={this.state.videos} />
          </div>
        );
        
    }
}

export default App;


// callMeWhenSubmitted couldve been called same as on Term Submit