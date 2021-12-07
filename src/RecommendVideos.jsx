import React from 'react';
import './RecommendVideos.css';
import VideoCard from './VideoCard';

function RecommendVideos() {
    return (
        <div className="recommendVideos">
            <h1>Recommended</h1>
            <div className="recommendVideos_video">
                <VideoCard/>
            </div>
        </div>
    )
}

export default RecommendVideos
