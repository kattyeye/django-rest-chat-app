import { useState, useEffect } from "react";

export default function Room(props) {
  const [newRoom, setNewRoom] = useState({
    name: "",
  });

  function addRoom(name) {
    const newRoom = { name };
    const response = fetch(`/api_v1/rooms/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    console.log({ newRoom });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-room-form">
        <label htmlFor="new-room">New Room</label>
        <input
          type="text"
          name="name-for-newroom"
          placeholder="Name for new room here."
          onChange={handleChange}
        />
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
}
