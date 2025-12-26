import type { FC } from 'react';
import type { Note } from '../../types';

interface NoteListProps {
  notes: Note[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
  if (!notes.length) {
    return <p className="text-center text-gray-500">No notes available.</p>;
  }
  return (
    <ul className="flex flex-col gap-4">
      {notes.map((note) => (
        <li
          key={note.id}
          className="bg-white rounded-lg shadow p-4 border border-neutral-200 flex flex-col gap-2"
        >
          <div className="flex items-center justify-between gap-2">
            <strong className="text-lg font-semibold text-neutral-800">{note.title}</strong>
            <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 font-medium">{note.category}</span>
          </div>
          <p className="text-neutral-600 text-sm">{note.description}</p>
          <div className="flex items-center justify-between gap-2 mt-2">
            <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700 font-medium">Priority: {note.priority}</span>
            <span className="text-xs text-neutral-400">ID: {note.id}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
