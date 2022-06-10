const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const axios = require("axios");

const app = express();

app.use(cors());

const BASE_KEY = "https://note.com/izakikazuho";
const KEY_ALL = BASE_KEY + "/rss";

const errorHandler = (res, error) => {
  if (error.response) {
    res.status(error.response.status).send({
      error: error.response.data,
      errorMsg: error.message,
    });
  } else {
    res.status(500).send({errorMsg: error.message});
  }
};

app.get("/all", async (req, res, next) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  await axios.get(KEY_ALL)
      .then((response) => {
        console.log(response.data);
        res.send(response.data);
      })
      .catch((error) => {
        errorHandler(res, error);
      });
});

const api = functions.https.onRequest(app);
module.exports = {api};
