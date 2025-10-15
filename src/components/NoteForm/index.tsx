import { useState } from "react"

const NoteForm = () => {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    console.log(title, priority, category, description)

    return <form className="flex flex-col gap-3 items-stretch justify-center">
        <div className="flex flex-col gap-1 items-stretch justify-between">
            <label className="font-medium" htmlFor="title">Title</label>
            <input className="h-8 px-3 border border-neutral-300 rounded-full" type="text" id="title" name="title" placeholder="fix github actions yml" value={title} onChange={(e) => { setTitle(e.target.value) }} />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:justify-between">
            <div className="flex flex-col gap-1 items-stretch justify-between sm:basis-4/12">
                <label className="font-medium" htmlFor="priority">Priority</label>
                <select className="h-8 px-3 border border-neutral-300 rounded-full" name="priority" id="priority" value={priority} onChange={(e) => { setPriority(e.target.value) }}>
                    <option value="">select a priority</option>
                    <option>high</option>
                    <option>medium</option>
                    <option>low</option>
                </select>
            </div>
            <div className="flex flex-col gap-1 items-stretch justify-between sm:basis-8/12">
                <label className="font-medium" htmlFor="category">Category</label>
                <select className="h-8 px-3 border border-neutral-300 rounded-full" name="category" id="category" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                    <option value="">select a category</option>
                    <option>work</option>
                    <option>personal</option>
                </select>
            </div>
        </div>
        <div className="flex flex-col gap-1 items-stretch justify-between">
            <label className="font-medium" htmlFor="description">Description</label>
            <textarea className="h-40 px-3 py-2 border border-neutral-300 rounded-2xl resize-none" id="description" name="description" placeholder="wth is happening with that pipeline?!" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
        </div>
        <button className="h-8 mt-1 px-8 bg-purple-900 text-white rounded-full cursor-pointer" type="submit">Add Note</button>
    </form>
}

export default NoteForm
