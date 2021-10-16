export default function MessageList(props) {
  const messageListHTML = props.messageList.map((message) => (
    <div>
      <p style={{ padding: "10px" }}>
        {message.user}: {message.text}
      </p>
    </div>
  ));

  return <ul>{messageListHTML}</ul>;
}
