const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

// initialisation of application
const app = express();



app.listen(3000, ()=>{
    console.log('backend listen to port 3000');
});