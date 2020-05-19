import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './videoDetail';

import youtube from './../apis/youtube';


const KEY = `AIzaSyDLFESflngH2epod3QPLfrDDQki-96PIsQ`;

class App extends React.Component{
    //start as an empty array not as a null variable or something. 
    state = {videos: [], selectedVideo : null};

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
        this.setState({videos: response.data.items, selectedVideo:null});
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    }

    render(){
        return (
          <div className="ui container">
            <SearchBar callMeWhenSubmitted={this.onTermSubmit}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} onVideoSelect = {this.onVideoSelect} />
            
          </div>
        );
        
    }
}

export default App;


// callMeWhenSubmitted couldve been called same as on Term Submit