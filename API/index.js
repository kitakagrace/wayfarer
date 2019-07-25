const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const PORT = 3000;

const app = express();






app.listen(PORT, (req,res) =>{
    console.log(`API running at port ${PORT}`)
})