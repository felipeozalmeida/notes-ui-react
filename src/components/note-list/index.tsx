import type { FC } from 'react'
import type { Note } from '../../schemas/note-schema'
import NoteCard from '../note-card'

interface NoteListProps {
  notes: Note[]
  onDelete: (id: Note['id']) => void
}

const NoteList: FC<NoteListProps> = ({ notes, onDelete }) => {
  if (!notes.length) {
    return <p className="text-center text-gray-500">No notes available.</p>
  }
  return (
    <ul className="flex flex-col gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default NoteList
