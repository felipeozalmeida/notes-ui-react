import type { FC } from 'react'
import type { Note as NoteType } from '../../schemas/note'
import Note from '../note'

interface NoteListProps {
  notes: NoteType[]
  onDelete: (id: NoteType['id']) => void
}

const NoteList: FC<NoteListProps> = ({ notes, onDelete }) => {
  if (!notes.length) {
    return <p className="text-center text-gray-500">No notes available.</p>
  }
  return (
    <ul className="flex flex-col gap-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default NoteList
