import { getDBInstance, getCollection } from "./mongodb";
import { ObjectId } from 'mongodb';

export const save = async (document) => {
  const collectionName = process.env.MONGO_CUSTOMER_REQUEST_COLLECTION || "";
  const db = await getDBInstance();
  const collection = getCollection(db, collectionName);
  collection.insertOne(document);
};

export const get = async (id) => {
  const collectionName = process.env.MONGO_CUSTOMER_REQUEST_COLLECTION || "";
  const db = await getDBInstance();
  const collection = getCollection(db, collectionName);
  if (id) {
    const document = collection.findOne({ _id: new ObjectId(id) });
    if(document) {
      return document;
    }
  }
  return collection.find({}).toArray();
};
