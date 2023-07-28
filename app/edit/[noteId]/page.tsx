import NoteForm from "@/app/NoteForm";
import { getNote } from "@/lib/notes";

const EditNote = async ({ params }: { params: { noteId: string } }) => {
  const note = await getNote(params.noteId);

  return (
    <main className="flex flex-col items-center">
      <NoteForm note={note} />
    </main>
  );
};

export default EditNote;
