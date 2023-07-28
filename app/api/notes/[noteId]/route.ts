import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const GET = async (request: Request) => {
  try {
    const client = await clientPromise;
    const db = client.db("notes");
    const url = new URL(request.url);
    const id = url.pathname.split("/")[3];
    const note = await db
      .collection("notes")
      .findOne({ _id: new ObjectId(id) });
    if (!note) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }
    return NextResponse.json(note, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
};

export const PUT = async (request: Request) => {
  try {
    const client = await clientPromise;
    const db = client.db("notes");
    const url = new URL(request.url);
    const id = url.pathname.split("/")[3];
    const data = await request.json();
    const res = await db
      .collection("notes")
      .updateOne({ _id: new ObjectId(id) }, { $set: { ...data } });
    if (res.modifiedCount === 0) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Note updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
};

export const DELETE = async (request: Request) => {
  try {
    const client = await clientPromise;
    const db = client.db("notes");
    const url = new URL(request.url);
    const id = url.pathname.split("/")[3];
    const res = await db
      .collection("notes")
      .deleteOne({ _id: new ObjectId(id) });
    if (res.deletedCount === 0) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Note deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
};
