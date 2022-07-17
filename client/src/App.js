import React, {useState} from 'react';
import './App.css';
// import TypeMessage from './Components/TypeMessage';
import Chat from './Components/Chat';
// import CreateRoom from './Components/CreateRoom';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const App = () => {
  const [showChat, setShowChat] = useState(false);

  //join room
  const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [roomName, setRoomName] = useState("");

    const joinRoom = () => {
        if (username !== "" && room !== ""){
            socket.emit("join_room", room);
        }
        setShowChat(true);
    }

    //show or hide chat
  
  return (
    <div className="App">
      <h1 className='header'><u>REAL TIME CHAT</u></h1>
          <div className="roomList">
            {/* <CreateRoom /> */}
            { !showChat ? (
                  <div className="joinChatContainer">
                          <h1>Join A Room!</h1>
                          <input type="text" placeholder="Room Name..." onChange={(event)=>{setRoomName(event.target.value)}} />
                          <input type="text" placeholder="Username..." onChange={(event)=>{setUsername(event.target.value)}} />
                          <input type="text" placeholder="Room ID..." onChange={(event)=>{setRoom(event.target.value)}} />
                          <button onClick={joinRoom}>Join Room</button>
                  </div>
            ) : (
                  <Chat socket={socket} roomName={roomName} username={username} room={room} />
            )}
          </div>
    </div>
  );
}

export default App;
