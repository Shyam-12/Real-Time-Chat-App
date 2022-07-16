import React, {useState} from 'react';
import './App.css';
import RoomList from './Components/RoomList';
// import TypeMessage from './Components/TypeMessage';
import Chat from './Components/Chat';

const App = () => {
  const [showChat, setShowChat] = useState(false);

  //join room
  const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [roomName, setRoomName] = useState("");

    const joinRoom = () => {
        if (username !== "" && room !== ""){

        }
        setShowChat(true);
    }

    //show or hide chat
  
  return (
    <div className="App">
      <h1>REAL TIME CHAT</h1>
          <div className="roomList">
            <RoomList />
            { !showChat ? (
                  <div className="joinChatContainer">
                          <h1>Join A Room!</h1>
                          <input type="text" placeholder="Room Name..." onChange={(event)=>{setRoomName(event.target.value)}} />
                          <input type="text" placeholder="Username..." onChange={(event)=>{setUsername(event.target.value)}} />
                          <input type="text" placeholder="Room ID..." onChange={(event)=>{setRoom(event.target.value)}} />
                          <button onClick={joinRoom}>Join Room</button>
                  </div>
            ) : (
                  <Chat roomName={roomName}/>
            )}
          </div>
    </div>
  );
}

export default App;
