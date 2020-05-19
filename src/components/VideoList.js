//functional component why?
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos})=>{
//we destructured videos from video.props
    const renderedList = videos.map((video)=>{
        return <VideoItem video={video}/>
    })

    return(
            <div className="ui relaxed divided list">{renderedList}</div>
        )
};

export default VideoList;

