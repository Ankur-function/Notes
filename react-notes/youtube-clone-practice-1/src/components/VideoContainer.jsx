import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import mockVideoData from "../utils/mockVideoData";
import { Link } from "react-router-dom";

const VideoContainer = () => {

    const [videos,setVideos] = useState();

    useEffect(()=>{
        fetchVideoData()
    },[]);

    const fetchVideoData = async () => {
        const data = await mockVideoData.map((item)=>item);
        setVideos(data);        
    }
    return (
        <div className="video-grid-container">
          {videos?.map((item)=>{ return <Link to={'/watch?v='+item.id}><VideoCard data={item} key={item.id}/></Link>})}
        </div>
    )
}

export default VideoContainer