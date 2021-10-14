import { useState } from "react";

function ChannelList() {
  const [channelList, setChannelList] = useState([]);

  function fetchChannels() {
    fetch("");
  }

  fetchMessages();
  setInterval(fetchMessages, 3000);

  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
