require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/router");
const bodyParser = require("body-parser");
const db = require('./src/db');
const cors = require('cors');

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use(routes)
app.listen(PORT, ()=>{
    console.log(`server listening on http://localhost:${PORT}`);
})