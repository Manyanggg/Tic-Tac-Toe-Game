import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayName] = useState(initialName);
    const [isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing); 
    }

    function handleChange(event) {
        setPlayName(event.target.value);
    }

    let editablePlayername = <span className="player-name">{playerName}</span>

    //onChange will trigger every changes made, and will provide us with an event object that contains the value that was 
    // entered by user. 
    if(isEditing) {
        editablePlayername = <input type="text" required value={playerName} onChange={handleChange}/>
    }

  return (
    <li>
      <span className="player">
        {editablePlayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
