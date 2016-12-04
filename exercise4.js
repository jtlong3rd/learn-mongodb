//  FIND PROJECT
//  Exercise 4 of 9

// Here we will learn how to search for documents but only fetch the fields
// we need. Also known as projection in MongoDB

// Use the parrots collection from the database named learnyoumongo to
// find all documents where age is greater than the first argument
// passed to your script.

// The difference from the last lesson will be that we only want the
// name and age properties

// Using console.log, print the documents to stdout.

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
const ageBound = +process.argv[2];

mongo.connect(url).then(db => {
  db.collection('parrots')
    .find(
      { age: { $gt: ageBound } },
      { name: 1, age: 1, _id: 0 })
    .toArray()
    .then(console.log);

  db.close();
});
