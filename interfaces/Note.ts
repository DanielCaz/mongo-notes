import { ObjectId } from "mongodb";

export interface Note {
  _id?: ObjectId | string;
  title: string;
  content: string;
}
