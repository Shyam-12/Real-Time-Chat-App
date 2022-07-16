import React, { useState } from "react";

const CreateRoom = () => {
    const [createRoom, setCreateRoom] = useState("");

    const newRoom = ()=> {
        <p>{createRoom}</p>
    }

    return (
        <div>
            <input type="text" placeholder="Create A Room..." onChange={(event)=> {(setCreateRoom(event.target.value))}} />
            <button onClick={newRoom}>+</button>
        </div>
    );
}

export default CreateRoom;