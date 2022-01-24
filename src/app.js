const express = require('express');
require('dotenv').config();
const cors = require('cors');


// Init App
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTERS
const { categoryRoutes } = require('./routers');

// routers
app.use('/api/v1/categories', categoryRoutes);

module.exports = app;