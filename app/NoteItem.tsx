"use client";

import { Note } from "@/interfaces/Note";
import { deleteNoteAction } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const NoteItem = ({ note }: { note: Note }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteNoteAction(note._id as string);
    router.refresh();
  };

  return (
    <div
      key={note._id as string}
      className="bg-white shadow-lg rounded-lg border-2 border-gray-300 p-3"
    >
      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-5">{note.title}</h2>
        <button
          className="bg-blue-500 ml-auto text-white p-1 rounded hover:bg-blue-600 shadow-md hover:shadow-lg transition duration-200"
          onClick={() => router.push(`/edit/${note._id as string}`)}
        >
          <AiFillEdit size={24} />
        </button>
        <button
          className="bg-red-500 ml-2 text-white p-1 rounded hover:bg-red-600 shadow-md hover:shadow-lg transition duration-200"
          onClick={handleDelete}
        >
          <AiFillDelete size={24} />
        </button>
      </div>
      <hr className="my-3 border-gray-300" />
      <p className="text-gray-700 text-sm">{note.content}</p>
    </div>
  );
};

export default NoteItem;
