import React, { useState } from "react";
import '../App.css';
import RoomList from "./RoomList";
const CreateRoom = () => {
    const [inputText, setInputText] = useState("");
    const [createRoom, setCreateRoom] = useState([]);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitRoomHandler  = (e) => {
        e.preventDefault();
        setCreateRoom([
            ...createRoom, {text: inputText, id: Math.random()}
        ])
        setInputText("");
    };

    return (
        <div className="add-room">
            <h2>Your Rooms: </h2>
            {/* <button className="room-btn">#Development</button> */}
            {/* <button className="room-btn">#Blockchain</button> */}
            <RoomList createroom={createRoom}/>
            <input value={inputText} type="text" placeholder="Create A Room..." onChange={inputTextHandler} />
            <button onClick="{submitRoomHandler}">+</button>
        </div>
    );
}

export default CreateRoom;