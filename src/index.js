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

app.use(bodyParser.json())
  .use(contactRoutes)
  .use(vehicleRoutes)
  .use(commentRoutes)
  .use(productRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
