import { useState, useEffect } from "react";

export default function MessageForm(props) {
  const [newMessage, setNewMessage] = useState({
    text: "",
  });

  function addMessage(text) {
    const newMessage = { text };
    const response = fetch(`/api_v1/messages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });
    if (response.ok) {
      setNewMessage("text", JSON.stringify({ newMessage }));
    }
  }

  function handleChange(e) {
    setNewMessage(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addMessage(newMessage);
  }

  return (
    <div>
      <label htmlFor="sendingmessages">MessageForm</label>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="write a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
