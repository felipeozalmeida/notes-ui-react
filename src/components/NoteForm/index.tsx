import { useState } from "react"

const NoteForm = () => {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    console.log(title, priority, category, description)

    return <form className="flex flex-col items-stretch justify-center gap-3">
        <div className="flex flex-col gap-1 items-stretch justify-between">
            <label className="font-medium" htmlFor="title">Title</label>
            <input className="px-2 py-1 border border-neutral-300 rounded-xl" type="text" id="title" name="title" placeholder="fix github actions yml" value={title} onChange={(e) => { setTitle(e.target.value) }} />
        </div>
        <div className="flex flex-col gap-1 items-stretch justify-between">
            <label className="font-medium" htmlFor="priority">Priority</label>
            <select className="px-2 py-1 border border-neutral-300 rounded-xl" name="priority" id="priority" value={priority} onChange={(e) => { setPriority(e.target.value) }}>
                <option value="">select a priority</option>
                <option>high</option>
                <option>medium</option>
                <option>low</option>
            </select>
        </div>
        <div className="flex flex-col gap-1 items-stretch justify-between">
            <label className="font-medium" htmlFor="category">Category</label>
            <select className="px-2 py-1 border border-neutral-300 rounded-xl" name="category" id="category" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                <option value="">select a category</option>
                <option>work</option>
                <option>personal</option>
            </select>
        </div>
        <div className="flex flex-col gap-1 items-stretch justify-between">
            <label className="font-medium" htmlFor="description">Description</label>
            <input className="px-2 py-1 border border-neutral-300 rounded-xl" type="text" id="description" name="description" placeholder="wth is happening with that pipeline?!" value={description} onChange={(e) => { setDescription(e.target.value) }} />
        </div>
        <button className="px-8 py-1 bg-purple-900 text-white rounded-full cursor-pointer" type="submit">Add Note</button>
    </form>
}

export default NoteForm
