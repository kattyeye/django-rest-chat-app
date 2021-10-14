import "./App.css";
import { useState, useEffect } from "react";
import RoomList from "./rooms/RoomList";
import RoomForm from "./rooms/RoomForm";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";

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
    setInterval(fetchRooms(), 3000);
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
      <RoomForm roomList={roomList} />
      {selection && <MessageList />}
      {selection && <MessageForm />}
    </div>
  );
}

export default App;
