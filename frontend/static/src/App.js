import "./App.css";
import { useState, useEffect } from "react";
import RoomList from "./rooms/RoomList";
import RoomForm from "./rooms/RoomForm";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";
import RegistrationForm from "./registration/RegistrationForm";
import Cookies from "js-cookie";

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

  const handleError = (err) => {
    console.warn(err);
  };
  const handleRegistration = async (user) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(user),
    };

    const response = await fetch("/rest-auth/registration/", options).catch(
      handleError
    );
    if (!response === true) {
      console.warn(response);
    } else {
      const data = await response.json();
      Cookies.set("Authorization", `Token ${data.key}`);
    }
  };

  return (
    <div className="chatApp">
      {" "}
      <RoomList
        roomList={roomList}
        selectRoom={selectRoom}
        fetchMessagesForThatRoom={fetchMessagesForThatRoom}
      />
      <RoomForm
        roomList={roomList}
        fetchMessagesForThatRoom={fetchMessagesForThatRoom}
      />
      {selection && <MessageList messageList={messageList} />}
      {selection && <MessageForm messageList={messageList} />}
      <RegistrationForm
        handleRegistration={handleRegistration}
        handleError={handleError}
      />
    </div>
  );
}

export default App;
