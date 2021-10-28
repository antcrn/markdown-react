import React from 'react';
import Showdown from 'showdown';

const NoteMarkdown = ({ notemd }) => {
    console.log('Note Markdown');
    console.log(notemd.title, "ici le props");
    const converter = new Showdown.Converter();

    function createMarkup(txt) {
        return { __html: converter.makeHtml(txt) };
    }

    return (
        <div>
            <h1>{notemd.title}</h1>
            <p className="text-truncate" dangerouslySetInnerHTML={createMarkup(notemd.noteValue)} ></p>

        </div>
    )
}

export default NoteMarkdown;