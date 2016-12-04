//  COUNT
//  Exercise 8 of 9

// Here we will learn how to count the number of documents that
// meet certain criteria.

// Use the parrots collection from the database named learnyoumongo to
// count all documents where age is greater than the first argument
// passed to your script.

// Using console.log, print the number to stdout.

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
const ageBound = +process.argv[2];

mongo.connect(url, function(err, db) {
  db.collection('parrots')
    .count({ age: { $gt: ageBound } })
    .then(console.log);

  db.close();
});
