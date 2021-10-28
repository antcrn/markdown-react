import React from 'react';
import Showdown from 'showdown';

const EditorMarkdown = () => {
    const [note, setNote] = React.useState({ 'id': localStorage.length, 'title': '', 'noteValue': '' });

    const onChangeTitle = (event) => {
        const currentNote = {
            'id': note.id,
            'title': event.target.value,
            'noteValue': note.noteValue
        }
        setNote(currentNote);
    };

    const onChangeText = (event) => {
        const currentNote = {
            'id': note.id,
            'title': note.title,
            'noteValue': event.target.value
        }
        setNote(currentNote);
    };

    const handleSave = () => {
        localStorage.setItem(note.id, JSON.stringify(note));
    }
    const converter = new Showdown.Converter();

    function createMarkup(txt) {
        return { __html: converter.makeHtml(txt) };
    }

    return (
        <>
            <div className="col-9 border border-danger">
                <h1 id="view-note">{note.title}</h1>
                <p dangerouslySetInnerHTML={createMarkup(note.noteValue)} ></p>
                <div className="form-group">
                    <input className="form-control" placeholder="Title" name="title" value={note.title} onChange={onChangeTitle} />
                    <br />
                    <textarea className="form-control" placeholder="Type your message ..." name="note" value={note.noteValue} onChange={onChangeText} />
                    <br />
                    <button className="btn btn-danger mb-4" onClick={handleSave} >Save note</button>
                </div>
            </div>
        </>
    )
}

export default EditorMarkdown;