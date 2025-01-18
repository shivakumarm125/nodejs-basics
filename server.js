const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://crazzzyshiv:BLD7KNblUUTNuL3V@projects.2tzlr.mongodb.net/?retryWrites=true&w=majority&appName=projects';
const client = new MongoClient(url);

// Database Name
const dbName = 'study';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Users');


//   Add a new data

  const data = {
    firstName: "Arpitha"
  }
  const insertResult = await collection.insertOne(data);
  console.log('Inserted documents =>', insertResult);


  //Get all data
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  const afterDelete = await collection.deleteOne({firstName: "Shiva"});
  


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());