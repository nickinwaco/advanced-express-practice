import express from "express";
import comments from "./comments";
import products from "./products";
import vehicle from "./vehicles";
import contacts from "./contacts";

import contactRoutes from "./routes/ContactRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import commentRoutes from "./routes/CommentRoutes";
import productRoutes from "./routes/ProductRoutes";

import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);

// default route
app.get('/*', (request, response) => {
  return response.json({
    message: 'not implemented yet'
  });
});

// add middleware for error handling
app.use((request, response, next) => {
  console.log('middleware is executed')
  next();
});

app.use((err, request, response, next) => {
  console.log('error middleware is executed')
  // console.log('error middleware is executed', err)

// error response plus status code
  return response.status(500).json({message: err.message});
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
