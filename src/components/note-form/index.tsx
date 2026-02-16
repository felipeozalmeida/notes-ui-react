import { useState, type ChangeEventHandler, type FC, type FormEventHandler } from 'react'
import toast from 'react-hot-toast'
import PRIORITY from '../../constants/priority'
import CATEGORY from '../../constants/category'
import noteSchema, { type Note } from '../../schemas/note'
import InputText from '../input-text'
import InputSelect from '../input-select'

const INITIAL_FORM_DATA = {
  title: '',
  priority: '',
  category: '',
  description: '',
}

interface NoteFormProps {
  onCreate: (note: Note) => void
  onCancel: () => void
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
    const newNote = { ...formData, id: Date.now() }
    const parseResult = noteSchema.safeParse(newNote)
    if (!parseResult.success) {
      toast.error('All fields are required.')
      return
    }
    onCreate(parseResult.data)
    setFormData(INITIAL_FORM_DATA)
    toast.success('Note created successfully!')
  }

  return (
    <form className="flex flex-col gap-3 items-stretch justify-center" onSubmit={handleSubmit}>
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
      <div className="flex flex-col gap-1 items-stretch justify-between">
        <label className="font-medium" htmlFor="description">
          Description
        </label>
        <textarea
          className="h-40 px-3 py-2 border border-neutral-300 rounded-2xl resize-none"
          id="description"
          name="description"
          placeholder="wth is happening with that pipeline?!"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex flex-col gap-1 mt-1 sm:flex-row-reverse sm:justify-start">
        <button
          className="h-8 px-8 bg-purple-900 text-white rounded-full cursor-pointer font-medium"
          type="submit"
        >
          Submit
        </button>
        <button
          className="h-8 px-8 text-neutral-500 font-medium cursor-pointer"
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
