import { useState, useEffect } from "react";

export default function MessageList() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch(`/api_v1/messages/`);
      const data = await response.json();
      console.log("data", data);
      setMessageList(data);
    }
    fetchMessages();
  }, []);

  const messageListHTML = messageList.map((message) => (
    <div>
      <p style={{ padding: "10px" }}>{message.text}</p>
    </div>
  ));

  return <ul>{messageListHTML}</ul>;
}
