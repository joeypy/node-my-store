const express = require('express');
const products = require('./routes/products.routes');
const { createProducts } = require('./_data/products');

const app = express();
const port = 3000;


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// ----------------------------------- ROUTES ---------------------------------------- //
// Mount routers
app.use('/api/v1/products', products);
// app.use('/api/v1/categories', categories);
// app.use('/api/v1/users', users);

// app.get('/', (req, res) => {
//   res.send('Hola mi servidor express');
// });
// app.get('/other', (req, res) => {
//   res.send('Hola mi servidor express');
// });

// app.get('/product/:id', (req, res) => {
//   const { id } = req.params;
//   const data = products.find((product) => product.id == id);
//   if(data){
//     res.json(data);
//   } else {
//     throw new Error('The ID do not exists')
//   }
// });

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({ limit, offset });
//   } else {
//     res.send('No hay parámetros');
//   }
// });

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });

app.listen(port, () => {
  createProducts();
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});
