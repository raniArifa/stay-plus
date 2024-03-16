import { getDBInstance, getCollection } from "./mongodb";

export const save = async (document) => {
  const collectionName = process.env.MONGO_CUSTOMER_REQUEST_COLLECTION || "";
  const db = await getDBInstance();
  const collection = getCollection(db, collectionName);
  collection.insertOne(document);
};
