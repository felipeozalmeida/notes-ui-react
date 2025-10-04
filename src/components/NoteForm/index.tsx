const NoteForm = () => <form className="flex flex-col items-stretch justify-center gap-3">
    <div className="flex flex-col gap-1 items-stretch justify-between">
        <label className="font-medium" htmlFor="title">Title</label>
        <input className="px-2 py-1 border border-neutral-300 rounded-xl" type="text" id="title" name="title" placeholder="fix github actions yml" />
    </div>
    <div className="flex flex-col gap-1 items-stretch justify-between">
        <label className="font-medium" htmlFor="priority">Priority</label>
        <input className="px-2 py-1 border border-neutral-300 rounded-xl" type="text" id="priority" name="priority" placeholder="high" />
    </div>
    <div className="flex flex-col gap-1 items-stretch justify-between">
        <label className="font-medium" htmlFor="category">Category</label>
        <input className="px-2 py-1 border border-neutral-300 rounded-xl" type="text" id="category" name="category" placeholder="work" />
    </div>
    <div className="flex flex-col gap-1 items-stretch justify-between">
        <label className="font-medium" htmlFor="description">Description</label>
        <input className="px-2 py-1 border border-neutral-300 rounded-xl" type="text" id="description" name="description" placeholder="wth is happening with that pipeline?!" />
    </div>
    <button className="px-8 py-1 bg-purple-900 text-white rounded-full cursor-pointer" type="submit">Add Note</button>
</form>

export default NoteForm
