"use strict";

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 4000;
const { getAllPokemons, RegisterAccount, loginAccount, postPokemonTeam } = require("./handlers");

express()
 .use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 })
 .use(cors())
 .use(morgan("tiny"))
 .use(express.static("./server/assets"))
 .use(express.json({ limit: "5mb" }))
 .use(bodyParser.urlencoded({ extended: false }))
 .use("/", express.static(__dirname + "/"))

 // ======================== List of all enpoints ========================//

 //IMPORTANT FOR DB=> UserAuthentication

 // Gets list of all items in database
 .get("/api/all-pokemons", getAllPokemons)
 //Register Account
 .post(`/api/register`, RegisterAccount)
 //Login Account
 .post("/api/login", loginAccount)
 //Post a team
 .post("/api/pokemon-team", postPokemonTeam)
 // Gets list of all items in database
 //  .get("/pokemon-generation/:number", getItems)
 //  // Gets list of specific item in database
 //  .get("/pokemon-species", getItem)
 // // Updates item when user buys items Nathan Version
 // .get("/pokemon-evolution-chain", updateItemsNathan)
 //  //
 //  .get("/pokemon-ability")

 // Handles all the endpoints
 .get("*", (req, res) => {
  res.status(404).json({
   status: 404,
   message: "This is obviously not what you are looking for.",
  });
 })

 .listen(PORT, () => console.info(`Listening on port ${PORT}`));
