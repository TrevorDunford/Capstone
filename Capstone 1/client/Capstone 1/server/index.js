const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();

app.use(cors());

app.use(express.json());

const { getFact } = require('./controller')

app.get("/api/fact", getFact);

app.post("/api/endpoint")


app.listen(4000, () => console.log("Server running on 4000"));


