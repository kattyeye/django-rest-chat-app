import { useState, useEffect } from "react";
import Room from "../rooms/RoomForm";
import Cookies from "js-cookie";

export default function MessageForm(props) {
  const [newMessage, setNewMessage] = useState({
    text: "",
  });

  async function addMessage(text) {
    console.log({ text });
    const newMessage = { text, chat_room: props.currentRoom.id };
    const response = await fetch(`/api_v1/messages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(newMessage),
    });
    console.log({ response });
    props.setMessageList([...props.messageList, newMessage]);

    if (response.ok) {
    }
  }
  //   async function handleEdit(e) {
  //     const options = {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-CSRFToken": Cookies.get("csrftoken"),
  //       },

  //       body: JSON.stringify(newMessage),
  //     };
  //     const response = await fetch(
  //       `/api_v1/messages/${e.target.value}/`,
  //       options
  //     );
  //     if (!response) {
  //       console.log(response);
  //     } else {
  //       const data = await response.json();
  //       //   setNewMessage(data);
  //     }
  //   }
  function handleDelete(event) {
    const id = event.target.dataset.id;

    fetch(`api_v1/messages/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Oops, something went wrong!", response.status);
      }
      event.target.parentNode.remove();
    });
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
