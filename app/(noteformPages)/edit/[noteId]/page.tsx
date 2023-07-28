import NoteForm from "@/app/(noteformPages)/NoteForm";
import { getNote } from "@/lib/notes";

const EditNote = async ({ params }: { params: { noteId: string } }) => {
  const note = await getNote(params.noteId);

  return <NoteForm note={note} />;
};

export default EditNote;
