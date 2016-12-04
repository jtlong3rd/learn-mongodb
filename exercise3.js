//  FIND
//  Exercise 3 of 9

// Here we will learn how to search for documents.

// In this exercise the database name is learnyoumongo.
// So, the url would be something like: mongodb://localhost:27017/learnyoumongo

// Use the parrots collection to find all documents where age
// is greater than the first argument passed to your script.

// Using console.log, print the documents to stdout.

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
const ageBound = +process.argv[2];

mongo.connect(url).then(db => {
  db.collection('parrots')
    .find({ age: { $gt: ageBound } })
    .toArray()
    .then(console.log);

  db.close();
});
