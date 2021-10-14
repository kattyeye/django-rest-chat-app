import { useState, useEffect } from "react";

export default function RoomList() {
  const [roomList, setRoomList] = useState([]);

  // function addRoom(name) {
  //   const newRoom = { name };
  //   const response = fetch(
  //     `https://django-rest-chat-app-kattyeye.herokuapp.com/api_v1/rooms/`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newRoom),
  //     }
  //   );
  //   if (response.ok) {
  //     localStorage.setRoomList("room", JSON.stringify({ ...roomList }));
  //   }
  // }
  useEffect(() => {
    async function fetchRooms() {
      const response = await fetch(
        `https://django-rest-chat-app-kattyeye.herokuapp.com/api_v1/rooms/`
      );
      const data = await response.json();
      console.log("data", data);
      setRoomList(data);
    }
    fetchRooms();
  }, []);

  return (
    <div>
      <ul>
        <li>
          <button type="button" className="room-choice">
            {roomList.name}
          </button>
        </li>
      </ul>
    </div>
  );
}
