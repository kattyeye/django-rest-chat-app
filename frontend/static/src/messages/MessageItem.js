import { useState } from "react";

function MessageItem(props) {
  const [newText, setNewText] = useState(props.text);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setNewText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.editMessage(props.id, newText);
    setIsEditing(false);
  }

  const editHTML = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newText"
        value={newText}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );

  const previewHTML = (
    <>
      <p htmlFor={props.id}></p>
      <p htmlFor={props.id}>
        {props.username}: {props.text}
      </p>
      <button type="button" onClick={() => setIsEditing(true)}>
        Edit
      </button>
      <button type="button" onClick={() => props.deleteMessage(props.id)}>
        Delete
      </button>
    </>
  );

  return <li>{isEditing ? editHTML : previewHTML}</li>;
}

export default MessageItem;
