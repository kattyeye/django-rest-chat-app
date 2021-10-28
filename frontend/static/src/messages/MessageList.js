import Cookies from "js-cookie";
import { useState } from "react";
import Room from "../rooms/RoomForm";
import MessageItem from "./MessageItem";

export default function MessageList(props) {
  const [isEditing, setIsEditing] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");

  function deleteMessage(event) {
    const id = event.target.value;

    fetch(`api_v1/messages/${id}`, {
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
  async function editMessage(id, newText) {
    const index = props.messageList.findIndex((message) => message.id === id);
    const updatedMessages = [...props.messageList];
    updatedMessages[index] = newText;
    setEditedMessage(updatedMessages);

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },

      body: JSON.stringify(updatedMessages[index]),
    };
    const response = await fetch(`/api_v1/messages/${id}/`, options);
    if (!response) {
      console.log(response);
    } else {
      const data = await response.json();
      //   setNewMessage(data);
    }
  }
  return (
    <>
      {/* <h3>{props.roomList.room}</h3> */}
      <ul>
        {/* {props.room.name} */}
        {/* {props.messageList?.map((message) => (
        <li key={message.id}>
          <p style={{ padding: "10px" }} value={message.id}>
            {message.username}: {message.text}
          </p>
          <button type="button" value={message.id} onClick={handleEdit}>
            Edit
          </button>
          <button type="click" value={message.id} onClick={deleteMessage}>
            Delete
          </button>
        </li>
      ))} */}
        {props.messageList.map((message) => (
          <MessageItem
            key={message.id}
            {...message}
            deleteMessage={deleteMessage}
            editMessage={editMessage}
          />
        ))}
      </ul>
    </>
  );
}
