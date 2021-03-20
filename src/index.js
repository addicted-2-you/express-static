const express = require("express");

const SERVER_PORT = 3000;

const app = express();

app.use(express.static("public"));

app.listen(SERVER_PORT, () => {
  console.log(`Running on ${SERVER_PORT}...`);
});
