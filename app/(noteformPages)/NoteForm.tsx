"use client";

import { Note } from "@/interfaces/Note";
import { createNoteAction, updateNoteAction } from "@/lib/actions";
import { useState } from "react";

const NoteForm = ({ note }: { note?: Note }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormAction = async (formData: FormData) => {
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();

    if (!title || !content) return;

    const data = { title, content } as Note;

    setLoading(true);

    try {
      if (note) {
        await updateNoteAction(note._id as string, data);
      } else {
        await createNoteAction(data);
      }
    } catch (error: any) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 max-w-md mx-auto mt-8 shadow-lg rounded-lg border-2 border-gray-300 p-6"
      action={handleFormAction}
    >
      <h2 className="text-2xl font-bold mb-2">
        {note ? "Update" : "Add"} Note
      </h2>
      <div className="grid">
        <label htmlFor="title">Title</label>
        <input
          required
          className={`border-2 border-gray-300 rounded-md p-2 ${
            loading ? "bg-gray-100" : ""
          }`}
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          defaultValue={note?.title}
          disabled={loading}
        />
      </div>
      <div className="grid">
        <label htmlFor="content">Content</label>
        <textarea
          required
          className={`border-2 border-gray-300 rounded-md p-2 ${
            loading ? "bg-gray-100" : ""
          }`}
          name="content"
          id="content"
          placeholder="Content"
          defaultValue={note?.content}
          disabled={loading}
        />
      </div>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      <button
        disabled={loading}
        type="submit"
        className={`px-2 py-1 rounded ${
          loading
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-cyan-500 text-white hover:bg-cyan-600"
        } shadow-md hover:shadow-lg transition duration-200`}
      >
        Save
      </button>
    </form>
  );
};

export default NoteForm;
