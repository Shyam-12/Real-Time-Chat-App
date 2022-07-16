import React from "react";
import CreateRoom from './CreateRoom';
const RoomList = () => {
    return (
        <div>
            <h2>Your Rooms: </h2>
            <p>#Development</p>
            <p>#Blockchain</p>
            <CreateRoom />
        </div>
    );
}

export default RoomList;