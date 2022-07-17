import React from "react";
import '../App.css';
import CreateRoom from "./CreateRoom";

const RoomList = ({createroom}) => {
    console.log(createroom);
  return (
        <div>
            <button className="room-btn">Development</button>
            <button className="room-btn">BlockChain</button>
            <button>{createroom.map((room)=> (
                    <CreateRoom />
            ))}</button>
        </div>
  );
}

export default RoomList;