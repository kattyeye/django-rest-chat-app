import { useState, useEffect } from "react";

export default function RoomList(props) {
  // const [roomList, setRoomList] = useState([]);

  const roomListTitlesHTML = props.roomList.map((room) => (
    <aside>
      <div class="btn-group-vertical" style={{ padding: "10px" }}>
        <button
          class="btn btn-info btn-large"
          type="button"
          onClick={props.fetchMessages}
        >
          {props.roomList.name} {/* go back and change */}
        </button>
      </div>
    </aside>
  ));

  return <ul>{roomListTitlesHTML}</ul>;
}
