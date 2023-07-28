const NoteFormPagesLoading = () => {
  return (
    <div className="animate-pulse flex flex-col gap-4 max-w-md mx-auto mt-8 shadow-lg rounded-lg border-2 border-gray-300 p-6">
      <h2 className="text-2xl font-bold mb-2">...</h2>
      <div className="grid">
        <label htmlFor="title">Title</label>
        <input
          required
          className="border-2 border-gray-300 rounded-md p-2 bg-gray-100"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
      </div>
      <div className="grid">
        <label htmlFor="content">Content</label>
        <textarea
          required
          className="border-2 border-gray-300 rounded-md p-2 bg-gray-100"
          name="content"
          id="content"
          placeholder="Content"
        />
      </div>
      <button
        type="submit"
        className="px-2 py-1 rounded bg-gray-300 cursor-not-allowed shadow-md hover:shadow-lg transition duration-200"
      >
        Save
      </button>
    </div>
  );
};

export default NoteFormPagesLoading;
