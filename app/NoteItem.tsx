"use client";

import { Note } from "@/interfaces/Note";
import { useRouter } from "next/navigation";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deleteNote } from "@/lib/notes";

const NoteItem = ({ note }: { note: Note }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteNote(note._id?.toString()!);
    router.refresh();
  };

  return (
    <div
      key={note._id?.toString()}
      className="bg-white shadow-lg rounded-lg border-2 border-gray-300 p-3"
    >
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p className="text-gray-700 text-sm">{note.content}</p>
      <hr className="my-3 border-gray-300" />
      <div className="flex items-center">
        <button className="text-red-500 ml-5" onClick={handleDelete}>
          <AiFillDelete size={24} />
        </button>
        <button
          className="text-blue-500 ml-3"
          onClick={() => router.push(`/edit/${note._id?.toString()}`)}
        >
          <AiFillEdit size={24} />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
