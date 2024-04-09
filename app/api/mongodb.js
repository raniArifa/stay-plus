import { MongoClient } from "mongodb";

export const getDBInstance = async () => {
  const connectionString = process.env.MONGODB_CONNECTION_STRING || "";
  const dbName = process.env.MONGO_DB_NAME || "";

  const client = new MongoClient(connectionString);

  let conn;
  try {
    conn = await client.connect();
  } catch (e) {
    console.error(e);
  }
  return conn.db(dbName);
};

export const getCollection = (db, collectionName) => {
  return db.collection(collectionName);
};
