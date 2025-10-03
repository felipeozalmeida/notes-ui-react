const NoteForm = () => <form>
    <div><label htmlFor="title">Title</label><input type="text" id="title" name="title" /></div>
    <div><label htmlFor="priority">Priority</label><input type="text" id="priority" name="priority" /></div>
    <div><label htmlFor="category">Category</label><input type="text" id="category" name="category" /></div>
    <div><label htmlFor="description">Description</label><input type="text" id="description" name="description" /></div>
</form>

export default NoteForm
