import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("notes");
    const notes = await db.collection("notes").find().toArray();
    return NextResponse.json(notes, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const client = await clientPromise;
    const db = client.db("notes");
    const data = await request.json();
    const note = await db.collection("notes").insertOne(data);
    return NextResponse.json({ idProducto: note.insertedId }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
};
