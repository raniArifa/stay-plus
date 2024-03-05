import {getDBInstance, getCollection} from './mongodb'

async function save(document) {
    const collectionName = process.env.MONGO_CUSTOMER_REQUEST_COLLECTION || ""
    const db = await getDBInstance()
    const collection = getCollection(db, collectionName)
    collection.insertOne(document)
}

export default save