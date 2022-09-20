const express = require('express');
const cors = require('cors');
const products = require('./routes/products.routes');
const errorHandler = require('./middleware/error.middleware');

const app = express();
const port = 3000;
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

app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});
