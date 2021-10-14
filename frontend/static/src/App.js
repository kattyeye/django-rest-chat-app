import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import RoomList from "./rooms/RoomList";

function App() {
  const [roomList, setRoomList] = useState([]);

  // useEffect(() => {
  //   async function fetchRooms() {
  //     const response = await fetch(
  //       `https://django-rest-chat-app-kattyeye.herokuapp.com/api_v1/rooms/`
  //     );
  //     const data = await response.json();
  //     console.log({ data });
  //     setRoomList(data);
  //   }
  //   fetchRooms();
  // }, []);

  return (
    <div className="App">
      {" "}
      <RoomList />
    </div>
  );
}

export default App;
