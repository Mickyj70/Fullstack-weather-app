require("dotenv").config(); //load environment variables from .env file
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

//server port
const port = process.env.PORT || 8000;

//routes
const weatherData = require("./components/weatherData");

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  weatherData(req.query.address, (error, data) => {
    if (error) {
      return res.send({
        error,
      });
    }

    res.send(data);
  });
});

app.get("*", (req, res) => {
  res.send({
    error: "Page not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
