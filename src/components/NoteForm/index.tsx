import { useState, type ChangeEventHandler } from "react"

const NoteForm = () => {
    const [form, setForm] = useState({
        title: "",
        priority: "",
        category: "",
        description: "",
    })

    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = ({ target: { name, value } }) => {
        setForm((prevForm) => ({ ...prevForm, [name]: value }))
    }

    return <form className="flex flex-col gap-3 items-stretch justify-center">
        <div className="flex flex-col gap-1 items-stretch justify-between">
            <label className="font-medium" htmlFor="title">Title</label>
            <input className="h-8 px-3 border border-neutral-300 rounded-full" type="text" id="title" name="title" placeholder="fix github actions yml" value={form.title} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:justify-between">
            <div className="flex flex-col gap-1 items-stretch justify-between sm:basis-4/12">
                <label className="font-medium" htmlFor="priority">Priority</label>
                <select className="h-8 px-3 border border-neutral-300 rounded-full" name="priority" id="priority" value={form.priority} onChange={handleChange}>
                    <option value="">select a priority</option>
                    <option>high</option>
                    <option>medium</option>
                    <option>low</option>
                </select>
            </div>
            <div className="flex flex-col gap-1 items-stretch justify-between sm:basis-8/12">
                <label className="font-medium" htmlFor="category">Category</label>
                <select className="h-8 px-3 border border-neutral-300 rounded-full" name="category" id="category" value={form.category} onChange={handleChange}>
                    <option value="">select a category</option>
                    <option>work</option>
                    <option>personal</option>
                </select>
            </div>
        </div>
        <div className="flex flex-col gap-1 items-stretch justify-between">
            <label className="font-medium" htmlFor="description">Description</label>
            <textarea className="h-40 px-3 py-2 border border-neutral-300 rounded-2xl resize-none" id="description" name="description" placeholder="wth is happening with that pipeline?!" value={form.description} onChange={handleChange}></textarea>
        </div>
        <button className="h-8 mt-1 px-8 bg-purple-900 text-white rounded-full cursor-pointer" type="submit">Add Note</button>
    </form>
}

export default NoteForm
