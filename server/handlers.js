"use strict";

//uses package to generate _id
const { v4: uuidv4 } = require("uuid");

// Mongo db dependencies
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const DB_NAME = "PokeBuilder";
const Pokemon_Collection = "Pokemons";
const User_Collection = "Users";
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
  let listOfItems = await db.collection(Pokemon_Collection).find().toArray();
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

// Function to get all of the items inside the database
const getItems = async (req, res) => {
 try {
  await client.connect();
  const db = client.db(DB_NAME);
  let listOfItems = await db.collection(User_Collection).find().toArray();
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

// Function to get one item inside the database
const getItem = async (req, res) => {
 const { itemId } = req.params;
 const query = { _id: parseInt(itemId) };
 try {
  await client.connect();
  const db = client.db(DB_NAME);
  let item = await db.collection(User_Collection).find(query).toArray();
  if (item.length) {
   res.status(200).json({
    status: 200,
    data: item,
    message: "Item retrieved succesfully",
   });
  } else {
   res.status(404).json({
    status: 404,
    message: "Item with that ID does not exist",
   });
  }
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
   let usersInsideDatabase = await db.collection(User_Collection).find(query).toArray();

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
    const result = await db.collection(User_Collection).insertOne({ username, password });
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
   let usersInsideDatabase = await db.collection(User_Collection).find(query).toArray();

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
    if (usersInsideDatabase.password !== password) {
     res.status(400).json({
      status: 400,
      message: "Wrong Password.",
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

module.exports = {
 getAllPokemons,
 getItems,
 getItem,
 RegisterAccount,
 loginAccount,
};
