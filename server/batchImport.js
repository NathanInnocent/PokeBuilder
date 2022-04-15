const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const pokemons = require("./data");
const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true,
};

const batchImport = async () => {
 const client = new MongoClient(MONGO_URI, options);
 await client.connect();
 const db = client.db("PokeBuilder");
 const result = await db.collection("Pokemons").insertMany(pokemons);
 console.log(result);
 client.close();
};

batchImport();
