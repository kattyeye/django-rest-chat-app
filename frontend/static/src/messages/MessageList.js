import Cookies from "js-cookie";
import { useState } from "react";
import Room from "../rooms/RoomForm";
import MessageItem from "./MessageItem";

export default function MessageList(props) {
  const [editedMessage, setEditedMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  async function deleteMessage(event) {
    fetch(`api_v1/messages/${event.target.value}/`, {
      method: "DELETE",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Oops, something went wrong!", response.status);
      }
      event.target.parentNode.remove();
    });
  }

  async function editMessage(event) {
    event.preventDefault();
    const updatedMessage = {
      text: editedMessage,
      chat_room: props.room,
    };
    // console.log("text", props.messageList[id].text);
    // // const index = props.messageList.findIndex((message) => message.id === id);
    // const updatedMessages = [...props.messageList];
    // updatedMessages[event.target.value] = text;
    // setEditedMessage(updatedMessages);
    const updatedMessages = { ...props.messageList };
    updatedMessages[event.target.value] = updatedMessage;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },

      body: JSON.stringify(updatedMessage),
    };
    const response = await fetch(`/api_v1/messages/${isEditing}/`, options);
    if (!response) {
      console.log(response);
    } else {
      const data = await response.json();
      setIsEditing(false);
      setEditedMessage(updatedMessage.text);
    }
  }
  function handleChange(event) {
    setEditedMessage(event.target.value);
  }

  return (
    <>
      <h3># {props.currentRoom.name}</h3>
      <ul>
        {isEditing && (
          <form onSubmit={editMessage}>
            <input
              type="text"
              name="newText"
              value={props.id}
              onChange={handleChange}
            />
            <button type="submit">Update</button>
          </form>
        )}
        {/* {props.room.name} */}
        {props.messageList?.map((message) => (
          <li key={message.id}>
            <p style={{ padding: "10px" }} value={message.id}>
              {message.username}: {message.text}
            </p>
            <button
              type="button"
              value={message.id}
              onClick={() => setIsEditing(message.id)}
            >
              Edit
            </button>
            <button type="click" value={message.id} onClick={deleteMessage}>
              Delete
            </button>
          </li>
        ))}
        {/* {props.messageList.map((message) => (
          <MessageItem
            key={message.id}
            {...message}
            deleteMessage={deleteMessage}
            // editMessage={editMessage}
          />
        ))} */}
      </ul>
    </>
  );
}
