//  UPDATE
//  Exercise 6 of 9

// Here we are going to update a document in the users collection.

// The database name will be accessible via process.argv[2].

// Say we have a user defined like:

//     {
//       "name": "Tina",
//       "age": 30,
//       "username": "tinatime"
//     }

// We want to change Tina's age from 30 to 40.

// For the purpose of this lesson, assume that the username property is unique.

const mongo = require('mongodb').MongoClient;
const dbName = process.argv[2];
const url = `mongodb://localhost:27017/${dbName}`;

mongo.connect(url, function(err, db) {
  db.collection('users')
    .update(
      { name: 'Tina' },
      { $set: { age: 40 } }
    );

  db.close();
});
