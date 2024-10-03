// Video Card
import React from "react";
import "./VideoCard.css";

const VideoCard = ({ videoUrl, description, videoTitle }) => {
  return (
    <div className="video-card">
      <div className="video-wrapper">
        <iframe
          src={videoUrl}
          title={videoTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h3>{videoTitle}</h3>
      <p>{description}</p>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        Watch on YouTube
      </a>
    </div>
  );
};

export default VideoCard;
