//  AGGREGATE
//  Exercise 9 of 9

// Next up is aggregation. Aggregation allows one to do things like
// calculate the sum of a field of multiple documents or the average
// of a field of documents meeting particular criteria.

// Say you have a collection named prices. Each price document is modeled
// like so:

//     {
//       "name": "Tshirt",
//       "size": "S",
//       "price": 10,
//       "quantity": 12
//       "meta": {
//         "vendor": "hanes",
//         "location": "US"
//       }
//     }

// In this exercise, we need to calculate the average price for all documents
// in the prices collection in the database named learnyoumongo that have
// the size that will be passed as the first argument to your script.

// Use console.log() to print the average price rounded to 2 decimal places
// to stdout after you have found it.

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
const size = process.argv[2];

mongo.connect(url, function(err, db) {
  db.collection('prices')
    .aggregate([
      { $match: { size } },
      { $project: { size: 1, price: 1, _id: 0 } },
      { $group: { _id: "$size", average_price: { $avg: "$price"} } }
    ])
    .toArray()
    .then(result => console.log(result[0].average_price.toFixed(2)));

  db.close();
});
