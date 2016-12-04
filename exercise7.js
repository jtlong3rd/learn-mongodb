//  REMOVE
//  Exercise 7 of 9

// This lesson involves removing a document with the given _id.

// The database name will be accessible via process.argv[2].

// The collection name will be passed as the second argument to your script.

// The _id will be passed as the third argument to your script.

const mongo = require('mongodb').MongoClient;
const dbName = process.argv[2];
const collectionName = process.argv[3];
const _id = process.argv[4];
const url = `mongodb://localhost:27017/${dbName}`;

mongo.connect(url).then(db => {
  db.collection(collectionName)
    .remove({ _id });

  db.close();
});
