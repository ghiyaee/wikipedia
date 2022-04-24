import React from "react";
import VideoItem from "./VideoItme";
import './VideoList.css'
const ListVideos = ({videos,select}) => {
    const renderList = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} select={select} />
    })
    return (
        <div className="item">
            {renderList}
       </div>
    )

}

export default ListVideos