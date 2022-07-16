import React, {useState} from "react";


    function Chat({roomName}){
        const [currentMessage, setCurrentMessage] = useState("");
        const [messageList, setMessageList] = useState([]);
        const sendMessage = async ()=> {
            if (currentMessage !== ""){
                const messageData = {
                    room: "",
                    userName: "",
                    message: "",
                    time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
                }
            }
        }

    return (
        <div className="chat-window">
                      <div className="chat-header">
                          <p>{roomName}</p>
                      </div>
                      <div className="chat-body">

                      </div>
                      <div className="chat-footer">
                          <input type="text" placeholder="Hi..." onChange={(event)=>{setCurrentMessage(event.target.value)}} />
                          <button>&#9658;</button>
                      </div>
                  </div>
    );
}

export default Chat;