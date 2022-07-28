import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 300;
    const handleChange = (event) =>{
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
        
    }
    const hadnleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }else{
            alert('Please give some value then click the save button.')
        }
    }
    return (
        <div className="note new">
            <textarea 
            cols="10" 
            rows="8" 
            value={noteText}
            placeholder="Type to add a note..."
            onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button onClick={hadnleSaveClick} className="save">Save</button>
            </div>
        </div>
    );
}

export default AddNote;