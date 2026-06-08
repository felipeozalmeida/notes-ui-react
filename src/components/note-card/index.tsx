import type { FC } from 'react'
import toast from 'react-hot-toast'
import { IconCopy, IconTrash } from '@tabler/icons-react'
import PRIORITY from '../../constants/priority'
import type { Note as NoteType } from '../../schemas/note'

const PRIORITY_COLOR = {
  [PRIORITY.high]: 'bg-red-100 text-red-700',
  [PRIORITY.medium]: 'bg-yellow-100 text-yellow-700',
  [PRIORITY.low]: 'bg-green-100 text-green-700',
} as const

interface NoteCardProps {
  note: NoteType
  onDelete: (id: NoteType['id']) => void
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
    <li className="bg-white rounded-lg shadow p-4 border border-neutral-200 flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <strong className="text-lg font-semibold text-neutral-800">{note.title}</strong>
        <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 font-medium">
          {note.category}
        </span>
      </div>
      <p className="text-neutral-600 text-sm">{note.description}</p>
      <div className="flex items-center justify-between gap-2 mt-2">
        <span className={`text-xs px-2 py-1 rounded font-medium ${PRIORITY_COLOR[note.priority]}`}>
          Priority: {note.priority}
        </span>
        <span className="flex items-center gap-1">
          <button
            type="button"
            className="p-1 flex items-center gap-1 text-neutral-400 focus:outline-none cursor-pointer"
            title="Copy Note ID"
            onClick={handleCopyId}
            aria-label="Copy Note ID"
          >
            <IconCopy size={16} stroke={1.5} />
            <span className="hidden sm:inline text-xs">Copy ID</span>
          </button>
          <button
            type="button"
            className="p-1 flex items-center gap-1 text-neutral-400 focus:outline-none cursor-pointer"
            title="Delete Note"
            onClick={handleDelete}
            aria-label="Delete Note"
          >
            <IconTrash size={16} stroke={1.5} />
            <span className="hidden sm:inline text-xs">Delete</span>
          </button>
        </span>
      </div>
    </li>
  )
}

export default NoteCard
