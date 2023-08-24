export const revalidate = 0;

import { getNotesAction } from "@/lib/actions";
import NoteItem from "./NoteItem";
import Link from "next/link";

export default async function Home() {
  const notes = await getNotesAction();

  return (
    <main className="px-8">
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-center text-3xl">Mongo Notes</h1>
        <Link
          href="/add"
          className="bg-cyan-500 text-white px-2 py-1 rounded hover:bg-cyan-600 shadow-md hover:shadow-lg transition duration-200"
        >
          Add Note
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-8 pb-3">
        {notes.map((note) => (
          <NoteItem
            key={note._id?.toString()}
            note={{ ...note, _id: note._id?.toString() }}
          />
        ))}
      </div>
    </main>
  );
}
