import { Note } from "@/interfaces/Note";

export const getNotes = async () => {
  const res = await fetch(`${process.env.API_URL}/notes`);
  const data = await res.json();

  return data as Note[];
};

export const createNote = async (note: Note) => {
  const res = await fetch(`${process.env.API_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data as string;
};

export const updateNote = async (id: string, note: Note) => {
  const res = await fetch(`${process.env.API_URL}/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  const { message } = await res.json();

  if (!res.ok) {
    throw new Error(message);
  }

  return message as string;
};

export const deleteNote = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/notes/${id}`, {
    method: "DELETE",
  });
  const { message } = await res.json();

  if (!res.ok) {
    throw new Error(message);
  }

  return message as string;
};

export const getNote = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/notes/${id}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data as Note;
};
