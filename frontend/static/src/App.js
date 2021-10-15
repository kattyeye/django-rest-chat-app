import "./App.css";
import { useState, useEffect } from "react";
import RoomList from "./rooms/RoomList";
import RoomForm from "./rooms/RoomForm";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";

function App() {
  const [roomList, setRoomList] = useState([]);
  const [selection, setSelection] = useState([]);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      const response = await fetch(`/api_v1/rooms/`);
      const data = await response.json();
      console.log("data", data);
      setRoomList(data);
    }
    fetchRooms();
  }, []);

  async function fetchMessagesForThatRoom(event) {
    // console.log("event firing");
    const response = await fetch(`/api_v1/rooms/${event.target.value}/`);
    const data = await response.json();
    console.log("data", data);
    setMessageList(data.messages);
  }

  let messages;
  if (selection) {
    messages = roomList.find((message) => message === selection);
  }

  function selectRoom(text) {
    setSelection(text);
  }

  return (
    <div className="chatApp">
      {" "}
      <RoomList
        roomList={roomList}
        selectRoom={selectRoom}
        fetchMessagesForThatRoom={fetchMessagesForThatRoom}
      />
      <RoomForm roomList={roomList} />
      {selection && <MessageList messageList={messageList} />}
      {selection && <MessageForm messageList={messageList} />}
    </div>
  );
}

export default App;
