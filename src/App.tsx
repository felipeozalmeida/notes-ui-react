import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { IconPlus } from '@tabler/icons-react'
import type { Note } from './schemas/note'
import NoteForm from './components/note-form'
import NoteList from './components/note-list'

const App = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [isShowingForm, setIsShowingForm] = useState(false)

  const handleShowForm = () => {
    setIsShowingForm(true)
  }

  const handleCancel = () => {
    setIsShowingForm(false)
  }

  const handleCreate = (note: Note) => {
    setNotes((prevNotes) => [...prevNotes, note])
    setIsShowingForm(false)
  }

  const handleDelete = (id: Note['id']) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this note?')
    if (isConfirmed) {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
      toast.success('Note deleted successfully!')
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 items-stretch justify-center w-full max-w-[640px] p-6 bg-neutral-100 text-neutral-700 rounded-lg shadow-lg">
        <h1 className="py-2 text-3xl font-extralight text-center">
          {isShowingForm ? 'Create Note' : 'Notes'}
        </h1>
        {!isShowingForm && (
          <button
            className="flex items-center justify-center gap-2 px-8 h-8 border-2 border-purple-900 text-purple-900 rounded-full font-medium cursor-pointer"
            onClick={handleShowForm}
          >
            <span>Create Note</span>
            <IconPlus className="w-4 h-4" />
          </button>
        )}
        {isShowingForm && <NoteForm onCreate={handleCreate} onCancel={handleCancel} />}
        {!isShowingForm && <NoteList notes={notes} onDelete={handleDelete} />}
      </div>
      <Toaster />
    </>
  )
}

export default App
