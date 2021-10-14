import "./App.css";
import { useState, useEffect } from "react";
import RoomList from "./rooms/RoomList";
import Room from "./rooms/Room";
import MessageList from "./messages/MessageList";

function App() {
  const [roomList, setRoomList] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      const response = await fetch(`/api_v1/rooms/`);
      const data = await response.json();
      console.log("data", data);
      setRoomList(data);
    }
    fetchRooms();
  }, []);

  let messages;
  if (selection) {
    messages = roomList.find((message) => message === selection);
  }

  function selectRoom(text) {
    setSelection(text);
  }

  return (
    <div className="App">
      {" "}
      <RoomList roomList={roomList} selectRoom={selectRoom} />
      <Room roomList={roomList} />
      {selection && <MessageList />}
    </div>
  );
}

export default App;
