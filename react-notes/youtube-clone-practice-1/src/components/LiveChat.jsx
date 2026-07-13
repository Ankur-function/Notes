import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/slices/chatSlice";

const LiveChat = () => {

    const dispatch = useDispatch();
    const messages = useSelector((store)=>(store.chat.messages));

    console.log(messages);
    

    useEffect(()=>{

        setInterval(()=>{
            dispatch(addMessage({
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJxZDBwUti2z0HTfBWcH0BWXwx39sxJum8ilY7Lfb7Q&s=10",
                name:'Ankur',
                text:'studying live chat feature in react'
            }))
        },1000)


    },[])
    return (
        <div className="live-chat-panel">
            {/* Top Bar Header */}
            <div className="chat-header">
                <h4>Top Chat</h4>
            </div>

            {/* Scrollable Chat Messages Window Box Area */}
            <div className="chat-messages-container">
                <div className="chat-message-placeholder">
                    {messages.map((msg)=>{
                        return (
                            <div>
                            {
                                <img 
          className="profile-icon" 
          src={msg.img} 
          alt="profile-logo"
        />
                            }
                            {msg.name},
                            {msg.text}
                            </div>
                        )
                    })}
                    <span>Chat messages will stream here...</span>
                </div>
            </div>

            {/* Bottom Text Input Box Footer Area */}
            <div className="chat-footer">
                <input type="text" placeholder="Chat..." className="chat-input"/>
                <button className="chat-send-btn">Send</button>
            </div>
        </div>
    )
}

export default LiveChat;
