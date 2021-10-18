export default function RoomList(props) {
  // const [messageList, setMessageList] = useState([]);

  const roomListTitlesHTML = props.roomList.map((room, i) => (
    <li
      key={room.id}
      className="btn-group-vertical"
      style={{ padding: "10px" }}
    >
      <button
        value={room.id}
        className="room-list-buttons"
        type="button"
        onClick={props.fetchMessagesForThatRoom}
      >
        # {room.name}
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
