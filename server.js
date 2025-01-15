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

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());