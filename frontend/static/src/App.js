import "./App.css";
import { useState, useEffect } from "react";
import RoomList from "./rooms/RoomList";
import RoomForm from "./rooms/RoomForm";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";
import RegistrationForm from "./registration/RegistrationForm";
import Cookies from "js-cookie";
import Login from "./login/Login.js";

function App() {
  const [roomList, setRoomList] = useState([]);
  const [selection, setSelection] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [currentRoom, setCurrentRoom] = useState({
    name: "",
    id: null,
  });

  useEffect(() => {
    // async function getUser() {
    //   if (Cookies.get("csrftoken")) {
    //     let currentUser = setUser();
    //   }
    // }
    async function fetchRooms() {
      const response = await fetch(`/api_v1/rooms/`);
      const data = await response.json();
      console.log("rooms", data);
      setRoomList(data);
    }
    fetchRooms();
  }, []);

  async function fetchMessagesForThatRoom(event) {
    const response = await fetch(`/api_v1/rooms/${event.target.value}/`);
    const data = await response.json();
    console.log("currentRoom", data);
    setCurrentRoom(data);
    setMessageList(data.messages);
  }

  // let messages;
  // if (selection == "") {
  //   messages = roomList.find((message) => message === selection);
  // }

  // function selectRoom(text) {
  //   setSelection(text);
  // }

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
  // const handleLogin = async (user) => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-CSRFToken": Cookies.set("csrftoken"),
  //     },
  //     body: JSON.stringify(user),
  //   };

  //   const response = await fetch("/rest-auth/registration/", options).catch(
  //     handleError
  //   );
  //   if (!response === true) {
  //     console.warn(response);
  //   } else {
  //     const data = await response.json();
  //     Cookies.set("Authorization", `Token ${data.key}`);
  //   }
  // };

  return (
    <div className="chatApp">
      <nav className="nav-bar">
        <button>Logout</button>
      </nav>
      {user ? (
        <div className="app-container">
          <section className="room-list-container">
            Rooms
            <RoomList
              roomList={roomList}
              fetchMessagesForThatRoom={fetchMessagesForThatRoom}
            />
            <RoomForm
              roomList={roomList}
              setRoomList={setRoomList}
              fetchMessagesForThatRoom={fetchMessagesForThatRoom}
              setCurrentRoom={setCurrentRoom}
            />
          </section>
          <section className="message-list-container">
            <MessageList messageList={messageList} roomList={roomList} />
            <MessageForm
              currentRoom={currentRoom}
              messageList={messageList}
              setMessageList={setMessageList}
              roomList={roomList}
            />
          </section>
        </div>
      ) : (
        <RegistrationForm
          user={user}
          setUser={setUser}
          handleRegistration={handleRegistration}
          handleError={handleError}
        />
      )}
      {/* <Login handleLogin={handleLogin} handleError={handleError} /> */}
    </div>
  );
}

export default App;
