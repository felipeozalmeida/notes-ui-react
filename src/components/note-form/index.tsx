import { useState, type ChangeEventHandler, type FC, type FormEventHandler } from 'react'
import toast from 'react-hot-toast'
import PRIORITY from '../../constants/priority'
import CATEGORY from '../../constants/category'
import noteSchema, { type Note } from '../../schemas/note-schema'
import InputText from '../input-text'
import InputSelect from '../input-select'
import InputTextarea from '../input-textarea'

const INITIAL_FORM_DATA = {
  title: '',
  priority: '',
  category: '',
  description: '',
}

interface NoteFormProps {
  onCancel: () => void
  onCreate: (note: Note) => void
}

const NoteForm: FC<NoteFormProps> = ({ onCreate, onCancel }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = ({ currentTarget: { name, value } }) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const note = { ...formData, id: Date.now() }
    const result = noteSchema.safeParse(note)
    if (!result.success) {
      toast.error('All fields are required.')
      return
    }
    onCreate(result.data)
    setFormData(INITIAL_FORM_DATA)
    toast.success('Note created successfully!')
  }

  return (
    <form className="flex flex-col items-stretch justify-center gap-3" onSubmit={handleSubmit}>
      <InputText
        label="Title"
        name="title"
        placeholder="fix github actions yml"
        value={formData.title}
        onChange={handleChange}
      />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:justify-between">
        <InputSelect
          className="sm:basis-4/12"
          label="Priority"
          name="priority"
          placeholder="select a priority"
          value={formData.priority}
          options={Object.values(PRIORITY)}
          onChange={handleChange}
        />
        <InputSelect
          className="sm:basis-8/12"
          label="Category"
          name="category"
          placeholder="select a category"
          value={formData.category}
          options={Object.values(CATEGORY)}
          onChange={handleChange}
        />
      </div>
      <InputTextarea
        label="Description"
        name="description"
        placeholder="wth is happening with that pipeline?!"
        value={formData.description}
        onChange={handleChange}
      />
      <div className="mt-1 flex flex-col gap-1 sm:flex-row-reverse sm:justify-start">
        <button
          className="h-8 cursor-pointer rounded-full bg-purple-900 px-8 font-medium text-white"
          type="submit"
        >
          Submit
        </button>
        <button
          className="h-8 cursor-pointer px-8 font-medium text-neutral-500"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default NoteForm
