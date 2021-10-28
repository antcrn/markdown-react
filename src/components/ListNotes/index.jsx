import React from 'react';
import NoteMarkdown from '../NoteMarkdown/index';

const ListNotes = () => {
    const [notesList, setNotesList] = React.useState([]);

    React.useEffect(
        () => {
            const objects = Object.values(localStorage);
            let arraytmp = objects.map((item) => (JSON.parse(item)));
            setNotesList(arraytmp);
            return;
        },

        []
    );


    return (
        <div className="col-3 border border-primary" >
            {notesList.map((x) => (
                < NoteMarkdown key={x.id} notemd={x} />
            ))
            }
        </div>
    )
}

export default ListNotes;