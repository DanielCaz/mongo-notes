"use server";

import { Note } from "@/interfaces/Note";
import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getNotesAction = async () => {
  const client = await clientPromise;
  const notes = await client.db().collection("notes").find().toArray();
  return notes as Note[];
};

export const getNoteAction = async (id: string) => {
  const client = await clientPromise;
  const note = await client
    .db()
    .collection("notes")
    .findOne({ _id: new ObjectId(id) });
  return note as Note;
};

export const createNoteAction = async (note: Note) => {
  const client = await clientPromise;
  await client
    .db()
    .collection("notes")
    .insertOne({ ...note, _id: new ObjectId() });

  revalidatePath("/");
  redirect("/");
};

export const updateNoteAction = async (id: string, note: Note) => {
  const client = await clientPromise;
  await client
    .db()
    .collection("notes")
    .updateOne({ _id: new ObjectId(id) }, { $set: note });

  revalidatePath("/");
  redirect("/");
};

export const deleteNoteAction = async (id: string) => {
  const client = await clientPromise;
  await client
    .db()
    .collection("notes")
    .deleteOne({ _id: new ObjectId(id) });

  revalidatePath("/");
};
