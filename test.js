const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('shopDB');
    const movies = database.collection('products');
    await movies.insertOne({name : "pen" , price:"30" , stock:"40"})
    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'pencil' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);