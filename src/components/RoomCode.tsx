import CopyImg from "../assets/images/copy.svg";

import "../styles/room-code.scss";

type RoomCode = {
  code: string;
};

export function RoomCode(props: RoomCode) {
  function copyRoomToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomToClipboard}>
      <div>
        <img src={CopyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
