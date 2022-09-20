const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const products = require('./routes/products.routes');
const errorHandler = require('./middleware/error.middleware');

const app = express();

// CORS configurations
// const whitelist = ['http://localhost:3000', 'http://localhost'];
// const options = {
//   origin: (origin, callbacks) => {
//     if (whitelist.includes(origin)) {
//       callbacks(null, true);
//     } else {
//       callbacks(new Error('No permitido'));
//     }
//   },
// };

// ------------------------------------ ENV CONFIG ---------------------------------------- // 
// Load en variables
dotenv.config({ path: './.env'})

// ---------------------------------- MIDDLEWARE ------------------------------------ //
// Handle middleware
app.use(express.json()); // for parsing application/json
app.use(cors());
// app.use(cors(options));
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// ----------------------------------- ROUTES ---------------------------------------- //
// Mount routers
app.use('/api/v1/products', products);

// ---------------------------------- MIDDLEWARE ERROR ------------------------------------ //
// Handle error routes middleware
app.use(errorHandler);

// ------------------------------------ SERVER ---------------------------------------- // 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
