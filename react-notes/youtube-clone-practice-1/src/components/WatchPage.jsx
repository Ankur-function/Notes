import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/slices/appSlice"
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    console.log(searchParams.get('v'));
    

    useEffect(()=>{
        dispatch(toggleMenu());
    },[]);

    return (
  <div className="watch-page-container"> {/* Main wrapper container */}
    
    {/* Layout Row split wrapper */}
    <div className="watch-main-layout">
      
      {/* LEFT COLUMN: Video Player & Comments */}
      <div className="watch-left-column">
        <div className="video-player-wrapper">
          <iframe 
            className="yt-iframe"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/oNtoUFYqriM?si=23Qr8dNC__hJLbty" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
          ></iframe>
        </div>
        
        {/* Comments now live under the video player inside the left side stack */}
        <CommentContainer />
      </div>

      {/* RIGHT COLUMN: Live Chat side panel */}
      <div className="watch-right-column">
        <LiveChat />
      </div>

    </div>

  </div>
)

}

export default WatchPage