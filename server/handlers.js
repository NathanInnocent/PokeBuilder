"use strict";

//uses package to generate _id
const { v4: uuidv4 } = require("uuid");

// Mongo db dependencies
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const DB_NAME = "PokeBuilder";
const POKEMON_COLLECTION = "Pokemons";
const USER_COLLECTION = "Users";
const TEAM_COLLECTION = "Teams";
const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true,
};
const client = new MongoClient(MONGO_URI, options);

// Function to get all of the items inside the database
const getAllPokemons = async (req, res) => {
 try {
  await client.connect();
  const db = client.db(DB_NAME);
  let listOfItems = await db.collection(POKEMON_COLLECTION).find().toArray();
  res.status(200).json({
   status: 200,
   data: listOfItems,
   message: "Items retrieved succesfully",
  });
 } catch {
  res.status(500).json({
   status: 500,
   message: "The server is currently unable to handle this request.",
  });
 } finally {
  // Close connection
  client.close();
 }
};

// Receiving information from Form array of objects ->
const RegisterAccount = async (req, res) => {
 const receivedData = req.body;

 //Object received has an empty field
 if (Object.values(receivedData).some((value) => value === "") === true) {
  console.log("There is no data");
  res.status(400).json({
   status: 400,
   message: "Some inputs are empty, please fill them up.",
  });
 }
 //User meets all conditions
 else {
  try {
   const query = { username: receivedData.username };
   await client.connect();
   const db = client.db(DB_NAME);
   let usersInsideDatabase = await db.collection(USER_COLLECTION).find(query).toArray();

   //Username already inside database
   if (usersInsideDatabase.length != 0) {
    res.status(400).json({
     status: 400,
     message: "A user already has that username, please choose another one.",
    });
   }

   // Username not in database => proceed with account creation
   else {
    const { username, password } = receivedData;
    const result = await db.collection(USER_COLLECTION).insertOne({ username, password });
    res.status(200).json({
     status: 200,
     message: "Account created successfully!",
    });
   }
  } catch {
   res.status(500).json({
    status: 500,
    message: "PokeBuilder is currently unable to handle this request. Please contact support if problem pursists.",
   });
  } finally {
   // Close connection
   client.close();
  }
 }
};

const loginAccount = async (req, res) => {
 const receivedData = req.body;

 //Object received has an empty field
 if (Object.values(receivedData).some((value) => value === "") === true) {
  console.log("There is no data");
  res.status(400).json({
   status: 400,
   message: "Some inputs are empty, please fill them up.",
  });
 }
 //User meets all conditions
 else {
  try {
   const query = { username: receivedData.username };
   await client.connect();
   const db = client.db(DB_NAME);
   let usersInsideDatabase = await db.collection(USER_COLLECTION).find(query).toArray();

   //Nothing found, no user exists with username
   if (usersInsideDatabase.length === 0) {
    res.status(400).json({
     status: 400,
     message: "No username found.",
    });
   }

   // Username found, proceed with validations
   else {
    const { username, password } = receivedData;
    //Password submitted not the one stored in database
    if (usersInsideDatabase[0].password !== password) {
     console.log(usersInsideDatabase.password, "vs", password);
     res.status(400).json({
      status: 400,
      message: "Wrong Username/Password.",
     });
    }
    //Passwords match
    else {
     res.status(200).json({
      status: 200,
      message: "User identified.",
     });
    }
   }
  } catch {
   res.status(500).json({
    status: 500,
    message: "PokeBuilder is currently unable to handle this request. Please contact support if problem pursists.",
   });
  } finally {
   // Close connection
   client.close();
  }
 }
};

const postPokemonTeam = async (req, res) => {
 const receivedData = req.body;
 console.log("received request", receivedData);
 //Data should look like this: {username: "", team: [{...}, {...}x6]}
 //Check if username exists
 if (receivedData.username === "") {
  console.log("No username");
  //No username
  res.status(400).json({
   status: 400,
   message: "Please sign in to use this feature.",
  });
 }
 //Check if team has empty field
 else if (receivedData.team.some((pokemonData) => Object.values(pokemonData).length === 0)) {
  console.log("No team");
  res.status(400).json({
   status: 400,
   message: "Please fill up your team before posting it.",
  });
 }
 //User meets all conditions
 else {
  try {
   await client.connect();
   const db = await client.db(DB_NAME);
   await db.collection(TEAM_COLLECTION).insertOne({ username: receivedData.username, team: receivedData.team });
   console.log("Team posted" + receivedData.username + " " + receivedData.team);

   res.status(200).json({
    status: 200,
    message: "Team posted successfully!",
   });
  } catch {
   console.log("Error");
   res.status(500).json({
    status: 500,
    message: "PokeBuilder is currently unable to handle this request. Please contact support if problem pursists.",
   });
  } finally {
   // Close connections
   client.close();
  }
 }
};

const getPokemonTeam = async (req, res) => {
 console.log("getPokemonTeam");
 try {
  await client.connect();
  const db = client.db(DB_NAME);
  let listOfItems = await db.collection(TEAM_COLLECTION).find().toArray();
  res.status(200).json({
   status: 200,
   data: listOfItems,
   message: "Items retrieved succesfully",
  });
 } catch {
  res.status(500).json({
   status: 500,
   message: "The server is currently unable to handle this request.",
  });
 } finally {
  // Close connection
  client.close();
 }
};

module.exports = {
 getAllPokemons,
 RegisterAccount,
 loginAccount,
 postPokemonTeam,
 getPokemonTeam,
};
