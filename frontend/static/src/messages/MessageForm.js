import { useState, useEffect } from "react";
import Room from "../rooms/RoomForm";

export default function MessageForm(props) {
  const [newMessage, setNewMessage] = useState({
    text: "",
  });

  async function addMessage(text) {
    console.log({ text });
    const newMessage = { text, room: props.currentRoom };
    const response = await fetch(`/api_v1/messages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });
    console.log({ response });
    props.setMessageList([...props.messageList, newMessage]);

    if (response.ok) {
    }
  }

  function handleChange(e) {
    setNewMessage(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addMessage(newMessage, props.roomList);
  }

  return (
    <div className="message-form-container">
      <label htmlFor="sendingmessages"></label>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Write a message"
        />
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
