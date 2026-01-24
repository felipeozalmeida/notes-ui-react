import type { FC } from 'react';
import toast from 'react-hot-toast';
import { IconCopy } from '@tabler/icons-react';
import PRIORITY from '../../constants/priority';
import type { Note } from '../../schemas/Note';

const PRIORITY_COLOR = {
  [PRIORITY.high]: 'bg-red-100 text-red-700',
  [PRIORITY.medium]: 'bg-yellow-100 text-yellow-700',
  [PRIORITY.low]: 'bg-green-100 text-green-700',
} as const;

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
            <span
              className={`text-xs px-2 py-1 rounded font-medium ${PRIORITY_COLOR[note.priority]}`}
            >
              Priority: {note.priority}
            </span>
            <span className="flex items-center gap-1">
              <button
                type="button"
                className="p-1 flex items-center text-neutral-400 hover:text-neutral-600 focus:outline-none cursor-pointer"
                title="Copy ID"
                onClick={() => {
                  navigator.clipboard.writeText(note.id.toString());
                  toast.success('Note ID copied!');
                }}
                aria-label="Copy ID"
              >
                <IconCopy size={16} stroke={1.5} />
              </button>
              <span className="text-xs text-neutral-400">ID: {note.id}</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
