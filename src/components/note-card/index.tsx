import type { FC } from 'react'
import toast from 'react-hot-toast'
import { IconCopy, IconTrash } from '@tabler/icons-react'
import PRIORITY from '../../constants/priority'
import type { Note } from '../../schemas/note-schema'

const PRIORITY_COLOR = {
  [PRIORITY.high]: 'bg-red-100 text-red-700',
  [PRIORITY.medium]: 'bg-yellow-100 text-yellow-700',
  [PRIORITY.low]: 'bg-green-100 text-green-700',
} as const

interface NoteCardProps {
  note: Note
  onDelete: (id: Note['id']) => void
}

const NoteCard: FC<NoteCardProps> = ({ note, onDelete }) => {
  const handleCopyId = () => {
    void navigator.clipboard.writeText(note.id.toString())
    toast.success('Note ID copied!')
  }

  const handleDelete = () => {
    onDelete(note.id)
  }

  return (
    <li className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow">
      <div className="flex items-center justify-between gap-2">
        <strong className="text-lg font-semibold text-neutral-800">{note.title}</strong>
        <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
          {note.category}
        </span>
      </div>
      <p className="text-sm text-neutral-600">{note.description}</p>
      <div className="mt-2 flex items-center justify-between gap-2">
        <span className={`rounded px-2 py-1 text-xs font-medium ${PRIORITY_COLOR[note.priority]}`}>
          Priority: {note.priority}
        </span>
        <span className="flex items-center gap-1">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 p-1 text-neutral-400 focus:outline-none"
            title="Copy Note ID"
            onClick={handleCopyId}
            aria-label="Copy Note ID"
          >
            <IconCopy size={16} stroke={1.5} />
            <span className="hidden text-xs sm:inline">Copy ID</span>
          </button>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 p-1 text-neutral-400 focus:outline-none"
            title="Delete Note"
            onClick={handleDelete}
            aria-label="Delete Note"
          >
            <IconTrash size={16} stroke={1.5} />
            <span className="hidden text-xs sm:inline">Delete</span>
          </button>
        </span>
      </div>
    </li>
  )
}

export default NoteCard
