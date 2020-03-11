import React from 'react'

const NotesList = ({ notes, onRemove }) => notes.map((note, i) => {
  return (
    <li
      className="list-group-item note"
      key={note.id}
    >
      <div>
        <strong>{note.title}</strong>
        <span>{note.date}</span>
      </div>

      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => onRemove(note.id)}
      >
        &times;
      </button>
    </li>
  )
})

export const Notes = ({ notes, onRemove }) => {
  return (
    <ul className="list-group">
      <NotesList notes={notes} onRemove={onRemove} />
    </ul>
  )
}