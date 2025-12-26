import { useState } from "react"
import NoteForm from "./components/NoteForm"
import type { Note } from "./types"

const App = () => {
  const [, setNotes] = useState<Note[]>([])

  return <div className="flex flex-col gap-4 items-stretch justify-center w-full max-w-[640px] p-6 bg-neutral-100 text-neutral-700 rounded-lg shadow-lg">
    <h1 className="text-2xl font-medium text-center">📝 Notes</h1>
    <NoteForm onCreate={(note) => setNotes((prevNotes) => [...prevNotes, note])} />
  </div>
}

export default App
