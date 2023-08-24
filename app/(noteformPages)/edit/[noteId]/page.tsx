import NoteForm from "@/app/(noteformPages)/NoteForm";
import { getNoteAction } from "@/lib/actions";

const EditNote = async ({ params }: { params: { noteId: string } }) => {
  const note = await getNoteAction(params.noteId);

  return <NoteForm note={{ ...note, _id: note._id?.toString() }} />;
};

export default EditNote;
