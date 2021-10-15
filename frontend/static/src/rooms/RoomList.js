export default function RoomList(props) {
  // const [messageList, setMessageList] = useState([]);

  const roomListTitlesHTML = props.roomList.map((room) => (
    <li class="btn-group-vertical" style={{ padding: "10px" }}>
      <button
        value={room.id}
        class="btn btn-info btn-large"
        type="button"
        onClick={props.fetchMessagesForThatRoom}
      >
        {room.name}
      </button>
    </li>
  ));

  return (
    <aside
      style={{
        width: "25%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <ul>{roomListTitlesHTML}</ul>
    </aside>
  );
}
