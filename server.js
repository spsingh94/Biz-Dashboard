const express = require("express");
const cors = require("cors");
const app = express();
var router = express.Router();
const PORT = process.env.NODE_ENV || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
