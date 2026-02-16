import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { IconPlus } from '@tabler/icons-react'
import type { Note } from './schemas/note'
import NoteForm from './components/note-form'
import NoteList from './components/note-list'

const App = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [isShowingForm, setIsShowingForm] = useState(false)

  return (
    <>
      <div className="flex flex-col gap-4 items-stretch justify-center w-full max-w-[640px] p-6 bg-neutral-100 text-neutral-700 rounded-lg shadow-lg">
        <h1 className="text-2xl font-medium text-center">📝 Notes</h1>
        {!isShowingForm && (
          <button
            className="flex items-center justify-center gap-2 px-8 h-8 border-2 border-purple-900 text-purple-900 rounded-full font-medium cursor-pointer"
            onClick={() => {
              setIsShowingForm(true)
            }}
          >
            <span>Create Note</span>
            <IconPlus className="w-4 h-4" />
          </button>
        )}
        {isShowingForm && (
          <NoteForm
            onCreate={(note) => {
              setNotes((prevNotes) => [...prevNotes, note])
              setIsShowingForm(false)
            }}
            onCancel={() => {
              setIsShowingForm(false)
            }}
          />
        )}
        {!isShowingForm && <NoteList notes={notes} />}
      </div>
      <Toaster />
    </>
  )
}

export default App
