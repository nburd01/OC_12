const express = require("express");
const cors = require("cors");
const axios = require("axios");

const router = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

app.use(router);

app.listen(port, () => console.log(`Magic happens on port ${port}`));
