import React from "react";
const VideoItem = ({ video ,select}) => {
    return(
    <div onClick={()=>select(video)}>
            < img src={video.snippet.thumbnails.medium.url} />
            {video.snippet.title}
               <i className="close link red icon"></i>
        </div>
    )
}
export default VideoItem