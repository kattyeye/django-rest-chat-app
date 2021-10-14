import { useState } from "react";

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
    if (response.ok) {
      localStorage.setRoomList("room", JSON.stringify({ ...props.roomList }));
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
      <form onSubmit={handleSubmit}>
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
