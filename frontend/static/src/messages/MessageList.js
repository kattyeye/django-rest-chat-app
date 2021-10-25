export default function MessageList(props) {
  return (
    <ul>
      {/* {props.room.name} */}
      {props.messageList.map((message) => (
        <li key={message.id}>
          <p style={{ padding: "10px" }} value={message.id}>
            {message.username}: {message.text}
          </p>
          <button type="button" onClick={props.handleEdit}>
            Edit
          </button>
          <button type="button" onClick={props.handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
