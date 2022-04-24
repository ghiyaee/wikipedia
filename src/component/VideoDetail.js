import React from "react";
import './VideoDetail.css'
const VideoDetail = ({ video }) => {
    
 const link  = `https://www.youtube.com/embed/${video?.id?.videoId}`
    return (
        <div>
            <iframe className="ifrm" src={link} />
        </div>
    )
}
export default VideoDetail;