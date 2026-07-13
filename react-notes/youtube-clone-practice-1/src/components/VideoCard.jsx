const VideoCard = ({data}) => {

    const {snippet,statistics} = data;
    
    
    return (
        <div className="yt-video-card">
            <img className="thumbnail-img" src={snippet.thumbnails.medium.url} alt="youtube-thumbnail"></img>
        <div className="video-details">
        <h4 className="video-title">{snippet?.title}</h4>
        <p className="channel-name">{snippet?.channelTitle}</p>
        <span className="view-count">{(statistics?.viewCount)}</span>
      </div>
        </div>
    )
}

export default VideoCard