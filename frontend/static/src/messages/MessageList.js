export default function MessageList(props) {
  return (
    <ul>
      {/* {props.room.name} */}
      {props.messageList.map((message) => (
        <li key={message.id}>
          <p style={{ padding: "10px" }}>
            {message.user}: {message.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
