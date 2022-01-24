const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();


const db = process.env.MONGOO_URL;
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
  },
  () => { console.log('Database is connected..'); },
);

// hundle database error
mongoose.connection.on('error', (err) => console.log('Database connection error:', err.message));


const port = process.env.PORT;

// server running on port:8080
app.listen(port, () => console.log(`Server run on port:${port}`));
