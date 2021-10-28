import { useState, useEffect } from "react";
import Cookies from "js-cookie";
export default function Room(props) {
  const [newRoom, setNewRoom] = useState({
    name: "",
  });

  async function addRoom(name) {
    // const response = await fetch(`/api_v1/rooms/`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newRoom),
    // });
    // props.setRoomList([...props.roomList, newRoom]);
    // // console.log({ response });
    // if (response.ok) {
    //   setNewRoom(name);
    //   props.setCurrentRoom(newRoom);
    // }
    const newRoom = { name };
    const response = await fetch(`/api_v1/rooms/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(newRoom),
    });
    props.setRoomList([...props.roomList, newRoom]);

    if (response.ok) {
    }
  }

  function handleChange(e) {
    setNewRoom(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addRoom(newRoom);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-room-form">
        <label htmlFor="new-room"></label>
        <input
          type="text"
          name="name-for-newroom"
          placeholder="New Room"
          onChange={handleChange}
        />
        <button className="room-add-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
