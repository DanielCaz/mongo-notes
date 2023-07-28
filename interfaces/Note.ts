import { ObjectId } from "mongodb";

export interface Note {
  _id?: ObjectId;
  title: string;
  content: string;
}
